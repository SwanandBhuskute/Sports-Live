function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MatchList-omllgS-s.js","assets/index-BVHRSz2b.js","assets/index-BUqSxXpt.css","assets/constants-C9Jc7q6O.js","assets/NavBar-DvO2OVDH.js","assets/LiveMatches-DEhvZSBA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as a,j as s,r as e,O as t}from"./index-BVHRSz2b.js";import{E as o}from"./ErrorBoundary-ymh5RI_n.js";const i=r.lazy(()=>a(()=>import("./MatchList-omllgS-s.js"),__vite__mapDeps([0,1,2,3,4,5]))),l=()=>s.jsxs(s.Fragment,{children:[s.jsx(o,{children:s.jsx(e.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(i,{})})}),s.jsx(t,{})]});export{l as default};
