import{s as a,g as c}from"./CgLllPev.js";import{n as b,o,q as l,t as p,u as d,v as _}from"./DQOhTkEE.js";let s=!1,i=Symbol();function y(e,n,r){const u=r[n]??(r[n]={store:null,source:b(void 0),unsubscribe:o});if(u.store!==e&&!(i in r))if(u.unsubscribe(),u.store=e,e==null)u.source.v=void 0,u.unsubscribe=o;else{var t=!0;u.unsubscribe=a(e,f=>{t?u.source.v=f:d(u.source,f)}),t=!1}return i in r?c(e):l(u.source)}function m(){const e={};function n(){p(()=>{for(var r in e)e[r].unsubscribe();_(e,i,{enumerable:!1,value:!0})})}return[e,n]}function N(e){var n=s;try{return s=!1,[e(),s]}finally{s=n}}export{y as a,N as c,m as s};