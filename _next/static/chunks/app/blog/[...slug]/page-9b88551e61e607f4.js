(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{419:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1465,23)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,7970,23)),Promise.resolve().then(r.bind(r,197)),Promise.resolve().then(r.bind(r,8801)),Promise.resolve().then(r.bind(r,4136)),Promise.resolve().then(r.bind(r,1674)),Promise.resolve().then(r.t.bind(r,1973,23))},5611:(e,t,r)=>{"use strict";r.d(t,{D:()=>c,N:()=>d});var n=r(2115),a=["light","dark"],s="(prefers-color-scheme: dark)",o="undefined"==typeof window,l=n.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(l))?e:i},d=e=>n.useContext(l)?e.children:n.createElement(m,{...e}),u=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:o=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:d=u,defaultTheme:m=o?"system":"light",attribute:v="data-theme",value:b,children:y,nonce:x}=e,[w,j]=n.useState(()=>g(c,m)),[k,C]=n.useState(()=>g(c)),S=b?Object.values(b):d,E=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=p());let n=b?b[t]:t,s=r?f():null,l=document.documentElement;if("class"===v?(l.classList.remove(...S),n&&l.classList.add(n)):n?l.setAttribute(v,n):l.removeAttribute(v),i){let e=a.includes(m)?m:null,r=a.includes(t)?t:e;l.style.colorScheme=r}null==s||s()},[]),N=n.useCallback(e=>{let t="function"==typeof e?e(e):e;j(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),T=n.useCallback(e=>{C(p(e)),"system"===w&&o&&!t&&E("system")},[w,t]);n.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),n.useEffect(()=>{let e=e=>{e.key===c&&N(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),n.useEffect(()=>{E(null!=t?t:w)},[t,w]);let L=n.useMemo(()=>({theme:w,setTheme:N,forcedTheme:t,resolvedTheme:"system"===w?k:w,themes:o?[...d,"system"]:d,systemTheme:o?k:void 0}),[w,N,t,k,o,d]);return n.createElement(l.Provider,{value:L},n.createElement(h,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:o,enableColorScheme:i,storageKey:c,themes:d,defaultTheme:m,attribute:v,value:b,children:y,attrs:S,nonce:x}),y)},h=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:o,enableSystem:l,enableColorScheme:i,defaultTheme:c,value:d,attrs:u,nonce:m}=e,h="system"===c,g="class"===o?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(o,"',s='setAttribute';"),f=i?(a.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=d?d[e]:e,s=t?e+"|| ''":"'".concat(n,"'"),l="";return i&&r&&!t&&a.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===o?t||n?l+="c.add(".concat(s,")"):l+="null":n&&(l+="d[s](n,".concat(s,")")),l},v=t?"!function(){".concat(g).concat(p(t),"}()"):l?"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(r,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(s,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(p("dark"),"}else{").concat(p("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(p(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+p(c,!1,!1)+"}").concat(f,"}catch(e){}}()"):"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(r,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(p(d?"x[e]":"e",!0),"}else{").concat(p(c,!1,!1),";}").concat(f,"}catch(t){}}();");return n.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})}),g=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},1362:(e,t,r)=>{"use strict";r.d(t,{BU:()=>h,IA:()=>d,YG:()=>m,ko:()=>u});var n=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,s(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))0>t.indexOf(n)&&i.call(e,n)&&(r[n]=e[n]);return r},h=(e,t,r)=>new Promise((n,a)=>{var s=e=>{try{l(r.next(e))}catch(e){a(e)}},o=e=>{try{l(r.throw(e))}catch(e){a(e)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,o);l((r=r.apply(e,t)).next())})},197:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(2115),a=r(5155),s=(e,t,r)=>new Promise((n,a)=>{var s=e=>{try{l(r.next(e))}catch(e){a(e)}},o=e=>{try{l(r.throw(e))}catch(e){a(e)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,o);l((r=r.apply(e,t)).next())}),o=e=>{let{title:t="Subscribe to the newsletter",apiUrl:r="/api/newsletter"}=e,o=(0,n.useRef)(null),[l,i]=(0,n.useState)(!1),[c,d]=(0,n.useState)(""),[u,m]=(0,n.useState)(!1);return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:t}),(0,a.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:e=>s(void 0,null,function*(){e.preventDefault();let t=yield fetch(r,{body:JSON.stringify({email:o.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:n}=yield t.json();if(n){i(!0),d("Your e-mail address is invalid or you are already subscribed!");return}o.current.value="",i(!1),m(!0)}),children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{htmlFor:"email-input",children:[(0,a.jsx)("span",{className:"sr-only",children:"Email address"}),(0,a.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:u?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:o,required:!0,type:"email",disabled:u})]})}),(0,a.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,a.jsx)("button",{className:"bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ".concat(u?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:u,children:u?"Thank you!":"Sign up"})})]}),l&&(0,a.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:c})]})},l=e=>{let{title:t,apiUrl:r}=e;return(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,a.jsx)(o,{title:t,apiUrl:r})})})}},8801:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(2115),a=r(5155),s=e=>{let{children:t}=e,r=(0,n.useRef)(null),[s,o]=(0,n.useState)(!1),[l,i]=(0,n.useState)(!1);return(0,a.jsxs)("div",{ref:r,onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1),i(!1)},className:"relative",children:[s&&(0,a.jsx)("button",{"aria-label":"Copy code",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(l?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:()=>{i(!0),navigator.clipboard.writeText(r.current.textContent),setTimeout(()=>{i(!1)},2e3)},children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:l?"text-green-400":"text-gray-300",children:l?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,a.jsx)("pre",{children:t})]})}},4136:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(5155),a=r(5611),s=r(2115),o=e=>{let{shortname:t,slug:r}=e,{theme:o}=(0,a.D)(),l=(0,s.useCallback)(()=>{window.disqus_config=function(){this.page.url=window.location.href,this.page.identifier=r};let e=document.createElement("script");e.src="https://"+t+".disqus.com/embed.js",e.setAttribute("data-timestamp",Date.now().toString()),e.async=!0,document.body.appendChild(e)},[t,r,o]);return(0,s.useEffect)(()=>{l()},[l]),(0,n.jsx)("div",{className:"disqus-frame",id:"disqus_thread"})};function l({id:e,host:t,repo:a,repoId:o,category:l,categoryId:i,mapping:c,term:d,strict:u,reactionsEnabled:m,emitMetadata:h,inputPosition:g,theme:f,lang:p,loading:v}){let[b,y]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{b||r.e(761).then(r.bind(r,3761)).then(()=>y(!0))},[]),b?(0,n.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:o,category:l,categoryid:i,mapping:c,term:d,strict:u,reactionsenabled:m,emitmetadata:h,inputposition:g,theme:f,lang:p,loading:v}):null}var i=e=>{let{themeURL:t,theme:r,darkTheme:s,repo:o,repositoryId:i,category:c,categoryId:d,reactions:u,metadata:m,inputPosition:h,lang:g,mapping:f}=e,{theme:p,resolvedTheme:v}=(0,a.D)();return(0,n.jsx)(l,{id:"comments-container",repo:o,repoId:i,category:c,categoryId:d,mapping:f,reactionsEnabled:u,emitMetadata:m,inputPosition:h,theme:""===t?"dark"===p||"dark"===v?s:r:t,lang:g,loading:"lazy"})},c=e=>{let{theme:t,darkTheme:r,repo:o,label:l,issueTerm:i}=e,{theme:c,resolvedTheme:d}=(0,a.D)(),u="dark"===c||"dark"===d?r:t,m="comments-container",h=(0,s.useCallback)(()=>{let e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo",o),e.setAttribute("issue-term",i),e.setAttribute("label",l),e.setAttribute("theme",u),e.setAttribute("crossorigin","anonymous"),e.async=!0;let t=document.getElementById(m);return t&&t.appendChild(e),()=>{let e=document.getElementById(m);e&&(e.innerHTML="")}},[u,i,l,o]);return(0,s.useEffect)(()=>{h()},[h]),(0,n.jsx)("div",{className:"utterances-frame relative",id:m})},d=r(1362),u=({commentsConfig:e,slug:t})=>{switch(e.provider){case"giscus":return(0,n.jsx)(i,(0,d.IA)({},e.giscusConfig));case"utterances":return(0,n.jsx)(c,(0,d.IA)({},e.utterancesConfig));case"disqus":return(0,n.jsx)(o,(0,d.IA)({slug:t},e.disqusConfig))}};function m(e){let{slug:t,comments:r}=e,[a,o]=(0,s.useState)(!1);return(null==r?void 0:r.provider)?(0,n.jsx)(n.Fragment,{children:a?(0,n.jsx)(u,{commentsConfig:r,slug:t}):(0,n.jsx)("button",{onClick:()=>o(!0),children:"Load Comments"})}):null}},1674:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(5155),a=r(2115);let s=e=>{let{provider:t}=e,[r,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{window.scrollY>50?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)("div",{className:"fixed bottom-8 right-8 hidden flex-col gap-3 ".concat(r?"md:flex":"md:hidden"),children:[t&&(0,n.jsx)("button",{"aria-label":"Scroll To Comment",onClick:()=>{var e;null===(e=document.getElementById("comment"))||void 0===e||e.scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,n.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,n.jsx)("button",{"aria-label":"Scroll To Top",onClick:()=>{window.scrollTo({top:0})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,n.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},1465:()=>{},1973:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[987,173,970,441,517,358],()=>t(419)),_N_E=e.O()}]);