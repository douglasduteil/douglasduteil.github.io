(self.webpackChunkdouglasduteil_github_com=self.webpackChunkdouglasduteil_github_com||[]).push([[805],{627:e=>{e.exports={"@global section":{alignItems:"center",justifyContent:"center"},ul:{listStyle:"none",padding:"0",margin:"0",display:"flex",flexWrap:"wrap",justifyContent:"space-around"},li:{marginTop:"10px",marginRight:"10px"},a:{textAlign:"center",display:"block",color:"#eee",textDecoration:"none",backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"50%",width:"100px",height:"100px",lineHeight:"100px","@media (min-width: 768px)":{width:"200px",height:"200px",lineHeight:"200px",fontSize:"1.5em"}}}},832:e=>{e.exports={"@global":{"@media (min-width: 768px)":{main:{paddingLeft:"70px"}}},title:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",transform:"translateZ(0)",willChange:"transform",textAlign:"center",margin:"0",padding:"1rem 0","@media (min-width: 768px)":{left:"70px"}},section:{flex:"1",display:"flex",padding:"20px",marginBottom:"50px","@media (min-width: 768px)":{marginBottom:"0",paddingBottom:"0"}},watermark:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:"0",opacity:"0.1",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",pointerEvents:"none","@global svg":{width:"170px",height:"170px"}}}},805:(e,t,l)=>{"use strict";l.r(t),l.d(t,{backgoundColor:()=>d,default:()=>p});var a=l(672),i=l(44),o=l(311),r=l(627),n=l.n(r);const s=i.Z.createStyleSheet(n()),{classes:c}=s,g={},d="#F23030",p=({hyper:{wire:e}},t,l)=>(0,a.Z)(e)({title:"Contact",bgColor:d,watermark:(0,o.CN)(e,t),children:e(g,":contact")`
  <ul class=${c.ul}>
    <li class=${c.li}>
      <a
        class=${c.a}
        href="mailto:douglasduteil@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
          Gmail
      </a>
    </li>
    <li class=${c.li}>
      <a
        class=${c.a}
        href="https://google.com/+DouglasDuteil"
        rel="noreferrer"
        target="_blank"
      >
        Google +
      </a>
    </li>
    <li class=${c.li}>
      <a
        class=${c.a}
        href="https://twitter.com/douglasduteil"
        rel="noreferrer"
        target="_blank"
      >
        Twitter
      </a>
    </li>
    <li class=${c.li}>
      <a
        class=${c.a}
        href="https://www.facebook.com/douglas.duteil"
        rel="noreferrer"
        target="_blank"
      >
        Facebook
      </a>
    </li>
    <li class=${c.li}>
      <a
        class=${c.a}
        href="mailto:douglasduteil@outlook.com"
        rel="noreferrer"
        target="_blank"
      >
        Outlook
        </a>
    </li>
  </ul>
  <style>${{html:s.toString()}}</style>
  `})},672:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var a=l(44),i=l(832),o=l.n(i);const r=a.Z.createStyleSheet(o());r.addRules({section:{backgroundColor:e=>e.bgColor},title:{backgroundColor:e=>e.bgColor}});const{classes:n}=r,s={},c=e=>({title:t,children:l,bgColor:a,watermark:i})=>(r.update({bgColor:a}),e(s,":page-layout")`
    <div class=${n.watermark}>${i}</div>
    <h1 class=${n.title}>${t}</h1>
    <section class=${n.section}>${l}</section>
    <style>${{html:r.toString()}}</style>
  `)}}]);