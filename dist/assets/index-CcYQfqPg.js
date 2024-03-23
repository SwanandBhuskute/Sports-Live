function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArticleList-n7gtz0AE.js","assets/index-5E1ahET8.js","assets/index-C2pT12X7.css","assets/constants-C9Jc7q6O.js","assets/NavBar-DXbF1Jbh.js","assets/TeamandSportList-BA7QASc_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as e,j as s,r as t,O as a}from"./index-5E1ahET8.js";import{E as i}from"./ErrorBoundary-5hKrcmO0.js";const o=r.lazy(()=>e(()=>import("./ArticleList-n7gtz0AE.js"),__vite__mapDeps([0,1,2,3,4,5]))),c=()=>s.jsxs(s.Fragment,{children:[s.jsx(i,{children:s.jsx(t.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(o,{})})}),s.jsx(a,{})]});export{c as default};
