function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MatchList-uoH2lU6v.js","assets/index-B2aDYPK_.js","assets/index-BbyOO-Tw.css","assets/constants-C9Jc7q6O.js","assets/NavBar-BHJ-zrLT.js","assets/LiveMatches-qHMWtZ_3.js","assets/dateUtils-gG17I_SJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as a,j as s,r as e,O as t}from"./index-B2aDYPK_.js";import{E as o}from"./ErrorBoundary-NlOW2PwI.js";const i=r.lazy(()=>a(()=>import("./MatchList-uoH2lU6v.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),l=()=>s.jsxs(s.Fragment,{children:[s.jsx(o,{children:s.jsx(e.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(i,{})})}),s.jsx(t,{})]});export{l as default};