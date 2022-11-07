import{i as h,y as m,f as p,o as i,a as t,m as a,e as o,b as r,F as g,g as v,l as _,q as y,k as n,s as w}from"./bootstrap.5d9ac093.js";import{n as k}from"./setup.e83bef00.js";import{_ as C}from"./ns-numpad-plus.ce205eaf.js";import"./preload-helper.15853ff5.js";import"./vue-router.3662e762.js";import"./components.aa8aebf9.js";import"./ns-alert-popup.cb6a2bd6.js";import"./ns-notice.610564cb.js";import"./ns-pos-confirm-popup.cef1fbda.js";import"./ns-pos-loading-popup.018d1aee.js";import"./ns-paginate.1937609d.js";import"./ns-prompt-popup.00c4fc54.js";const F={data:()=>({form:new h,fields:[],processing:!1,steps:[],failure:0,maxFailure:2}),methods:{validate(){},verifyDBConnectivity(){},saveConfiguration(e){return this.form.disableFields(this.fields),this.processing=!0,m.post("/api/nexopos/v4/setup/configuration",this.form.getValue(this.fields)).subscribe(s=>{document.location="/sign-in"},s=>{this.processing=!1,this.form.enableFields(this.fields),this.form.triggerFieldsErrors(this.fields,s.data),p.error(s.message,"OK").subscribe()})},checkDatabase(){m.get("/api/nexopos/v4/setup/database").subscribe(e=>{this.fields=this.form.createFields([{label:"Application",description:"That is the application name.",name:"ns_store_name",validation:"required"},{label:"Username",description:"Provide the administrator username.",name:"admin_username",validation:"required"},{label:"Email",description:"Provide the administrator email.",name:"admin_email",validation:"required"},{label:"Password",type:"password",description:"What should be the password required for authentication.",name:"password",validation:"required"},{label:"Confirm Password",type:"password",description:"Should be the same as the password above.",name:"confirm_password",validation:"required"}])},e=>{console.log(e),k.push("/database"),p.error("You need to define database settings","OKAY",{duration:3e3}).subscribe()})}},mounted(){this.checkDatabase()}},q={key:1,class:"bg-white rounded shadow my-2"},x={class:"welcome-box border-b border-gray-300 p-3 text-gray-700"},B={class:"bg-gray-200 p-3 flex justify-between items-center"};function V(e,s,N,P,$,u){const d=n("ns-spinner"),c=n("ns-field"),f=n("ns-button");return i(),t("div",null,[e.fields.length===0?(i(),a(d,{key:0,size:"12",border:"4",animation:"fast"})):o("",!0),e.fields.length>0?(i(),t("div",q,[r("div",x,[(i(!0),t(g,null,v(e.fields,(l,b)=>(i(),a(c,{key:b,field:l},null,8,["field"]))),128))]),r("div",B,[r("div",null,[e.processing?(i(),a(d,{key:0,size:"8",border:"4"})):o("",!0)]),_(f,{disabled:e.processing,onClick:s[0]||(s[0]=l=>u.saveConfiguration()),type:"info"},{default:y(()=>[w("Create Installation")]),_:1},8,["disabled"])])])):o("",!0)])}var L=C(F,[["render",V]]);export{L as default};
