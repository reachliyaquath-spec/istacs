import { defineConfig } from "astro/config";

// Redirects from the old istacs.com .html addresses live in public/_redirects
// (read by Netlify and Cloudflare Pages).
export default defineConfig({
  site: "https://istacs.com",
  trailingSlash: "always",
  devToolbar: { enabled: false },
});
