"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[92596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Setup",date:"2020-02-26",sidebar_position:10},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/php-tracker/setup/index",id:"collecting-data/collecting-from-own-applications/php-tracker/setup/index",title:"Setup",description:"Installation",source:"@site/docs/collecting-data/collecting-from-own-applications/php-tracker/setup/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/php-tracker/setup",slug:"/collecting-data/collecting-from-own-applications/php-tracker/setup/",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/setup/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/php-tracker/setup/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"Setup",date:"2020-02-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"PHP Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/"},next:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/initialization/"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Composer",id:"composer",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Currently the only supported method of installation is through Composer. For a tutorial on setting up a PHP project with Composer please follow this\xa0",(0,o.kt)("a",{parentName:"p",href:"https://getcomposer.org/doc/00-intro.md"},"link"),"."),(0,o.kt)("h3",{id:"composer"},"Composer"),(0,o.kt)("p",null,"Using Composer to manage your dependencies, simply add the Snowplow PHP Tracker to your project by including it in your composer.json file as a dependency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "require": {\n        "snowplow/snowplow-tracker": "0.4.0"\n    }\n}\n')),(0,o.kt)("p",null,"Assuming you have Composer setup correctly in the root of your project. Type the following command line argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"composer install #If composer has not been run yet\ncomposer update #If composer dependencies are already installed\n")),(0,o.kt)("p",null,"This will install the Snowplow Tracker and allow you to initialize a Tracker object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// Bare minimum Tracker initialization.\n \nuse Snowplow\\Tracker\\Tracker;\nuse Snowplow\\Tracker\\Subject;\nuse Snowplow\\Tracker\\Emitters\\SyncEmitter;\n\n$emitter = new SyncEmitter("collector_uri");\n$subject = new Subject();\n$tracker = new Tracker($emitter, $subject);\n')))}u.isMDXComponent=!0}}]);