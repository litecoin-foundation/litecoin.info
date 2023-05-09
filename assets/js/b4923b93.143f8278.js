"use strict";(self.webpackChunklitecoin_info=self.webpackChunklitecoin_info||[]).push([[44],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,h=p["".concat(d,".").concat(f)]||p[f]||l[f]||r;return n?a.createElement(h,c(c({ref:t},b),{},{components:n})):a.createElement(h,c({ref:t},b))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},c="Proof of Work",i={unversionedId:"key-concepts/proof-of-work",id:"key-concepts/proof-of-work",title:"Proof of Work",description:"Litecoin uses Scrypt Proof of Work (PoW), with parameters N=1024, r=1 and p=1. The salt is the same 80 bytes as the input.",source:"@site/docs/key-concepts/proof-of-work.md",sourceDirName:"key-concepts",slug:"/key-concepts/proof-of-work",permalink:"/litecoin.info/docs/key-concepts/proof-of-work",draft:!1,editUrl:"https://github.com/litecoin-foundation/litecoin.info/tree/main/packages/create-docusaurus/templates/shared/docs/key-concepts/proof-of-work.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Magic Numbers",permalink:"/litecoin.info/docs/key-concepts/magic-numbers"},next:{title:"Historical Info",permalink:"/litecoin.info/docs/category/historical-info"}},d={},s=[{value:"Scrypt during mining",id:"scrypt-during-mining",level:3},{value:"Example dbdump of block #29255",id:"example-dbdump-of-block-29255",level:3}],b={toc:s},p="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proof-of-work"},"Proof of Work"),(0,o.kt)("p",null,"Litecoin uses Scrypt Proof of Work (PoW), with parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"N=1024"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"r=1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"p=1"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"salt")," is the same 80 bytes as the input.\nThe output is 256bits (32 bytes). The scrypt implementation in C++ used by Litecoin Core is adapted from Colin Perseval's Tarsnap,\nand can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/litecoin-project/litecoin/blob/master/src/crypto/scrypt.cpp"},(0,o.kt)("inlineCode",{parentName:"a"},"src/crypto/scrypt.cpp")),"."),(0,o.kt)("h3",{id:"scrypt-during-mining"},"Scrypt during mining"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ litecoind getwork\n{\n    "midstate" : "40fd268321efcf60e625707d4e31f9deadd13157e228985de8a10a057b98ed4d",\n    "data" : "0000000105e9a54b7f65b46864bc90f55d67cccd8b6404a02f5e064a6df69282adf6e2e5f7f953b0632b25b099858b717bb7b24084148cfa841a89f106bc6b655b18d2ed4ebb191a1d018ea700000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000080020000",\n    "hash1" : "00000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000010000",\n    "target" : "0000000000000000000000000000000000000000000000000000a78e01000000"\n}\n')),(0,o.kt)("p",null,"The data field is stored in big-endian format. We need to cover that to little-endian for each of the fields in the data because we can pass it to the hashing function."),(0,o.kt)("p",null,"Data is broken down to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Version - `00000001` (4 bytes)\nPrevious hash - `05e9a54b7f65b46864bc90f55d67cccd8b6404a02f5e064a6df69282adf6e2e5` (32 bytes)\nMerkle root - `f7f953b0632b25b099858b717bb7b24084148cfa841a89f106bc6b655b18d2ed` (32 bytes)\nTimestamp - `4ebb191a` (4 bytes)\nBits (target in compact form) - `1d018ea7` (4 bytes)\nNonce - `00000000` (4 bytes)\n")),(0,o.kt)("p",null,"You need covert these from big-endian to little-endian. This is done 2 characters at a time because each byte is represented by 2 hex chars. (each hex char is 4 bits)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Version becomes `01000000`\nPrevious hash becomes `e5e2f6.....a5e905`\nMerkle root becomes `edd218...53f9f7`\nTimestamp becomes `1a19bb4e`\nBits becomes `a78e011d`\nAnd Nonce is a 32-bit integer you choose that will make the scrypt hash be less than the target.\n")),(0,o.kt)("p",null,"Remember that you will need to convert the 32-bit nonce to hex and little-endian also. So if you are trying the nonce ",(0,o.kt)("inlineCode",{parentName:"p"},"2504433986"),". The hex version is ",(0,o.kt)("inlineCode",{parentName:"p"},"9546a142")," in big-endian and ",(0,o.kt)("inlineCode",{parentName:"p"},"42a14695")," in little-endian."),(0,o.kt)("p",null,"You then concatenate these little-endian hex strings together to get the header string (80 bytes) you input into scrypt"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"01000000 e5e2f6.....a5e905 edd218...53f9f7 1a19bb4e a78e011d 42a14695")," "),(0,o.kt)("h3",{id:"example-dbdump-of-block-29255"},"Example dbdump of block #29255"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./dbdump.py --datadir=/home/mining/.litecoin/ --block 29255\nBlock height: 29255\nBLOCK adf6e2e56df692822f5e064a8b6404a05d67cccd64bc90f57f65b46805e9a54b\nNext block: 0000000000000000000000000000000000000000000000000000000000000000\nTime: Wed Nov  9 16:15:52 2011 Nonce: 3562614017\nnBits: 0x0x1d018ea7\nhashMerkleRoot: 0x066b2a758399d5f19b5c6073d09b500d925982adc4b3edd352efe14667a8ca9f\nPrevious block: 279f6330ccbbb9103b9e3a5350765052081ddbae898f1ef6b8c64f3bcef715f6\n1 transactions:\n1 tx in, 1 out\nTxIn: COIN GENERATED coinbase:04b217bb4e022309\nTxOut: value: 50.000000 pubkey: 1HXG8MWvUFNU3pLpQUJueSC4kHcrNepuwC Script: 65:0448...b8cd CHECKSIG\n\nRaw block header: 01000000f615f7ce3b4fc6b8f61e8f89aedb1d0852507650533a9e3b10b9bbcc30639f279fcaa86746e1ef52d3edb3c4ad8259920d509bd073605c9bf1d59983752a6b06b817bb4ea78e011d012d59d4\n")),(0,o.kt)("p",null,"This python script be used to get a block hash, which matches the expect hash of block #29255"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import hashlib\nimport ltc_scrypt\n\nheader_hex = \"01000000f615f7ce3b4fc6b8f61e8f89aedb1d0852507650533a9e3b10b9bbcc30639f279fcaa86746e1ef52d3edb3c4ad8259920d509bd073605c9bf1d59983752a6b06b817bb4ea78e011d012d59d4\"\nheader_bin = header_hex.decode('hex')\n\n# sha256d hash\nhash = hashlib.sha256(hashlib.sha256(header_bin).digest()).digest()\nhash.encode('hex_codec')\nhash[::-1].encode('hex_codec')    # convert from big-endian to little-endian\n# hash = adf6e2e56df692822f5e064a8b6404a05d67cccd64bc90f57f65b46805e9a54b\n\n# scrypt hash\nscrypt = ltc_scrypt.getPoWHash(header_bin)\nscrypt.encode('hex_codec')\nscrypt[::-1].encode('hex_codec')    # convert from big-endian to little-endian\n# scrypt hash = 0000000110c8357966576df46f3b802ca897deb7ad18b12f1c24ecff6386ebd9\n")))}l.isMDXComponent=!0}}]);