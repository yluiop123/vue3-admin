import{r as e,o as t,c as s,p as a,a as l,u as n,b as o,d as i,e as c,f as d,g as r,h as u,t as m,w as p,i as h,F as g,j as f,k as v,l as b,T as _,K as x,m as k,n as L,q as y,s as T,v as C,_ as w,x as I,R as E,y as P}from"./vendor.86893d3f.js";const j={};let O;j.render=function(a,l,n,o,i,c){const d=e("router-view");return t(),s(d)};const R={},$=function(e,t){if(!t)return e();if(void 0===O){const e=document.createElement("link").relList;O=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in R)return;R[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":O,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};var A="./assets/img.5e4b2cf4.jpg";const S={setup(){const e=localStorage.getItem("ms_username"),t=n(),s=o((()=>t.state.collapse)),a=()=>{t.commit("handleCollapse",!s.value)};i((()=>{document.body.clientWidth<1500&&a()}));const l=c();return{username:e,message:2,collapse:s,collapseChage:a,handleCommand:e=>{"loginout"==e?(localStorage.removeItem("ms_username"),l.push("/login")):"user"==e&&l.push("/user")}}}},D=p("data-v-4ed3109b");a("data-v-4ed3109b");const V={class:"header"},q={key:0,class:"el-icon-s-fold"},z={key:1,class:"el-icon-s-unfold"},F=d("div",{class:"logo"},"后台管理系统",-1),H={class:"header-right"},W={class:"header-user-con"},B={class:"btn-bell"},K=d("i",{class:"el-icon-bell"},null,-1),N={key:0,class:"btn-bell-badge"},U=d("div",{class:"user-avator"},[d("img",{src:A})],-1),G={class:"el-dropdown-link"},J=d("i",{class:"el-icon-caret-bottom"},null,-1),M={href:"https://github.com/yluiop123/vue3-admin",target:"_blank"},Q=u("github"),X=u("退出登录");l();const Y=D(((a,l,n,o,i,c)=>{const p=e("router-link"),h=e("el-tooltip"),g=e("el-dropdown-item"),f=e("el-dropdown-menu"),v=e("el-dropdown");return t(),s("div",V,[d("div",{class:"collapse-btn",onClick:l[1]||(l[1]=(...e)=>o.collapseChage&&o.collapseChage(...e))},[o.collapse?(t(),s("i",z)):(t(),s("i",q))]),F,d("div",H,[d("div",W,[d("div",B,[d(h,{effect:"dark",content:o.message?`有${o.message}条未读消息`:"消息中心",placement:"bottom"},{default:D((()=>[d(p,{to:"/tabs"},{default:D((()=>[K])),_:1})])),_:1},8,["content"]),o.message?(t(),s("span",N)):r("",!0)]),U,d(v,{class:"user-name",trigger:"click",onCommand:o.handleCommand},{dropdown:D((()=>[d(f,null,{default:D((()=>[d("a",M,[d(g,null,{default:D((()=>[Q])),_:1})]),d(g,{divided:"",command:"loginout"},{default:D((()=>[X])),_:1})])),_:1})])),default:D((()=>[d("span",G,[u(m(o.username)+" ",1),J])])),_:1},8,["onCommand"])])])])}));S.render=Y,S.__scopeId="data-v-4ed3109b";const Z={setup(){const e=h(),t=o((()=>e.path)),s=n();return{items:[{icon:"el-icon-lx-home",index:"/fullscreen",title:"大屏展示"},{icon:"el-icon-lx-home",index:"/cesium",title:"Cesium"},{icon:"el-icon-lx-cascades",index:"/table",title:"基础表格"},{icon:"el-icon-lx-calendar",index:"3",title:"表单相关",subs:[{index:"/form",title:"基本表单"},{index:"/upload",title:"文件上传"},{index:"4",title:"三级菜单",subs:[{index:"/editor",title:"富文本编辑器"}]}]}],onRoutes:t,collapse:o((()=>s.state.collapse))}}},ee=p("data-v-5f5dce20");a("data-v-5f5dce20");const te={class:"sidebar"};l();const se=ee(((a,l,n,o,i,c)=>{const r=e("el-menu-item"),p=e("el-submenu"),h=e("el-menu");return t(),s("div",te,[d(h,{class:"sidebar-el-menu","default-active":o.onRoutes,collapse:o.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""},{default:ee((()=>[(t(!0),s(g,null,f(o.items,(e=>(t(),s(g,null,[e.subs?(t(),s(p,{index:e.index,key:e.index},{title:ee((()=>[d("i",{class:e.icon},null,2),d("span",null,m(e.title),1)])),default:ee((()=>[(t(!0),s(g,null,f(e.subs,(e=>(t(),s(g,null,[e.subs?(t(),s(p,{index:e.index,key:e.index},{title:ee((()=>[u(m(e.title),1)])),default:ee((()=>[(t(!0),s(g,null,f(e.subs,((e,a)=>(t(),s(r,{key:a,index:e.index},{default:ee((()=>[u(m(e.title),1)])),_:2},1032,["index"])))),128))])),_:2},1032,["index"])):(t(),s(r,{index:e.index,key:e.index},{default:ee((()=>[u(m(e.title),1)])),_:2},1032,["index"]))],64)))),256))])),_:2},1032,["index"])):(t(),s(r,{index:e.index,key:e.index},{title:ee((()=>[u(m(e.title),1)])),default:ee((()=>[d("i",{class:e.icon},null,2)])),_:2},1032,["index"]))],64)))),256))])),_:1},8,["default-active","collapse"])])}));Z.render=se,Z.__scopeId="data-v-5f5dce20";const ae={setup(){const e=h(),t=c(),s=n(),a=o((()=>s.state.tagsList)),l=o((()=>a.value.length>0)),i=e=>{a.value.some((t=>t.path===e.fullPath))||(a.value.length>=8&&s.commit("delTagsItem",{index:0}),s.commit("setTagsItem",{name:e.name,title:e.meta.title,path:e.fullPath}))};i(e),v((e=>{i(e)}));return{isActive:t=>t===e.fullPath,tagsList:a,showTags:l,closeTags:l=>{const n=a.value[l];s.commit("delTagsItem",{index:l});const o=a.value[l]?a.value[l]:a.value[l-1];o?n.path===e.fullPath&&t.push(o.path):t.push("/")},handleTags:l=>{"other"===l?(()=>{const t=a.value.filter((t=>t.path===e.fullPath));s.commit("closeTagsOther",t)})():(s.commit("clearTags"),t.push("/"))}}}},le={key:0,class:"tags"},ne=d("i",{class:"el-icon-close"},null,-1),oe={class:"tags-close-box"},ie=u(" 标签选项 "),ce=d("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),de=u("关闭其他"),re=u("关闭所有");ae.render=function(a,l,n,o,i,c){const p=e("router-link"),h=e("el-button"),v=e("el-dropdown-item"),_=e("el-dropdown-menu"),x=e("el-dropdown");return o.showTags?(t(),s("div",le,[d("ul",null,[(t(!0),s(g,null,f(o.tagsList,((e,a)=>(t(),s("li",{class:["tags-li",{active:o.isActive(e.path)}],key:a},[d(p,{to:e.path,class:"tags-li-title"},{default:b((()=>[u(m(e.title),1)])),_:2},1032,["to"]),d("span",{class:"tags-li-icon",onClick:e=>o.closeTags(a)},[ne],8,["onClick"])],2)))),128))]),d("div",oe,[d(x,{onCommand:o.handleTags},{dropdown:b((()=>[d(_,{size:"small"},{default:b((()=>[d(v,{command:"other"},{default:b((()=>[de])),_:1}),d(v,{command:"all"},{default:b((()=>[re])),_:1})])),_:1})])),default:b((()=>[d(h,{size:"mini",type:"primary"},{default:b((()=>[ie,ce])),_:1})])),_:1},8,["onCommand"])])])):r("",!0)};const ue={components:{vHeader:S,vSidebar:Z,vTags:ae},setup(){const e=n();return{tagsList:o((()=>e.state.tagsList.map((e=>e.name)))),collapse:o((()=>e.state.collapse))}}},me={class:"about"},pe={class:"content"};ue.render=function(a,l,n,o,i,c){const r=e("v-header"),u=e("v-sidebar"),m=e("v-tags"),p=e("router-view");return t(),s("div",me,[d(r),d(u),d("div",{class:["content-box",{"content-collapse":o.collapse}]},[d(m),d("div",pe,[d(p,null,{default:b((({Component:e})=>[d(_,{name:"move",mode:"out-in"},{default:b((()=>[(t(),s(x,{include:o.tagsList},[(t(),s(k(e)))],1032,["include"]))])),_:2},1024)])),_:1})])],2)])};const he=[{path:"/",redirect:"/fullscreen"},{path:"/",name:"Home",component:ue,children:[{path:"/fullscreen",name:"fullscreen",meta:{title:"大屏展示"},component:()=>$((()=>import("./FullScreen.95fb49a8.js")),["./assets/FullScreen.95fb49a8.js","./assets/FullScreen.dc6a7226.css","./assets/request.67c09908.js","./assets/vendor.86893d3f.js"])},{path:"/cesium",name:"cesium",meta:{title:"Cesium"},component:()=>$((()=>import("./Cesium.0affc78c.js")),["./assets/Cesium.0affc78c.js","./assets/Cesium.8bc841e7.css","./assets/request.67c09908.js","./assets/vendor.86893d3f.js"])},{path:"/table",name:"basetable",meta:{title:"表格"},component:()=>$((()=>import("./BaseTable.0e1fc2ed.js")),["./assets/BaseTable.0e1fc2ed.js","./assets/BaseTable.53fb0b77.css","./assets/vendor.86893d3f.js","./assets/request.67c09908.js"])},{path:"/user",name:"user",meta:{title:"个人中心"},component:()=>$((()=>import("./User.e62d9d14.js")),["./assets/User.e62d9d14.js","./assets/User.b024fb83.css","./assets/vendor.86893d3f.js"])}]},{path:"/login",name:"Login",meta:{title:"登录"},component:()=>$((()=>import("./Login.433c5407.js")),["./assets/Login.433c5407.js","./assets/Login.3ae49891.css","./assets/vendor.86893d3f.js"])}],ge=L({history:y(),routes:he});ge.beforeEach(((e,t,s)=>{document.title=`${e.meta.title} | vue3-admin`;const a=localStorage.getItem("ms_username");a||"/login"===e.path?e.meta.permission?"admin"===a?s():s("/403"):s():s("/login")}));var fe=T({state:{tagsList:[],collapse:!1},mutations:{delTagsItem(e,t){e.tagsList.splice(t.index,1)},setTagsItem(e,t){e.tagsList.push(t)},clearTags(e){e.tagsList=[]},closeTagsOther(e,t){e.tagsList=t},closeCurrentTag(e,t){for(let s=0,a=e.tagsList.length;s<a;s++){if(e.tagsList[s].path===t.$route.fullPath){s<a-1?t.$router.push(e.tagsList[s+1].path):s>0?t.$router.push(e.tagsList[s-1].path):t.$router.push("/"),e.tagsList.splice(s,1);break}}},handleCollapse(e,t){e.collapse=t}},actions:{},modules:{}});const ve=C({locale:w.name,fallbackLocale:I.name,messages:{"zh-cn":{i18n:{breadcrumb:"国际化产品",tips:"通过切换语言按钮，来改变当前内容的语言。",btn:"切换英文",title1:"常用用法",p1:"要是你把你的秘密告诉了风，那就别怪风把它带给树。",p2:"没有什么比信念更能支撑我们度过艰难的时光了。",p3:"只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。"}},en:{i18n:{breadcrumb:"International Products",tips:"Click on the button to change the current language. ",btn:"Switch Chinese",title1:"Common usage",p1:"If you reveal your secrets to the wind you should not blame the wind for  revealing them to the trees.",p2:"Nothing can help us endure dark times better than our faith. ",p3:"If you can do what you do best and be happy, you're further along in life  than most people."}}}});const be=P(j);var _e;(_e=be).use(E,{locale:w}),_e.use(ve),be.use(fe).use(ge).mount("#app");export{A as a};
