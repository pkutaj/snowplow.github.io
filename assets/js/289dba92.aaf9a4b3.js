"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[91765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Setup",date:"2020-02-25",sidebar_position:10},a=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/c-tracker/setup/index",id:"migrated/collecting-data/collecting-from-own-applications/c-tracker/setup/index",title:"Setup",description:"Tracker compatibility",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/setup/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/c-tracker/setup",slug:"/migrated/collecting-data/collecting-from-own-applications/c-tracker/setup/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/setup/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"Setup",date:"2020-02-25",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"C++ Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/"},next:{title:"Initialisation",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/initialisation/"}},c={},p=[{value:"Tracker compatibility",id:"tracker-compatibility",level:2},{value:"Installing in your project",id:"installing-in-your-project",level:2},{value:"Using cmake",id:"using-cmake",level:3},{value:"Copying files to your project",id:"copying-files-to-your-project",level:3},{value:"Additional requirements under Linux",id:"additional-requirements-under-linux",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tracker-compatibility"},"Tracker compatibility"),(0,i.kt)("p",null,"The Snowplow C++ Tracker has been built and tested using C++ 11 as a minimum."),(0,i.kt)("p",null,"Supported operating systems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"macOS"),(0,i.kt)("li",{parentName:"ul"},"Windows"),(0,i.kt)("li",{parentName:"ul"},"Linux")),(0,i.kt)("h2",{id:"installing-in-your-project"},"Installing in your project"),(0,i.kt)("p",null,"There are two ways to install the tracker in your app:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"By including the project using cmake."),(0,i.kt)("li",{parentName:"ol"},"By copying source files inside the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"include"),"\xa0folder into your codebase.")),(0,i.kt)("h3",{id:"using-cmake"},"Using cmake"),(0,i.kt)("p",null,"Cmake version 3.14 or greater is required. You may add the library to your project target (",(0,i.kt)("inlineCode",{parentName:"p"},"your-target"),") using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"FetchContent"),"\xa0like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"include(FetchContent)\nFetchContent_Declare(\n    snowplow\n    GIT_REPOSITORY https://github.com/snowplow/snowplow-cpp-tracker\n    GIT_TAG        1.0.0\n)\nFetchContent_MakeAvailable(snowplow)\ntarget_link_libraries(your-target snowplow)\n")),(0,i.kt)("h3",{id:"copying-files-to-your-project"},"Copying files to your project"),(0,i.kt)("p",null,"Download the most recent release from the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-cpp-tracker/releases"},"releases section"),". Everything in the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"include"),"\xa0folder will need to be included in your application."),(0,i.kt)("p",null,"The project has two dependencies that need to be included in your project:\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nlohmann/json"},"nlohmann/json"),"\xa0and\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.sqlite.org/download.html"},"the amalgamated version of sqlite3"),". You will need to update the include paths in headers\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"include/snowplow/thirdparty/json.hpp"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"include/snowplow/thirdparty/sqlite3.hpp"),"."),(0,i.kt)("h3",{id:"additional-requirements-under-linux"},"Additional requirements under Linux"),(0,i.kt)("p",null,"Additionally, under Linux, the following libraries need to be installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"curl (using\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"apt install libcurl4-openssl-dev"),"\xa0on Ubuntu)"),(0,i.kt)("li",{parentName:"ul"},"uuid (using\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"apt install uuid-dev"),"\xa0on Ubuntu)")))}s.isMDXComponent=!0}}]);