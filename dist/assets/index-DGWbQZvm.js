function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MatchList-qtpenEPT.js","assets/index-DmGghVRE.js","assets/index-BbyOO-Tw.css","assets/constants-C9Jc7q6O.js","assets/NavBar-DijexKlY.js","assets/LiveMatches-CGkhZsm2.js","assets/dateUtils-gG17I_SJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as a,j as s,r as e,O as t}from"./index-DmGghVRE.js";import{E as o}from"./ErrorBoundary-DwiG50JP.js";const i=r.lazy(()=>a(()=>import("./MatchList-qtpenEPT.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),l=()=>s.jsxs(s.Fragment,{children:[s.jsx(o,{children:s.jsx(e.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(i,{})})}),s.jsx(t,{})]});export{l as default};
