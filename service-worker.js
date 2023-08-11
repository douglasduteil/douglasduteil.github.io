const c = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), re = [
  c + "/_app/immutable/entry/app.c3fca08b.js",
  c + "/_app/immutable/assets/0.3c40b81d.css",
  c + "/_app/immutable/nodes/0.95b82891.js",
  c + "/_app/immutable/nodes/1.a0657336.js",
  c + "/_app/immutable/assets/2.9ec2e6fa.css",
  c + "/_app/immutable/nodes/2.81364a46.js",
  c + "/_app/immutable/nodes/3.de6ac43d.js",
  c + "/_app/immutable/assets/4.890e339e.css",
  c + "/_app/immutable/nodes/4.24dc2bfa.js",
  c + "/_app/immutable/assets/5.3d0e8ef0.css",
  c + "/_app/immutable/nodes/5.e1d334f5.js",
  c + "/_app/immutable/assets/6.a2f904ab.css",
  c + "/_app/immutable/nodes/6.8d06da53.js",
  c + "/_app/immutable/assets/7.ac07bd01.css",
  c + "/_app/immutable/nodes/7.ed5162cc.js",
  c + "/_app/immutable/chunks/comment.7a51ce02.js",
  c + "/_app/immutable/chunks/control.f5b05b5f.js",
  c + "/_app/immutable/chunks/github.efde61f7.js",
  c + "/_app/immutable/chunks/index.70c9dde9.js",
  c + "/_app/immutable/chunks/preload-helper.a4192956.js",
  c + "/_app/immutable/chunks/rocket.a23fc304.js",
  c + "/_app/immutable/chunks/scheduler.c594252a.js",
  c + "/_app/immutable/chunks/singletons.ce02f733.js",
  c + "/_app/immutable/chunks/stores.37469638.js",
  c + "/_app/immutable/chunks/trophy.ebc2220b.js",
  c + "/_app/immutable/entry/start.d99fec76.js",
  c + "/_app/immutable/chunks/stalker.e3db8160.js"
], ie = [
  c + "/favicon.ico",
  c + "/icons/apple-touch-icon-114x114.png",
  c + "/icons/apple-touch-icon-120x120.png",
  c + "/icons/apple-touch-icon-144x144.png",
  c + "/icons/apple-touch-icon-152x152.png",
  c + "/icons/apple-touch-icon-57x57.png",
  c + "/icons/apple-touch-icon-60x60.png",
  c + "/icons/apple-touch-icon-72x72.png",
  c + "/icons/apple-touch-icon-76x76.png",
  c + "/icons/apple-touch-icon-precomposed.png",
  c + "/icons/apple-touch-icon.png",
  c + "/icons/browserconfig.xml",
  c + "/icons/favicon-160x160.png",
  c + "/icons/favicon-16x16.png",
  c + "/icons/favicon-196x196.png",
  c + "/icons/favicon-32x32.png",
  c + "/icons/favicon-96x96.png",
  c + "/icons/favicon.ico",
  c + "/icons/icon-128x128.png",
  c + "/icons/icon-144x144.png",
  c + "/icons/icon-152x152.png",
  c + "/icons/icon-192x192.png",
  c + "/icons/icon-384x384.png",
  c + "/icons/icon-512x512.png",
  c + "/icons/icon-72x72.png",
  c + "/icons/icon-96x96.png",
  c + "/icons/mstile-144x144.png",
  c + "/icons/mstile-150x150.png",
  c + "/icons/mstile-310x150.png",
  c + "/icons/mstile-310x310.png",
  c + "/icons/mstile-70x70.png",
  c + "/manifest.json",
  c + "/mini_me.jpeg"
], ce = [
  c + "/",
  c + "/achievements",
  c + "/contact",
  c + "/me",
  c + "/rockets"
], J = "1691790558092";
try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const oe = (n, ...e) => {
  let t = n;
  return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
}, ue = oe;
class h extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const s = ue(e, t);
    super(s), this.name = e, this.details = t;
  }
}
const le = /* @__PURE__ */ new Set(), m = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, N = (n) => [m.prefix, n, m.suffix].filter((e) => e && e.length > 0).join("-"), he = (n) => {
  for (const e of Object.keys(m))
    n(e);
}, k = {
  updateDetails: (n) => {
    he((e) => {
      typeof n[e] == "string" && (m[e] = n[e]);
    });
  },
  getGoogleAnalyticsName: (n) => n || N(m.googleAnalytics),
  getPrecacheName: (n) => n || N(m.precache),
  getPrefix: () => m.prefix,
  getRuntimeName: (n) => n || N(m.runtime),
  getSuffix: () => m.suffix
};
function B(n, e) {
  const t = new URL(n);
  for (const s of e)
    t.searchParams.delete(s);
  return t.href;
}
async function de(n, e, t, s) {
  const a = B(e.url, t);
  if (e.url === a)
    return n.match(e, s);
  const i = Object.assign(Object.assign({}, s), { ignoreSearch: !0 }), r = await n.keys(e, i);
  for (const o of r) {
    const u = B(o.url, t);
    if (a === u)
      return n.match(o, s);
  }
}
let b;
function fe() {
  if (b === void 0) {
    const n = new Response("");
    if ("body" in n)
      try {
        new Response(n.body), b = !0;
      } catch {
        b = !1;
      }
    b = !1;
  }
  return b;
}
class pe {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
async function me() {
  for (const n of le)
    await n();
}
const ge = (n) => new URL(String(n), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function z(n) {
  return new Promise((e) => setTimeout(e, n));
}
function F(n, e) {
  const t = e();
  return n.waitUntil(t), t;
}
async function ye(n, e) {
  let t = null;
  if (n.url && (t = new URL(n.url).origin), t !== self.location.origin)
    throw new h("cross-origin-copy-response", { origin: t });
  const s = n.clone(), a = {
    headers: new Headers(s.headers),
    status: s.status,
    statusText: s.statusText
  }, i = e ? e(a) : a, r = fe() ? s.body : await s.blob();
  return new Response(r, i);
}
function we() {
  self.addEventListener("activate", () => self.clients.claim());
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch {
}
const _e = "__WB_REVISION__";
function be(n) {
  if (!n)
    throw new h("add-to-cache-list-unexpected-type", { entry: n });
  if (typeof n == "string") {
    const i = new URL(n, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const { revision: e, url: t } = n;
  if (!t)
    throw new h("add-to-cache-list-unexpected-type", { entry: n });
  if (!e) {
    const i = new URL(t, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const s = new URL(t, location.href), a = new URL(t, location.href);
  return s.searchParams.set(_e, e), {
    cacheKey: s.href,
    url: a.href
  };
}
class Re {
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
class Ce {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: s }) => {
      const a = (s == null ? void 0 : s.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return a ? new Request(a, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch {
}
function T(n) {
  return typeof n == "string" ? new Request(n) : n;
}
class Ee {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, t) {
    this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new pe(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const s of this._plugins)
      this._pluginStateMap.set(s, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: t } = this;
    let s = T(e);
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
        throw new h("plugin-error-request-will-fetch", {
          thrownErrorMessage: r.message
        });
    }
    const i = s.clone();
    try {
      let r;
      r = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const o of this.iterateCallbacks("fetchDidSucceed"))
        r = await o({
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
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), s = t.clone();
    return this.waitUntil(this.cachePut(e, s)), t;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const t = T(e);
    let s;
    const { cacheName: a, matchOptions: i } = this._strategy, r = await this.getCacheKey(t, "read"), o = Object.assign(Object.assign({}, i), { cacheName: a });
    s = await caches.match(r, o);
    for (const u of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s = await u({
        cacheName: a,
        matchOptions: i,
        cachedResponse: s,
        request: r,
        event: this.event
      }) || void 0;
    return s;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, t) {
    const s = T(e);
    await z(0);
    const a = await this.getCacheKey(s, "write");
    if (!t)
      throw new h("cache-put-with-no-response", {
        url: ge(a.url)
      });
    const i = await this._ensureResponseSafeToCache(t);
    if (!i)
      return !1;
    const { cacheName: r, matchOptions: o } = this._strategy, u = await self.caches.open(r), l = this.hasCallback("cacheDidUpdate"), w = l ? await de(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      u,
      a.clone(),
      ["__WB_REVISION__"],
      o
    ) : null;
    try {
      await u.put(a, l ? i.clone() : i);
    } catch (f) {
      if (f instanceof Error)
        throw f.name === "QuotaExceededError" && await me(), f;
    }
    for (const f of this.iterateCallbacks("cacheDidUpdate"))
      await f({
        cacheName: r,
        oldResponse: w,
        newResponse: i.clone(),
        request: a,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, t) {
    const s = `${e.url} | ${t}`;
    if (!this._cacheKeys[s]) {
      let a = e;
      for (const i of this.iterateCallbacks("cacheKeyWillBeUsed"))
        a = T(await i({
          mode: t,
          request: a,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[s] = a;
    }
    return this._cacheKeys[s];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, t) {
    for (const s of this.iterateCallbacks(e))
      await s(t);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
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
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
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
class P {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = k.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, s = typeof e.request == "string" ? new Request(e.request) : e.request, a = "params" in e ? e.params : void 0, i = new Ee(this, { event: t, request: s, params: a }), r = this._getResponse(i, s, t), o = this._awaitComplete(r, i, s, t);
    return [r, o];
  }
  async _getResponse(e, t, s) {
    await e.runCallbacks("handlerWillStart", { event: s, request: t });
    let a;
    try {
      if (a = await this._handle(t, e), !a || a.type === "error")
        throw new h("no-response", { url: t.url });
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
    } catch (o) {
      o instanceof Error && (r = o);
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
class g extends P {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(e = {}) {
    e.cacheName = k.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(g.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const s = await t.cacheMatch(e);
    return s || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let s;
    const a = t.params || {};
    if (this._fallbackToNetwork) {
      const i = a.integrity, r = e.integrity, o = !r || r === i;
      s = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? r || i : void 0
      })), i && o && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, s.clone()));
    } else
      throw new h("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    return s;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const s = await t.fetch(e);
    if (!await t.cachePut(e, s.clone()))
      throw new h("bad-precaching-response", {
        url: e.url,
        status: s.status
      });
    return s;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, t = 0;
    for (const [s, a] of this.plugins.entries())
      a !== g.copyRedirectedCacheableResponsesPlugin && (a === g.defaultPrecacheCacheabilityPlugin && (e = s), a.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(g.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
g.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: n }) {
    return !n || n.status >= 400 ? null : n;
  }
};
g.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: n }) {
    return n.redirected ? await ye(n) : n;
  }
};
class ke {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: s = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new g({
      cacheName: k.getPrecacheName(e),
      plugins: [
        ...t,
        new Ce({ precacheController: this })
      ],
      fallbackToNetwork: s
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(e) {
    const t = [];
    for (const s of e) {
      typeof s == "string" ? t.push(s) : s && s.revision === void 0 && t.push(s.url);
      const { cacheKey: a, url: i } = be(s), r = typeof s != "string" && s.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(i) && this._urlsToCacheKeys.get(i) !== a)
        throw new h("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(i),
          secondEntry: a
        });
      if (typeof s != "string" && s.integrity) {
        if (this._cacheKeysToIntegrities.has(a) && this._cacheKeysToIntegrities.get(a) !== s.integrity)
          throw new h("add-to-cache-list-conflicting-integrities", {
            url: i
          });
        this._cacheKeysToIntegrities.set(a, s.integrity);
      }
      if (this._urlsToCacheKeys.set(i, a), this._urlsToCacheModes.set(i, r), t.length > 0) {
        const o = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(o);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(e) {
    return F(e, async () => {
      const t = new Re();
      this.strategy.plugins.push(t);
      for (const [i, r] of this._urlsToCacheKeys) {
        const o = this._cacheKeysToIntegrities.get(r), u = this._urlsToCacheModes.get(i), l = new Request(i, {
          integrity: o,
          cache: u,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: r },
          request: l,
          event: e
        }));
      }
      const { updatedURLs: s, notUpdatedURLs: a } = t;
      return { updatedURLs: s, notUpdatedURLs: a };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(e) {
    return F(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), s = await t.keys(), a = new Set(this._urlsToCacheKeys.values()), i = [];
      for (const r of s)
        a.has(r.url) || (await t.delete(r), i.push(r.url));
      return { deletedURLs: i };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e, s = this.getCacheKeyForURL(t);
    if (s)
      return (await self.caches.open(this.strategy.cacheName)).match(s);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t)
      throw new h("non-precached-url", { url: e });
    return (s) => (s.request = new Request(e), s.params = Object.assign({ cacheKey: t }, s.params), this.strategy.handle(s));
  }
}
let S;
const X = () => (S || (S = new ke()), S);
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const Y = "GET", x = (n) => n && typeof n == "object" ? n : { handle: n };
class d {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, s = Y) {
    this.handler = x(t), this.match = e, this.method = s;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = x(e);
  }
}
class Te extends d {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, s) {
    const a = ({ url: i }) => {
      const r = e.exec(i.href);
      if (r && !(i.origin !== location.origin && r.index !== 0))
        return r.slice(1);
    };
    super(a, t, s);
  }
}
class Z {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, s = this.handleRequest({ request: t, event: e });
      s && e.respondWith(s);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
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
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
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
    let o = r && r.handler;
    const u = e.method;
    if (!o && this._defaultHandlerMap.has(u) && (o = this._defaultHandlerMap.get(u)), !o)
      return;
    let l;
    try {
      l = o.handle({ url: s, request: e, event: t, params: i });
    } catch (f) {
      l = Promise.reject(f);
    }
    const w = r && r.catchHandler;
    return l instanceof Promise && (this._catchHandler || w) && (l = l.catch(async (f) => {
      if (w)
        try {
          return await w.handle({ url: s, request: e, event: t, params: i });
        } catch (K) {
          K instanceof Error && (f = K);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: s, request: e, event: t });
      throw f;
    })), l;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: t, request: s, event: a }) {
    const i = this._routes.get(s.method) || [];
    for (const r of i) {
      let o;
      const u = r.match({ url: e, sameOrigin: t, request: s, event: a });
      if (u)
        return o = u, (Array.isArray(o) && o.length === 0 || u.constructor === Object && // eslint-disable-line
        Object.keys(u).length === 0 || typeof u == "boolean") && (o = void 0), { route: r, params: o };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, t = Y) {
    this._defaultHandlerMap.set(t, x(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = x(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new h("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new h("unregister-route-route-not-registered");
  }
}
let R;
const xe = () => (R || (R = new Z(), R.addFetchListener(), R.addCacheListener()), R);
function D(n, e, t) {
  let s;
  if (typeof n == "string") {
    const i = new URL(n, location.href), r = ({ url: o }) => o.href === i.href;
    s = new d(r, e, t);
  } else if (n instanceof RegExp)
    s = new Te(n, e, t);
  else if (typeof n == "function")
    s = new d(n, e, t);
  else if (n instanceof d)
    s = n;
  else
    throw new h("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return xe().registerRoute(s), s;
}
function Pe(n, e = []) {
  for (const t of [...n.searchParams.keys()])
    e.some((s) => s.test(t)) && n.searchParams.delete(t);
  return n;
}
function* De(n, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: s = !0, urlManipulation: a } = {}) {
  const i = new URL(n, location.href);
  i.hash = "", yield i.href;
  const r = Pe(i, e);
  if (yield r.href, t && r.pathname.endsWith("/")) {
    const o = new URL(r.href);
    o.pathname += t, yield o.href;
  }
  if (s) {
    const o = new URL(r.href);
    o.pathname += ".html", yield o.href;
  }
  if (a) {
    const o = a({ url: i });
    for (const u of o)
      yield u.href;
  }
}
class Ne extends d {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(e, t) {
    const s = ({ request: a }) => {
      const i = e.getURLsToCacheKeys();
      for (const r of De(a.url, t)) {
        const o = i.get(r);
        if (o) {
          const u = e.getIntegrityForCacheKey(o);
          return { cacheKey: o, integrity: u };
        }
      }
    };
    super(s, e.strategy);
  }
}
function Se(n) {
  const e = X(), t = new Ne(e, n);
  D(t);
}
const Le = "-precache-", Ie = async (n, e = Le) => {
  const s = (await self.caches.keys()).filter((a) => a.includes(e) && a.includes(self.registration.scope) && a !== n);
  return await Promise.all(s.map((a) => self.caches.delete(a))), s;
};
function qe() {
  self.addEventListener("activate", (n) => {
    const e = k.getPrecacheName();
    n.waitUntil(Ie(e).then((t) => {
    }));
  });
}
function Ue(n) {
  X().precache(n);
}
function ve(n, e) {
  Ue(n), Se(e);
}
class je extends d {
  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * *Note*: These RegExps may be evaluated against every destination URL during
   * a navigation. Avoid using
   * [complex RegExps](https://github.com/GoogleChrome/workbox/issues/3077),
   * or else your users may see delays when navigating your site.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  constructor(e, { allowlist: t = [/./], denylist: s = [] } = {}) {
    super((a) => this._match(a), e), this._allowlist = t, this._denylist = s;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
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
const ee = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response: n }) => n.status === 200 || n.status === 0 ? n : null
};
class O extends P {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(ee), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const s = [], a = [];
    let i;
    if (this._networkTimeoutSeconds) {
      const { id: u, promise: l } = this._getTimeoutPromise({ request: e, logs: s, handler: t });
      i = u, a.push(l);
    }
    const r = this._getNetworkPromise({
      timeoutId: i,
      request: e,
      logs: s,
      handler: t
    });
    a.push(r);
    const o = await t.waitUntil((async () => await t.waitUntil(Promise.race(a)) || // If Promise.race() resolved with null, it might be due to a network
    // timeout + a cache miss. If that were to happen, we'd rather wait until
    // the networkPromise resolves instead of returning null.
    // Note that it's fine to await an already-resolved promise, so we don't
    // have to check to see if it's still "in flight".
    await r)());
    if (!o)
      throw new h("no-response", { url: e.url });
    return o;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
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
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId: e, request: t, logs: s, handler: a }) {
    let i, r;
    try {
      r = await a.fetchAndCachePut(t);
    } catch (o) {
      o instanceof Error && (i = o);
    }
    return e && clearTimeout(e), (i || !r) && (r = await a.cacheMatch(t)), r;
  }
}
class Oe extends P {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(e = {}) {
    super(e), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    let s, a;
    try {
      const i = [
        t.fetch(e)
      ];
      if (this._networkTimeoutSeconds) {
        const r = z(this._networkTimeoutSeconds * 1e3);
        i.push(r);
      }
      if (a = await Promise.race(i), !a)
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
    } catch (i) {
      i instanceof Error && (s = i);
    }
    if (!a)
      throw new h("no-response", { url: e.url, error: s });
    return a;
  }
}
class A extends P {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(ee);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
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
      throw new h("no-response", { url: e.url, error: i });
    return a;
  }
}
const Ae = (n, e) => e.some((t) => n instanceof t);
let W, H;
function Me() {
  return W || (W = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Ke() {
  return H || (H = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const te = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
function Be(n) {
  const e = new Promise((t, s) => {
    const a = () => {
      n.removeEventListener("success", i), n.removeEventListener("error", r);
    }, i = () => {
      t(y(n.result)), a();
    }, r = () => {
      s(n.error), a();
    };
    n.addEventListener("success", i), n.addEventListener("error", r);
  });
  return e.then((t) => {
    t instanceof IDBCursor && te.set(t, n);
  }).catch(() => {
  }), M.set(e, n), e;
}
function Fe(n) {
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
        return n.objectStoreNames || se.get(n);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return y(n[e]);
  },
  set(n, e, t) {
    return n[e] = t, !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n;
  }
};
function We(n) {
  j = n(j);
}
function He(n) {
  return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const s = n.call(I(this), e, ...t);
    return se.set(s, e.sort ? e.sort() : [e]), y(s);
  } : Ke().includes(n) ? function(...e) {
    return n.apply(I(this), e), y(te.get(this));
  } : function(...e) {
    return y(n.apply(I(this), e));
  };
}
function Ge(n) {
  return typeof n == "function" ? He(n) : (n instanceof IDBTransaction && Fe(n), Ae(n, Me()) ? new Proxy(n, j) : n);
}
function y(n) {
  if (n instanceof IDBRequest)
    return Be(n);
  if (L.has(n))
    return L.get(n);
  const e = Ge(n);
  return e !== n && (L.set(n, e), M.set(e, n)), e;
}
const I = (n) => M.get(n);
function Qe(n, e, { blocked: t, upgrade: s, blocking: a, terminated: i } = {}) {
  const r = indexedDB.open(n, e), o = y(r);
  return s && r.addEventListener("upgradeneeded", (u) => {
    s(y(r.result), u.oldVersion, u.newVersion, y(r.transaction), u);
  }), t && r.addEventListener("blocked", (u) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    u.oldVersion,
    u.newVersion,
    u
  )), o.then((u) => {
    i && u.addEventListener("close", () => i()), a && u.addEventListener("versionchange", (l) => a(l.oldVersion, l.newVersion, l));
  }).catch(() => {
  }), o;
}
const $e = ["get", "getKey", "getAll", "getAllKeys", "count"], Ve = ["put", "add", "delete", "clear"], q = /* @__PURE__ */ new Map();
function G(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string"))
    return;
  if (q.get(e))
    return q.get(e);
  const t = e.replace(/FromIndex$/, ""), s = e !== t, a = Ve.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (s ? IDBIndex : IDBObjectStore).prototype) || !(a || $e.includes(t))
  )
    return;
  const i = async function(r, ...o) {
    const u = this.transaction(r, a ? "readwrite" : "readonly");
    let l = u.store;
    return s && (l = l.index(o.shift())), (await Promise.all([
      l[t](...o),
      a && u.done
    ]))[0];
  };
  return q.set(e, i), i;
}
We((n) => ({
  ...n,
  get: (e, t, s) => G(e, t) || n.get(e, t, s),
  has: (e, t) => !!G(e, t) || n.has(e, t)
}));
try {
  self["workbox:background-sync:7.0.0"] && _();
} catch {
}
const Q = 3, Je = "workbox-background-sync", p = "requests", C = "queueName";
class ze {
  constructor() {
    this._db = null;
  }
  /**
   * Add QueueStoreEntry to underlying db.
   *
   * @param {UnidentifiedQueueStoreEntry} entry
   */
  async addEntry(e) {
    const s = (await this.getDb()).transaction(p, "readwrite", {
      durability: "relaxed"
    });
    await s.store.add(e), await s.done;
  }
  /**
   * Returns the first entry id in the ObjectStore.
   *
   * @return {number | undefined}
   */
  async getFirstEntryId() {
    const t = await (await this.getDb()).transaction(p).store.openCursor();
    return t == null ? void 0 : t.value.id;
  }
  /**
   * Get all the entries filtered by index
   *
   * @param queueName
   * @return {Promise<QueueStoreEntry[]>}
   */
  async getAllEntriesByQueueName(e) {
    const s = await (await this.getDb()).getAllFromIndex(p, C, IDBKeyRange.only(e));
    return s || new Array();
  }
  /**
   * Returns the number of entries filtered by index
   *
   * @param queueName
   * @return {Promise<number>}
   */
  async getEntryCountByQueueName(e) {
    return (await this.getDb()).countFromIndex(p, C, IDBKeyRange.only(e));
  }
  /**
   * Deletes a single entry by id.
   *
   * @param {number} id the id of the entry to be deleted
   */
  async deleteEntry(e) {
    await (await this.getDb()).delete(p, e);
  }
  /**
   *
   * @param queueName
   * @returns {Promise<QueueStoreEntry | undefined>}
   */
  async getFirstEntryByQueueName(e) {
    return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "next");
  }
  /**
   *
   * @param queueName
   * @returns {Promise<QueueStoreEntry | undefined>}
   */
  async getLastEntryByQueueName(e) {
    return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "prev");
  }
  /**
   * Returns either the first or the last entries, depending on direction.
   * Filtered by index.
   *
   * @param {IDBCursorDirection} direction
   * @param {IDBKeyRange} query
   * @return {Promise<QueueStoreEntry | undefined>}
   * @private
   */
  async getEndEntryFromIndex(e, t) {
    const a = await (await this.getDb()).transaction(p).store.index(C).openCursor(e, t);
    return a == null ? void 0 : a.value;
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await Qe(Je, Q, {
      upgrade: this._upgradeDb
    })), this._db;
  }
  /**
   * Upgrades QueueDB
   *
   * @param {IDBPDatabase<QueueDBSchema>} db
   * @param {number} oldVersion
   * @private
   */
  _upgradeDb(e, t) {
    t > 0 && t < Q && e.objectStoreNames.contains(p) && e.deleteObjectStore(p), e.createObjectStore(p, {
      autoIncrement: !0,
      keyPath: "id"
    }).createIndex(C, C, { unique: !1 });
  }
}
class Xe {
  /**
   * Associates this instance with a Queue instance, so entries added can be
   * identified by their queue name.
   *
   * @param {string} queueName
   */
  constructor(e) {
    this._queueName = e, this._queueDb = new ze();
  }
  /**
   * Append an entry last in the queue.
   *
   * @param {Object} entry
   * @param {Object} entry.requestData
   * @param {number} [entry.timestamp]
   * @param {Object} [entry.metadata]
   */
  async pushEntry(e) {
    delete e.id, e.queueName = this._queueName, await this._queueDb.addEntry(e);
  }
  /**
   * Prepend an entry first in the queue.
   *
   * @param {Object} entry
   * @param {Object} entry.requestData
   * @param {number} [entry.timestamp]
   * @param {Object} [entry.metadata]
   */
  async unshiftEntry(e) {
    const t = await this._queueDb.getFirstEntryId();
    t ? e.id = t - 1 : delete e.id, e.queueName = this._queueName, await this._queueDb.addEntry(e);
  }
  /**
   * Removes and returns the last entry in the queue matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   */
  async popEntry() {
    return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName));
  }
  /**
   * Removes and returns the first entry in the queue matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   */
  async shiftEntry() {
    return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName));
  }
  /**
   * Returns all entries in the store matching the `queueName`.
   *
   * @param {Object} options See {@link workbox-background-sync.Queue~getAll}
   * @return {Promise<Array<Object>>}
   */
  async getAll() {
    return await this._queueDb.getAllEntriesByQueueName(this._queueName);
  }
  /**
   * Returns the number of entries in the store matching the `queueName`.
   *
   * @param {Object} options See {@link workbox-background-sync.Queue~size}
   * @return {Promise<number>}
   */
  async size() {
    return await this._queueDb.getEntryCountByQueueName(this._queueName);
  }
  /**
   * Deletes the entry for the given ID.
   *
   * WARNING: this method does not ensure the deleted entry belongs to this
   * queue (i.e. matches the `queueName`). But this limitation is acceptable
   * as this class is not publicly exposed. An additional check would make
   * this method slower than it needs to be.
   *
   * @param {number} id
   */
  async deleteEntry(e) {
    await this._queueDb.deleteEntry(e);
  }
  /**
   * Removes and returns the first or last entry in the queue (based on the
   * `direction` argument) matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   * @private
   */
  async _removeEntry(e) {
    return e && await this.deleteEntry(e.id), e;
  }
}
const Ye = [
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
class E {
  /**
   * Converts a Request object to a plain object that can be structured
   * cloned or JSON-stringified.
   *
   * @param {Request} request
   * @return {Promise<StorableRequest>}
   */
  static async fromRequest(e) {
    const t = {
      url: e.url,
      headers: {}
    };
    e.method !== "GET" && (t.body = await e.clone().arrayBuffer());
    for (const [s, a] of e.headers.entries())
      t.headers[s] = a;
    for (const s of Ye)
      e[s] !== void 0 && (t[s] = e[s]);
    return new E(t);
  }
  /**
   * Accepts an object of request data that can be used to construct a
   * `Request` but can also be stored in IndexedDB.
   *
   * @param {Object} requestData An object of request data that includes the
   *     `url` plus any relevant properties of
   *     [requestInit]{@link https://fetch.spec.whatwg.org/#requestinit}.
   */
  constructor(e) {
    e.mode === "navigate" && (e.mode = "same-origin"), this._requestData = e;
  }
  /**
   * Returns a deep clone of the instances `_requestData` object.
   *
   * @return {Object}
   */
  toObject() {
    const e = Object.assign({}, this._requestData);
    return e.headers = Object.assign({}, this._requestData.headers), e.body && (e.body = e.body.slice(0)), e;
  }
  /**
   * Converts this instance to a Request.
   *
   * @return {Request}
   */
  toRequest() {
    return new Request(this._requestData.url, this._requestData);
  }
  /**
   * Creates and returns a deep clone of the instance.
   *
   * @return {StorableRequest}
   */
  clone() {
    return new E(this.toObject());
  }
}
const $ = "workbox-background-sync", Ze = 60 * 24 * 7, U = /* @__PURE__ */ new Set(), V = (n) => {
  const e = {
    request: new E(n.requestData).toRequest(),
    timestamp: n.timestamp
  };
  return n.metadata && (e.metadata = n.metadata), e;
};
class et {
  /**
   * Creates an instance of Queue with the given options
   *
   * @param {string} name The unique name for this queue. This name must be
   *     unique as it's used to register sync events and store requests
   *     in IndexedDB specific to this instance. An error will be thrown if
   *     a duplicate name is detected.
   * @param {Object} [options]
   * @param {Function} [options.onSync] A function that gets invoked whenever
   *     the 'sync' event fires. The function is invoked with an object
   *     containing the `queue` property (referencing this instance), and you
   *     can use the callback to customize the replay behavior of the queue.
   *     When not set the `replayRequests()` method is called.
   *     Note: if the replay fails after a sync event, make sure you throw an
   *     error, so the browser knows to retry the sync event later.
   * @param {number} [options.maxRetentionTime=7 days] The amount of time (in
   *     minutes) a request may be retried. After this amount of time has
   *     passed, the request will be deleted from the queue.
   * @param {boolean} [options.forceSyncFallback=false] If `true`, instead
   *     of attempting to use background sync events, always attempt to replay
   *     queued request at service worker startup. Most folks will not need
   *     this, unless you explicitly target a runtime like Electron that
   *     exposes the interfaces for background sync, but does not have a working
   *     implementation.
   */
  constructor(e, { forceSyncFallback: t, onSync: s, maxRetentionTime: a } = {}) {
    if (this._syncInProgress = !1, this._requestsAddedDuringSync = !1, U.has(e))
      throw new h("duplicate-queue-name", { name: e });
    U.add(e), this._name = e, this._onSync = s || this.replayRequests, this._maxRetentionTime = a || Ze, this._forceSyncFallback = !!t, this._queueStore = new Xe(this._name), this._addSyncListener();
  }
  /**
   * @return {string}
   */
  get name() {
    return this._name;
  }
  /**
   * Stores the passed request in IndexedDB (with its timestamp and any
   * metadata) at the end of the queue.
   *
   * @param {QueueEntry} entry
   * @param {Request} entry.request The request to store in the queue.
   * @param {Object} [entry.metadata] Any metadata you want associated with the
   *     stored request. When requests are replayed you'll have access to this
   *     metadata object in case you need to modify the request beforehand.
   * @param {number} [entry.timestamp] The timestamp (Epoch time in
   *     milliseconds) when the request was first added to the queue. This is
   *     used along with `maxRetentionTime` to remove outdated requests. In
   *     general you don't need to set this value, as it's automatically set
   *     for you (defaulting to `Date.now()`), but you can update it if you
   *     don't want particular requests to expire.
   */
  async pushRequest(e) {
    await this._addRequest(e, "push");
  }
  /**
   * Stores the passed request in IndexedDB (with its timestamp and any
   * metadata) at the beginning of the queue.
   *
   * @param {QueueEntry} entry
   * @param {Request} entry.request The request to store in the queue.
   * @param {Object} [entry.metadata] Any metadata you want associated with the
   *     stored request. When requests are replayed you'll have access to this
   *     metadata object in case you need to modify the request beforehand.
   * @param {number} [entry.timestamp] The timestamp (Epoch time in
   *     milliseconds) when the request was first added to the queue. This is
   *     used along with `maxRetentionTime` to remove outdated requests. In
   *     general you don't need to set this value, as it's automatically set
   *     for you (defaulting to `Date.now()`), but you can update it if you
   *     don't want particular requests to expire.
   */
  async unshiftRequest(e) {
    await this._addRequest(e, "unshift");
  }
  /**
   * Removes and returns the last request in the queue (along with its
   * timestamp and any metadata). The returned object takes the form:
   * `{request, timestamp, metadata}`.
   *
   * @return {Promise<QueueEntry | undefined>}
   */
  async popRequest() {
    return this._removeRequest("pop");
  }
  /**
   * Removes and returns the first request in the queue (along with its
   * timestamp and any metadata). The returned object takes the form:
   * `{request, timestamp, metadata}`.
   *
   * @return {Promise<QueueEntry | undefined>}
   */
  async shiftRequest() {
    return this._removeRequest("shift");
  }
  /**
   * Returns all the entries that have not expired (per `maxRetentionTime`).
   * Any expired entries are removed from the queue.
   *
   * @return {Promise<Array<QueueEntry>>}
   */
  async getAll() {
    const e = await this._queueStore.getAll(), t = Date.now(), s = [];
    for (const a of e) {
      const i = this._maxRetentionTime * 60 * 1e3;
      t - a.timestamp > i ? await this._queueStore.deleteEntry(a.id) : s.push(V(a));
    }
    return s;
  }
  /**
   * Returns the number of entries present in the queue.
   * Note that expired entries (per `maxRetentionTime`) are also included in this count.
   *
   * @return {Promise<number>}
   */
  async size() {
    return await this._queueStore.size();
  }
  /**
   * Adds the entry to the QueueStore and registers for a sync event.
   *
   * @param {Object} entry
   * @param {Request} entry.request
   * @param {Object} [entry.metadata]
   * @param {number} [entry.timestamp=Date.now()]
   * @param {string} operation ('push' or 'unshift')
   * @private
   */
  async _addRequest({ request: e, metadata: t, timestamp: s = Date.now() }, a) {
    const r = {
      requestData: (await E.fromRequest(e.clone())).toObject(),
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
  /**
   * Removes and returns the first or last (depending on `operation`) entry
   * from the QueueStore that's not older than the `maxRetentionTime`.
   *
   * @param {string} operation ('pop' or 'shift')
   * @return {Object|undefined}
   * @private
   */
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
      return t - s.timestamp > a ? this._removeRequest(e) : V(s);
    } else
      return;
  }
  /**
   * Loops through each request in the queue and attempts to re-fetch it.
   * If any request fails to re-fetch, it's put back in the same position in
   * the queue (which registers a retry for the next sync event).
   */
  async replayRequests() {
    let e;
    for (; e = await this.shiftRequest(); )
      try {
        await fetch(e.request.clone());
      } catch {
        throw await this.unshiftRequest(e), new h("queue-replay-failed", { name: this._name });
      }
  }
  /**
   * Registers a sync event with a tag unique to this instance.
   */
  async registerSync() {
    if ("sync" in self.registration && !this._forceSyncFallback)
      try {
        await self.registration.sync.register(`${$}:${this._name}`);
      } catch {
      }
  }
  /**
   * In sync-supporting browsers, this adds a listener for the sync event.
   * In non-sync-supporting browsers, or if _forceSyncFallback is true, this
   * will retry the queue on service worker startup.
   *
   * @private
   */
  _addSyncListener() {
    "sync" in self.registration && !this._forceSyncFallback ? self.addEventListener("sync", (e) => {
      if (e.tag === `${$}:${this._name}`) {
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
  /**
   * Returns the set of queue names. This is primarily used to reset the list
   * of queue names in tests.
   *
   * @return {Set<string>}
   *
   * @private
   */
  static get _queueNames() {
    return U;
  }
}
class tt {
  /**
   * @param {string} name See the {@link workbox-background-sync.Queue}
   *     documentation for parameter details.
   * @param {Object} [options] See the
   *     {@link workbox-background-sync.Queue} documentation for
   *     parameter details.
   */
  constructor(e, t) {
    this.fetchDidFail = async ({ request: s }) => {
      await this._queue.pushRequest({ request: s });
    }, this._queue = new et(e, t);
  }
}
try {
  self["workbox:google-analytics:7.0.0"] && _();
} catch {
}
const st = "workbox-google-analytics", nt = 60 * 48, ne = "www.google-analytics.com", ae = "www.googletagmanager.com", at = "/analytics.js", rt = "/gtag/js", it = "/gtm.js", ct = /^\/(\w+\/)?collect/, ot = (n) => async ({ queue: e }) => {
  let t;
  for (; t = await e.shiftRequest(); ) {
    const { request: s, timestamp: a } = t, i = new URL(s.url);
    try {
      const r = s.method === "POST" ? new URLSearchParams(await s.clone().text()) : i.searchParams, o = a - (Number(r.get("qt")) || 0), u = Date.now() - o;
      if (r.set("qt", String(u)), n.parameterOverrides)
        for (const l of Object.keys(n.parameterOverrides)) {
          const w = n.parameterOverrides[l];
          r.set(l, w);
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
}, ut = (n) => {
  const e = ({ url: s }) => s.hostname === ne && ct.test(s.pathname), t = new Oe({
    plugins: [n]
  });
  return [new d(e, t, "GET"), new d(e, t, "POST")];
}, lt = (n) => {
  const e = ({ url: s }) => s.hostname === ne && s.pathname === at, t = new O({ cacheName: n });
  return new d(e, t, "GET");
}, ht = (n) => {
  const e = ({ url: s }) => s.hostname === ae && s.pathname === rt, t = new O({ cacheName: n });
  return new d(e, t, "GET");
}, dt = (n) => {
  const e = ({ url: s }) => s.hostname === ae && s.pathname === it, t = new O({ cacheName: n });
  return new d(e, t, "GET");
}, ft = (n = {}) => {
  const e = k.getGoogleAnalyticsName(n.cacheName), t = new tt(st, {
    maxRetentionTime: nt,
    onSync: ot(n)
  }), s = [
    dt(e),
    lt(e),
    ht(e),
    ...ut(t)
  ], a = new Z();
  for (const i of s)
    a.registerRoute(i);
  a.addFetchListener();
};
self.addEventListener("message", (n) => {
  n.data.type === "SKIP_WAITING" && self.skipWaiting();
});
we();
ve(
  [...re, ...ie, ...ce].map((n) => ({
    url: n,
    revision: J
  }))
);
ft();
D(
  new d(
    ({ request: { url: n } }) => /^https?:\/\/ajax\.googleapis\.com\//.test(n) || /^https?:\/\/fonts\.googleapis\.com\//.test(n) || /^https?:\/\/fonts\.gstatic\.com\//.test(n),
    new A({
      cacheName: "workbox-google-cache"
    })
  )
);
D(
  new d(
    ({ request: n }) => n.destination === "image" && /^https?:\/\/1\.gravatar\.com\//.test(n.url),
    new A({
      cacheName: "workbox-gravatar-cache"
    })
  )
);
D(
  new je(
    new A({
      cacheName: J
    })
  )
);
qe();
