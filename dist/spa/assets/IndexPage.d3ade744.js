import{c as l,h as p}from"./render.40afce79.js";import{f as c,c as i,h as d,j as f,B as g,g as h,_ as y,E as m,o as x,F as v,J as _}from"./index.3519422f.js";var $=l({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:a}}=h(),e=c(f);c(g,()=>{console.error("QPage needs to be child of QPageContainer")});const s=i(()=>{const t=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:a.screen.height;return n.styleFn(t,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-t+"px":a.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":a.screen.height-t+"px"}}),r=i(()=>`q-page ${n.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:r.value,style:s.value},p(o.default))}});const C=m({name:"IndexPage",setup(){x(async()=>{})}});function P(n,o,a,e,s,r){return v(),_($,{class:"flex flex-center"})}var Q=y(C,[["render",P]]);export{Q as default};
