import{_ as d,o as e,a as t,b as s,t as n,l as u,e as a,F as _,g as h,k as m}from"./bootstrap.5d9ac093.js";import{n as f,a as p}from"./currency.ec6652ed.js";import{_ as x}from"./ns-numpad-plus.ce205eaf.js";const b={mounted(){this.hasLoaded=!1,this.subscription=Dashboard.bestCustomers.subscribe(l=>{this.hasLoaded=!0,this.customers=l})},methods:{__:d,nsCurrency:f,nsRawCurrency:p},data(){return{customers:[],subscription:null,hasLoaded:!1}},destroyed(){this.subscription.unsubscribe()}},y={id:"ns-best-customers",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},v={class:"flex-auto"},g={class:"head text-center border-b w-full py-2"},w={class:"body"},C={key:0,class:"h-56 w-full flex items-center justify-center"},k={key:1,class:"h-56 flex items-center justify-center flex-col"},L=s("i",{class:"las la-grin-beam-sweat text-6xl"},null,-1),j={class:"text-sm"},B={key:2,class:"table w-full"},N={class:"p-2"},V={class:"-mx-1 flex justify-start items-center"},D=s("div",{class:"px-1"},[s("div",{class:"rounded-full"},[s("i",{class:"las la-user-circle text-xl"})])],-1),F={class:"px-1 justify-center"},z={class:"font-semibold items-center"},E={class:"flex justify-end amount p-2"};function R(l,S,W,q,o,r){const i=m("ns-spinner");return e(),t("div",y,[s("div",v,[s("div",g,[s("h5",null,n(r.__("Best Customers")),1)]),s("div",w,[o.hasLoaded?a("",!0):(e(),t("div",C,[u(i,{size:"12",border:"4"})])),o.hasLoaded&&o.customers.length===0?(e(),t("div",k,[L,s("p",j,n(r.__("Well.. nothing to show for the meantime")),1)])):a("",!0),o.customers.length>0?(e(),t("table",B,[s("thead",null,[(e(!0),t(_,null,h(o.customers,c=>(e(),t("tr",{key:c.id,class:"entry border-b text-sm"},[s("th",N,[s("div",V,[D,s("div",F,[s("h3",z,n(c.name),1)])])]),s("th",E,n(r.nsCurrency(c.purchases_amount)),1)]))),128))])])):a("",!0)])])])}var I=x(b,[["render",R]]);export{I as default};
