const ae = [
  "/_app/immutable/assets/_layout-3c40b81d.css",
  "/_app/immutable/assets/_page-a2f904ab.css",
  "/_app/immutable/assets/_layout-821f84a5.css",
  "/_app/immutable/assets/_page-890e339e.css",
  "/_app/immutable/assets/_page-ac07bd01.css",
  "/_app/immutable/assets/_page-3d0e8ef0.css",
  "/_app/immutable/chunks/singletons-572afc3b.js",
  "/_app/immutable/chunks/1-6d3b3045.js",
  "/_app/immutable/chunks/_page-6eff400c.js",
  "/_app/immutable/chunks/4-d16de960.js",
  "/_app/immutable/chunks/index-2e1481b4.js",
  "/_app/immutable/chunks/control-f5b05b5f.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/stores-37b0f26c.js",
  "/_app/immutable/chunks/rocket-0f9a48ab.js",
  "/_app/immutable/chunks/comment-97e7acd1.js",
  "/_app/immutable/chunks/trophy-2cb64f43.js",
  "/_app/immutable/chunks/_layout-da46b06b.js",
  "/_app/immutable/chunks/_page-02344e9c.js",
  "/_app/immutable/modules/pages/(pages)/contact/_page.ts-cb8b1759.js",
  "/_app/immutable/chunks/2-5b6b4a53.js",
  "/_app/immutable/chunks/3-40f2beee.js",
  "/_app/immutable/chunks/5-2a4ad66c.js",
  "/_app/immutable/start-8adbff3d.js",
  "/_app/immutable/chunks/stalker-e3db8160.js",
  "/_app/immutable/components/error.svelte-bbf45686.js",
  "/_app/immutable/chunks/0-7b2f21f2.js",
  "/_app/immutable/chunks/_page-0b9ed94a.js",
  "/_app/immutable/chunks/_page-26b8aac6.js",
  "/_app/immutable/chunks/6-3aad4e7d.js",
  "/_app/immutable/chunks/_page-fa5d064b.js",
  "/_app/immutable/components/pages/(pages)/_layout.svelte-ec23f54f.js",
  "/_app/immutable/components/pages/(pages)/rockets/_page.svelte-62c0cd1b.js",
  "/_app/immutable/chunks/7-fb418b6d.js",
  "/_app/immutable/modules/pages/me/_page.ts-a413abf6.js",
  "/_app/immutable/components/pages/(pages)/achievements/_page.svelte-e85de3bb.js",
  "/_app/immutable/components/pages/me/_page.svelte-51a4c2dc.js",
  "/_app/immutable/modules/pages/(pages)/rockets/_page.ts-84041dbd.js",
  "/_app/immutable/components/pages/_layout.svelte-7ed34e6c.js",
  "/_app/immutable/components/pages/(pages)/contact/_page.svelte-542321eb.js",
  "/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/_app/immutable/modules/pages/_page.ts-46492177.js",
  "/_app/immutable/chunks/github-e875a305.js",
  "/_app/immutable/modules/pages/(pages)/achievements/_page.ts-b74843e7.js"
], re = [
  "/favicon.ico",
  "/icons/apple-touch-icon-114x114.png",
  "/icons/apple-touch-icon-120x120.png",
  "/icons/apple-touch-icon-144x144.png",
  "/icons/apple-touch-icon-152x152.png",
  "/icons/apple-touch-icon-57x57.png",
  "/icons/apple-touch-icon-60x60.png",
  "/icons/apple-touch-icon-72x72.png",
  "/icons/apple-touch-icon-76x76.png",
  "/icons/apple-touch-icon-precomposed.png",
  "/icons/apple-touch-icon.png",
  "/icons/browserconfig.xml",
  "/icons/favicon-160x160.png",
  "/icons/favicon-16x16.png",
  "/icons/favicon-196x196.png",
  "/icons/favicon-32x32.png",
  "/icons/favicon-96x96.png",
  "/icons/favicon.ico",
  "/icons/icon-128x128.png",
  "/icons/icon-144x144.png",
  "/icons/icon-152x152.png",
  "/icons/icon-192x192.png",
  "/icons/icon-384x384.png",
  "/icons/icon-512x512.png",
  "/icons/icon-72x72.png",
  "/icons/icon-96x96.png",
  "/icons/mstile-144x144.png",
  "/icons/mstile-150x150.png",
  "/icons/mstile-310x150.png",
  "/icons/mstile-310x310.png",
  "/icons/mstile-70x70.png",
  "/manifest.json",
  "/mini_me.jpeg"
], ie = [
  "/",
  "/achievements",
  "/contact",
  "/me",
  "/rockets"
], V = "1671426205241";
try {
  self["workbox:core:6.5.3"] && _();
} catch {
}
const ce = (n, ...e) => {
  let t = n;
  return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
}, oe = ce;
class l extends Error {
  constructor(e, t) {
    const s = oe(e, t);
    super(s), this.name = e, this.details = t;
  }
}
const ue = /* @__PURE__ */ new Set(), p = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, D = (n) => [p.prefix, n, p.suffix].filter((e) => e && e.length > 0).join("-"), le = (n) => {
  for (const e of Object.keys(p))
    n(e);
}, C = {
  updateDetails: (n) => {
    le((e) => {
      typeof n[e] == "string" && (p[e] = n[e]);
    });
  },
  getGoogleAnalyticsName: (n) => n || D(p.googleAnalytics),
  getPrecacheName: (n) => n || D(p.precache),
  getPrefix: () => p.prefix,
  getRuntimeName: (n) => n || D(p.runtime),
  getSuffix: () => p.suffix
};
function K(n, e) {
  const t = new URL(n);
  for (const s of e)
    t.searchParams.delete(s);
  return t.href;
}
async function he(n, e, t, s) {
  const a = K(e.url, t);
  if (e.url === a)
    return n.match(e, s);
  const i = Object.assign(Object.assign({}, s), { ignoreSearch: !0 }), r = await n.keys(e, i);
  for (const c of r) {
    const o = K(c.url, t);
    if (a === o)
      return n.match(c, s);
  }
}
let w;
function de() {
  if (w === void 0) {
    const n = new Response("");
    if ("body" in n)
      try {
        new Response(n.body), w = !0;
      } catch {
        w = !1;
      }
    w = !1;
  }
  return w;
}
class fe {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
async function pe() {
  for (const n of ue)
    await n();
}
const me = (n) => new URL(String(n), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function J(n) {
  return new Promise((e) => setTimeout(e, n));
}
function B(n, e) {
  const t = e();
  return n.waitUntil(t), t;
}
async function ge(n, e) {
  let t = null;
  if (n.url && (t = new URL(n.url).origin), t !== self.location.origin)
    throw new l("cross-origin-copy-response", { origin: t });
  const s = n.clone(), a = {
    headers: new Headers(s.headers),
    status: s.status,
    statusText: s.statusText
  }, i = e ? e(a) : a, r = de() ? s.body : await s.blob();
  return new Response(r, i);
}
function ye() {
  self.addEventListener("activate", () => self.clients.claim());
}
try {
  self["workbox:precaching:6.5.3"] && _();
} catch {
}
const we = "__WB_REVISION__";
function _e(n) {
  if (!n)
    throw new l("add-to-cache-list-unexpected-type", { entry: n });
  if (typeof n == "string") {
    const i = new URL(n, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const { revision: e, url: t } = n;
  if (!t)
    throw new l("add-to-cache-list-unexpected-type", { entry: n });
  if (!e) {
    const i = new URL(t, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const s = new URL(t, location.href), a = new URL(t, location.href);
  return s.searchParams.set(we, e), {
    cacheKey: s.href,
    url: a.href
  };
}
class be {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: t }) => {
      t && (t.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: s }) => {
      if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
        const a = t.originalRequest.url;
        s ? this.notUpdatedURLs.push(a) : this.updatedURLs.push(a);
      }
      return s;
    };
  }
}
class Re {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: s }) => {
      const a = (s == null ? void 0 : s.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return a ? new Request(a, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
try {
  self["workbox:strategies:6.5.3"] && _();
} catch {
}
function E(n) {
  return typeof n == "string" ? new Request(n) : n;
}
class ke {
  constructor(e, t) {
    this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new fe(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const s of this._plugins)
      this._pluginStateMap.set(s, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  async fetch(e) {
    const { event: t } = this;
    let s = E(e);
    if (s.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const r = await t.preloadResponse;
      if (r)
        return r;
    }
    const a = this.hasCallback("fetchDidFail") ? s.clone() : null;
    try {
      for (const r of this.iterateCallbacks("requestWillFetch"))
        s = await r({ request: s.clone(), event: t });
    } catch (r) {
      if (r instanceof Error)
        throw new l("plugin-error-request-will-fetch", {
          thrownErrorMessage: r.message
        });
    }
    const i = s.clone();
    try {
      let r;
      r = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const c of this.iterateCallbacks("fetchDidSucceed"))
        r = await c({
          event: t,
          request: i,
          response: r
        });
      return r;
    } catch (r) {
      throw a && await this.runCallbacks("fetchDidFail", {
        error: r,
        event: t,
        originalRequest: a.clone(),
        request: i.clone()
      }), r;
    }
  }
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), s = t.clone();
    return this.waitUntil(this.cachePut(e, s)), t;
  }
  async cacheMatch(e) {
    const t = E(e);
    let s;
    const { cacheName: a, matchOptions: i } = this._strategy, r = await this.getCacheKey(t, "read"), c = Object.assign(Object.assign({}, i), { cacheName: a });
    s = await caches.match(r, c);
    for (const o of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s = await o({
        cacheName: a,
        matchOptions: i,
        cachedResponse: s,
        request: r,
        event: this.event
      }) || void 0;
    return s;
  }
  async cachePut(e, t) {
    const s = E(e);
    await J(0);
    const a = await this.getCacheKey(s, "write");
    if (!t)
      throw new l("cache-put-with-no-response", {
        url: me(a.url)
      });
    const i = await this._ensureResponseSafeToCache(t);
    if (!i)
      return !1;
    const { cacheName: r, matchOptions: c } = this._strategy, o = await self.caches.open(r), u = this.hasCallback("cacheDidUpdate"), y = u ? await he(
      o,
      a.clone(),
      ["__WB_REVISION__"],
      c
    ) : null;
    try {
      await o.put(a, u ? i.clone() : i);
    } catch (d) {
      if (d instanceof Error)
        throw d.name === "QuotaExceededError" && await pe(), d;
    }
    for (const d of this.iterateCallbacks("cacheDidUpdate"))
      await d({
        cacheName: r,
        oldResponse: y,
        newResponse: i.clone(),
        request: a,
        event: this.event
      });
    return !0;
  }
  async getCacheKey(e, t) {
    const s = `${e.url} | ${t}`;
    if (!this._cacheKeys[s]) {
      let a = e;
      for (const i of this.iterateCallbacks("cacheKeyWillBeUsed"))
        a = E(await i({
          mode: t,
          request: a,
          event: this.event,
          params: this.params
        }));
      this._cacheKeys[s] = a;
    }
    return this._cacheKeys[s];
  }
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  async runCallbacks(e, t) {
    for (const s of this.iterateCallbacks(e))
      await s(t);
  }
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const s = this._pluginStateMap.get(t);
        yield (i) => {
          const r = Object.assign(Object.assign({}, i), { state: s });
          return t[e](r);
        };
      }
  }
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  async _ensureResponseSafeToCache(e) {
    let t = e, s = !1;
    for (const a of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await a({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, s = !0, !t)
        break;
    return s || t && t.status !== 200 && (t = void 0), t;
  }
}
class x {
  constructor(e = {}) {
    this.cacheName = C.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, s = typeof e.request == "string" ? new Request(e.request) : e.request, a = "params" in e ? e.params : void 0, i = new ke(this, { event: t, request: s, params: a }), r = this._getResponse(i, s, t), c = this._awaitComplete(r, i, s, t);
    return [r, c];
  }
  async _getResponse(e, t, s) {
    await e.runCallbacks("handlerWillStart", { event: s, request: t });
    let a;
    try {
      if (a = await this._handle(t, e), !a || a.type === "error")
        throw new l("no-response", { url: t.url });
    } catch (i) {
      if (i instanceof Error) {
        for (const r of e.iterateCallbacks("handlerDidError"))
          if (a = await r({ error: i, event: s, request: t }), a)
            break;
      }
      if (!a)
        throw i;
    }
    for (const i of e.iterateCallbacks("handlerWillRespond"))
      a = await i({ event: s, request: t, response: a });
    return a;
  }
  async _awaitComplete(e, t, s, a) {
    let i, r;
    try {
      i = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: a,
        request: s,
        response: i
      }), await t.doneWaiting();
    } catch (c) {
      c instanceof Error && (r = c);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: a,
      request: s,
      response: i,
      error: r
    }), t.destroy(), r)
      throw r;
  }
}
class m extends x {
  constructor(e = {}) {
    e.cacheName = C.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(m.copyRedirectedCacheableResponsesPlugin);
  }
  async _handle(e, t) {
    const s = await t.cacheMatch(e);
    return s || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let s;
    const a = t.params || {};
    if (this._fallbackToNetwork) {
      const i = a.integrity, r = e.integrity, c = !r || r === i;
      s = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? r || i : void 0
      })), i && c && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, s.clone()));
    } else
      throw new l("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    return s;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const s = await t.fetch(e);
    if (!await t.cachePut(e, s.clone()))
      throw new l("bad-precaching-response", {
        url: e.url,
        status: s.status
      });
    return s;
  }
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, t = 0;
    for (const [s, a] of this.plugins.entries())
      a !== m.copyRedirectedCacheableResponsesPlugin && (a === m.defaultPrecacheCacheabilityPlugin && (e = s), a.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(m.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
m.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: n }) {
    return !n || n.status >= 400 ? null : n;
  }
};
m.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: n }) {
    return n.redirected ? await ge(n) : n;
  }
};
class Ce {
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: s = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new m({
      cacheName: C.getPrecacheName(e),
      plugins: [
        ...t,
        new Re({ precacheController: this })
      ],
      fallbackToNetwork: s
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  get strategy() {
    return this._strategy;
  }
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  addToCacheList(e) {
    const t = [];
    for (const s of e) {
      typeof s == "string" ? t.push(s) : s && s.revision === void 0 && t.push(s.url);
      const { cacheKey: a, url: i } = _e(s), r = typeof s != "string" && s.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(i) && this._urlsToCacheKeys.get(i) !== a)
        throw new l("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(i),
          secondEntry: a
        });
      if (typeof s != "string" && s.integrity) {
        if (this._cacheKeysToIntegrities.has(a) && this._cacheKeysToIntegrities.get(a) !== s.integrity)
          throw new l("add-to-cache-list-conflicting-integrities", {
            url: i
          });
        this._cacheKeysToIntegrities.set(a, s.integrity);
      }
      if (this._urlsToCacheKeys.set(i, a), this._urlsToCacheModes.set(i, r), t.length > 0) {
        const c = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(c);
      }
    }
  }
  install(e) {
    return B(e, async () => {
      const t = new be();
      this.strategy.plugins.push(t);
      for (const [i, r] of this._urlsToCacheKeys) {
        const c = this._cacheKeysToIntegrities.get(r), o = this._urlsToCacheModes.get(i), u = new Request(i, {
          integrity: c,
          cache: o,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: r },
          request: u,
          event: e
        }));
      }
      const { updatedURLs: s, notUpdatedURLs: a } = t;
      return { updatedURLs: s, notUpdatedURLs: a };
    });
  }
  activate(e) {
    return B(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), s = await t.keys(), a = new Set(this._urlsToCacheKeys.values()), i = [];
      for (const r of s)
        a.has(r.url) || (await t.delete(r), i.push(r.url));
      return { deletedURLs: i };
    });
  }
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e, s = this.getCacheKeyForURL(t);
    if (s)
      return (await self.caches.open(this.strategy.cacheName)).match(s);
  }
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t)
      throw new l("non-precached-url", { url: e });
    return (s) => (s.request = new Request(e), s.params = Object.assign({ cacheKey: t }, s.params), this.strategy.handle(s));
  }
}
let N;
const z = () => (N || (N = new Ce()), N);
try {
  self["workbox:routing:6.5.3"] && _();
} catch {
}
const X = "GET", T = (n) => n && typeof n == "object" ? n : { handle: n };
class h {
  constructor(e, t, s = X) {
    this.handler = T(t), this.match = e, this.method = s;
  }
  setCatchHandler(e) {
    this.catchHandler = T(e);
  }
}
class Ee extends h {
  constructor(e, t, s) {
    const a = ({ url: i }) => {
      const r = e.exec(i.href);
      if (r && !(i.origin !== location.origin && r.index !== 0))
        return r.slice(1);
    };
    super(a, t, s);
  }
}
class Y {
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  get routes() {
    return this._routes;
  }
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, s = this.handleRequest({ request: t, event: e });
      s && e.respondWith(s);
    });
  }
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data, s = Promise.all(t.urlsToCache.map((a) => {
          typeof a == "string" && (a = [a]);
          const i = new Request(...a);
          return this.handleRequest({ request: i, event: e });
        }));
        e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  handleRequest({ request: e, event: t }) {
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith("http"))
      return;
    const a = s.origin === location.origin, { params: i, route: r } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: a,
      url: s
    });
    let c = r && r.handler;
    const o = e.method;
    if (!c && this._defaultHandlerMap.has(o) && (c = this._defaultHandlerMap.get(o)), !c)
      return;
    let u;
    try {
      u = c.handle({ url: s, request: e, event: t, params: i });
    } catch (d) {
      u = Promise.reject(d);
    }
    const y = r && r.catchHandler;
    return u instanceof Promise && (this._catchHandler || y) && (u = u.catch(async (d) => {
      if (y)
        try {
          return await y.handle({ url: s, request: e, event: t, params: i });
        } catch (M) {
          M instanceof Error && (d = M);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: s, request: e, event: t });
      throw d;
    })), u;
  }
  findMatchingRoute({ url: e, sameOrigin: t, request: s, event: a }) {
    const i = this._routes.get(s.method) || [];
    for (const r of i) {
      let c;
      const o = r.match({ url: e, sameOrigin: t, request: s, event: a });
      if (o)
        return c = o, (Array.isArray(c) && c.length === 0 || o.constructor === Object && Object.keys(o).length === 0 || typeof o == "boolean") && (c = void 0), { route: r, params: c };
    }
    return {};
  }
  setDefaultHandler(e, t = X) {
    this._defaultHandlerMap.set(t, T(e));
  }
  setCatchHandler(e) {
    this._catchHandler = T(e);
  }
  registerRoute(e) {
    this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new l("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new l("unregister-route-route-not-registered");
  }
}
let b;
const Te = () => (b || (b = new Y(), b.addFetchListener(), b.addCacheListener()), b);
function P(n, e, t) {
  let s;
  if (typeof n == "string") {
    const i = new URL(n, location.href), r = ({ url: c }) => c.href === i.href;
    s = new h(r, e, t);
  } else if (n instanceof RegExp)
    s = new Ee(n, e, t);
  else if (typeof n == "function")
    s = new h(n, e, t);
  else if (n instanceof h)
    s = n;
  else
    throw new l("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return Te().registerRoute(s), s;
}
function xe(n, e = []) {
  for (const t of [...n.searchParams.keys()])
    e.some((s) => s.test(t)) && n.searchParams.delete(t);
  return n;
}
function* Pe(n, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: s = !0, urlManipulation: a } = {}) {
  const i = new URL(n, location.href);
  i.hash = "", yield i.href;
  const r = xe(i, e);
  if (yield r.href, t && r.pathname.endsWith("/")) {
    const c = new URL(r.href);
    c.pathname += t, yield c.href;
  }
  if (s) {
    const c = new URL(r.href);
    c.pathname += ".html", yield c.href;
  }
  if (a) {
    const c = a({ url: i });
    for (const o of c)
      yield o.href;
  }
}
class De extends h {
  constructor(e, t) {
    const s = ({ request: a }) => {
      const i = e.getURLsToCacheKeys();
      for (const r of Pe(a.url, t)) {
        const c = i.get(r);
        if (c) {
          const o = e.getIntegrityForCacheKey(c);
          return { cacheKey: c, integrity: o };
        }
      }
    };
    super(s, e.strategy);
  }
}
function Ne(n) {
  const e = z(), t = new De(e, n);
  P(t);
}
const Se = "-precache-", Le = async (n, e = Se) => {
  const s = (await self.caches.keys()).filter((a) => a.includes(e) && a.includes(self.registration.scope) && a !== n);
  return await Promise.all(s.map((a) => self.caches.delete(a))), s;
};
function Ie() {
  self.addEventListener("activate", (n) => {
    const e = C.getPrecacheName();
    n.waitUntil(Le(e).then((t) => {
    }));
  });
}
function qe(n) {
  z().precache(n);
}
function ve(n, e) {
  qe(n), Ne(e);
}
class je extends h {
  constructor(e, { allowlist: t = [/./], denylist: s = [] } = {}) {
    super((a) => this._match(a), e), this._allowlist = t, this._denylist = s;
  }
  _match({ url: e, request: t }) {
    if (t && t.mode !== "navigate")
      return !1;
    const s = e.pathname + e.search;
    for (const a of this._denylist)
      if (a.test(s))
        return !1;
    return !!this._allowlist.some((a) => a.test(s));
  }
}
const Z = {
  cacheWillUpdate: async ({ response: n }) => n.status === 200 || n.status === 0 ? n : null
};
class U extends x {
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(Z), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
  }
  async _handle(e, t) {
    const s = [], a = [];
    let i;
    if (this._networkTimeoutSeconds) {
      const { id: o, promise: u } = this._getTimeoutPromise({ request: e, logs: s, handler: t });
      i = o, a.push(u);
    }
    const r = this._getNetworkPromise({
      timeoutId: i,
      request: e,
      logs: s,
      handler: t
    });
    a.push(r);
    const c = await t.waitUntil((async () => await t.waitUntil(Promise.race(a)) || await r)());
    if (!c)
      throw new l("no-response", { url: e.url });
    return c;
  }
  _getTimeoutPromise({ request: e, logs: t, handler: s }) {
    let a;
    return {
      promise: new Promise((r) => {
        a = setTimeout(async () => {
          r(await s.cacheMatch(e));
        }, this._networkTimeoutSeconds * 1e3);
      }),
      id: a
    };
  }
  async _getNetworkPromise({ timeoutId: e, request: t, logs: s, handler: a }) {
    let i, r;
    try {
      r = await a.fetchAndCachePut(t);
    } catch (c) {
      c instanceof Error && (i = c);
    }
    return e && clearTimeout(e), (i || !r) && (r = await a.cacheMatch(t)), r;
  }
}
class Ue extends x {
  constructor(e = {}) {
    super(e), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
  }
  async _handle(e, t) {
    let s, a;
    try {
      const i = [
        t.fetch(e)
      ];
      if (this._networkTimeoutSeconds) {
        const r = J(this._networkTimeoutSeconds * 1e3);
        i.push(r);
      }
      if (a = await Promise.race(i), !a)
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
    } catch (i) {
      i instanceof Error && (s = i);
    }
    if (!a)
      throw new l("no-response", { url: e.url, error: s });
    return a;
  }
}
class O extends x {
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(Z);
  }
  async _handle(e, t) {
    const s = t.fetchAndCachePut(e).catch(() => {
    });
    t.waitUntil(s);
    let a = await t.cacheMatch(e), i;
    if (!a)
      try {
        a = await s;
      } catch (r) {
        r instanceof Error && (i = r);
      }
    if (!a)
      throw new l("no-response", { url: e.url, error: i });
    return a;
  }
}
const Oe = (n, e) => e.some((t) => n instanceof t);
let F, W;
function Ae() {
  return F || (F = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Me() {
  return W || (W = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const ee = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
function Ke(n) {
  const e = new Promise((t, s) => {
    const a = () => {
      n.removeEventListener("success", i), n.removeEventListener("error", r);
    }, i = () => {
      t(g(n.result)), a();
    }, r = () => {
      s(n.error), a();
    };
    n.addEventListener("success", i), n.addEventListener("error", r);
  });
  return e.then((t) => {
    t instanceof IDBCursor && ee.set(t, n);
  }).catch(() => {
  }), A.set(e, n), e;
}
function Be(n) {
  if (v.has(n))
    return;
  const e = new Promise((t, s) => {
    const a = () => {
      n.removeEventListener("complete", i), n.removeEventListener("error", r), n.removeEventListener("abort", r);
    }, i = () => {
      t(), a();
    }, r = () => {
      s(n.error || new DOMException("AbortError", "AbortError")), a();
    };
    n.addEventListener("complete", i), n.addEventListener("error", r), n.addEventListener("abort", r);
  });
  v.set(n, e);
}
let j = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === "done")
        return v.get(n);
      if (e === "objectStoreNames")
        return n.objectStoreNames || te.get(n);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return g(n[e]);
  },
  set(n, e, t) {
    return n[e] = t, !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n;
  }
};
function Fe(n) {
  j = n(j);
}
function We(n) {
  return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const s = n.call(L(this), e, ...t);
    return te.set(s, e.sort ? e.sort() : [e]), g(s);
  } : Me().includes(n) ? function(...e) {
    return n.apply(L(this), e), g(ee.get(this));
  } : function(...e) {
    return g(n.apply(L(this), e));
  };
}
function He(n) {
  return typeof n == "function" ? We(n) : (n instanceof IDBTransaction && Be(n), Oe(n, Ae()) ? new Proxy(n, j) : n);
}
function g(n) {
  if (n instanceof IDBRequest)
    return Ke(n);
  if (S.has(n))
    return S.get(n);
  const e = He(n);
  return e !== n && (S.set(n, e), A.set(e, n)), e;
}
const L = (n) => A.get(n);
function Ge(n, e, { blocked: t, upgrade: s, blocking: a, terminated: i } = {}) {
  const r = indexedDB.open(n, e), c = g(r);
  return s && r.addEventListener("upgradeneeded", (o) => {
    s(g(r.result), o.oldVersion, o.newVersion, g(r.transaction), o);
  }), t && r.addEventListener("blocked", (o) => t(
    o.oldVersion,
    o.newVersion,
    o
  )), c.then((o) => {
    i && o.addEventListener("close", () => i()), a && o.addEventListener("versionchange", (u) => a(u.oldVersion, u.newVersion, u));
  }).catch(() => {
  }), c;
}
const Qe = ["get", "getKey", "getAll", "getAllKeys", "count"], $e = ["put", "add", "delete", "clear"], I = /* @__PURE__ */ new Map();
function H(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string"))
    return;
  if (I.get(e))
    return I.get(e);
  const t = e.replace(/FromIndex$/, ""), s = e !== t, a = $e.includes(t);
  if (!(t in (s ? IDBIndex : IDBObjectStore).prototype) || !(a || Qe.includes(t)))
    return;
  const i = async function(r, ...c) {
    const o = this.transaction(r, a ? "readwrite" : "readonly");
    let u = o.store;
    return s && (u = u.index(c.shift())), (await Promise.all([
      u[t](...c),
      a && o.done
    ]))[0];
  };
  return I.set(e, i), i;
}
Fe((n) => ({
  ...n,
  get: (e, t, s) => H(e, t) || n.get(e, t, s),
  has: (e, t) => !!H(e, t) || n.has(e, t)
}));
try {
  self["workbox:background-sync:6.5.3"] && _();
} catch {
}
const G = 3, Ve = "workbox-background-sync", f = "requests", R = "queueName";
class Je {
  constructor() {
    this._db = null;
  }
  async addEntry(e) {
    const s = (await this.getDb()).transaction(f, "readwrite", {
      durability: "relaxed"
    });
    await s.store.add(e), await s.done;
  }
  async getFirstEntryId() {
    const t = await (await this.getDb()).transaction(f).store.openCursor();
    return t == null ? void 0 : t.value.id;
  }
  async getAllEntriesByQueueName(e) {
    const s = await (await this.getDb()).getAllFromIndex(f, R, IDBKeyRange.only(e));
    return s || new Array();
  }
  async getEntryCountByQueueName(e) {
    return (await this.getDb()).countFromIndex(f, R, IDBKeyRange.only(e));
  }
  async deleteEntry(e) {
    await (await this.getDb()).delete(f, e);
  }
  async getFirstEntryByQueueName(e) {
    return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "next");
  }
  async getLastEntryByQueueName(e) {
    return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "prev");
  }
  async getEndEntryFromIndex(e, t) {
    const a = await (await this.getDb()).transaction(f).store.index(R).openCursor(e, t);
    return a == null ? void 0 : a.value;
  }
  async getDb() {
    return this._db || (this._db = await Ge(Ve, G, {
      upgrade: this._upgradeDb
    })), this._db;
  }
  _upgradeDb(e, t) {
    t > 0 && t < G && e.objectStoreNames.contains(f) && e.deleteObjectStore(f), e.createObjectStore(f, {
      autoIncrement: !0,
      keyPath: "id"
    }).createIndex(R, R, { unique: !1 });
  }
}
class ze {
  constructor(e) {
    this._queueName = e, this._queueDb = new Je();
  }
  async pushEntry(e) {
    delete e.id, e.queueName = this._queueName, await this._queueDb.addEntry(e);
  }
  async unshiftEntry(e) {
    const t = await this._queueDb.getFirstEntryId();
    t ? e.id = t - 1 : delete e.id, e.queueName = this._queueName, await this._queueDb.addEntry(e);
  }
  async popEntry() {
    return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName));
  }
  async shiftEntry() {
    return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName));
  }
  async getAll() {
    return await this._queueDb.getAllEntriesByQueueName(this._queueName);
  }
  async size() {
    return await this._queueDb.getEntryCountByQueueName(this._queueName);
  }
  async deleteEntry(e) {
    await this._queueDb.deleteEntry(e);
  }
  async _removeEntry(e) {
    return e && await this.deleteEntry(e.id), e;
  }
}
const Xe = [
  "method",
  "referrer",
  "referrerPolicy",
  "mode",
  "credentials",
  "cache",
  "redirect",
  "integrity",
  "keepalive"
];
class k {
  constructor(e) {
    e.mode === "navigate" && (e.mode = "same-origin"), this._requestData = e;
  }
  static async fromRequest(e) {
    const t = {
      url: e.url,
      headers: {}
    };
    e.method !== "GET" && (t.body = await e.clone().arrayBuffer());
    for (const [s, a] of e.headers.entries())
      t.headers[s] = a;
    for (const s of Xe)
      e[s] !== void 0 && (t[s] = e[s]);
    return new k(t);
  }
  toObject() {
    const e = Object.assign({}, this._requestData);
    return e.headers = Object.assign({}, this._requestData.headers), e.body && (e.body = e.body.slice(0)), e;
  }
  toRequest() {
    return new Request(this._requestData.url, this._requestData);
  }
  clone() {
    return new k(this.toObject());
  }
}
const Q = "workbox-background-sync", Ye = 60 * 24 * 7, q = /* @__PURE__ */ new Set(), $ = (n) => {
  const e = {
    request: new k(n.requestData).toRequest(),
    timestamp: n.timestamp
  };
  return n.metadata && (e.metadata = n.metadata), e;
};
class Ze {
  constructor(e, { forceSyncFallback: t, onSync: s, maxRetentionTime: a } = {}) {
    if (this._syncInProgress = !1, this._requestsAddedDuringSync = !1, q.has(e))
      throw new l("duplicate-queue-name", { name: e });
    q.add(e), this._name = e, this._onSync = s || this.replayRequests, this._maxRetentionTime = a || Ye, this._forceSyncFallback = Boolean(t), this._queueStore = new ze(this._name), this._addSyncListener();
  }
  get name() {
    return this._name;
  }
  async pushRequest(e) {
    await this._addRequest(e, "push");
  }
  async unshiftRequest(e) {
    await this._addRequest(e, "unshift");
  }
  async popRequest() {
    return this._removeRequest("pop");
  }
  async shiftRequest() {
    return this._removeRequest("shift");
  }
  async getAll() {
    const e = await this._queueStore.getAll(), t = Date.now(), s = [];
    for (const a of e) {
      const i = this._maxRetentionTime * 60 * 1e3;
      t - a.timestamp > i ? await this._queueStore.deleteEntry(a.id) : s.push($(a));
    }
    return s;
  }
  async size() {
    return await this._queueStore.size();
  }
  async _addRequest({ request: e, metadata: t, timestamp: s = Date.now() }, a) {
    const r = {
      requestData: (await k.fromRequest(e.clone())).toObject(),
      timestamp: s
    };
    switch (t && (r.metadata = t), a) {
      case "push":
        await this._queueStore.pushEntry(r);
        break;
      case "unshift":
        await this._queueStore.unshiftEntry(r);
        break;
    }
    this._syncInProgress ? this._requestsAddedDuringSync = !0 : await this.registerSync();
  }
  async _removeRequest(e) {
    const t = Date.now();
    let s;
    switch (e) {
      case "pop":
        s = await this._queueStore.popEntry();
        break;
      case "shift":
        s = await this._queueStore.shiftEntry();
        break;
    }
    if (s) {
      const a = this._maxRetentionTime * 60 * 1e3;
      return t - s.timestamp > a ? this._removeRequest(e) : $(s);
    } else
      return;
  }
  async replayRequests() {
    let e;
    for (; e = await this.shiftRequest(); )
      try {
        await fetch(e.request.clone());
      } catch {
        throw await this.unshiftRequest(e), new l("queue-replay-failed", { name: this._name });
      }
  }
  async registerSync() {
    if ("sync" in self.registration && !this._forceSyncFallback)
      try {
        await self.registration.sync.register(`${Q}:${this._name}`);
      } catch {
      }
  }
  _addSyncListener() {
    "sync" in self.registration && !this._forceSyncFallback ? self.addEventListener("sync", (e) => {
      if (e.tag === `${Q}:${this._name}`) {
        const t = async () => {
          this._syncInProgress = !0;
          let s;
          try {
            await this._onSync({ queue: this });
          } catch (a) {
            if (a instanceof Error)
              throw s = a, s;
          } finally {
            this._requestsAddedDuringSync && !(s && !e.lastChance) && await this.registerSync(), this._syncInProgress = !1, this._requestsAddedDuringSync = !1;
          }
        };
        e.waitUntil(t());
      }
    }) : this._onSync({ queue: this });
  }
  static get _queueNames() {
    return q;
  }
}
class et {
  constructor(e, t) {
    this.fetchDidFail = async ({ request: s }) => {
      await this._queue.pushRequest({ request: s });
    }, this._queue = new Ze(e, t);
  }
}
try {
  self["workbox:google-analytics:6.5.3"] && _();
} catch {
}
const tt = "workbox-google-analytics", st = 60 * 48, se = "www.google-analytics.com", ne = "www.googletagmanager.com", nt = "/analytics.js", at = "/gtag/js", rt = "/gtm.js", it = /^\/(\w+\/)?collect/, ct = (n) => async ({ queue: e }) => {
  let t;
  for (; t = await e.shiftRequest(); ) {
    const { request: s, timestamp: a } = t, i = new URL(s.url);
    try {
      const r = s.method === "POST" ? new URLSearchParams(await s.clone().text()) : i.searchParams, c = a - (Number(r.get("qt")) || 0), o = Date.now() - c;
      if (r.set("qt", String(o)), n.parameterOverrides)
        for (const u of Object.keys(n.parameterOverrides)) {
          const y = n.parameterOverrides[u];
          r.set(u, y);
        }
      typeof n.hitFilter == "function" && n.hitFilter.call(null, r), await fetch(new Request(i.origin + i.pathname, {
        body: r.toString(),
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: { "Content-Type": "text/plain" }
      }));
    } catch (r) {
      throw await e.unshiftRequest(t), r;
    }
  }
}, ot = (n) => {
  const e = ({ url: s }) => s.hostname === se && it.test(s.pathname), t = new Ue({
    plugins: [n]
  });
  return [new h(e, t, "GET"), new h(e, t, "POST")];
}, ut = (n) => {
  const e = ({ url: s }) => s.hostname === se && s.pathname === nt, t = new U({ cacheName: n });
  return new h(e, t, "GET");
}, lt = (n) => {
  const e = ({ url: s }) => s.hostname === ne && s.pathname === at, t = new U({ cacheName: n });
  return new h(e, t, "GET");
}, ht = (n) => {
  const e = ({ url: s }) => s.hostname === ne && s.pathname === rt, t = new U({ cacheName: n });
  return new h(e, t, "GET");
}, dt = (n = {}) => {
  const e = C.getGoogleAnalyticsName(n.cacheName), t = new et(tt, {
    maxRetentionTime: st,
    onSync: ct(n)
  }), s = [
    ht(e),
    ut(e),
    lt(e),
    ...ot(t)
  ], a = new Y();
  for (const i of s)
    a.registerRoute(i);
  a.addFetchListener();
};
self.addEventListener("message", (n) => {
  n.data.type === "SKIP_WAITING" && self.skipWaiting();
});
ye();
ve(
  [...ae, ...re, ...ie].map((n) => ({
    url: n,
    revision: V
  }))
);
dt();
P(
  new h(
    ({ request: { url: n } }) => /^https?:\/\/ajax\.googleapis\.com\//.test(n) || /^https?:\/\/fonts\.googleapis\.com\//.test(n) || /^https?:\/\/fonts\.gstatic\.com\//.test(n),
    new O({
      cacheName: "workbox-google-cache"
    })
  )
);
P(
  new h(
    ({ request: n }) => n.destination === "image" && /^https?:\/\/1\.gravatar\.com\//.test(n.url),
    new O({
      cacheName: "workbox-gravatar-cache"
    })
  )
);
P(
  new je(
    new O({
      cacheName: V
    })
  )
);
Ie();
