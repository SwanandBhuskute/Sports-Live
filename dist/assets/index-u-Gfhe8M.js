function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArticleList-CgCC2nwe.js","assets/index-B2aDYPK_.js","assets/index-BbyOO-Tw.css","assets/constants-C9Jc7q6O.js","assets/NavBar-BHJ-zrLT.js","assets/TeamandSportList-C0IxxeLQ.js","assets/dateUtils-gG17I_SJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as e,j as s,r as t,O as a}from"./index-B2aDYPK_.js";import{E as i}from"./ErrorBoundary-NlOW2PwI.js";const o=r.lazy(()=>e(()=>import("./ArticleList-CgCC2nwe.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),c=()=>s.jsxs(s.Fragment,{children:[s.jsx(i,{children:s.jsx(t.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(o,{})})}),s.jsx(a,{})]});export{c as default};
