function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MatchList-DxrXU6ri.js","assets/index-DPBYv6UA.js","assets/index-b3SrEavC.css","assets/constants-C9Jc7q6O.js","assets/NavBar-Bw5AU8D5.js","assets/LiveMatches-m-S2l98G.js","assets/dateUtils-gG17I_SJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as a,j as s,r as e,O as t}from"./index-DPBYv6UA.js";import{E as o}from"./ErrorBoundary-FZmBDOzB.js";const i=r.lazy(()=>a(()=>import("./MatchList-DxrXU6ri.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),l=()=>s.jsxs(s.Fragment,{children:[s.jsx(o,{children:s.jsx(e.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(i,{})})}),s.jsx(t,{})]});export{l as default};
