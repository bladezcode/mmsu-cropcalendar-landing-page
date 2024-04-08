import { defineConfig } from 'astro/config';
import tunnel from "astro-tunnel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mmsu-cropcalendar-landing-page.vercel.app',
  integrations: [tunnel({
    // The URL to expose. Defaults to http://localhost:4321.
    url: 'http://localhost:4321',
    // The local server port to expose. Defaults to 4321. Only used if `url` is not set.
    port: 4321,
    // The local server hostname to expose. Defaults to localhost. Only used if `url` is not set.
    host: 'localhost',
    // The local server protocol to use. Defaults to http. Only used if `url` is not set.
    protocol: 'http',
    // Whether to verify the local server TLS certificate. Defaults to false.
    verifyTLS: false,
    // Whether to accept the Cloudflare terms of service. Defaults to false.
    acceptCloudflareNotice: true
  }), sitemap()]
});