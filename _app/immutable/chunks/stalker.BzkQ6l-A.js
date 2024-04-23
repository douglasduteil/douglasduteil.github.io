const g=window.Element.prototype,F=g.matches||g.matchesSelector||g.webkitMatchesSelector||g.mozMatchesSelector||g.msMatchesSelector||g.oMatchesSelector;function W(i,t){if(i&&i.nodeType==1&&t){if(typeof t=="string"||t.nodeType==1)return i==t||j(i,t);if("length"in t){for(let e=0,s;s=t[e];e++)if(i==s||j(i,s))return!0}}return!1}function j(i,t){if(typeof t!="string")return!1;if(F)return F.call(i,t);const e=i.parentNode.querySelectorAll(t);for(let s=0,n;n=e[s];s++)if(n==i)return!0;return!1}function Q(i){const t=[];for(;i&&i.parentNode&&i.parentNode.nodeType==1;)i=i.parentNode,t.push(i);return t}function X(i,t,e=!1){if(!(i&&i.nodeType==1&&t))return;const s=(e?[i]:[]).concat(Q(i));for(let n=0,r;r=s[n];n++)if(W(r,t))return r}function Z(i,t,e,s,n={}){const r=function(o){let a;if(n.composed&&typeof o.composedPath=="function"){const f=o.composedPath();for(let w=0,y;y=f[w];w++)y.nodeType==1&&W(y,e)&&(a=y)}else a=X(o.target,e,!0);a&&s.call(a,o,a)};return i.addEventListener(t,r,n.useCapture),{destroy:function(){i.removeEventListener(t,r,n.useCapture)}}}function tt(i){const t={};if(!(i&&i.nodeType==1))return t;const e=i.attributes;if(e.length===0)return{};for(let s=0,n;n=e[s];s++)t[n.name]=n.value;return t}const $="80",z="443",et=RegExp(":("+$+"|"+z+")$"),h=document.createElement("a"),R={};function M(i){if(i=!i||i=="."?location.href:i,R[i])return R[i];if(h.href=i,i.charAt(0)=="."||i.charAt(0)=="/")return M(h.href);let t=h.port==$||h.port==z?"":h.port;t=t=="0"?"":t;const e=h.host.replace(et,""),s=h.origin?h.origin:h.protocol+"//"+e,n=h.pathname.charAt(0)=="/"?h.pathname:"/"+h.pathname;return R[i]={hash:h.hash,host:e,hostname:h.hostname,href:h.href,origin:s,pathname:n,port:t,protocol:h.protocol,search:h.search}}const it="2.4.1",N="i5iSjo",st="_av",H="_au",V="(not set)",C=[];class d{static add(t,e,s){K(t,e).add(s)}static remove(t,e,s){K(t,e).remove(s)}constructor(t,e){this.context=t,this.methodName=e,this.isTask=/Task$/.test(e),this.originalMethodReference=this.isTask?t.get(e):t[e],this.methodChain=[],this.boundMethodChain=[],this.wrappedMethod=(...s)=>{const n=this.boundMethodChain[this.boundMethodChain.length-1];return n(...s)},this.isTask?t.set(e,this.wrappedMethod):t[e]=this.wrappedMethod}add(t){this.methodChain.push(t),this.rebindMethodChain()}remove(t){const e=this.methodChain.indexOf(t);e>-1&&(this.methodChain.splice(e,1),this.methodChain.length>0?this.rebindMethodChain():this.destroy())}rebindMethodChain(){this.boundMethodChain=[];for(let t,e=0;t=this.methodChain[e];e++){const s=this.boundMethodChain[e-1]||this.originalMethodReference.bind(this.context);this.boundMethodChain.push(t(s))}}destroy(){const t=C.indexOf(this);t>-1&&(C.splice(t,1),this.isTask?this.context.set(this.methodName,this.originalMethodReference):this.context[this.methodName]=this.originalMethodReference)}}function K(i,t){let e=C.filter(s=>s.context==i&&s.methodName==t)[0];return e||(e=new d(i,t),C.push(e)),e}function b(i,t,e=void 0,s=void 0,n=void 0,r=void 0){if(typeof s=="function"){const o=e.get("buildHitTask");return{buildHitTask:a=>{a.set(i,null,!0),a.set(t,null,!0),s(a,n,r),o(a)}}}else return c({},i,t)}function Y(i,t){const e=tt(i),s={};return Object.keys(e).forEach(function(n){if(n.indexOf(t)===0&&n!=t+"on"){let r=e[n];r=="true"&&(r=!0),r=="false"&&(r=!1);const o=ot(n.slice(t.length));s[o]=r}}),s}function nt(i,t=2e3){let e=!1;const s=function(){e||(e=!0,i())};return setTimeout(s,t),s}const A={};function rt(i,t){const e=i.get("trackingId"),s=A[e]=A[e]||{},n=()=>{clearTimeout(s.timeout),s.send&&d.remove(i,"send",s.send),delete A[e],s.queue.forEach(r=>r())};clearTimeout(s.timeout),s.timeout=setTimeout(n,0),s.queue=s.queue||[],s.queue.push(t),s.send||(s.send=r=>(...o)=>{n(),r(...o)},d.add(i,"send",s.send))}const c=Object.assign||function(i,...t){for(let e=0,s=t.length;e<s;e++){const n=Object(t[e]);for(let r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=n[r])}return i};function ot(i){return i.replace(/[\-\_]+(\w?)/g,function(t,e){return e.toUpperCase()})}function at(i){return i.charAt(0).toUpperCase()+i.slice(1)}function ht(i){return typeof i=="object"&&i!==null}function T(){return+new Date}const U=function i(t){return t?(t^Math.random()*16>>t/4).toString(16):("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,i)};function _(i,t){const e=window.GoogleAnalyticsObject||"ga";window[e]=window[e]||function(...s){(window[e].q=window[e].q||[]).push(s)},window.gaDevIds=window.gaDevIds||[],window.gaDevIds.indexOf(N)<0&&window.gaDevIds.push(N),window[e]("provide",i,t),window.gaplugins=window.gaplugins||{},window.gaplugins[at(i)]=t}const E={CLEAN_URL_TRACKER:1,EVENT_TRACKER:2,IMPRESSION_TRACKER:3,MEDIA_QUERY_TRACKER:4,OUTBOUND_FORM_TRACKER:5,OUTBOUND_LINK_TRACKER:6,PAGE_VISIBILITY_TRACKER:7,SOCIAL_WIDGET_TRACKER:8,URL_CHANGE_TRACKER:9,MAX_SCROLL_TRACKER:10},q=Object.keys(E).length;function L(i,t){gt(i),ft(i,t)}function dt(i){return parseInt(i||"0",16).toString(2)}function ct(i){return parseInt(i||"0",2).toString(16)}function lt(i,t){if(i.length<t){let e=t-i.length;for(;e;)i="0"+i,e--}return i}function ut(i,t){return i.substr(0,t)+1+i.substr(t+1)}function ft(i,t){const e=i.get("&"+H);let s=lt(dt(e),q);s=ut(s,q-t),i.set("&"+H,ct(s))}function gt(i){i.set("&"+st,it)}class pt{constructor(t,e){if(L(t,E.EVENT_TRACKER),!window.addEventListener)return;const s={events:["click"],fieldsObj:{},attributePrefix:"ga-"};this.opts=c(s,e),this.tracker=t,this.handleEvents=this.handleEvents.bind(this);const n="["+this.opts.attributePrefix+"on]";this.delegates={},this.opts.events.forEach(r=>{this.delegates[r]=Z(document,r,n,this.handleEvents,{composed:!0,useCapture:!0})})}handleEvents(t,e){const s=this.opts.attributePrefix;if(e.getAttribute(s+"on").split(/\s*,\s*/).indexOf(t.type)<0)return;const r={transport:"beacon"},o=Y(e,s),a=c({},this.opts.fieldsObj,o),f=o.hitType||"event";this.tracker.send(f,b(r,a,this.tracker,this.opts.hitFilter,e,t))}remove(){Object.keys(this.delegates).forEach(t=>{this.delegates[t].destroy()})}}_("eventTracker",pt);class Tt{constructor(t,e){if(L(t,E.OUTBOUND_LINK_TRACKER),!window.addEventListener)return;const s={events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"};this.opts=c(s,e),this.tracker=t,this.handleLinkInteractions=this.handleLinkInteractions.bind(this),this.delegates={},this.opts.events.forEach(n=>{this.delegates[n]=Z(document,n,this.opts.linkSelector,this.handleLinkInteractions,{composed:!0,useCapture:!0})})}handleLinkInteractions(t,e){if(this.opts.shouldTrackOutboundLink(e,M)){const s=e.getAttribute("href")||e.getAttribute("xlink:href"),n=M(s),r={transport:"beacon",eventCategory:"Outbound Link",eventAction:t.type,eventLabel:n.href},o=c({},this.opts.fieldsObj,Y(e,this.opts.attributePrefix)),a=b(r,o,this.tracker,this.opts.hitFilter,e,t);if(!navigator.sendBeacon&&vt(t,e)){const f=()=>{if(window.removeEventListener("click",f),!t.defaultPrevented){t.preventDefault();const w=a.hitCallback;a.hitCallback=nt(function(){typeof w=="function"&&w(),location.href=s})}this.tracker.send("event",a)};window.addEventListener("click",f)}else this.tracker.send("event",a)}}shouldTrackOutboundLink(t,e){const s=t.getAttribute("href")||t.getAttribute("xlink:href"),n=e(s);return n.hostname!=location.hostname&&n.protocol.slice(0,4)=="http"}remove(){Object.keys(this.delegates).forEach(t=>{this.delegates[t].destroy()})}}_("outboundLinkTracker",Tt);function vt(i,t){return!(i.type!="click"||t.target=="_blank"||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.which>1)}class bt{constructor(){this.registry_={}}on(t,e){this.getRegistry_(t).push(e)}off(t=void 0,e=void 0){if(t&&e){const s=this.getRegistry_(t),n=s.indexOf(e);n>-1&&s.splice(n,1)}else this.registry_={}}emit(t,...e){this.getRegistry_(t).forEach(s=>s(...e))}getEventCount(){let t=0;return Object.keys(this.registry_).forEach(e=>{t+=this.getRegistry_(e).length}),t}getRegistry_(t){return this.registry_[t]=this.registry_[t]||[]}}const O="autotrack",v={};let D=!1,S;class u extends bt{static getOrCreate(t,e,s){const n=[O,t,e].join(":");return v[n]||(v[n]=new u(n,s),D||mt()),v[n]}static isSupported_(){if(S!=null)return S;try{window.localStorage.setItem(O,O),window.localStorage.removeItem(O),S=!0}catch{S=!1}return S}static get_(t){return window.localStorage.getItem(t)}static set_(t,e){window.localStorage.setItem(t,e)}static clear_(t){window.localStorage.removeItem(t)}constructor(t,e={}){super(),this.key_=t,this.defaults_=e,this.cache_=null}get(){if(this.cache_)return this.cache_;if(u.isSupported_())try{this.cache_=x(u.get_(this.key_))}catch{}return this.cache_=c({},this.defaults_,this.cache_)}set(t){if(this.cache_=c({},this.defaults_,this.cache_,t),u.isSupported_())try{u.set_(this.key_,JSON.stringify(this.cache_))}catch{}}clear(){if(this.cache_={},u.isSupported_())try{u.clear_(this.key_)}catch{}}destroy(){delete v[this.key_],Object.keys(v).length||wt()}}function mt(){window.addEventListener("storage",J),D=!0}function wt(){window.removeEventListener("storage",J),D=!1}function J(i){const t=v[i.key];if(t){const e=c({},t.defaults_,x(i.oldValue)),s=c({},t.defaults_,x(i.newValue));t.cache_=s,t.emit("externalSet",s,e)}}function x(i){let t={};if(i)try{t=JSON.parse(i)}catch{}return t}const St=1e3,kt=60*St,I={};class m{static getOrCreate(t,e,s){const n=t.get("trackingId");return I[n]?I[n]:I[n]=new m(t,e,s)}constructor(t,e,s){this.tracker=t,this.timeout=e||m.DEFAULT_TIMEOUT,this.timeZone=s,this.sendHitTaskOverride=this.sendHitTaskOverride.bind(this),d.add(t,"sendHitTask",this.sendHitTaskOverride);try{this.dateTimeFormatter=new Intl.DateTimeFormat("en-US",{timeZone:this.timeZone})}catch{}const n={hitTime:0,isExpired:!1};this.store=u.getOrCreate(t.get("trackingId"),"session",n),this.store.get().id||this.store.set({id:U()})}getId(){return this.store.get().id}isExpired(t=this.getId()){if(t!=this.getId())return!0;const e=this.store.get();if(e.isExpired)return!0;const s=e.hitTime;if(s){const n=new Date,r=new Date(s);if(n-r>this.timeout*kt||this.datesAreDifferentInTimezone(n,r))return!0}return!1}datesAreDifferentInTimezone(t,e){return this.dateTimeFormatter?this.dateTimeFormatter.format(t)!=this.dateTimeFormatter.format(e):!1}sendHitTaskOverride(t){return e=>{t(e);const s=e.get("sessionControl"),n=s=="start"||this.isExpired(),r=s=="end",o=this.store.get();o.hitTime=T(),n&&(o.isExpired=!1,o.id=U()),r&&(o.isExpired=!0),this.store.set(o)}}destroy(){d.remove(this.tracker,"sendHitTask",this.sendHitTaskOverride),this.store.destroy(),delete I[this.tracker.get("trackingId")]}}m.DEFAULT_TIMEOUT=30;const k="hidden",l="visible",p=U(),B=1e3;class Et{constructor(t,e){if(L(t,E.PAGE_VISIBILITY_TRACKER),!document.visibilityState)return;const s={sessionTimeout:m.DEFAULT_TIMEOUT,visibleThreshold:5*B,sendInitialPageview:!1,fieldsObj:{}};this.opts=c(s,e),this.tracker=t,this.lastPageState=document.visibilityState,this.visibleThresholdTimeout_=null,this.isInitialPageviewSent_=!1,this.trackerSetOverride=this.trackerSetOverride.bind(this),this.handleChange=this.handleChange.bind(this),this.handleWindowUnload=this.handleWindowUnload.bind(this),this.handleExternalStoreSet=this.handleExternalStoreSet.bind(this),this.store=u.getOrCreate(t.get("trackingId"),"plugins/page-visibility-tracker"),this.store.on("externalSet",this.handleExternalStoreSet),this.session=m.getOrCreate(t,this.opts.sessionTimeout,this.opts.timeZone),d.add(t,"set",this.trackerSetOverride),window.addEventListener("unload",this.handleWindowUnload),document.addEventListener("visibilitychange",this.handleChange),rt(this.tracker,()=>{document.visibilityState==l?(this.opts.sendInitialPageview&&(this.sendPageview({isPageLoad:!0}),this.isInitialPageviewSent_=!0),this.store.set({time:T(),state:l,pageId:p,sessionId:this.session.getId()})):this.opts.sendInitialPageview&&this.opts.pageLoadsMetricIndex&&this.sendPageLoad()})}handleChange(){if(!(document.visibilityState==l||document.visibilityState==k))return;const t=this.getAndValidateChangeData(),e={time:T(),state:document.visibilityState,pageId:p,sessionId:this.session.getId()};document.visibilityState==l&&this.opts.sendInitialPageview&&!this.isInitialPageviewSent_&&(this.sendPageview(),this.isInitialPageviewSent_=!0),document.visibilityState==k&&this.visibleThresholdTimeout_&&clearTimeout(this.visibleThresholdTimeout_),this.session.isExpired(t.sessionId)?(this.store.clear(),this.lastPageState==k&&document.visibilityState==l&&(clearTimeout(this.visibleThresholdTimeout_),this.visibleThresholdTimeout_=setTimeout(()=>{this.store.set(e),this.sendPageview({hitTime:e.time})},this.opts.visibleThreshold))):(t.pageId==p&&t.state==l&&this.sendPageVisibilityEvent(t),this.store.set(e)),this.lastPageState=document.visibilityState}getAndValidateChangeData(){const t=this.store.get();return this.lastPageState==l&&t.state==k&&t.pageId!=p&&(t.state=l,t.pageId=p,this.store.set(t)),t}sendPageVisibilityEvent(t,{hitTime:e}={}){const s=this.getTimeSinceLastStoredChange(t,{hitTime:e});if(s&&s>=this.opts.visibleThreshold){const n=Math.round(s/B),r={transport:"beacon",nonInteraction:!0,eventCategory:"Page Visibility",eventAction:"track",eventValue:n,eventLabel:V};e&&(r.queueTime=T()-e),this.opts.visibleMetricIndex&&(r["metric"+this.opts.visibleMetricIndex]=n),this.tracker.send("event",b(r,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}}sendPageLoad(){const t={transport:"beacon",eventCategory:"Page Visibility",eventAction:"page load",eventLabel:V,["metric"+this.opts.pageLoadsMetricIndex]:1,nonInteraction:!0};this.tracker.send("event",b(t,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}sendPageview({hitTime:t,isPageLoad:e}={}){const s={transport:"beacon"};t&&(s.queueTime=T()-t),e&&this.opts.pageLoadsMetricIndex&&(s["metric"+this.opts.pageLoadsMetricIndex]=1),this.tracker.send("pageview",b(s,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}trackerSetOverride(t){return(e,s)=>{const n=ht(e)?e:{[e]:s};n.page&&n.page!==this.tracker.get("page")&&this.lastPageState==l&&this.handleChange(),t(e,s)}}getTimeSinceLastStoredChange(t,{hitTime:e}={}){return t.time?(e||T())-t.time:0}handleExternalStoreSet(t,e){t.time!=e.time&&e.pageId==p&&e.state==l&&!this.session.isExpired(e.sessionId)&&this.sendPageVisibilityEvent(e,{hitTime:t.time})}handleWindowUnload(){this.lastPageState!=k&&this.handleChange()}remove(){this.store.destroy(),this.session.destroy(),d.remove(this.tracker,"set",this.trackerSetOverride),window.removeEventListener("unload",this.handleWindowUnload),document.removeEventListener("visibilitychange",this.handleChange)}}_("pageVisibilityTracker",Et);class yt{constructor(t,e){if(L(t,E.URL_CHANGE_TRACKER),!history.pushState||!window.addEventListener)return;const s={shouldTrackUrlChange:this.shouldTrackUrlChange,trackReplaceState:!1,fieldsObj:{},hitFilter:null};this.opts=c(s,e),this.tracker=t,this.path=G(),this.pushStateOverride=this.pushStateOverride.bind(this),this.replaceStateOverride=this.replaceStateOverride.bind(this),this.handlePopState=this.handlePopState.bind(this),d.add(history,"pushState",this.pushStateOverride),d.add(history,"replaceState",this.replaceStateOverride),window.addEventListener("popstate",this.handlePopState)}pushStateOverride(t){return(...e)=>{t(...e),this.handleUrlChange(!0)}}replaceStateOverride(t){return(...e)=>{t(...e),this.handleUrlChange(!1)}}handlePopState(){this.handleUrlChange(!0)}handleUrlChange(t){setTimeout(()=>{const e=this.path,s=G();if(e!=s&&this.opts.shouldTrackUrlChange.call(this,s,e)&&(this.path=s,this.tracker.set({page:s,title:document.title}),t||this.opts.trackReplaceState)){const n={transport:"beacon"};this.tracker.send("pageview",b(n,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}},0)}shouldTrackUrlChange(t,e){return!!(t&&e)}remove(){d.remove(history,"pushState",this.pushStateOverride),d.remove(history,"replaceState",this.replaceStateOverride),window.removeEventListener("popstate",this.handlePopState)}}_("urlChangeTracker",yt);function G(){return location.pathname+location.search}const P=window.ga;P("require","eventTracker");P("require","outboundLinkTracker");P("require","pageVisibilityTracker",{sendInitialPageview:!0});P("require","urlChangeTracker");export{P as ga};