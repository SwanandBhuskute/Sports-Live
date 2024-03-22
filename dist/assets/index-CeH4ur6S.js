import{r as a,u as p,j as e,L as u}from"./index-CWAKtwDc.js";import{A as f}from"./constants-C9Jc7q6O.js";const y=()=>{const[r,d]=a.useState(""),[o,c]=a.useState(""),[n,m]=a.useState(""),[l,x]=a.useState(""),g=p(),h=async s=>{s.preventDefault();try{const t=await fetch(`${f}/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:o,password:n})});if(!t.ok){const b=await t.json();throw new Error(b.message||"Sign-up failed. Enter proper credentials.")}const i=await t.json();localStorage.setItem("authToken",i.auth_token),localStorage.setItem("userData",JSON.stringify(i.user)),g("/home")}catch(t){x(t.message),console.error("Sign-up failed:",t)}};return e.jsxs("form",{onSubmit:h,children:[l&&e.jsx("div",{className:"text-red-500 mb-4",children:l}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Your Name:"}),e.jsx("input",{type:"text",name:"userName",id:"userName",value:r,onChange:s=>d(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Email:"}),e.jsx("input",{type:"email",name:"userEmail",id:"userEmail",value:o,onChange:s=>c(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Password:"}),e.jsx("input",{type:"password",name:"userPassword",id:"userPassword",value:n,onChange:s=>m(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsx("button",{type:"submit",className:"w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4",children:"Sign up"}),e.jsxs("p",{className:"mt-2 text-center",children:["Already have an account? ",e.jsx(u,{to:"/signin",className:"text-blue-500",children:"Sign in here"})]}),e.jsxs("p",{className:"mt-2 text-center",children:["Stay Signed out ",e.jsx(u,{to:"/home",className:"text-blue-500",children:"Home"})]})]})},N=()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md",children:[e.jsx("h1",{className:"text-3xl font-bold text-center text-gray-800 mb-8",children:"Sign up"}),e.jsx(y,{})]})});export{N as default};
