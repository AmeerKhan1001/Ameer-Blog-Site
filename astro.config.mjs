// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import icon from "astro-icon";

import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
  preact({
    include: ['**/preact/*'],
  }),
  react({
    include: ['**/react/*'],
  }),
  svelte({
    include: ['**/svelte/*'],
  }),
  icon()]
});