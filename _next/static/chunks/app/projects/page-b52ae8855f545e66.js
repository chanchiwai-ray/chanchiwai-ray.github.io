(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{8106:(e,t,a)=>{Promise.resolve().then(a.bind(a,4596)),Promise.resolve().then(a.bind(a,1642))},4146:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return n},getImageProps:function(){return c}});let r=a(1732),s=a(666),l=a(7970),i=r._(a(5514));function c(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let n=l.Image},4084:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var r=a(5155),s=a(8173),l=a.n(s);let i=e=>{let{href:t,...a}=e,s=t&&t.startsWith("/"),i=t&&t.startsWith("#");return s?(0,r.jsx)(l(),{className:"break-words",href:t,...a}):i?(0,r.jsx)("a",{className:"break-words",href:t,...a}):(0,r.jsx)("a",{className:"break-words",target:"_blank",rel:"noopener noreferrer",href:t,...a})}},4596:(e,t,a)=>{"use strict";a.d(t,{default:()=>p});var r=a(5155),s=a(2115),l=a(4146),i=a.n(l);let c=a(2818).env.BASE_PATH,n=e=>{let{src:t,...a}=e;return(0,r.jsx)(i(),{src:"".concat(c||"").concat(t),...a})};var d=a(4084);function o(e){let{title:t,techs:a,currentTech:s,setTech:l,setPage:i}=e,c=Array.from(a).sort((e,t)=>t[1]-e[1]);return(0,r.jsx)("div",{className:"hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex",children:(0,r.jsxs)("div",{className:"px-6 py-4",children:[(0,r.jsx)("button",{onClick:()=>l(""),children:""===s?(0,r.jsx)("h3",{className:"font-bold uppercase text-primary-500",onClick:()=>{l(""),i(1)},children:t}):(0,r.jsx)("h3",{className:"font-bold uppercase",onClick:()=>{l(""),i(1)},children:t})}),(0,r.jsx)("ul",{children:a&&c.map((e,t)=>(0,r.jsx)("li",{className:"my-1",children:(0,r.jsx)("button",{onClick:()=>{l(e[0]),i(1)},children:s===e[0]?(0,r.jsx)("p",{"aria-label":"View projects techged with ".concat(e[0]),className:"px-3 text-sm font-medium uppercase text-primary-500",children:"".concat(e[0]," (").concat(e[1],")")}):(0,r.jsx)("p",{"aria-label":"View projects techged with ".concat(e[0]),className:"px-3 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500",children:"".concat(e[0]," (").concat(e[1],")")})})},t))})]})})}function h(e){let{totalPages:t,currentPage:a,setPage:s}=e,l=a-1>0,i=a+1<=t;return(0,r.jsx)("div",{className:"space-y-2 pb-8 pt-6 md:space-y-5",children:(0,r.jsxs)("nav",{className:"flex justify-between",children:[(0,r.jsx)("button",{className:"disabled:opacity-50",disabled:!l,onClick:()=>s(a-1),children:"Previous"}),(0,r.jsxs)("span",{children:[a," of ",t]}),(0,r.jsx)("button",{className:"disabled:opacity-50",disabled:!i,onClick:()=>s(a+1),children:"Next"})]})})}function x(e){let{title:t,description:a,image:s,link:l,technologies:i,setTech:c,setPage:o}=e;return(0,r.jsxs)("div",{className:"".concat(s&&"h-full","  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"),children:[s&&(l?(0,r.jsx)(d.A,{href:l,"aria-label":"Link to ".concat(t),children:(0,r.jsx)(n,{alt:t,src:s,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})}):(0,r.jsx)(n,{alt:t,src:s,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold leading-8 tracking-tight",children:l?(0,r.jsx)(d.A,{href:l,"aria-label":"Link to ".concat(t),children:t}):t}),(0,r.jsx)("div",{className:"flex flex-wrap",children:null==i?void 0:i.map(e=>(0,r.jsx)("button",{onClick:()=>{c(e),o(1)},children:(0,r.jsx)("p",{className:"mr-3 pt-1 text-sm font-medium uppercase text-primary-500",children:e.split(" ").join("-")})},e))}),(0,r.jsx)("div",{className:"prose my-3 max-w-none text-gray-500 hover:text-gray-400",children:a}),l&&(0,r.jsx)(d.A,{href:l,className:"text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"Link to ".concat(t),children:"Learn more →"})]})]})}function m(e){let{projects:t,totalPages:a,currentPage:s,setTech:l,setPage:i}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("ul",{children:[t.map(e=>(0,r.jsx)("li",{className:"pb-5",children:(0,r.jsx)(x,{title:e.name,description:e.description,image:e.image,link:e.link,technologies:e.technologies,setTech:l,setPage:i})},e.name)),(0,r.jsx)(h,{totalPages:a,currentPage:s,setPage:i})]})})}function p(e){let{projects:t}=e,[a,l]=(0,s.useState)(""),[i,c]=(0,s.useState)(1),n=t.filter(e=>e.technologies.includes(a)),d=new Map;for(let e of t)for(let t of e.technologies)d.set(t,(d.get(t)||0)+1);let h=0,x=[];return""===a?(h=Math.ceil(t.length/3),x=t.slice((i-1)*3,3*i)):(h=Math.ceil(n.length/3),x=n.slice((i-1)*3,3*i)),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{title:"All techs",techs:d,currentTech:a,setTech:l,setPage:c}),(0,r.jsx)(m,{projects:x,totalPages:h,currentPage:i,setTech:l,setPage:c})]})}},1642:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});var r=a(5155);function s(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,r.jsx)("div",{className:"space-y-2 pb-8 pt-6 md:space-y-5",children:(0,r.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Projects"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"pb-6 pt-6",children:(0,r.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"All Projects"})}),(0,r.jsx)("div",{className:"flex sm:space-x-24",children:t})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[173,970,441,517,358],()=>t(8106)),_N_E=e.O()}]);