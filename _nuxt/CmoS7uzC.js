import"./Bh0M7C4a.js";import{d as p,r as o,b as _,c as f,e as a,g as v,n,M as l,aq as h,ar as g,a6 as y,l as V}from"./BbwJIGPy.js";import{r}from"./D-lcmzRs.js";const C={class:"summary"},w={class:"content"},k=p({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(s,{emit:c}){const i=s,u=c,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,B)=>{const m=y;return _(),f("div",{class:n(["callout",[s.type]])},[a("span",{class:"preview",onClick:d},[a("span",C,[r(t.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),h(a("div",w,[r(t.$slots,"content",{},void 0,!0)],512),[[g,l(e)]])],2)}}}),I=V(k,[["__scopeId","data-v-df574777"]]);export{I as default};
