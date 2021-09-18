(self.webpackChunkdouglasduteil_github_com=self.webpackChunkdouglasduteil_github_com||[]).push([[752],{168:e=>{e.exports={"@global":{section:{"@media (max-width: 767px)":{marginBottom:"50px - 20px"},"@media (min-width: 768px)":{paddingRight:"15px * 2",justifyContent:"center"}}},ul:{padding:"0",listStyle:"none",position:"relative",display:"table",width:"100%",zIndex:"0",color:"black",margin:"0 auto 30px","&:after":{content:"''",display:"block",position:"absolute",zIndex:"-1",left:"33px",top:"0",bottom:"-30px",width:"10px",marginLeft:"-5px",backgroundColor:"rgba(0, 0, 0, 0.3)"}},"event-list":{listStyle:"none",padding:"0",margin:"0"},event:{position:"relative","@media (min-width: 992px)":{margin:"auto",width:"768px"}},icon:{width:"40px",height:"40px",speak:"none",position:"absolute",color:"#fff",borderRadius:"50%",backgroundColor:"#4f8c86",padding:"4px",boxShadow:"0 0 0 4px #fff",left:"34px",top:"-4px",margin:"0 0 0 -25px",display:"flex",alignItems:"center",justifyContent:"center","@global svg":{width:"24px",height:"24px"},"@media (max-width: 767px)":{fontSize:"1.4em"}},body:{position:"relative",margin:"5px 0 30px 93px",backgroundColor:"white",padding:"1rem 2rem","@global a":{color:"#333"},"> h3":{margin:"0 0 5px"},"&:after":{content:"' '",right:"100%",height:"0",width:"0",position:"absolute",border:"solid transparent",pointerEvents:"none",borderRightColor:"#fff",borderWidth:"20px",top:"0"}},year:{display:"block",margin:"113.33333px 0 1em",paddingLeft:"48px",fontSize:"50px",fontWeight:"bold",color:"rgba(0, 0, 0, 0.6)"}}},832:e=>{e.exports={"@global":{"@media (min-width: 768px)":{main:{paddingLeft:"70px"}}},title:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",transform:"translateZ(0)",willChange:"transform",textAlign:"center",margin:"0",padding:"1rem 0","@media (min-width: 768px)":{left:"70px"}},section:{flex:"1",display:"flex",padding:"20px",marginBottom:"50px","@media (min-width: 768px)":{marginBottom:"0",paddingBottom:"0"}},watermark:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:"0",opacity:"0.1",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",pointerEvents:"none","@global svg":{width:"170px",height:"170px"}}}},752:(e,t,i)=>{"use strict";i.r(t),i.d(t,{backgoundColor:()=>h,default:()=>c});var a=i(141),o=i(672),n=i(311),l=i(168),r=i.n(l);const s=JSON.parse('[["2018",[{"type":"job","body":"Digital Services Incubator of the French government","title":"Join the Fabrique numérique des Ministères Sociaux as Lead Dev","link":{"href":"https://github.com/SocialGouv","name":"@SocialGouv"}},{"type":"job","body":"Software development company","title":"Leave SFEIR Paris"},{"type":"talk","where":"Talk at the Bouffe Front","title":"How to build a cow ?","link":{"href":"https://twitter.com/olegskl/status/1045011688557355009","name":"Bouffe Front @SFEIR"}}]],["2015",[{"type":"job","body":"https://github.com/onedoes","title":"Co-founded OneDoes"}]],["2014",[{"type":"talk","where":"Talk at the ngParis meetup","title":"Waaa Again !?","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/192808622/","name":"Meetup AngularJS #13 @SFEIR"}},{"type":"talk","where":"Talk at the ngParis meetup","title":"Input[Range] over 9000","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/185603592/","name":"Meetup AngularJS #12 @BeMyAppFr"}},{"type":"talk","where":"Talk at the ngParis meetup","title":"We need to make UI.Utils util again !","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/165733502/","name":"Meetup AngularJS #8 @SFEIR"}}]],["2013",[{"type":"talk","where":"Talk at the ngParis meetup","title":"WaaaAnimation","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/147070122/","name":"Meetup #5 @Deezer"}},{"type":"job","body":"Software development company","title":"Join SFEIR Paris"},{"type":"study","body":"MSc Human-Compute","title":"Graduated from Paris 8"},{"type":"github","body":"A open source organisation that buld widgets and directives for AngularJS","title":"Join Angular UI"}]]]'),p=a.Z.createStyleSheet(r()),{classes:d}=p,m={},h="#4F8C86",c=({hyper:{wire:e}},t,i)=>{return(0,o.Z)(e)({title:"Achievements",bgColor:h,watermark:(0,n.CW)(e,m),children:e(m,":achivement")`
    <article>${(a=e,e=>a()`
    <ul class=${d.ul}>
    ${e.map((([e,t])=>a()`
        <li>
          ${function(e){return t=>e()`<time class=${d.year} datetime="${new Date(t)}">${t}</time>`}(a)(e)}

          <ul class=${d["event-list"]}>
          ${t.map((e=>a()`
              <li class=${d.event}>${g[e.type](a)(e)}</li>
            `))}
          </ul>
        </li>
      `))}
    </ul>`)(s)}</article>

    <style>${{html:p.toString()}}</style>
  `});var a},g={job:e=>t=>e()`
    <i class=${d.icon}>${(0,n.zD)(e,t)}</i>
    <div class=${d.body}>

      <h3>${t.title}</h3>
      <p>${t.body}</p>
    </div>
    `,study:e=>t=>e()`
    <i class=${d.icon}>${(0,n.pI)(e,t)}</i>
    <div class=${d.body}>

      <h3>${t.title}</h3>
      <p>${t.body}</p>
    </div>
    `,github:e=>t=>e()`
    <i class=${d.icon}>${(0,n.fZ)(e,t)}</i>
    <div class=${d.body}>

      <h3>${t.title}</h3>
      <p>${t.body}</p>
    </div>
    `,talk:e=>t=>e()`
    <i class=${d.icon}>${(0,n.jn)(e,t)}</i>
    <div class=${d.body}>
      <h3>${t.where}</h3>
      <p><em>"${t.title}"</em></p>
      <p>
        <a
          href="${t.link.href}"
          rel="noreferrer"
          target="_blank"
        >
          ${t.link.name}
        </a>
      </p>
    </div>
      `}},672:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var a=i(141),o=i(832),n=i.n(o);const l=a.Z.createStyleSheet(n());l.addRules({section:{backgroundColor:e=>e.bgColor},title:{backgroundColor:e=>e.bgColor}});const{classes:r}=l,s={},p=e=>({title:t,children:i,bgColor:a,watermark:o})=>(l.update({bgColor:a}),e(s,":page-layout")`
    <div class=${r.watermark}>${o}</div>
    <h1 class=${r.title}>${t}</h1>
    <section class=${r.section}>${i}</section>
    <style>${{html:l.toString()}}</style>
  `)}}]);