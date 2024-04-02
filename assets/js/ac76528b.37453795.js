"use strict";(self.webpackChunklitecoin_info=self.webpackChunklitecoin_info||[]).push([[79],{7204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(4848),s=t(8453);const a={sidebar_position:1},o="URI Schemes",c={id:"key-concepts/uri-scheme",title:"URI Schemes",description:"Litecoin URI schemes simplify the flow of sending and receiving Litecoin by allowing users to click on a link or scan a QR code instead",source:"@site/docs/key-concepts/uri-scheme.md",sourceDirName:"key-concepts",slug:"/key-concepts/uri-scheme",permalink:"/docs/key-concepts/uri-scheme",draft:!1,unlisted:!1,editUrl:"https://github.com/litecoin-foundation/litecoin.info/tree/main/packages/create-docusaurus/templates/shared/docs/key-concepts/uri-scheme.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Testnet",permalink:"/docs/key-concepts/testnet"},next:{title:"Historical Info",permalink:"/docs/category/historical-info"}},r={},l=[{value:"BIP21",id:"bip21",level:3},{value:"BOLT11",id:"bolt11",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"uri-schemes",children:"URI Schemes"}),"\n",(0,i.jsx)(n.p,{children:"Litecoin URI schemes simplify the flow of sending and receiving Litecoin by allowing users to click on a link or scan a QR code instead\nof having to manually enter the transaction details. This URI includes the address, the amount to be sent, and often optional parameters\nsuch as a label or message."}),"\n",(0,i.jsx)(n.h3,{id:"bip21",children:"BIP21"}),"\n",(0,i.jsxs)(n.p,{children:["The BIP21 standard was adopted by Litecoin, but with a different URN denoting litecoin. All wallets are reccomended to adopt this standard,\nfor ease-of-use. Additional information can be found in the spec ",(0,i.jsx)(n.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki",children:"BIP21 document"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Standard syntax example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"litecoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"ABFN Grammar:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'litecoinurn     = "litecoin:" litecoinaddress [ "?" litecoinparams ]\nlitecoinaddress = *base58/bech32\nlitecoinparams  = litecoinparam [ "&" litecoinparams ]\nlitecoinparam   = [ amountparam / labelparam / messageparam / otherparam / reqparam ]\namountparam    = "amount=" *digit [ "." *digit ]\nlabelparam     = "label=" *qchar\nmessageparam   = "message=" *qchar\notherparam     = qchar *qchar [ "=" *qchar ]\nreqparam       = "req-" qchar *qchar [ "=" *qchar ]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"bolt11",children:"BOLT11"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/lightning/bolts/blob/master/11-payment-encoding.md",children:"BOLT11"})," standard specifies the design of a Litecoin lightning invoice. To adapt this invoice as a uri, ",(0,i.jsx)(n.code,{children:"ltclightning:"})," should be used as\nas the URN prefix (note: not 'ltclightning://'). This URI scheme is only followed by versions of lndltc 0.16+."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ltclightning:lnltc1m1pdtaggcpp5t2a85mvpqvmsyejs3ysa9jqfvzl3fs7tukk8kyvhn64rxumc4t4qdqcd4u47ar9wd697urp09kk2mn5cqzjqxqzuywpn6mhcu4s7fj9q3ndu09805t3q8jwllcd8p2e9plrfcehw3xyr9lpnux9jgcv64mwpvk3599qza6a32uzak2y03ttrgnrmf554ffrgpxnnrk4\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Alternatively it may also be useful to set ",(0,i.jsx)(n.code,{children:"ltclightning:"})," as an additional parameter of a BIP21 payment request. By doing this, wallets\nwhich don't support lightning will be able to fallback to an onchain payment."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"litecoin:<address>?ltclightning:<invoice>\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);