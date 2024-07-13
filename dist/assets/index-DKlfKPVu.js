function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArticleList-BKUGcsD8.js","assets/index-BVHRSz2b.js","assets/index-BUqSxXpt.css","assets/constants-C9Jc7q6O.js","assets/NavBar-DvO2OVDH.js","assets/TeamandSportList-ruT1-0nD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as e,j as s,r as t,O as a}from"./index-BVHRSz2b.js";import{E as i}from"./ErrorBoundary-ymh5RI_n.js";const o=r.lazy(()=>e(()=>import("./ArticleList-BKUGcsD8.js"),__vite__mapDeps([0,1,2,3,4,5]))),c=()=>s.jsxs(s.Fragment,{children:[s.jsx(i,{children:s.jsx(t.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(o,{})})}),s.jsx(a,{})]});export{c as default};
