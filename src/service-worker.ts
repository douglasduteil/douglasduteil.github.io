/// <reference lib="webworker" />

import { build, files, prerendered, version } from "$service-worker";
import { clientsClaim, skipWaiting } from "workbox-core";
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";

// Immediately activate new service workers - critical for content updates
skipWaiting();
clientsClaim();

// Cleanup old caches from previous Workbox versions
cleanupOutdatedCaches();

// Precache all static assets (build output, static files, prerendered pages)
// These are versioned by SvelteKit's build hash, ensuring fresh content on deploy
precacheAndRoute(
  [...build, ...files, ...prerendered].map((pathname) => ({
    url: pathname,
    revision: version,
  })),
);

// Cache Google Fonts with CacheFirst (fonts rarely change)
registerRoute(
  new Route(
    ({ url }) =>
      url.origin === "https://fonts.googleapis.com" ||
      url.origin === "https://fonts.gstatic.com",
    new CacheFirst({
      cacheName: "google-fonts",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 30,
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
        }),
      ],
    }),
  ),
);

// Cache Gravatar images with StaleWhileRevalidate
registerRoute(
  new Route(
    ({ request, url }) =>
      request.destination === "image" && url.hostname.endsWith("gravatar.com"),
    new StaleWhileRevalidate({
      cacheName: "gravatar-images",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        }),
      ],
    }),
  ),
);
