import{e,z as a,A as s,u as r,p as l,a as o,B as m,r as t,o as u,c as n,f as d,E as p,w as i,h as c}from"./vendor.86893d3f.js";const f={setup(){const l=e(),o=a({username:"admin",password:"123123"}),t=s(null);return r().commit("clearTags"),{param:o,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},login:t,submitForm:()=>{t.value.validate((e=>{if(!e)return m.error("登录成功"),!1;m.success("登录成功"),localStorage.setItem("ms_username",o.username),l.push("/")}))}}}},g=i();l("data-v-cb965bf4");const b={class:"login-wrap"},w={class:"ms-login"},v=d("div",{class:"ms-title"},"后台管理系统",-1),_={class:"login-btn"},V=c("登录"),h=d("p",{class:"login-tips"},"Tips : 用户名和密码随便填。",-1);o();const y=g(((e,a,s,r,l,o)=>{const m=t("el-button"),i=t("el-input"),c=t("el-form-item"),f=t("el-form");return u(),n("div",b,[d("div",w,[v,d(f,{model:r.param,rules:r.rules,ref:"login","label-width":"0px",class:"ms-content"},{default:g((()=>[d(c,{prop:"username"},{default:g((()=>[d(i,{modelValue:r.param.username,"onUpdate:modelValue":a[1]||(a[1]=e=>r.param.username=e),placeholder:"username"},{prepend:g((()=>[d(m,{icon:"el-icon-user"})])),_:1},8,["modelValue"])])),_:1}),d(c,{prop:"password"},{default:g((()=>[d(i,{type:"password",placeholder:"password",modelValue:r.param.password,"onUpdate:modelValue":a[2]||(a[2]=e=>r.param.password=e),onKeyup:a[3]||(a[3]=p((e=>r.submitForm()),["enter"]))},{prepend:g((()=>[d(m,{icon:"el-icon-lock"})])),_:1},8,["modelValue"])])),_:1}),d("div",_,[d(m,{type:"primary",onClick:a[4]||(a[4]=e=>r.submitForm())},{default:g((()=>[V])),_:1})]),h])),_:1},8,["model","rules"])])])}));f.render=y,f.__scopeId="data-v-cb965bf4";export default f;
