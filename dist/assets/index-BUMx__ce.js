import{r as a,u as b,a as p,j as e,L as l,A as f}from"./index-CHljlE-R.js";const y=()=>{const[n,c]=a.useState(""),[o,d]=a.useState(""),[r,u]=a.useState(""),m=b(),{login:g}=p(),x=async s=>{s.preventDefault();try{const t=await fetch(`${f}/users/sign_in`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})});if(!t.ok){const h=await t.json();throw new Error(h.message||"Sign-in failed. Enter correct credentials.")}const i=await t.json();localStorage.setItem("authToken",i.auth_token),localStorage.setItem("userData",JSON.stringify(i.user)),g(),m("/home")}catch(t){u(t.message),console.error("Sign-in failed:",t)}};return e.jsxs("form",{onSubmit:x,children:[r&&e.jsx("div",{className:"text-red-500 mb-4",children:r}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Email:"}),e.jsx("input",{type:"email",name:"email",id:"email",value:n,onChange:s=>c(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Password:"}),e.jsx("input",{type:"password",name:"password",id:"password",value:o,onChange:s=>d(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsx("button",{type:"submit",className:"w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4",children:"Sign In"}),e.jsxs("p",{className:"mt-2 text-center",children:["Don't have an account? ",e.jsx(l,{to:"/signup",className:"text-blue-500",children:"Sign up here"})]}),e.jsxs("p",{className:"mt-2 text-center",children:["Stay Signed out ",e.jsx(l,{to:"/home",className:"text-blue-500",children:"Home"})]})]})},w=()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md",children:[e.jsx("h1",{className:"text-3xl font-bold text-center text-gray-800 mb-8",children:"Sign in"}),e.jsx(y,{})]})});export{w as default};
