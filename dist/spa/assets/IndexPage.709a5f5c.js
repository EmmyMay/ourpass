import{c as u,h}from"./render.9bd378b7.js";import{f as c,c as i,h as p,j as d,B as f,g,_ as m,E as y,o as x,F as _,J as v,I as C,O as $}from"./index.a7861aea.js";var P=u({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:s}){const{proxy:{$q:a}}=g(),e=c(d);c(f,()=>{console.error("QPage needs to be child of QPageContainer")});const o=i(()=>{const t=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:a.screen.height;return n.styleFn(t,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-t+"px":a.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":a.screen.height-t+"px"}}),r=i(()=>`q-page ${n.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:r.value,style:o.value},h(s.default))}});const k=y({name:"IndexPage",setup(){x(async()=>{})}}),B=$("h1",null,"Emmy Leke's Takehome Assignment. Please click the invoice icon",-1);function F(n,s,a,e,o,r){return _(),v(P,{class:"flex flex-center"},{default:C(()=>[B]),_:1})}var q=m(k,[["render",F]]);export{q as default};
