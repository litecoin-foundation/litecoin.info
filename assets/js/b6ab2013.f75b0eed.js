"use strict";(self.webpackChunklitecoin_info=self.webpackChunklitecoin_info||[]).push([[972],{2103:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=i(4848),n=i(8453);const s={sidebar_position:1},r="Initial Sync",a={id:"history/bootstrap",title:"Initial Sync",description:"Configuration",source:"@site/docs/history/bootstrap.md",sourceDirName:"history",slug:"/history/bootstrap",permalink:"/docs/history/bootstrap",draft:!1,unlisted:!1,editUrl:"https://github.com/litecoin-foundation/litecoin.info/tree/main/packages/create-docusaurus/templates/shared/docs/history/bootstrap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/docs/history/alerts"},next:{title:"Time Warp Attack",permalink:"/docs/history/time-warp-attack"}},c={},l=[{value:"Configuration",id:"configuration",level:3},{value:"Bootstrap.dat",id:"bootstrapdat",level:3}];function d(t){const e={admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"initial-sync",children:"Initial Sync"}),"\n",(0,o.jsx)(e.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(e.p,{children:"To speed up the initial sync, users can increase the dbcache by inserting:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-md",metastring:'title="litecoin.conf"',children:"dbcache=1000 # replace '1000' with available RAM in MB \n"})}),"\n",(0,o.jsx)(e.p,{children:"From Litecoin v0.8.5.2+, SSE2 PoW validation can make import even faster on a system with SSD drives."}),"\n",(0,o.jsx)(e.h3,{id:"bootstrapdat",children:"Bootstrap.dat"}),"\n",(0,o.jsxs)(e.p,{children:["In older clients, the initial sync was very slow. To rapidly import blocks, users could import block data from a ",(0,o.jsx)(e.code,{children:"bootstrap.dat"})," file.\nThis file would be placed in the Litecoin data directory, and would be automatically detected by Litecoin Core upon startup."]}),"\n",(0,o.jsx)(e.admonition,{type:"caution",children:(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"NOTICE:"})," Although it is still possible to use a bootstrap.dat file using ",(0,o.jsx)(e.code,{children:"-loadblock"}),", it is no longer advised. With the release of Litecoin Core v0.10, a new block header first sync method is used. As the whole chain is now known to the client in advance, blocks can be downloaded in parallel from multiple peers."]})})]})}function p(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},8453:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var o=i(6540);const n={},s=o.createContext(n);function r(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);