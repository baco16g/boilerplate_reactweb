!function(e){function t(t){for(var o,i,l=t[0],n=t[1],c=t[2],u=0,b=[];u<l.length;u++)i=l[u],a[i]&&b.push(a[i][0]),a[i]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);for(d&&d(t);b.length;)b.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,l=1;l<r.length;l++){var n=r[l];0!==a[n]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},a={0:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,o){r=a[e]=[t,o]});t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({}[e]||e)+".bundle.js"}(e);var n=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;n.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",n.type=o,n.request=s,r[1](n)}a[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=n;s.push([29,1]),r()}([,,,,,function(e,t,r){"use strict";var o=r(14);r.d(t,"a",function(){return o.a}),r.d(t,"b",function(){return o.b})},function(e,t,r){"use strict";(function(e){var o,a,s;function i(e){const t=window.localStorage.getItem(e);return t?JSON.parse(t):null}function l(e,t){const r=JSON.stringify(e);window.localStorage.setItem(t,r)}function n(e){window.localStorage.removeItem(e)}function c(e){const t=window.sessionStorage.getItem(e);return t?JSON.parse(t):null}function d(e,t){const r=JSON.stringify(e);window.sessionStorage.setItem(t,r)}function u(e){window.sessionStorage.removeItem(e)}function b(e=0){return new Promise(t=>{setTimeout(t,e)})}r.d(t,"a",function(){return c}),r.d(t,"b",function(){return d}),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(a.register(i,"loadLocalStorageByKey","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/utils/storage.ts"),a.register(l,"saveLocalStorageByKey","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/utils/storage.ts"),a.register(n,"deleteLocalStorageByKey","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/utils/storage.ts"),a.register(c,"loadSessionStorageByKey","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/utils/storage.ts"),a.register(d,"saveSessionStorageByKey","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/utils/storage.ts"),a.register(u,"deleteSessionStorageByKey","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/utils/storage.ts"),a.register(b,"wait","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/utils/storage.ts")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&s(e)}).call(this,r(2)(e))},,,,,function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return l});var o,a=r(0),s=r.n(a);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const i=s.a.createContext(null),{Provider:l,Consumer:n}=i,c=i;var d,u;t.b=c,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(d.register(i,"HistoryContext","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/contexts/HistoryContext.ts"),d.register(l,"Provider","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/contexts/HistoryContext.ts"),d.register(n,"Consumer","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/contexts/HistoryContext.ts"),d.register(c,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/contexts/HistoryContext.ts")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o,a=r(0),s=r.n(a),i=r(3);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const l=({label:e,onPress:t,fontsize:r=12})=>s.a.createElement(n,{fontsize:r,onClick:t},e),n=i.default.button`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  font-size: ${e=>`${e.fontsize}px`}
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .4s;
  &:hover {
    background: #67c5ff;
    color: white;
  }
`,c=l;var d,u;t.a=c,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(d.register(l,"Button","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/views/atoms/Button.tsx"),d.register(n,"StyledButton","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/views/atoms/Button.tsx"),d.register(c,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/views/atoms/Button.tsx")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},,function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return i}),r.d(t,"b",function(){return u});var o,a=r(0),s=r.n(a);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const i=s.a.createContext(null),l=i.Consumer,n={colorMode:"LIGHT"},c=e=>{switch(e){case"LIGHT":return"DARK";default:return"LIGHT"}},d=(e,t)=>{switch(console.log(`[dispatch] ${t.type}`),t.type){case"RESTORE":return t.payload;case"TOGGLE_COLOR_MODE":return{...e,colorMode:c(e.colorMode)};default:return e}},u=e=>{const[t,r]=s.a.useReducer(d,n),o={state:t,dispatch:r};return s.a.createElement(i.Provider,{value:o},e.children)};var b,p;(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(b.register(i,"AppContext","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx"),b.register(l,"AppConsumer","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx"),b.register(n,"initialState","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx"),b.register(c,"toggleColorMode","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx"),b.register(d,"reducer","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx"),b.register(u,"AppProvider","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx")),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&p(e)}).call(this,r(2)(e))},,,,function(e,t,r){"use strict";(function(e){var o,a=r(0),s=r.n(a),i=r(11),l=r(19);function n(e){const t=Object(l.a)(e.routes,e.history);return s.a.createElement(i.a,{value:e.history},s.a.createElement(s.a.Suspense,{fallback:e.fallback},s.a.createElement(t,null)))}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const c=n;var d,u;t.a=c,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(d.register(n,"Router","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/components/Router.tsx"),d.register(c,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/components/Router.tsx")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o,a=r(0),s=r.n(a),i=r(20),l=r(21);function n(e,t){const r=Object(l.a)(t),o=Object(a.useMemo)(()=>new i.a(e),[e]),[n,c]=Object(a.useState)("div");return Object(a.useEffect)(()=>{const e=s.a.lazy(()=>o.resolve(r.pathname));c(()=>e)},[r]),n}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const c=n;var d,u;t.a=c,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(d.register(n,"useRouter","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/hooks/useRouter.tsx"),d.register(c,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/hooks/useRouter.tsx")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},,function(e,t,r){"use strict";(function(e){var o,a=r(0);function s(e){const[t,r]=Object(a.useState)(e.location);return Object(a.useEffect)(()=>{const t=e.listen(e=>r(e));return()=>t()},[e]),t}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const i=s;var l,n;t.a=i,(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(l.register(s,"useLocation","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/hooks/useLocation.ts"),l.register(i,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/hooks/useLocation.ts")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o,a=r(27);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const s=Object(a.a)(),i=s;var l,n;t.a=i,(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(l.register(s,"history","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/history.ts"),l.register(i,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/history.ts")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o;(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const a=[{path:"/",action:()=>r.e(3).then(r.bind(null,41))},{path:"/async",action:()=>r.e(2).then(r.bind(null,42))}],s=a;var i,l;t.a=s,(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(i.register(a,"routes","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/routes.ts"),i.register(s,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/routes.ts")),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&l(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o;r.d(t,"a",function(){return a}),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const a={lightBackground:"linear-gradient(to right, #eef2f3, #8e9eab)",darkBackground:"linear-gradient(to right, #734b6d, #42275a)"},s={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"},i={mobileS:`(min-width: ${s.mobileS})`,mobileM:`(min-width: ${s.mobileM})`,mobileL:`(min-width: ${s.mobileL})`,tablet:`(min-width: ${s.tablet})`,laptop:`(min-width: ${s.laptop})`,laptopL:`(min-width: ${s.laptopL})`,desktop:`(min-width: ${s.desktop})`,desktopL:`(min-width: ${s.desktop})`};var l,n;(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(l.register(a,"theme","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/theme.ts"),l.register(s,"size","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/theme.ts"),l.register(i,"device","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/theme.ts")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o,a=r(0),s=r(3),i=r(6),l=r(5),n=r(12);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const c=`${window.location.hostname}-app-provider`,d=e=>{const t=a.useContext(l.a);if(!t)return a.createElement("div",null);const{state:r,dispatch:o}=t,[s,d]=a.useState(!1),p=i.a(c);a.useEffect(()=>{s?i.b(r,c):(p&&o({type:"RESTORE",payload:p}),d(!0))},[p&&r.colorMode!==p.colorMode]);return a.createElement(a.Fragment,null,a.createElement(u,{colorMode:r.colorMode},e.children,a.createElement(b,null,a.createElement(n.a,{onPress:()=>o({type:"TOGGLE_COLOR_MODE"}),label:"Change Color Mode!"}))))},u=s.default.div`
  font-family: Futura;
  height: 100vh;
  background: ${e=>"DARK"===e.colorMode?e.theme.darkBackground:e.theme.lightBackground};
`,b=s.default.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  background: #fff;
`,p=d;var f,g;t.a=p,(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(f.register(c,"STORAGE_KEY","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/views/organisms/Wrapper.tsx"),f.register(d,"Wrapper","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/views/organisms/Wrapper.tsx"),f.register(u,"ColorModeWrapper","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/views/organisms/Wrapper.tsx"),f.register(b,"ColorModeChanger","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/views/organisms/Wrapper.tsx"),f.register(p,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/views/organisms/Wrapper.tsx")),(g=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&g(e)}).call(this,r(2)(e))},,,,function(e,t,r){"use strict";r.r(t),function(e){var t,o=r(0),a=r(4),s=r(26),i=r(3),l=r(15),n=r.n(l),c=r(18),d=r(22),u=r(23),b=r(5),p=r(24),f=r(25);(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&t(e);const g=i.createGlobalStyle`${n.a}`,y=Object(s.hot)(()=>o.createElement(o.Fragment,null,o.createElement(g,null),o.createElement(i.ThemeProvider,{theme:p.a},o.createElement(b.b,null,o.createElement(f.a,null,o.createElement(c.a,{routes:u.a,history:d.a,fallback:o.createElement("p",null,"Loading...")}))))));var v,h;a.render(o.createElement(y,null),document.querySelector("[data-react-app]")),(v=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(v.register(g,"GlobalStyle","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/entrypoints/app.tsx"),v.register(y,"App","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/entrypoints/app.tsx")),(h=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&h(e)}.call(this,r(2)(e))}]);