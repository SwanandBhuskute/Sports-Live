function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MatchList-_y73wdHi.js","assets/index-cMq4sX42.js","assets/index-C2pT12X7.css","assets/constants-C9Jc7q6O.js","assets/NavBar-DFFyyoqj.js","assets/LiveMatches-lhpeyM4I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as a,j as s,r as e,O as t}from"./index-cMq4sX42.js";import{E as o}from"./ErrorBoundary-CqQsICQb.js";const i=r.lazy(()=>a(()=>import("./MatchList-_y73wdHi.js"),__vite__mapDeps([0,1,2,3,4,5]))),l=()=>s.jsxs(s.Fragment,{children:[s.jsx(o,{children:s.jsx(e.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(i,{})})}),s.jsx(t,{})]});export{l as default};
