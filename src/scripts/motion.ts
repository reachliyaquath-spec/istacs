import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initMotion() {
  (window as unknown as { __motionReady?: boolean }).__motionReady = true;
  if (reduceMotion()) {
    document.documentElement.classList.remove("js");
    return;
  }

  // Smooth scroll, driven by the GSAP ticker so ScrollTrigger stays in sync.
  const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 });
  // Exposed so the mobile menu can pause smooth scrolling while it is open.
  (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // In-page anchors scroll smoothly, clearing the sticky header.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href")!;
      if (id.length < 2) return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -84 });
    }),
  );

  // Inner-page hero: crumbs, title, copy, actions rise in; photo settles.
  const phItems = document.querySelectorAll("[data-ph-rv]");
  if (phItems.length) {
    gsap.fromTo(phItems, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.09, ease: "power4.out", delay: 0.1 });
    gsap.fromTo("[data-ph-img]", { scale: 1.08 }, { scale: 1, duration: 1.8, ease: "power3.out" });
    gsap.to("[data-ph-img]", {
      yPercent: -8,
      ease: "none",
      scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 1 },
    });
  }

  // Section reveals, batched so neighbours stagger together.
  ScrollTrigger.batch("[data-rv]", {
    start: "top 88%",
    once: true,
    onEnter: (els) =>
      gsap.fromTo(els, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.95, stagger: 0.08, ease: "power4.out" }),
  });

  // Anything already scrolled past (e.g. after a reload halfway down) shows at once,
  // so no section is ever left blank.
  const showPassed = () =>
    gsap.utils.toArray<HTMLElement>("[data-rv]").forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight * 0.88 && getComputedStyle(el).visibility === "hidden") {
        gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" });
      }
    });
  requestAnimationFrame(showPassed);

  addEventListener("load", () => {
    ScrollTrigger.refresh();
    showPassed();
  });
}
