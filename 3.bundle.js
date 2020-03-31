(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{36:function(e,r,t){"use strict";t.r(r),function(e){t.d(r,"STORAGE_KEY",(function(){return b}));var o,a=t(0),n=t(2),l=t(39),c=t(4),i=t(40),s=t(10),u=t(41);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const b=`${window.location.hostname}-counter-provider`,p=()=>a.createElement(l.b,null,a.createElement(h,null,a.createElement(u.a,null,a.createElement(f,null)))),f=()=>{const e=a.useContext(l.a);if(!e)return null;const{state:r,dispatch:t}=e;a.useEffect(()=>{const e=c.a(b);e&&t({type:"RESTORE",payload:e})},[]);const o=a.useCallback(()=>t({type:"INCREMENT"}),[]),n=a.useCallback(()=>c.b(r,b),[r]);return a.createElement(a.Fragment,null,a.createElement(w,null,"Sync Counter"),a.createElement(v,{"data-testid":"count"},"Count: ",r.count),a.createElement(C,null,a.createElement(s.a,{onPress:o,label:"INCREMENT",fontsize:18}),a.createElement(s.a,{onPress:n,label:"SAVE",fontsize:18})),a.createElement(m,null,a.createElement(i.a,{href:"/async"},"To Async page")))};d(f,"useContext{value}\nuseEffect{}\nuseCallback{handlePress}\nuseCallback{handleSaveCounter}");const w=n.default.h1`
  font-size: 36px;
  font-weight: bold;
`,v=n.default.p`
  font-size: 24px;
  line-height: 2;
  text-align: center;
  padding: 18px 0;
`,h=n.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,C=n.default.div`
  text-align: center;
  > button:nth-child(n + 2) {
    margin-left: 12px;
  }
`,m=n.default.p`
  text-align: center;
  margin-top: 24px;
`,g=p;var x,_;r.default=g,(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(x.register(b,"STORAGE_KEY","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx"),x.register(p,"CounterContainer","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx"),x.register(f,"Counter","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx"),x.register(w,"Title","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx"),x.register(v,"Count","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx"),x.register(h,"CardWrapper","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx"),x.register(C,"ButtonWrapper","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx"),x.register(m,"Navigation","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx"),x.register(g,"default","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/screen/Counter.tsx")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}.call(this,t(1)(e))},39:function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return u}));var o,a=t(0);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const l=a.createContext(null),c=l.Consumer,i={count:0},s=(e,r)=>{switch(console.log(`[dispatch] ${r.type}`),r.type){case"RESTORE":return r.payload;case"INCREMENT":return{...e,count:e.count+1};default:return e}},u=e=>{const[r,t]=a.useReducer(s,i),o={state:r,dispatch:t};return a.createElement(l.Provider,{value:o},e.children)};var d,b;n(u,"useReducer{[state, dispatch](initialState)}"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(l,"CounterContext","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/providers/CounterProvider.tsx"),d.register(c,"CounterConsumer","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/providers/CounterProvider.tsx"),d.register(i,"initialState","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/providers/CounterProvider.tsx"),d.register(s,"reducer","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/providers/CounterProvider.tsx"),d.register(u,"CounterProvider","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/providers/CounterProvider.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,t(1)(e))},40:function(e,r,t){"use strict";(function(e){var o,a=t(0),n=t(9);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e){const r=a.useContext(n.b),t=`${/boilerplate_reactweb/}${(e.href||"/").slice(1)}`,o=a.useCallback(e=>{e.preventDefault(),r.push(t)},[r,t]);return a.createElement("a",l({onClick:o},e,{href:t}))}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(c,"useContext{history}\nuseCallback{handleClick}");const i=c;var s,u;r.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"Link","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/routers/components/Link.tsx"),s.register(i,"default","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/routers/components/Link.tsx")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,t(1)(e))},41:function(e,r,t){"use strict";(function(e){var o,a=t(0),n=t(2);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const l=e=>a.createElement(c,null,e.children),c=n.default.div`
  display: inline-block;
  background: #fff;
  padding: 36px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
`,i=l;var s,u;r.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(l,"Card","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/shared/Card.tsx"),s.register(c,"StyledCard","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/shared/Card.tsx"),s.register(i,"default","/home/runner/work/boilerplate_reactweb/boilerplate_reactweb/src/scripts/views/shared/Card.tsx")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,t(1)(e))}}]);