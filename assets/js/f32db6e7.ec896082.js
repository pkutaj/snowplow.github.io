"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[31905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Tracking the Subject",date:"2020-02-26",sidebar_position:30},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/index",id:"collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/index",title:"Tracking the Subject",description:"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event.",source:"@site/docs/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class",slug:"/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:30,frontMatter:{title:"Tracking the Subject",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/initialization/"},next:{title:"Tracking specific events",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/tracking-specific-events/"}},s={},p=[{value:"Tracking the Subject",id:"tracking-the-subject",level:3},{value:"Set user ID with\xa0<code>SetUserId</code>",id:"set-user-id-withsetuserid",level:3},{value:"Set screen resolution with\xa0<code>SetScreenResolution</code>",id:"set-screen-resolution-withsetscreenresolution",level:3},{value:"Set viewport dimensions with\xa0<code>SetViewport</code>",id:"set-viewport-dimensions-withsetviewport",level:3},{value:"Set color depth with\xa0<code>SetColorDepth</code>",id:"set-color-depth-withsetcolordepth",level:3},{value:"Set timezone with\xa0<code>SetTimezone</code>",id:"set-timezone-withsettimezone",level:3},{value:"Set the language with\xa0<code>SetLang</code>",id:"set-the-language-withsetlang",level:3},{value:"Set the IP Address with\xa0<code>SetIpAddress</code>",id:"set-the-ip-address-withsetipaddress",level:3},{value:"Set the useragent with\xa0<code>SetUseragent</code>",id:"set-the-useragent-withsetuseragent",level:3},{value:"Set the Domain User ID with\xa0<code>SetDomainUserId</code>",id:"set-the-domain-user-id-withsetdomainuserid",level:3},{value:"Set the Domain User ID with\xa0<code>SetNetworkUserId</code>",id:"set-the-domain-user-id-withsetnetworkuserid",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event."),(0,o.kt)("p",null,"Create a subject like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"subject := sp.InitSubject()\n")),(0,o.kt)("p",null,"The Subject class has a set of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Set...()"),"\xa0methods to attach extra data relating to the user to all tracked events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetUserId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetScreenResolution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetViewport")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetColorDepth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetTimezone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetLanguage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetIpAddress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetUseragent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetDomainUserId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetNetworkUserId"))),(0,o.kt)("h3",{id:"tracking-the-subject"},"Tracking the Subject"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject")," can be used into two ways."),(0,o.kt)("p",null,"When initialising the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tracker"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tracker := sp.InitTracker(\n  sp.RequireEmitter(emitter),\n  sp.OptionSubject(subject)\n)\n")),(0,o.kt)("p",null,"Or when you track an event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'tracker.TrackPageView(sp.PageViewEvent{\n  PageUrl: sp.NewString("acme.com"),\n  Subject: subject\n})\n')),(0,o.kt)("p",null,"When setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject")," as you track as event, you will override the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tracker")," level ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject")," for that specific event."),(0,o.kt)("h3",{id:"set-user-id-withsetuserid"},"Set user ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetUserId")),(0,o.kt)("p",null,"You can set the user ID to any string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'s.SetUserId( "{{USER ID}}" );\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'s.SetUserId("alexd");\n')),(0,o.kt)("h3",{id:"set-screen-resolution-withsetscreenresolution"},"Set screen resolution with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetScreenResolution")),(0,o.kt)("p",null,"If your code has access to the device's screen resolution, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetScreenResolution( {{WIDTH}}, {{HEIGHT}} );\n")),(0,o.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetScreenResolution(1366, 768);\n")),(0,o.kt)("h3",{id:"set-viewport-dimensions-withsetviewport"},"Set viewport dimensions with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetViewport")),(0,o.kt)("p",null,"If your code has access to the viewport dimensions, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetViewport( {{WIDTH}}, {{HEIGHT}} );\n")),(0,o.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetViewport(300, 200);\n")),(0,o.kt)("h3",{id:"set-color-depth-withsetcolordepth"},"Set color depth with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetColorDepth")),(0,o.kt)("p",null,"If your code has access to the bit depth of the device's color palette for displaying images, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetColorDepth( {{BITS PER PIXEL}} );\n")),(0,o.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetColorDepth(32);\n")),(0,o.kt)("h3",{id:"set-timezone-withsettimezone"},"Set timezone with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetTimezone")),(0,o.kt)("p",null,"This method lets you pass a user's timezone in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.timezone( {{TIMEZONE}} );\n")),(0,o.kt)("p",null,"The timezone should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'s.SetColorDepth("Europe/London");\n')),(0,o.kt)("h3",{id:"set-the-language-withsetlang"},"Set the language with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetLang")),(0,o.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetLang( {{LANGUAGE}} );\n")),(0,o.kt)("p",null,"The language should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetLang('en');\n")),(0,o.kt)("h3",{id:"set-the-ip-address-withsetipaddress"},"Set the IP Address with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetIpAddress")),(0,o.kt)("p",null,"This method lets you pass a user's IP Address in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetIpAddress( {{IP ADDRESS}} );\n")),(0,o.kt)("p",null,"The IP Address should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetIpAddress('127.0.0.1');\n")),(0,o.kt)("h3",{id:"set-the-useragent-withsetuseragent"},"Set the useragent with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetUseragent")),(0,o.kt)("p",null,"This method lets you pass a user's useragent string in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetUseragent( {{USERAGENT}} );\n")),(0,o.kt)("p",null,"The useragent should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetUseragent('some useragent');\n")),(0,o.kt)("h3",{id:"set-the-domain-user-id-withsetdomainuserid"},"Set the Domain User ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetDomainUserId")),(0,o.kt)("p",null,"This method lets you pass a user's Domain User ID string in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetDomainUserId( {{DOMAIN USER ID}} );\n")),(0,o.kt)("p",null,"The Domain User ID should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetDomainUserId('domain-uid-12');\n")),(0,o.kt)("h3",{id:"set-the-domain-user-id-withsetnetworkuserid"},"Set the Domain User ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"SetNetworkUserId")),(0,o.kt)("p",null,"This method lets you pass a user's Network User ID string in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetNetworkUserId( {{NETWORK USER ID}} );\n")),(0,o.kt)("p",null,"The Network User ID should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s.SetNetworkUserId('network-uid-12');\n")))}c.isMDXComponent=!0}}]);