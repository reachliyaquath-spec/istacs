import type { ImageMetadata } from "astro";
import toronto from "../assets/photos/toronto.jpg";
import sydney from "../assets/photos/sydney.jpg";
import europe from "../assets/photos/europe.jpg";
import auckland from "../assets/photos/auckland.jpg";
import usa from "../assets/photos/usa.jpg";
import london from "../assets/photos/london.jpg";

export type IconName = "home" | "stamp" | "plane" | "book" | "grad" | "headset";

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  img: ImageMetadata;
  imgAlt: string;
  group: "Immigration" | "Visas & documents" | "Coaching";
  intro: string[];
  forWho: string[];
  includes: string[];
  steps: { title: string; text: string }[];
  note?: string;
}

export const services: Service[] = [
  {
    slug: "australia-immigration",
    title: "Australia Immigration",
    short: "Permanent residency for skilled professionals and families who want to settle in Australia.",
    icon: "home",
    img: sydney,
    imgAlt: "Sydney Opera House and Harbour Bridge at night",
    group: "Immigration",
    intro: [
      "Australia stands apart for its high standard of living, strong work culture and opportunities for skilled people. Its points-based skilled migration programme lets professionals apply for permanent residency based on their age, qualifications, experience and English score.",
      "We start with an honest eligibility check, so you know where you stand before you spend money on assessments or applications.",
    ],
    forWho: ["Skilled professionals in occupations Australia needs", "Families planning to move together", "Graduates with work experience"],
    includes: ["Eligibility and points assessment", "Occupation and skills assessment guidance", "IELTS / PTE preparation for the score you need", "Expression of interest and visa application", "Document checklist and review"],
    steps: [
      { title: "Eligibility check", text: "We review your age, qualifications, experience and English score against the current points test." },
      { title: "Skills assessment", text: "We guide you through the assessment for your occupation and prepare the documents." },
      { title: "Expression of interest", text: "Your profile is lodged so you can be invited to apply." },
      { title: "Visa application", text: "Once invited, we prepare and file your application and follow it through to a decision." },
    ],
    note: "Points, occupation lists and processing times change often. We confirm the current rules for your case during counselling.",
  },
  {
    slug: "canada-immigration",
    title: "Canada Immigration",
    short: "Permanent residency in Canada, with the same rights and benefits most Canadian citizens enjoy.",
    icon: "home",
    img: toronto,
    imgAlt: "Toronto skyline at dusk",
    group: "Immigration",
    intro: [
      "Canadian permanent residents enjoy most of the same rights and benefits as citizens, including healthcare, education and the freedom to live and work anywhere in Canada, and residency requirements are flexible.",
      "We help you find the right route, whether federal skilled programmes or provincial nominee programmes, and prepare a strong, complete application.",
    ],
    forWho: ["Skilled workers and professionals", "Families planning to settle together", "Graduates and international students in Canada"],
    includes: ["Eligibility and points (CRS) assessment", "Educational credential assessment guidance", "IELTS / PTE preparation", "Express Entry profile and application", "Provincial nominee programme options"],
    steps: [
      { title: "Eligibility check", text: "We assess your profile and estimate your score for the relevant programmes." },
      { title: "Documents & tests", text: "Credential assessment, language test and supporting documents, prepared properly." },
      { title: "Profile & invitation", text: "We create your profile and look at provincial options that may improve your chances." },
      { title: "PR application", text: "When invited, we file your application and support you until the decision." },
    ],
    note: "Programme rules and score cut-offs change regularly. We confirm current requirements during counselling.",
  },
  {
    slug: "certificate-attestation",
    title: "Certificate Attestation",
    short: "Educational, personal and commercial documents attested for use abroad, end to end.",
    icon: "stamp",
    img: europe,
    imgAlt: "Brandenburg Gate, Berlin",
    group: "Visas & documents",
    intro: [
      "Most countries ask for Indian documents to be attested or apostilled before they accept them for study, work, residency or business.",
      "We handle the process for you, from state-level verification to the final attestation, so you are not chasing offices between classes or work.",
    ],
    forWho: ["Students applying abroad", "Professionals taking up jobs overseas", "Families relocating", "Businesses with overseas dealings"],
    includes: ["Degree, diploma and school certificates", "Birth, marriage and other personal documents", "Commercial and company documents", "Apostille and embassy attestation", "Document collection and tracking"],
    steps: [
      { title: "Document check", text: "We confirm which documents you need and which attestation the destination country requires." },
      { title: "Verification", text: "Your documents go through the required state and central verification." },
      { title: "Attestation", text: "Apostille or embassy attestation is completed for the destination country." },
      { title: "Return", text: "Your attested documents are returned to you, ready to use." },
    ],
  },
  {
    slug: "visit-visa-assistance",
    title: "Visit Visa Assistance",
    short: "Tourist and family-visit visa applications, prepared properly the first time.",
    icon: "plane",
    img: auckland,
    imgAlt: "Auckland skyline at night",
    group: "Visas & documents",
    intro: [
      "Whether you are visiting children studying abroad, attending a family event or travelling for a holiday, a well-prepared application makes all the difference.",
      "We prepare your forms and supporting documents the way each embassy expects, and book your appointments.",
    ],
    forWho: ["Parents visiting children abroad", "Families attending weddings and events", "Tourists and business visitors"],
    includes: ["Visa form preparation", "Supporting document checklist and review", "Financial document guidance", "Appointment and biometrics booking", "Travel insurance guidance"],
    steps: [
      { title: "Tell us your plans", text: "Where you are going, why, and for how long." },
      { title: "Document checklist", text: "We give you a clear list and review everything before submission." },
      { title: "Application & appointment", text: "Forms completed and your biometrics or interview appointment booked." },
      { title: "Submission", text: "Your application is submitted and tracked until the decision." },
    ],
  },
  {
    slug: "ielts-coaching",
    title: "IELTS Coaching",
    short: "Academic and General Training preparation with full mock tests in our Tolichowki office.",
    icon: "book",
    img: london,
    imgAlt: "London's Houses of Parliament at dusk",
    group: "Coaching",
    intro: [
      "Your IELTS score decides which universities, courses and visas are open to you. Our coaching focuses on the score your plans need, not just general English.",
      "Classes run in our Tolichowki office, next door to your counsellor, so your test date fits your application timeline.",
    ],
    forWho: ["Students applying to study abroad", "Professionals applying for PR", "Anyone who needs a specific band score"],
    includes: ["IELTS Academic and General Training", "Listening, reading, writing and speaking practice", "Full-length mock tests", "Writing and speaking feedback", "Test booking guidance"],
    steps: [
      { title: "Level check", text: "A short assessment to see where you are and the score you need." },
      { title: "Classes", text: "Structured practice across all four modules." },
      { title: "Mock tests", text: "Timed full-length tests with feedback on every section." },
      { title: "Test day", text: "Booking guidance and final preparation before your exam." },
    ],
  },
  {
    slug: "pte-training",
    title: "PTE Training",
    short: "PTE Academic preparation with timed, computer-based practice on every task type.",
    icon: "headset",
    img: usa,
    imgAlt: "New York skyline at sunset",
    group: "Coaching",
    intro: [
      "PTE Academic is a fully computer-based English test accepted by many universities and for visa applications, with results usually available quickly.",
      "Our training gets you comfortable with every task type and the timing of the computer-based format.",
    ],
    forWho: ["Students who prefer a computer-based test", "PR applicants who need a specific score", "Anyone needing fast results"],
    includes: ["Practice on every PTE task type", "Timed computer-based practice", "Speaking and writing strategies", "Full mock tests with scores", "Test booking guidance"],
    steps: [
      { title: "Level check", text: "We assess your current level and target score." },
      { title: "Training", text: "Task-by-task strategies for speaking, writing, reading and listening." },
      { title: "Mock tests", text: "Timed, computer-based mock tests with scores and feedback." },
      { title: "Test day", text: "Booking guidance and last-mile preparation." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
