/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts(
  "precache-manifest.574be7730d258137a1741676307c14f8.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/google-analytics\.com\/analytics.js/, workbox.strategies.cacheFirst({ cacheName: "google-analytics-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/ajax\.googleapis\.com.*/, workbox.strategies.cacheFirst({ cacheName: "google-ajax-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/fonts\.(googleapis|gstatic)\.com.*/, workbox.strategies.cacheFirst({ cacheName: "google-font-cache", plugins: [] }), 'GET');
