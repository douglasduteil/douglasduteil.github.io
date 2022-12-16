/// <reference lib="webworker" />
declare let self: ServiceWorkerGlobalScope;

import { build, files, prerendered, version } from "$service-worker";
import { clientsClaim } from "workbox-core";
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";
import { registerRoute, NavigationRoute, Route } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { initialize as workboxGoogleAnalytics } from "workbox-google-analytics";

// self.skipWaiting() prevents the waiting, meaning the service worker
// activates as soon as it's finished installing.
self.addEventListener("message", (event) => {
  if (event.data.type === "SKIP_WAITING") self.skipWaiting();
});

// The service worker should start controlling any existing clients
//  as soon as it activates.
clientsClaim();

// Cache all svelte files
precacheAndRoute(
  [...build, ...files, ...prerendered].map((pathname) => {
    return {
      url: pathname,
      revision: version,
    };
  })
);

// Cache extra requests
// // Google
workboxGoogleAnalytics();

// // Google Stuff
registerRoute(
  new Route(
    ({ request: { url } }) => {
      return (
        /^https?:\/\/ajax\.googleapis\.com\//.test(url) ||
        /^https?:\/\/fonts\.googleapis\.com\//.test(url) ||
        /^https?:\/\/fonts\.gstatic\.com\//.test(url)
      );
    },
    new StaleWhileRevalidate({
      cacheName: "workbox-google-cache",
    })
  )
);

// // Gravatar Stuff
registerRoute(
  new Route(
    ({ request }) => {
      return (
        request.destination === "image" &&
        /^https?:\/\/1\.gravatar\.com\//.test(request.url)
      );
    },
    new StaleWhileRevalidate({
      cacheName: "workbox-gravatar-cache",
    })
  )
);

// // Other...
registerRoute(
  new NavigationRoute(
    new StaleWhileRevalidate({
      cacheName: version,
    })
  )
);

// Ensure to remove incompatible cache from older versions of Workbox
cleanupOutdatedCaches();
