import{c as u,h as v,g as K,U as ve,V as z,p as ge,x as me,u as ee,v as he,t as te,r as Q,d as be,W as ye,z as pe,y as w,l as ke}from"./index.a7861aea.js";import{c as V,h as xe,e as j,b as $e}from"./render.9bd378b7.js";const N={xs:18,sm:24,md:32,lg:38,xl:46},ne={size:String};function ae(e,n=N){return u(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const F="0 0 24 24",H=e=>e,M=e=>`ionicons ${e}`,re={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":M,"ion-ios":M,"ion-logo":M,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ie={o_:"-outlined",r_:"-round",s_:"-sharp"},le={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(re).join("|")+")"),Ee=new RegExp("^("+Object.keys(ie).join("|")+")"),U=new RegExp("^("+Object.keys(le).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,we=/^svguse:/,Le=/^ion-/,_e=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var W=V({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=K(),l=ae(e),g=u(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=u(()=>{let s,a=e.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const d=t.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(Se.test(a)===!0){const[d,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(p=>{const[r,k,b]=p.split("@@");return v("path",{style:k,d:r,transform:b})})}}if(Re.test(a)===!0)return{img:!0,src:a.substring(4)};if(we.test(a)===!0){const[d,y=F]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let h=" ";const q=a.match(qe);if(q!==null)s=re[q[1]](a);else if(_e.test(a)===!0)s=a;else if(Le.test(a)===!0)s=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(U.test(a)===!0){s="notranslate material-symbols";const d=a.match(U);d!==null&&(a=a.substring(6),s+=le[d[1]]),h=a}else{s="notranslate material-icons";const d=a.match(Ee);d!==null&&(a=a.substring(2),s+=ie[d[1]]),h=a}return{cls:s,content:h}});return()=>{const s={class:g.value,style:l.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?v(e.tag,s,xe(n.default)):o.value.img===!0?v("span",s,j(n.default,[v("img",{src:o.value.src})])):o.value.svg===!0?v("span",s,j(n.default,[v("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?v("span",s,j(n.default,[v("svg",{viewBox:o.value.viewBox},[v("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),v(e.tag,s,j(n.default,[o.value.content])))}}});const Be={size:{type:[Number,String],default:"1em"},color:String};function Ce(e){return{cSize:u(()=>e.size in N?`${N[e.size]}px`:e.size),classes:u(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Pe=V({name:"QSpinner",props:{...Be,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:t}=Ce(e);return()=>v("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Te(e,n){const t=e.style;for(const l in n)t[l]=n[l]}function Je(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=ve(e)===!0?e.value:e;if(n)return n.$el||n}function Ze(e,n){if(e==null||e.contains(n)===!0)return!0;for(let t=e.nextElementSibling;t!==null;t=t.nextElementSibling)if(t.contains(n))return!0;return!1}function je(e,n=250){let t=!1,l;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),l=e.apply(this,arguments)),l}}function D(e,n,t,l){t.modifiers.stop===!0&&ee(e);const g=t.modifiers.color;let o=t.modifiers.center;o=o===!0||l===!0;const s=document.createElement("span"),a=document.createElement("span"),h=he(e),{left:q,top:d,width:y,height:p}=n.getBoundingClientRect(),r=Math.sqrt(y*y+p*p),k=r/2,b=`${(y-r)/2}px`,c=o?b:`${h.left-q-k}px`,f=`${(p-r)/2}px`,x=o?f:`${h.top-d-k}px`;a.className="q-ripple__inner",Te(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${g?" text-"+g:""}`,s.setAttribute("dir","ltr"),s.appendChild(a),n.appendChild(s);const R=()=>{s.remove(),clearTimeout(E)};t.abort.push(R);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${b},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{s.remove(),t.abort.splice(t.abort.indexOf(R),1)},275)},250)},50)}function X(e,{modifiers:n,value:t,arg:l}){const g=Object.assign({},e.cfg.ripple,n,t);e.modifiers={early:g.early===!0,stop:g.stop===!0,center:g.center===!0,color:g.color||l,keyCodes:[].concat(g.keyCodes||13)}}var Ae=$e({name:"ripple",beforeMount(e,n){const t={cfg:n.instance.$.appContext.config.globalProperties.$q.config,enabled:n.value!==!1,modifiers:{},abort:[],start(l){t.enabled===!0&&l.qSkipRipple!==!0&&l.type===(t.modifiers.early===!0?"pointerdown":"click")&&D(l,e,t,l.qKeyEvent===!0)},keystart:je(l=>{t.enabled===!0&&l.qSkipRipple!==!0&&z(l,t.modifiers.keyCodes)===!0&&l.type===`key${t.modifiers.early===!0?"down":"up"}`&&D(l,e,t,!0)},300)};X(t,n),e.__qripple=t,ge(t,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&X(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),me(n,"main"),delete e._qripple}});const ue={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Oe=Object.keys(ue),Me={align:{type:String,validator:e=>Oe.includes(e)}};function ze(e){return u(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ue[n]}`})}function et(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function se(e,n){typeof n.type=="symbol"?Array.isArray(n.children)===!0&&n.children.forEach(t=>{se(e,t)}):e.add(n)}function tt(e){const n=new Set;return e.forEach(t=>{se(n,t)}),Array.from(n)}function Ne(e){return e.appContext.config.globalProperties.$router!==void 0}function Y(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ke(e,n){for(const t in n){const l=n[t],g=e[t];if(typeof l=="string"){if(l!==g)return!1}else if(Array.isArray(g)===!1||g.length!==l.length||l.some((o,s)=>o!==g[s]))return!1}return!0}function J(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,l)=>t===n[l]):e.length===1&&e[0]===n}function Ve(e,n){return Array.isArray(e)===!0?J(e,n):Array.isArray(n)===!0?J(n,e):e===n}function Ie(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ve(e[t],n[t])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Fe(e){const n=K(),{props:t,proxy:l}=n,g=Ne(n),o=u(()=>t.disable!==!0&&t.href!==void 0),s=u(()=>g===!0&&t.disable!==!0&&o.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),a=u(()=>{if(s.value===!0)try{return l.$router.resolve(t.to)}catch{}return null}),h=u(()=>a.value!==null),q=u(()=>o.value===!0||h.value===!0),d=u(()=>t.type==="a"||q.value===!0?"a":t.tag||e||"div"),y=u(()=>o.value===!0?{href:t.href,target:t.target}:h.value===!0?{href:a.value.href,target:t.target}:{}),p=u(()=>{if(h.value===!1)return null;const{matched:f}=a.value,{length:x}=f,R=f[x-1];if(R===void 0)return-1;const E=l.$route.matched;if(E.length===0)return-1;const C=E.findIndex(G.bind(null,R));if(C>-1)return C;const A=Y(f[x-2]);return x>1&&Y(R)===A&&E[E.length-1].path!==A?E.findIndex(G.bind(null,f[x-2])):C}),r=u(()=>h.value===!0&&p.value>-1&&Ke(l.$route.params,a.value.params)),k=u(()=>r.value===!0&&p.value===l.$route.matched.length-1&&Ie(l.$route.params,a.value.params)),b=u(()=>h.value===!0?k.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function c(f){return t.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||t.target==="_blank"?!1:(te(f),l.$router[t.replace===!0?"replace":"push"](t.to).catch(x=>x))}return{hasRouterLink:h,hasHrefLink:o,hasLink:q,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:k,linkClass:b,linkProps:y,navigateToRouterLink:c}}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},He={xs:8,sm:10,md:14,lg:20,xl:24},Ue=["button","submit","reset"],We=/[^\s]\/[^\s]/,De={...ne,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Xe(e){const n=ae(e,He),t=ze(e),{hasRouterLink:l,hasLink:g,linkTag:o,linkProps:s,navigateToRouterLink:a}=Fe("button"),h=u(()=>{const c=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(f=>f in Z?Z[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):c}),q=u(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=u(()=>e.disable!==!0&&e.loading!==!0),y=u(()=>d.value===!0?e.tabindex||0:-1),p=u(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=u(()=>{const c={tabindex:y.value};return g.value===!0?Object.assign(c,s.value):Ue.includes(e.type)===!0&&(c.type=e.type),o.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),l.value!==!0&&We.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),k=u(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${p.value} q-btn--${e.round===!0?"round":`rectangle${q.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),b=u(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:h,innerClasses:b,attributes:r,hasRouterLink:l,hasLink:g,linkTag:o,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:$}=ke;let L=null,_=null,B=null;var nt=V({name:"QBtn",props:{...De,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:l}=K(),{classes:g,style:o,innerClasses:s,attributes:a,hasRouterLink:h,hasLink:q,linkTag:d,navigateToRouterLink:y,isActionable:p}=Xe(e),r=Q(null),k=Q(null);let b=null,c,f;const x=u(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=u(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),E=u(()=>({center:e.round})),C=u(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),A=u(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:I,onKeydown:ce,onMousedown:fe,onTouchstart:de}:{onClick:w}),oe=u(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+g.value,style:o.value,...a.value,...A.value}));function I(i){if(r.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const O=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",O,$),r.value!==null&&r.value.removeEventListener("blur",O,$)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",O,$),r.value.addEventListener("blur",O,$)}}if(h.value===!0){const m=()=>{i.__qNavigate=!0,y(i)};t("click",i,m),i.defaultPrevented!==!0&&m()}else t("click",i)}}function ce(i){r.value!==null&&(t("keydown",i),z(i,[13,32])===!0&&_!==r.value&&(_!==null&&P(),i.defaultPrevented!==!0&&(r.value.focus(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),r.value.addEventListener("blur",S,$)),w(i)))}function de(i){r.value!==null&&(t("touchstart",i),i.defaultPrevented!==!0&&(L!==r.value&&(L!==null&&P(),L=r.value,b=i.target,b.addEventListener("touchcancel",S,$),b.addEventListener("touchend",S,$)),c=!0,clearTimeout(f),f=setTimeout(()=>{c=!1},200)))}function fe(i){r.value!==null&&(i.qSkipRipple=c===!0,t("mousedown",i),i.defaultPrevented!==!0&&B!==r.value&&(B!==null&&P(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,$)))}function S(i){if(r.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===r.value)){if(i!==void 0&&i.type==="keyup"){if(_===r.value&&z(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&te(m),i.cancelBubble===!0&&ee(m),r.value.dispatchEvent(m),w(i),i.qKeyEvent=!0}t("keyup",i)}P()}}function P(i){const m=k.value;i!==!0&&(L===r.value||B===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),L===r.value&&(b!==null&&(b.removeEventListener("touchcancel",S,$),b.removeEventListener("touchend",S,$)),L=b=null),B===r.value&&(document.removeEventListener("mouseup",S,$),B=null),_===r.value&&(document.removeEventListener("keyup",S,!0),r.value!==null&&r.value.removeEventListener("blur",S,$),_=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(i){w(i),i.qSkipRipple=!0}return be(()=>{P(!0)}),Object.assign(l,{click:I}),()=>{let i=[];e.icon!==void 0&&i.push(v(W,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=j(n.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(W,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},i)),e.loading!==null&&m.push(v(ye,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[v(Pe)])]:null)),pe(v(d.value,oe.value,m),[[Ae,R.value,void 0,E.value]])}}});export{W as Q,Ae as R,nt as a,ae as b,Te as c,Qe as d,Fe as e,Me as f,Je as g,ze as h,tt as i,Pe as j,et as k,Ze as l,ne as u,Ne as v};
