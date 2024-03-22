import{r,j as e,b as N}from"./index-CWAKtwDc.js";import{A as b}from"./constants-C9Jc7q6O.js";import{a as v,N as S}from"./NavBar-BCewT0HR.js";import A from"./TeamandSportList-DRVrKFTZ.js";const C=()=>{const[c,g]=r.useState([]),[t,d]=r.useState(null),[n,i]=r.useState(!0),[m,h]=r.useState([]);r.useEffect(()=>{(async()=>{try{const s=await(await fetch(`${b}/articles`)).json();g(s),i(!1)}catch(o){console.error("Error fetching articles:",o),i(!1)}})()},[]);const u=()=>{const l=localStorage.getItem("userData"),o=l?JSON.parse(l):null,s=o?o.preferences.selectedSports:[],a=o?o.preferences.selectedTeams:[],f=c.filter(y=>s.includes(y.sport.name)||y.teams.some(w=>a.includes(w.name)));h(f)};r.useEffect(()=>{u()},[c]);const x=()=>{u()},p=async l=>{try{const s=await(await fetch(`${b}/articles/${l.id}`)).json();d(s),document.body.style.overflow="hidden"}catch(o){console.error("Error fetching article details:",o)}},j=()=>{d(null),document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"text-xl flex items-center font-semibold rounded-lg",onClick:x,children:"⟳"}),n&&e.jsx("p",{children:"Loading..."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:m.map(l=>e.jsxs("div",{className:"bg-white rounded p-4 shadow-md",children:[e.jsx("img",{src:l.thumbnail,alt:l.title,className:"mb-4 rounded-lg w-full h-40 object-cover"}),e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:[l.id,": ",l.title]}),e.jsx("button",{onClick:()=>p(l),className:"bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300",children:"Read more"})]},l.id))}),t&&e.jsx("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50",children:e.jsxs("div",{className:"bg-gray-300 rounded p-6 max-w-2xl mx-auto my-8 max-h-full overflow-y-auto",children:[e.jsx("img",{src:t.thumbnail,alt:t.title,className:"mb-4 rounded-lg w-full h-40 object-cover"}),e.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.title}),e.jsx("p",{className:"mb-4",children:t.content}),e.jsxs("p",{className:"font-semibold",children:["Ends at: ",new Date(t.date).toLocaleString()]}),t.teams.length>0&&e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsx("p",{className:"font-semibold",children:"Teams:"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:t.teams.map(l=>e.jsx("span",{className:"bg-gray-200 px-2 py-1 rounded",children:l.name},l.id))})]}),e.jsx("button",{onClick:j,className:"bg-red-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300",children:"Close"})]})})]})},R=()=>{const[c,g]=r.useState([]),[t,d]=r.useState(null),[n,i]=r.useState(null),m=N(),[h,u]=r.useState(!0),x=v();r.useEffect(()=>{(async()=>{try{const f=await(await fetch(`${b}/articles`)).json();g(f),u(!1)}catch(a){console.error("Error fetching articles:",a),u(!1)}})()},[]);const p=s=>{i(s===n?null:s)},j=async s=>{try{const f=await(await fetch(`${b}/articles/${s.id}`)).json();d(f),document.body.style.overflow="hidden"}catch(a){console.error("Error fetching article details:",a)}},l=()=>{d(null),document.body.style.overflow="auto"},o=n?c.filter(s=>s.sport.name===n):c;return e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:m.pathname==="/home"?"w-2/3 h-full overflow-y-auto":"flex-1",children:[m.pathname==="/articles"&&e.jsx(S,{}),e.jsx("h1",{className:"bg-gray-800 text-white text-2xl font-bold flex justify-center p-2 rounded-lg m-2",children:"Trending News"}),e.jsxs("div",{className:"bg-yellow-200 rounded-lg p-4 m-2 shadow-md",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4 flex justify-center",children:[Array.from(new Set(c.map(s=>s.sport.name))).map(s=>e.jsx("button",{onClick:()=>p(s),className:`px-3 py-2 rounded-md ${n===s?"bg-blue-600 text-white font-semibold":"bg-gray-400 text-gray-800 font-semibold"} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`,children:s},s)),h&&e.jsx("p",{children:"Loading..."}),x&&!h&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>i(null),className:`px-6 py-3 rounded-md ${n===null?"bg-blue-600 text-white font-semibold":"bg-gray-400 text-gray-800 font-semibold"} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`,children:"Your choice"}),!n&&e.jsx(C,{})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:(n||!x)&&o.map(s=>e.jsxs("div",{className:"bg-white rounded p-4 shadow-md",children:[e.jsx("img",{src:s.thumbnail,alt:s.title,className:"mb-4 rounded-lg w-full h-40 object-cover"}),e.jsx("h2",{className:"text-xl font-semibold mb-2",children:s.title}),e.jsx("button",{onClick:()=>j(s),className:"bg-blue-600 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300",children:"Read more"})]},s.id))})]}),e.jsx("div",{className:`fixed top-0 left-0 w-full h-full overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${t?"opacity-100":"opacity-0 pointer-events-none"}`,children:e.jsx("div",{className:"bg-gray-300 rounded p-6 max-w-2xl mx-auto my-8 max-h-full overflow-y-auto",children:t&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:t.thumbnail,alt:t.title,className:"mb-4 rounded-lg w-full h-40 object-cover"}),e.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.title}),e.jsx("p",{className:"mb-4",children:t.content}),e.jsxs("p",{className:"font-semibold",children:["Ends at: ",new Date(t.date).toLocaleString()]}),t.teams.length>0&&e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsx("p",{className:"font-semibold",children:"Teams:"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:t.teams.map(s=>e.jsx("span",{className:"bg-gray-200 px-2 py-1 rounded",children:s.name},s.id))})]}),e.jsx("button",{onClick:l,className:"bg-red-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300",children:"Close"})]})})})]}),m.pathname==="/home"&&e.jsx("div",{className:"w-1/3 overflow-y-auto",children:e.jsx(A,{})})]})};export{R as default};
