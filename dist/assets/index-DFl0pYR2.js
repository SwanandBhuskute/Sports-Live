function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MatchList-DtFQhSzP.js","assets/index-BXPKFFQD.js","assets/index-C2pT12X7.css","assets/constants-C9Jc7q6O.js","assets/NavBar-CcY2k9lh.js","assets/LiveMatches-BaJqcB96.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as a,j as s,r as e,O as t}from"./index-BXPKFFQD.js";import{E as o}from"./ErrorBoundary-Cw37PXBt.js";const i=r.lazy(()=>a(()=>import("./MatchList-DtFQhSzP.js"),__vite__mapDeps([0,1,2,3,4,5]))),l=()=>s.jsxs(s.Fragment,{children:[s.jsx(o,{children:s.jsx(e.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(i,{})})}),s.jsx(t,{})]});export{l as default};
