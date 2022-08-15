"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[66959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Setup",date:"2020-02-26",sidebar_position:10},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/net-tracker/setup/index",id:"collecting-data/collecting-from-own-applications/net-tracker/setup/index",title:"Setup",description:"Tracker compatibility",source:"@site/docs/collecting-data/collecting-from-own-applications/net-tracker/setup/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/net-tracker/setup",slug:"/collecting-data/collecting-from-own-applications/net-tracker/setup/",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/setup/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/net-tracker/setup/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"Setup",date:"2020-02-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:".NET Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/"},next:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/initialization/"}},c={},s=[{value:"Tracker compatibility",id:"tracker-compatibility",level:2},{value:"Setup",id:"setup",level:2},{value:".NET Standard users",id:"net-standard-users",level:3},{value:"Xamarin users",id:"xamarin-users",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tracker-compatibility"},"Tracker compatibility"),(0,a.kt)("p",null,"Version 1.0.0+ marks the conversion of the core library to .NET Standard 1.4. This core (",(0,a.kt)("inlineCode",{parentName:"p"},"Snowplow.Tracker"),") is directly compatible with\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dotnet/standard/blob/master/docs/versions.md"},"these platforms"),". We have also published a Portable Class Library (PCL) wrapper providing extra features for Xamarin users. This is called ",(0,a.kt)("inlineCode",{parentName:"p"},"Snowplow.Tracker.PlatformExtensions"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"net-standard-users"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/.NET-tracker-setup#net-standard-users"}),".NET Standard users"),(0,a.kt)("p",null,"To add the .NET Tracker as a dependency to your project, install it in the Visual Studio Package Manager Console using\xa0",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/"},"NuGet"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Install-Package Snowplow.Tracker\n")),(0,a.kt)("h3",{id:"xamarin-users"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/.NET-tracker-setup#xamarin-users"}),"Xamarin users"),(0,a.kt)("p",null,"To add the .NET Tracker as a dependency to your project, install it in the Visual Studio Package Manager Console using\xa0",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/"},"NuGet"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Install-Package Snowplow.Tracker.PlatformExtensions\n")),(0,a.kt)("p",null,"Remember to add an assembly reference to the .NET Tracker to your project."))}u.isMDXComponent=!0}}]);