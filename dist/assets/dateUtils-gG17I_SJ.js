const r=(e,n)=>new Intl.DateTimeFormat(n,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e));export{r as f};
