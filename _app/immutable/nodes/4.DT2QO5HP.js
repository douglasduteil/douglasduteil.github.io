import{T as ue}from"../chunks/trophy.Bq9JJ3dm.js";import{a as _,t as M,n as ee,c as G}from"../chunks/disclose-version.SJI8_uvq.js";import"../chunks/legacy.BvpIM-F3.js";import{ak as ce,b as fe,h as C,k as L,e as de,T as he,ai as te,H as me,j as W,l as $,i as P,az as N,m as ae,d as re,g as pe,w as j,aA as ge,aB as ye,ah as _e,aC as be,aD as we,aa as Se,ae as ke,v as Te,a5 as Ae,N as V,aE as xe,aF as Ee,aG as Me,ac as Ie,an as Ce,Q as ze,p as z,f as x,c as y,r as g,s as T,a as F,t as D,D as Y}from"../chunks/runtime.CYk5z9yU.js";import{s as ne}from"../chunks/render.MR0PqoFE.js";import{s as E}from"../chunks/attributes.edkYSe2Z.js";import{i as ie}from"../chunks/lifecycle.6yb8RmKM.js";import{l as O,p as le,s as H}from"../chunks/props.EVYU_DnQ.js";import{i as J}from"../chunks/if.D3hb8rYn.js";import{S as Fe,G as Pe}from"../chunks/github.BHdNtz-o.js";function Q(n,e){return e}function De(n,e,t,r){for(var s=[],l=e.length,i=0;i<l;i++)ye(e[i].e,s,!0);var o=l>0&&s.length===0&&t!==null;if(o){var u=t.parentNode;_e(u),u.append(t),r.clear(),A(n,e[0].prev,e[l-1].next)}be(s,()=>{for(var v=0;v<l;v++){var a=e[v];o||(r.delete(a.k),A(n,a.prev,a.next)),we(a.e,!o)}})}function X(n,e,t,r,s,l=null){var i=n,o={flags:e,items:new Map,first:null};{var u=n;i=C?L(Se(u)):u.appendChild(ce())}C&&de();var v=null,a=!1;fe(()=>{var f=t(),d=he(f)?f:f==null?[]:te(f),c=d.length;if(a&&c===0)return;a=c===0;let m=!1;if(C){var S=i.data===me;S!==(c===0)&&(i=W(),L(i),$(!1),m=!0)}if(C){for(var w=null,h,p=0;p<c;p++){if(P.nodeType===8&&P.data===ke){i=P,m=!0,$(!1);break}var R=d[p],I=r(R,p);h=se(P,o,w,null,R,I,p,s,e),o.items.set(I,h),w=h}c>0&&L(W())}if(!C){var k=Te;Je(d,o,i,s,e,(k.f&N)!==0,r)}l!==null&&(c===0?v?ae(v):v=re(()=>l(i)):v!==null&&pe(v,()=>{v=null})),m&&$(!0),t()}),C&&(i=P)}function Je(n,e,t,r,s,l,i){var o=n.length,u=e.items,v=e.first,a=v,f,d=null,c=[],m=[],S,w,h,p;for(p=0;p<o;p+=1){if(S=n[p],w=i(S,p),h=u.get(w),h===void 0){var R=a?a.e.nodes_start:t;d=se(R,e,d,d===null?e.first:d.next,S,w,p,r,s),u.set(w,d),c=[],m=[],a=d.next;continue}if(Re(h,S,p),h.e.f&N&&ae(h.e),h!==a){if(f!==void 0&&f.has(h)){if(c.length<m.length){var I=m[0],k;d=I.prev;var q=c[0],B=c[c.length-1];for(k=0;k<c.length;k+=1)K(c[k],I,t);for(k=0;k<m.length;k+=1)f.delete(m[k]);A(e,q.prev,B.next),A(e,d,q),A(e,B,I),a=I,d=B,p-=1,c=[],m=[]}else f.delete(h),K(h,a,t),A(e,h.prev,h.next),A(e,h,d===null?e.first:d.next),A(e,d,h),d=h;continue}for(c=[],m=[];a!==null&&a.k!==w;)(l||!(a.e.f&N))&&(f??(f=new Set)).add(a),m.push(a),a=a.next;if(a===null)continue;h=a}c.push(h),d=h,a=h.next}if(a!==null||f!==void 0){for(var U=f===void 0?[]:te(f);a!==null;)(l||!(a.e.f&N))&&U.push(a),a=a.next;var oe=U.length;if(oe>0){var ve=o===0?t:null;De(e,U,ve,u)}}j.first=e.first&&e.first.e,j.last=d&&d.e}function Re(n,e,t,r){ge(n.v,e),n.i=t}function se(n,e,t,r,s,l,i,o,u){var v=(u&Ee)!==0,a=(u&Me)===0,f=v?a?Ae(s):V(s):s,d=u&xe?V(i):i,c={i:d,v:f,k:l,a:null,e:null,prev:t,next:r};try{return c.e=re(()=>o(n,f,d),C),c.e.prev=t&&t.e,c.e.next=r&&r.e,t===null?e.first=c:(t.next=c,t.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{}}function K(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,s=e?e.e.nodes_start:t,l=n.e.nodes_start;l!==r;){var i=Ie(l);s.before(l),l=i}}function A(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function b(n,e,t){var r=ze(n,e);r&&r.set&&(n[e]=t,Ce(()=>{n[e]=null}))}const Ge=()=>({title:"Achievements",backgroundColor:"#4F8C86",watermark:ue}),ft=Object.freeze(Object.defineProperty({__proto__:null,load:Ge},Symbol.toStringTag,{value:"Module"}));var He=M('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function Z(n,e){const t=O(e,["children","$$slots","$$events","$$legacy"]);z(e,!1);const{type:r,title:s,body:l}=t;var i=He(),o=x(i);E(o,"aria-label",`${r??""} event`);var u=y(o);Fe(u),g(o);var v=T(o,2),a=y(v);a.textContent=s;var f=T(a,2);return f.textContent=l,g(v),_(n,i),b(e,"type",r),b(e,"title",s),b(e,"body",l),F({type:r,title:s,body:l})}var Ne=ee('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 28"><path d="M27.719 13.062l0.281 4.937c0.125 2.203-4.484 4-10 4s-10.125-1.797-10-4l0.281-4.937 8.969 2.828c0.25 0.078 0.5 0.109 0.75 0.109s0.5-0.031 0.75-0.109zM36 8c0 0.219-0.141 0.406-0.344 0.484l-17.5 5.5c-0.063 0.016-0.109 0.016-0.156 0.016s-0.094 0-0.156-0.016l-10.187-3.219c-0.891 0.703-1.516 2.422-1.641 4.531 0.594 0.344 0.984 0.969 0.984 1.703 0 0.703-0.359 1.313-0.906 1.672l0.906 6.766c0.016 0.141-0.031 0.281-0.125 0.391s-0.234 0.172-0.375 0.172h-3c-0.141 0-0.281-0.063-0.375-0.172s-0.141-0.25-0.125-0.391l0.906-6.766c-0.547-0.359-0.906-0.969-0.906-1.672 0-0.75 0.422-1.391 1.016-1.734 0.094-1.828 0.562-3.797 1.531-5.156l-5.203-1.625c-0.203-0.078-0.344-0.266-0.344-0.484s0.141-0.406 0.344-0.484l17.5-5.5c0.063-0.016 0.109-0.016 0.156-0.016s0.094 0 0.156 0.016l17.5 5.5c0.203 0.078 0.344 0.266 0.344 0.484z"></path></svg>');function Oe(n){var e=Ne();_(n,e)}var Be=M('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function Ue(n,e){const t=O(e,["children","$$slots","$$events","$$legacy"]);z(e,!1);const{type:r,title:s,body:l}=t;var i=Be(),o=x(i);E(o,"aria-label",`${r??""} event`);var u=y(o);Oe(u),g(o);var v=T(o,2),a=y(v);a.textContent=s;var f=T(a,2);return f.textContent=l,g(v),_(n,i),b(e,"type",r),b(e,"title",s),b(e,"body",l),F({type:r,title:s,body:l})}var Le=M('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function $e(n,e){const t=O(e,["children","$$slots","$$events","$$legacy"]);z(e,!1);const{type:r,title:s,body:l}=t;var i=Le(),o=x(i);E(o,"aria-label",`${r??""} event`);var u=y(o);Pe(u),g(o);var v=T(o,2),a=y(v);a.textContent=s;var f=T(a,2);return f.textContent=l,g(v),_(n,i),b(e,"type",r),b(e,"title",s),b(e,"body",l),F({type:r,title:s,body:l})}var Ye=ee('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 28"><path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path></svg>');function qe(n){var e=Ye();_(n,e)}var We=M('<p><a rel="noreferrer" target="_blank"> </a></p>'),je=M('<i><!></i> <div aria-label="event card"><h3></h3> <p><em></em></p> <!></div>',1);function Ve(n,e){const t=O(e,["children","$$slots","$$events","$$legacy"]);z(e,!1);const{type:r,title:s,body:l,link:i}=t;var o=je(),u=x(o);E(u,"aria-label",`${r??""} event`);var v=y(u);qe(v),g(u);var a=T(u,2),f=y(a);f.textContent=s;var d=T(f,2),c=y(d);c.textContent=l,g(d);var m=T(d,2);return J(m,()=>i,S=>{var w=We(),h=y(w),p=y(h,!0);g(h),g(w),D(()=>{E(h,"href",i.href),ne(p,i.name)}),_(S,w)}),g(a),_(n,o),b(e,"type",r),b(e,"title",s),b(e,"body",l),b(e,"link",i),F({type:r,title:s,body:l,link:i})}function Qe(n,e){z(e,!1);let t=le(e,"event",8);ie();var r=G(),s=x(r);J(s,()=>t().type==="github",l=>{$e(l,H(t))},l=>{var i=G(),o=x(i);J(o,()=>t().type==="job",u=>{Z(u,H(t))},u=>{var v=G(),a=x(v);J(a,()=>t().type==="study",f=>{Ue(f,H(t))},f=>{var d=G(),c=x(d);J(c,()=>t().type==="talk",m=>{Ve(m,H(t))},m=>{Z(m,{get title(){return`INFO(o_0): '${t().type??""}' event here ?`},get body(){return`[TODO(@douglasduteil): add a '${t().type??""}' event.type]`}})},!0),_(f,d)},!0),_(u,v)},!0),_(l,i)}),_(n,r),F()}var Xe=M('<li aria-label="event" class="svelte-ir01w"><!></li>'),Ke=M('<li><time class="svelte-ir01w"> </time> <ul aria-label="events" class="svelte-ir01w"></ul></li>'),Ze=M('<ul aria-label="timeline" class="svelte-ir01w"></ul>');function et(n,e){z(e,!1);let t=le(e,"eventsPerYear",8);ie();var r=Ze();X(r,5,t,Q,(s,l)=>{let i=()=>Y(l)[0],o=()=>Y(l)[1];var u=Ke();D(()=>E(u,"aria-labelledby",String(i())));var v=y(u);D(()=>E(v,"datetime",new Date(i(),0,1).toDateString())),D(()=>E(v,"id",String(i())));var a=y(v,!0);g(v);var f=T(v,2);X(f,5,o,Q,(d,c)=>{var m=Xe(),S=y(m);Qe(S,{get event(){return Y(c)}}),g(m),_(d,m)}),g(f),g(u),D(()=>ne(a,i())),_(s,u)}),g(r),_(n,r),F()}const tt=[[2022,[{type:"github",body:"A open source organisation that buld widgets and directives for AngularJS",title:"Leave Angular UI"}]],[2021,[{type:"job",body:"Digital Services Incubator of the French government",title:"Leave the Fabrique numérique des Ministères"}]],[2018,[{type:"job",body:"Digital Services Incubator of the French government",title:"Join the Fabrique numérique des Ministères Sociaux as Lead Dev",link:{href:"https://github.com/SocialGouv",name:"@SocialGouv"}},{type:"job",body:"Software development company",title:"Leave SFEIR Paris"},{type:"talk",where:"Talk at the Bouffe Front",title:"How to build a cow ?",link:{href:"https://twitter.com/olegskl/status/1045011688557355009",name:"Bouffe Front @SFEIR"}}]],[2015,[{type:"job",body:"https://github.com/onedoes",title:"Co-founded OneDoes"}]],[2014,[{type:"talk",where:"Talk at the ngParis meetup",title:"Waaa Again !?",link:{href:"https://www.meetup.com/AngularJS-Paris/events/192808622/",name:"Meetup AngularJS #13 @SFEIR"}},{type:"talk",where:"Talk at the ngParis meetup",title:"Input[Range] over 9000",link:{href:"https://www.meetup.com/AngularJS-Paris/events/185603592/",name:"Meetup AngularJS #12 @BeMyAppFr"}},{type:"talk",where:"Talk at the ngParis meetup",title:"We need to make UI.Utils util again !",link:{href:"https://www.meetup.com/AngularJS-Paris/events/165733502/",name:"Meetup AngularJS #8 @SFEIR"}}]],[2013,[{type:"talk",where:"Talk at the ngParis meetup",title:"WaaaAnimation",link:{href:"https://www.meetup.com/AngularJS-Paris/events/147070122/",name:"Meetup #5 @Deezer"}},{type:"job",body:"Software development company",title:"Join SFEIR Paris"},{type:"study",body:"Master's degree in Computer Science and Human Sciences",title:"Graduated from the University of Paris 8"},{type:"github",body:"A open source organisation that buld widgets and directives for AngularJS",title:"Join Angular UI"}]]];function dt(n){et(n,{eventsPerYear:tt})}export{dt as component,ft as universal};