(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{3905:function(e,t,r){"use strict";r.r(t),r.d(t,{MDXContext:function(){return s},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){return function(t){var r=d(t.components);return n.createElement(e,a({},t,{components:r}))}},d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"===typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=o,m=u["".concat(i,".").concat(p)]||u[p]||f[p]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8093:function(e,t,r){"use strict";var n=r(7294),o=r(3905);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var c=a(n),l=i(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:r={},lazy:o}){const[a,i]=n.useState(!o||"undefined"===typeof window);n.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{i(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const s=n.useMemo((()=>{const r=Object.assign({mdx:l.mdx,React:c.default},t),n=Object.keys(r),o=Object.values(r),a=Reflect.construct(Function,n.concat(`${e}; return MDXContent;`));return a.apply(a,o)}),[t,e]);if(!a)return c.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const u=c.default.createElement(l.MDXProvider,{components:r},c.default.createElement(s,null));return o?c.default.createElement("div",null,u):u}},377:function(e,t,r){"use strict";r.d(t,{A:function(){return g}});r(7294);var n=r(5974),o=r(4065),a=r(9008),i=r(558),c=r(7389),l=r(3264),s=r(1936),u=r(5613),d=r(5893),p=[{name:"Top",pathname:"/"},{name:"Careers",pathname:"/careers"}],f=(0,l.Z)(s.Z)((function(){return{padding:16}})),m=function(){return(0,d.jsx)(i.ZP,{container:!0,justifyContent:"center",children:p.map((function(e){return(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(f,{children:(0,d.jsx)(c.Z,{variant:"text",component:u.Z,to:{pathname:e.pathname},children:e.name})})},e.name)}))})},y=r(4298),b=r(9617),h=(0,y.Z)((0,b.Z)({palette:{twitter:{main:"#1da1f2"},twitch:{main:"#6441A4"},github:{main:"#333"}}})),g=(r(2603),function(e){var t=e.title,r=e.children;return(0,d.jsxs)(n.Z,{theme:h,children:[(0,d.jsxs)(a.default,{children:[(0,d.jsxs)("title",{children:[t&&"".concat(t," - "),"Cmario.net"]}),(0,d.jsx)("meta",{name:"description",content:"Cmario.net"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)(o.Z,{children:[(0,d.jsx)("header",{children:(0,d.jsx)(m,{})}),(0,d.jsx)("main",{children:r}),(0,d.jsx)("footer",{})]})]})})},5613:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(2809),o=r(219),a=r(7294),i=r(6010),c=r(1163),l=r(1664),s=r(6634),u=r(948),d=r(5893),p=["to","linkAs","href","replace","scroll","shallow","prefetch","locale"],f=["activeClassName","as","className","href","noLinkStyle","role"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=(0,u.ZP)("a")({}),h=a.forwardRef((function(e,t){var r=e.to,n=e.linkAs,a=(e.href,e.replace),i=e.scroll,c=e.shallow,s=e.prefetch,u=e.locale,f=(0,o.Z)(e,p);return(0,d.jsx)(l.default,{href:r,prefetch:s,as:n,replace:a,scroll:i,shallow:c,passHref:!0,locale:u,children:(0,d.jsx)(b,y({ref:t},f))})})),g=a.forwardRef((function(e,t){var r=e.activeClassName,a=void 0===r?"active":r,l=e.as,u=e.className,p=e.href,m=e.noLinkStyle,g=(e.role,(0,o.Z)(e,f)),v=(0,c.useRouter)(),j="string"===typeof p?p:p.pathname,w=(0,i.Z)(u,(0,n.Z)({},a,v.pathname===j&&a));return"string"===typeof p&&(0===p.indexOf("http")||0===p.indexOf("mailto:"))?m?(0,d.jsx)(b,y({className:w,href:p,ref:t},g)):(0,d.jsx)(s.Z,y({className:w,href:p,ref:t},g)):m?(0,d.jsx)(h,y({className:w,ref:t,to:p},g)):(0,d.jsx)(s.Z,y({component:h,linkAs:l,className:w,ref:t,to:p},g))}));t.C=g},8840:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ae},default:function(){return ie}});var n=r(2809),o=r(8093),a=r(7462),i=r(3366),c=r(7294),l=(r(5697),r(6010)),s=r(7463),u=r(6122),d=r(948),p=r(551),f=r(1271);function m(e){return(0,p.Z)("MuiTableContainer",e)}(0,f.Z)("MuiTableContainer",["root"]);var y=r(5893);const b=["className","component"],h=(0,d.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var g=c.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableContainer"}),{className:n,component:o="div"}=r,c=(0,i.Z)(r,b),d=(0,a.Z)({},r,{component:o}),p=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},m,t)})(d);return(0,y.jsx)(h,(0,a.Z)({ref:t,as:o,className:(0,l.Z)(p.root,n),ownerState:d},c))}));var v=c.createContext();function j(e){return(0,p.Z)("MuiTable",e)}(0,f.Z)("MuiTable",["root","stickyHeader"]);const w=["className","component","padding","size","stickyHeader"],O=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,a.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,a.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),Z="table";var x=c.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTable"}),{className:n,component:o=Z,padding:d="normal",size:p="medium",stickyHeader:f=!1}=r,m=(0,i.Z)(r,w),b=(0,a.Z)({},r,{component:o,padding:d,size:p,stickyHeader:f}),h=(e=>{const{classes:t,stickyHeader:r}=e,n={root:["root",r&&"stickyHeader"]};return(0,s.Z)(n,j,t)})(b),g=c.useMemo((()=>({padding:d,size:p,stickyHeader:f})),[d,p,f]);return(0,y.jsx)(v.Provider,{value:g,children:(0,y.jsx)(O,(0,a.Z)({as:o,role:o===Z?null:"table",ref:t,className:(0,l.Z)(h.root,n),ownerState:b},m))})}));var P=c.createContext();function k(e){return(0,p.Z)("MuiTableHead",e)}(0,f.Z)("MuiTableHead",["root"]);const C=["className","component"],T=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),M={variant:"head"},N="thead";var R=c.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableHead"}),{className:n,component:o=N}=r,c=(0,i.Z)(r,C),d=(0,a.Z)({},r,{component:o}),p=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},k,t)})(d);return(0,y.jsx)(P.Provider,{value:M,children:(0,y.jsx)(T,(0,a.Z)({as:o,className:(0,l.Z)(p.root,n),ref:t,role:o===N?null:"rowgroup",ownerState:d},c))})}));function S(e){return(0,p.Z)("MuiTableBody",e)}(0,f.Z)("MuiTableBody",["root"]);const D=["className","component"],E=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),H={variant:"body"},z="tbody";var _=c.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableBody"}),{className:n,component:o=z}=r,c=(0,i.Z)(r,D),d=(0,a.Z)({},r,{component:o}),p=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},S,t)})(d);return(0,y.jsx)(P.Provider,{value:H,children:(0,y.jsx)(E,(0,a.Z)({className:(0,l.Z)(p.root,n),as:o,ref:t,role:o===z?null:"rowgroup",ownerState:d},c))})})),A=r(1796);function $(e){return(0,p.Z)("MuiTableRow",e)}var X=(0,f.Z)("MuiTableRow",["root","selected","hover","head","footer"]);const I=["className","component","hover","selected"],q=(0,d.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${X.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${X.selected}`]:{backgroundColor:(0,A.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,A.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),F="tr";var B=c.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableRow"}),{className:n,component:o=F,hover:d=!1,selected:p=!1}=r,f=(0,i.Z)(r,I),m=c.useContext(P),b=(0,a.Z)({},r,{component:o,hover:d,selected:p,head:m&&"head"===m.variant,footer:m&&"footer"===m.variant}),h=(e=>{const{classes:t,selected:r,hover:n,head:o,footer:a}=e,i={root:["root",r&&"selected",n&&"hover",o&&"head",a&&"footer"]};return(0,s.Z)(i,$,t)})(b);return(0,y.jsx)(q,(0,a.Z)({as:o,ref:t,className:(0,l.Z)(h.root,n),role:o===F?null:"row",ownerState:b},f))})),L=r(8216);function W(e){return(0,p.Z)("MuiTableCell",e)}var G=(0,f.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const J=["align","className","component","padding","scope","size","sortDirection","variant"],K=(0,d.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,L.Z)(r.size)}`],"normal"!==r.padding&&t[`padding${(0,L.Z)(r.padding)}`],"inherit"!==r.align&&t[`align${(0,L.Z)(r.align)}`],r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,A.$n)((0,A.Fq)(e.palette.divider,1),.88):(0,A._j)((0,A.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:e.palette.text.primary},"footer"===t.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${G.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})));var Q=c.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableCell"}),{align:n="inherit",className:o,component:d,padding:p,scope:f,size:m,sortDirection:b,variant:h}=r,g=(0,i.Z)(r,J),j=c.useContext(v),w=c.useContext(P),O=w&&"head"===w.variant;let Z;Z=d||(O?"th":"td");let x=f;!x&&O&&(x="col");const k=h||w&&w.variant,C=(0,a.Z)({},r,{align:n,component:Z,padding:p||(j&&j.padding?j.padding:"normal"),size:m||(j&&j.size?j.size:"medium"),sortDirection:b,stickyHeader:"head"===k&&j&&j.stickyHeader,variant:k}),T=(e=>{const{classes:t,variant:r,align:n,padding:o,size:a,stickyHeader:i}=e,c={root:["root",r,i&&"stickyHeader","inherit"!==n&&`align${(0,L.Z)(n)}`,"normal"!==o&&`padding${(0,L.Z)(o)}`,`size${(0,L.Z)(a)}`]};return(0,s.Z)(c,W,t)})(C);let M=null;return b&&(M="asc"===b?"ascending":"descending"),(0,y.jsx)(K,(0,a.Z)({as:Z,ref:t,className:(0,l.Z)(T.root,o),"aria-sort":M,scope:x,ownerState:C},g))})),U=r(5613);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee={table:function(e){return(0,y.jsx)(g,{children:(0,y.jsx)(x,Y(Y({},e),{},{sx:{width:"auto"}}))})},thead:R,tbody:_,tr:B,th:function(e){return(0,y.jsx)(Q,Y(Y({},e),{},{sx:{textAlign:"center"}}))},td:Q,a:U.C};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=function(e){var t=e.content;return(0,y.jsx)(o.R,re(re({},t),{},{components:ee}))},oe=r(377),ae=!0,ie=function(e){var t=e.slug,r=e.content;return(0,y.jsx)(oe.A,{title:t,children:(0,y.jsx)(ne,{content:r})})}},4008:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return r(8840)}])}},function(e){e.O(0,[774,237,888,179],(function(){return t=4008,e(e.s=t);var t}));var t=e.O();_N_E=t}]);