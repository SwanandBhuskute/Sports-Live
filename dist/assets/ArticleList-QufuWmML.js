import{r,j as e,A as g,b as C}from"./index-zUvurxNo.js";import{a as v,b as E,N as k}from"./NavBar-DK3-NYlL.js";import $ from"./TeamandSportList-CF_oueDG.js";import{f as S}from"./dateUtils-gG17I_SJ.js";const T=()=>{const[c,p]=r.useState([]),[t,u]=r.useState(null),[a,f]=r.useState(!0),[i,h]=r.useState([]),{t:m,i18n:b}=v();r.useEffect(()=>{(async()=>{try{const s=await(await fetch(`${g}/articles`)).json();p(s),f(!1)}catch(o){console.error("Error fetching articles:",o),f(!1)}})()},[]);const n=()=>{const l=localStorage.getItem("userData"),o=l?JSON.parse(l):null;if(!o||!o.preferences){h(c);return}const s=o.preferences.selectedSports||[],d=o.preferences.selectedTeams||[],x=c.filter(w=>s.includes(w.sport.name)||w.teams.some(A=>d.includes(A.name)));h(x)};r.useEffect(()=>{n()},[c]);const j=()=>{n()},y=async l=>{try{const s=await(await fetch(`${g}/articles/${l.id}`)).json();u(s),document.body.style.overflow="hidden"}catch(o){console.error("Error fetching article details:",o)}},N=()=>{u(null),document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"text-xl flex items-center font-semibold rounded-lg",onClick:j,children:"⟳"}),a&&e.jsx("p",{children:"Loading..."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:i.map(l=>e.jsxs("div",{className:"bg-white rounded p-4 shadow-md",children:[e.jsx("img",{src:l.thumbnail,alt:l.title,className:"mb-4 rounded-lg w-full h-40 object-cover"}),e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:[l.id,": ",l.title]}),e.jsx("button",{onClick:()=>y(l),className:"bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300",children:m("Read more")})]},l.id))}),t&&e.jsx("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50",children:e.jsxs("div",{className:"bg-gray-300 rounded p-6 max-w-2xl mx-auto my-8 max-h-full overflow-y-auto",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.title}),e.jsx("img",{src:t.thumbnail,alt:t.title,className:"mb-4 rounded-lg w-full h-full object-cover"}),e.jsx("p",{className:"mb-4",children:t.content}),e.jsxs("p",{className:"font-semibold",children:[m("Ends at"),": ",S(t.date,b.language)]}),t.teams.length>0&&e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsxs("p",{className:"font-semibold",children:[m("Teams"),":"]}),e.jsx("div",{className:"flex flex-wrap gap-1",children:t.teams.map(l=>e.jsx("span",{className:"bg-gray-200 px-2 py-1 rounded",children:l.name},l.id))})]}),e.jsx("button",{onClick:N,className:"bg-red-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300",children:"Close"})]})})]})},P=()=>{const[c,p]=r.useState([]),[t,u]=r.useState(null),[a,f]=r.useState(null),i=C(),[h,m]=r.useState(!0),b=E(),{t:n,i18n:j}=v();r.useEffect(()=>{(async()=>{try{const x=await(await fetch(`${g}/articles`)).json();p(x),m(!1)}catch(d){console.error("Error fetching articles:",d),m(!1)}})()},[]);const y=s=>{f(s===a?null:s)},N=async s=>{try{const x=await(await fetch(`${g}/articles/${s.id}`)).json();u(x),document.body.style.overflow="hidden"}catch(d){console.error("Error fetching article details:",d)}},l=()=>{u(null),document.body.style.overflow="auto"},o=a?c.filter(s=>s.sport.name===a):c;return e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:i.pathname==="/home"?"w-2/3 h-full overflow-y-auto":"flex-1",children:[i.pathname==="/articles"&&e.jsx(k,{}),e.jsx("h1",{"data-testid":"cypress-title",className:"bg-gray-800 text-white text-2xl font-bold flex justify-center p-2 rounded-lg m-2",children:n("Trending News")}),e.jsxs("div",{className:"bg-red-400 rounded-lg p-4 m-2 shadow-md",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4 flex justify-center",children:[Array.from(new Set(c.map(s=>s.sport.name))).map(s=>e.jsx("button",{onClick:()=>y(s),className:`px-3 py-2 rounded-md ${a===s?"bg-blue-600 text-white font-semibold":"bg-gray-400 text-gray-800 font-semibold"} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`,children:n(`${s}`)},s)),h&&e.jsx("p",{children:"Loading..."}),b&&!h&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>f(null),className:`px-6 py-3 rounded-md ${a===null?"bg-blue-600 text-white font-semibold":"bg-gray-400 text-gray-800 font-semibold"} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`,children:n("Your choice")}),!a&&e.jsx(T,{})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:(a||!b)&&o.map(s=>e.jsxs("div",{className:"bg-white rounded p-4 shadow-md",children:[e.jsx("img",{src:s.thumbnail,alt:s.title,className:"mb-4 rounded-lg w-full h-40 object-cover"}),e.jsx("h2",{className:"text-xl font-semibold mb-2",children:s.title}),e.jsx("button",{onClick:()=>N(s),className:"bg-blue-600 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300",children:n("Read more")})]},s.id))})]}),e.jsx("div",{className:`fixed top-0 left-0 w-full h-full overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${t?"opacity-100":"opacity-0 pointer-events-none"}`,children:e.jsx("div",{className:"bg-gray-300 rounded p-6 max-w-2xl mx-auto my-8 max-h-full overflow-y-auto",children:t&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.title}),e.jsx("img",{src:t.thumbnail,alt:t.title,className:"mb-4 rounded-lg w-full h-full object-cover"}),e.jsx("p",{className:"mb-4",children:t.content}),e.jsxs("p",{className:"font-semibold",children:[n("Ends at"),": ",S(t.date,j.language)]}),t.teams.length>0&&e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsxs("p",{className:"font-semibold",children:[n("Teams"),":"]}),e.jsx("div",{className:"flex flex-wrap gap-1",children:t.teams.map(s=>e.jsx("span",{className:"bg-gray-200 px-2 py-1 rounded",children:s.name},s.id))})]}),e.jsx("button",{onClick:l,className:"bg-red-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300",children:"Close"})]})})})]}),(i.pathname==="/home"||i.pathname==="/")&&e.jsx("div",{className:"w-1/3 overflow-y-auto",children:e.jsx($,{})})]})};export{P as default};