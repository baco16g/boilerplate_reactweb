!function(e){function t(t){for(var o,s,n=t[0],i=t[1],c=t[2],d=0,b=[];d<n.length;d++)s=n[d],a[s]&&b.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(u&&u(t);b.length;)b.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],o=!0,n=1;n<r.length;n++){var i=r[n];0!==a[i]&&(o=!1)}o&&(l.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},a={0:0},l=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,o){r=a[e]=[t,o]});t.push(r[2]=o);var l,n=document.createElement("script");n.charset="utf-8",n.timeout=120,s.nc&&n.setAttribute("nonce",s.nc),n.src=function(e){return s.p+""+({}[e]||e)+".bundle.js"}(e);var i=new Error;l=function(t){n.onerror=n.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",i.type=o,i.request=l,r[1](i)}a[e]=void 0}};var c=setTimeout(function(){l({type:"timeout",target:n})},12e4);n.onerror=n.onload=l,document.head.appendChild(n)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],i=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=i;l.push([27,1]),r()}([,,,,,function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return l});var o,a=r(0);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const l=a.createContext(null);var s,n;(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&s.register(l,"AppContext","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/contexts/AppContext.ts"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(e)}).call(this,r(2)(e))},,,,,,function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return n});var o,a=r(0),l=r.n(a);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const s=l.a.createContext(null),{Provider:n,Consumer:i}=s,c=s;var u,d;t.b=c,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(s,"HistoryContext","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/contexts/HistoryContext.ts"),u.register(n,"Provider","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/contexts/HistoryContext.ts"),u.register(i,"Consumer","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/contexts/HistoryContext.ts"),u.register(c,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/contexts/HistoryContext.ts")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return u});var o,a=r(0),l=r.n(a),s=r(5);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const n=s.a.Consumer,i={colorMode:"LIGHT"},c=(e,t)=>{switch(t.type){case"TOGGLE-COLOR-MODE":return{...e,colorMode:t.payload};default:return e}},u=e=>{const[t,r]=Object(a.useReducer)(c,i),o={state:t,dispatch:r},n=s.a.Provider;return l.a.createElement(n,{value:o},e.children)};var d,b;(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(d.register(n,"AppConsumer","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx"),d.register(i,"initialState","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx"),d.register(c,"reducer","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx"),d.register(u,"AppProvider","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/providers/AppProvider.tsx")),(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&b(e)}).call(this,r(2)(e))},,,,function(e,t,r){"use strict";(function(e){var o,a=r(0),l=r.n(a),s=r(11),n=r(17);function i(e){const t=Object(n.a)(e.routes,e.history);return l.a.createElement(s.a,{value:e.history},l.a.createElement(l.a.Suspense,{fallback:e.fallback},l.a.createElement(t,null)))}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const c=i;var u,d;t.a=c,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(i,"Router","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/components/Router.tsx"),u.register(c,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/components/Router.tsx")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o,a=r(0),l=r.n(a),s=r(18),n=r(19);function i(e,t){const r=Object(n.a)(t),o=Object(a.useMemo)(()=>new s.a(e),[e]),[i,c]=Object(a.useState)("div");return Object(a.useEffect)(()=>{const e=l.a.lazy(()=>o.resolve(r.pathname));c(()=>e)},[r]),i}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const c=i;var u,d;t.a=c,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(i,"useRouter","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/hooks/useRouter.tsx"),u.register(c,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/hooks/useRouter.tsx")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},,function(e,t,r){"use strict";(function(e){var o,a=r(0);function l(e){const[t,r]=Object(a.useState)(e.location);return Object(a.useEffect)(()=>{const t=e.listen(e=>r(e));return()=>t()},[e]),t}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const s=l;var n,i;t.a=s,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(n.register(l,"useLocation","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/hooks/useLocation.ts"),n.register(s,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/hooks/useLocation.ts")),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o,a=r(25);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const l=Object(a.a)(),s=l;var n,i;t.a=s,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(n.register(l,"history","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/history.ts"),n.register(s,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/history.ts")),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var o;(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const a=[{path:"/",action:()=>r.e(2).then(r.bind(null,39))}],l=a;var s,n;t.a=l,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(s.register(a,"routes","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/routes.ts"),s.register(l,"default","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/routers/routes.ts")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";var o=r(12);r.d(t,"a",function(){return o.a})},function(e,t,r){"use strict";(function(e){var o;r.d(t,"a",function(){return a}),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);const a={lightBackground:"linear-gradient(to bottom right, rgb(12, 157, 197), rgb(255, 255, 255))",darkBackground:"linear-gradient(to bottom right, rgb(0, 0, 0), rgb(50, 50, 50))"},l={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"},s={mobileS:`(min-width: ${l.mobileS})`,mobileM:`(min-width: ${l.mobileM})`,mobileL:`(min-width: ${l.mobileL})`,tablet:`(min-width: ${l.tablet})`,laptop:`(min-width: ${l.laptop})`,laptopL:`(min-width: ${l.laptopL})`,desktop:`(min-width: ${l.desktop})`,desktopL:`(min-width: ${l.desktop})`};var n,i;(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(n.register(a,"theme","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/theme.ts"),n.register(l,"size","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/theme.ts"),n.register(s,"device","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/theme.ts")),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(2)(e))},,,,function(e,t,r){"use strict";r.r(t),function(e){var t,o=r(0),a=r.n(o),l=r(3),s=r(24),n=r(4),i=r(13),c=r.n(i),u=r(16),d=r(20),b=r(21),p=r(22),f=r(23);(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&t(e);const y=n.createGlobalStyle`${c.a}`,g=Object(s.hot)(()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement(n.ThemeProvider,{theme:f.a},a.a.createElement(p.a,null,a.a.createElement("p",null,"aaaa"),a.a.createElement(u.a,{routes:b.a,history:d.a,fallback:a.a.createElement("p",null,"Loading...")})))));var v,h;l.render(a.a.createElement(g,null),document.querySelector("[data-react-app]")),(v=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(v.register(y,"GlobalStyle","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/entrypoints/app.tsx"),v.register(g,"App","/Users/yuk-kobayashi/dev/git.baco16g/boilerplate_reactweb/src/scripts/entrypoints/app.tsx")),(h=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&h(e)}.call(this,r(2)(e))}]);