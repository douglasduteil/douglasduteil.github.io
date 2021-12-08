(self.webpackChunkdouglasduteil_github_com=self.webpackChunkdouglasduteil_github_com||[]).push([[54],{832:t=>{t.exports={"@global":{"@media (min-width: 768px)":{main:{paddingLeft:"70px"}}},title:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",transform:"translateZ(0)",willChange:"transform",textAlign:"center",margin:"0",padding:"1rem 0","@media (min-width: 768px)":{left:"70px"}},section:{flex:"1",display:"flex",padding:"20px",marginBottom:"50px","@media (min-width: 768px)":{marginBottom:"0",paddingBottom:"0"}},watermark:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:"0",opacity:"0.1",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",pointerEvents:"none","@global svg":{width:"170px",height:"170px"}}}},640:t=>{t.exports={"@global section":{marginTop:"4rem",justifyContent:"center",alignItems:"center"},ul:{listStyle:"none",padding:"0",margin:"0",display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"center","@media (max-width: 767px)":{marginBottom:"-20px"}},li:{margin:"50px"},a:{textDecoration:"none",color:"#111",display:"table-cell",verticalAlign:"middle",textAlign:"center",width:"130px",height:"150px",background:"#fff",padding:"0 10px",transform:"rotate(-45deg)",position:"relative","&:before":{content:"''",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",transform:"scale(1.1)",border:"2px solid white"}},text:{transform:"rotate(45deg)"}}},672:(t,e,l)=>{"use strict";l.d(e,{Z:()=>d});var i=l(784),a=l(832),r=l.n(a);const o=i.Z.createStyleSheet(r());o.addRules({section:{backgroundColor:t=>t.bgColor},title:{backgroundColor:t=>t.bgColor}});const{classes:s}=o,n={},d=t=>({title:e,children:l,bgColor:i,watermark:a})=>(o.update({bgColor:i}),t(n,":page-layout")`
    <div class=${s.watermark}>${a}</div>
    <h1 class=${s.title}>${e}</h1>
    <section class=${s.section}>${l}</section>
    <style>${{html:o.toString()}}</style>
  `)},54:(t,e,l)=>{"use strict";l.r(e),l.d(e,{backgoundColor:()=>g,default:()=>p});var i=l(672),a=l(784),r=l(311),o=l(640),s=l.n(o);const n=a.Z.createStyleSheet(s()),{classes:d}=n,c={},g="#525A16",p=({hyper:{wire:t}},e,l)=>(0,i.Z)(t)({title:"Rockets",bgColor:g,watermark:(0,r.Ii)(t,e),children:t(c,":rockets")`
  <ul class=${d.ul}>

    <li class=${d.li}>
      <a
        class=${d.a}
        href="https://github.com/douglasduteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${d.text}>Github</div>
      </a>
    </li>

    <li class=${d.li}>
      <a
        class=${d.a}
        href="https://next.plnkr.co/users/douglasduteil/plunks"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${d.text}>Plunker</div>
      </a>
    </li>

    <li class=${d.li}>
      <a
        class=${d.a}
        href="http://cssdeck.com/user/DouglasDuteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${d.text}>CSSDesk</div>
      </a>
    </li>

    <li class=${d.li}>
      <a
        class=${d.a}
        href="http://codepen.io/douglasduteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${d.text}>CodePen</div>
      </a>
    </li>

  </ul>
  <style>${{html:n.toString()}}</style>
  `})}}]);