import type { APIRoute } from "astro";
import { destinations } from "../data/destinations";
import { services } from "../data/services";

// Every public page. Add new pages here as the site grows.
export const GET: APIRoute = ({ site }) => {
  const paths = [
    "/",
    "/services/",
    "/about/",
    "/contact/",
    ...destinations.map((d) => `/study-abroad/${d.slug}/`),
    ...services.map((s) => `/services/${s.slug}/`),
  ];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
