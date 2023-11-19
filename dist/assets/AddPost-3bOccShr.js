import{r,u as j,j as e,d,c as i,a as m}from"./index-x6OXrHhe.js";const v=()=>{const[a,u]=r.useState(""),[l,x]=r.useState(""),[n,c]=r.useState("home"),o=j(),p=sessionStorage.getItem("adminKey");r.useEffect(()=>{p||o("/")},[]);const s=t=>{t.preventDefault(),t.target.value==="project"?c("project"):t.target.value==="study"?c("study"):c("home")},h=async t=>{if(t.preventDefault(),!(a===""&&l==="")){try{n==="home"?(await m(i(d,"home"),{title:a,content:l,createdAt:Date.now()}),o("/")):n==="project"?(await m(i(d,"project"),{title:a,content:l,createdAt:Date.now()}),o("/project")):(await m(i(d,"study"),{title:a,content:l,createdAt:Date.now()}),o("/study"))}catch(f){console.error(f)}u(""),x("")}};return e.jsx("div",{className:"bg-slate-50 rounded-xl w-[98vw] h-[87vh] flex-col mx-2 p-5 mt-2 max-tablet:w-[96vw] max-mobile:mr-2 max-mobile:w-[92vw]",children:e.jsxs("div",{className:"flex flex-col gap-2 items-center justify-center",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[n==="home"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{value:"project",onClick:t=>s(t),className:"bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"project"}),e.jsx("button",{value:"study",onClick:t=>s(t),className:"bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"study"})]}),n==="project"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{value:"project",onClick:t=>s(t),className:"bg-slate-800 text-slate-100 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"project"}),e.jsx("button",{value:"study",onClick:t=>s(t),className:"bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"study"})]}),n==="study"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{value:"project",onClick:t=>s(t),className:"bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"project"}),e.jsx("button",{value:"study",onClick:t=>s(t),className:"bg-slate-800 text-slate-100 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"study"})]})]}),e.jsx("input",{type:"text",id:"title",value:a,onChange:t=>u(t.target.value),placeholder:" title",className:"w-[80vw] h-[35px] border-2 rounded-md font-medium"}),e.jsxs("div",{className:"flex w-[80vw] h-[40px] gap-2 text-xl items-center px-1",children:[e.jsx("input",{id:"file",type:"file",accept:"image/*",className:"hidden"}),e.jsx("label",{htmlFor:"file",className:"bg-slate-200 w-[33px] h-[33px] rounded-xl text-center items-center cursor-pointer",children:"📷"}),e.jsx("span",{className:"bg-slate-200 w-[33px] h-[33px] rounded-xl text-center items-center",children:"🔗"})]}),e.jsx("textarea",{name:"content",id:"content",value:l,onChange:t=>x(t.target.value),placeholder:" content",className:"w-[80vw] h-[60vh] border-2 rounded-md font-medium"}),e.jsx("button",{onClick:h,className:"bg-slate-800 text-slate-50 font-semibold w-[95px] h-[35px] mt-2 rounded-lg",children:"post"})]})})};export{v as default};
