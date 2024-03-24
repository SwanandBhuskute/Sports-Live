function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TeamandSportList-D6Ea4qyS.js","assets/index-CbRCAM3Q.js","assets/index-C2pT12X7.css","assets/constants-C9Jc7q6O.js","assets/NavBar-EkK_mEt3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as a,j as s,r as e,O as t}from"./index-CbRCAM3Q.js";import{E as o}from"./ErrorBoundary-17hxq6-H.js";const n=r.lazy(()=>a(()=>import("./TeamandSportList-D6Ea4qyS.js"),__vite__mapDeps([0,1,2,3,4]))),l=()=>s.jsxs(s.Fragment,{children:[s.jsx(o,{children:s.jsx(e.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(n,{})})}),s.jsx(t,{})]});export{l as default};
