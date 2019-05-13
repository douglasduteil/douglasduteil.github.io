(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{79:function(t,e,l){"use strict";var a=l(7),i=l(80),n=l.n(i);const r=a.a.createStyleSheet(n.a);r.addRules({section:{backgroundColor:t=>t.bgColor},title:{backgroundColor:t=>t.bgColor}});const{classes:o}=r,s={};e.a=(t=>({title:e,children:l,bgColor:a,watermark:i})=>(r.update({bgColor:a}),t(s,":page-layout")`
    <div class=${o.watermark}>${i}</div>
    <h1 class=${o.title}>${e}</h1>
    <section class=${o.section}>${l}</section>
    <style>${{html:r.toString()}}</style>
  `))},80:function(t,e){t.exports={"@global":{"@media (min-width: 768px)":{main:{paddingLeft:"70px"}}},title:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",transform:"translateZ(0)",willChange:"transform",textAlign:"center",margin:"0",padding:"1rem 0","@media (min-width: 768px)":{left:"70px"}},section:{flex:"1",display:"flex",padding:"20px",marginBottom:"50px","@media (min-width: 768px)":{marginBottom:"0",paddingBottom:"0"}},watermark:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:"0",opacity:"0.1",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",pointerEvents:"none","@global svg":{width:"170px",height:"170px"}}}},93:function(t,e){t.exports={"@global section":{marginTop:"4rem",justifyContent:"center",alignItems:"center"},ul:{listStyle:"none",padding:"0",margin:"0",display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"center","@media (max-width: 767px)":{marginBottom:"-20px"}},li:{margin:"50px"},a:{textDecoration:"none",color:"#111",display:"table-cell",verticalAlign:"middle",textAlign:"center",width:"130px",height:"150px",background:"#fff",padding:"0 10px",transform:"rotate(-45deg)",position:"relative","&:before":{content:"''",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",transform:"scale(1.1)",border:"2px solid white"}},text:{transform:"rotate(45deg)"}}},99:function(t,e,l){"use strict";l.r(e),l.d(e,"backgoundColor",function(){return p});var a=l(79),i=l(7),n=l(6),r=l(93),o=l.n(r);const s=i.a.createStyleSheet(o.a),{classes:c}=s,d={},p="#525A16";e.default=(({hyper:{wire:t}},e,l)=>Object(a.a)(t)({title:"Rockets",bgColor:p,watermark:Object(n.f)(t,e),children:t(d,":rockets")`
  <ul class=${c.ul}>
  
    <li class=${c.li}>
      <a
        class=${c.a}
        href="https://github.com/douglasduteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${c.text}>Github</div>
      </a>
    </li>

    <li class=${c.li}>
      <a
        class=${c.a}
        href="https://next.plnkr.co/users/douglasduteil/plunks"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${c.text}>Plunker</div>
      </a>
    </li>

    <li class=${c.li}>
      <a
        class=${c.a}
        href="http://cssdeck.com/user/DouglasDuteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${c.text}>CSSDesk</div>
      </a>
    </li>

    <li class=${c.li}>
      <a
        class=${c.a}
        href="http://codepen.io/douglasduteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${c.text}>CodePen</div>
      </a>
    </li>

  </ul>
  <style>${{html:s.toString()}}</style>
  `}))}}]);