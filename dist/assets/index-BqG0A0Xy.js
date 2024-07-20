function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArticleList-BOEQz6IS.js","assets/index-DPBYv6UA.js","assets/index-b3SrEavC.css","assets/constants-C9Jc7q6O.js","assets/NavBar-Bw5AU8D5.js","assets/TeamandSportList-ZRIJ5970.js","assets/dateUtils-gG17I_SJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,_ as e,j as s,r as t,O as a}from"./index-DPBYv6UA.js";import{E as i}from"./ErrorBoundary-FZmBDOzB.js";const o=r.lazy(()=>e(()=>import("./ArticleList-BOEQz6IS.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),c=()=>s.jsxs(s.Fragment,{children:[s.jsx(i,{children:s.jsx(t.Suspense,{fallback:s.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:s.jsx(o,{})})}),s.jsx(a,{})]});export{c as default};
