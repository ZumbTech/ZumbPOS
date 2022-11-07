import{i as w,bH as F,y as l,z as g,f as u,_ as o,o as s,a as r,b as t,bz as S,F as T,g as V,e as d,l as f,t as _,q as p,k as h,m as v,s as X}from"./bootstrap.5d9ac093.js";import{_ as N}from"./ns-numpad-plus.ce205eaf.js";const B={name:"ns-login",props:["showRecoveryLink"],data(){return{fields:[],xXsrfToken:null,validation:new w,isSubitting:!1}},mounted(){F({login:l.get("/api/nexopos/v4/fields/ns.login"),csrf:l.get("/sanctum/csrf-cookie")}).subscribe({next:i=>{this.fields=this.validation.createFields(i.login),this.xXsrfToken=l.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>g.doAction("ns-login-mounted",this),100)},error:i=>{u.error(i.message||o("An unexpected error occured."),o("OK"),{duration:0}).subscribe()}})},methods:{__:o,signIn(){if(!this.validation.validateFields(this.fields))return u.error(o("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),g.applyFilters("ns-login-submit",!0)&&(this.isSubitting=!0,l.post("/auth/sign-in",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:e=>{document.location=e.data.redirectTo},error:e=>{this.isSubitting=!1,this.validation.enableFields(this.fields),e.data&&this.validation.triggerFieldsErrors(this.fields,e.data),u.error(e.message||o("An unexpected error occured.")).subscribe()}}))}}},C={class:"ns-box rounded shadow overflow-hidden transition-all duration-100"},K={class:"ns-box-body"},R={class:"p-3 -my-2"},j={key:0,class:"flex items-center justify-center py-10"},z={key:1,class:"flex w-full items-center justify-center py-4"},E={href:"/password-lost",class:"hover:underline text-blue-600 text-sm"},I={class:"flex justify-between items-center border-t ns-box-footer p-3"};function L(i,e,y,A,a,n){const x=h("ns-field"),b=h("ns-spinner"),m=h("ns-button");return s(),r("div",C,[t("div",K,[t("div",R,[a.fields.length>0?(s(),r("div",{key:0,class:"py-2 fade-in-entrance anim-duration-300",onKeyup:e[0]||(e[0]=S(c=>n.signIn(),["enter"]))},[(s(!0),r(T,null,V(a.fields,(c,k)=>(s(),v(x,{key:k,field:c},null,8,["field"]))),128))],32)):d("",!0)]),a.fields.length===0?(s(),r("div",j,[f(b,{border:"4",size:"16"})])):d("",!0),y.showRecoveryLink?(s(),r("div",z,[t("a",E,_(n.__("Password Forgotten ?")),1)])):d("",!0)]),t("div",I,[t("div",null,[f(m,{onClick:e[1]||(e[1]=c=>n.signIn()),class:"justify-between",type:"info"},{default:p(()=>[a.isSubitting?(s(),v(b,{key:0,class:"mr-2",size:"6",border:"2"})):d("",!0),t("span",null,_(n.__("Sign In")),1)]),_:1})]),t("div",null,[f(m,{link:!0,href:"/sign-up",type:"success"},{default:p(()=>[X(_(n.__("Register")),1)]),_:1})])])])}var q=N(B,[["render",L]]);export{q as default};
