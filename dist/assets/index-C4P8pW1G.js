function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArticleList-BAtsnGzf.js","assets/index-BXPKFFQD.js","assets/index-C2pT12X7.css","assets/constants-C9Jc7q6O.js","assets/NavBar-CcY2k9lh.js","assets/TeamandSportList-CARWqA58.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as e,j as s,r as t,O as a}from"./index-BXPKFFQD.js";import{E as i}from"./ErrorBoundary-Cw37PXBt.js";const o=r.lazy(()=>e(()=>import("./ArticleList-BAtsnGzf.js"),__vite__mapDeps([0,1,2,3,4,5]))),c=()=>s.jsxs(s.Fragment,{children:[s.jsx(i,{children:s.jsx(t.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(o,{})})}),s.jsx(a,{})]});export{c as default};
