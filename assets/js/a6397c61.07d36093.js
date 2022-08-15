"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[84851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const l={title:"MailGun",date:"2020-02-26",sidebar_position:50},i=void 0,r={unversionedId:"collecting-data/collecting-data-from-third-parties/mailgun/index",id:"collecting-data/collecting-data-from-third-parties/mailgun/index",title:"MailGun",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/mailgun/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/mailgun",slug:"/collecting-data/collecting-data-from-third-parties/mailgun/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/mailgun/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/mailgun/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:50,frontMatter:{title:"MailGun",date:"2020-02-26",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"MailChimp",permalink:"/docs/collecting-data/collecting-data-from-third-parties/mailchimp/"},next:{title:"Mandrill",permalink:"/docs/collecting-data/collecting-data-from-third-parties/mandrill/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"Mailgun",id:"mailgun",level:2}],s={toc:c};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.mailgun.com/"},"Mailgun"),"."),(0,o.kt)("p",null,"Available events are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Delivered Messages"),(0,o.kt)("li",{parentName:"ul"},"Dropped Messages"),(0,o.kt)("li",{parentName:"ul"},"Hard Bounces"),(0,o.kt)("li",{parentName:"ul"},"Spam Complaints"),(0,o.kt)("li",{parentName:"ul"},"Unsubscribes"),(0,o.kt)("li",{parentName:"ul"},"Clicks"),(0,o.kt)("li",{parentName:"ul"},"Opens")),(0,o.kt)("h3",{id:"compatibility"},"Compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r97-knossos"},"R97 Knossos"),"+"," (",(0,o.kt)("inlineCode",{parentName:"li"},"POST"),"-","capable collectors only)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://documentation.mailgun.com/en/latest/user_manual.html#webhooks"},"Mailgun webhook API"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Integrating Mailgun's webhooks into Snowplow is a two-stage process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure Mailgun to send events to Snowplow"),(0,o.kt)("li",{parentName:"ol"},"(Optional) Create the Mailgun events tables into Amazon Redshift")),(0,o.kt)("h2",{id:"mailgun"},"Mailgun"),(0,o.kt)("p",null,"First login to Mailgun. Select\xa0",(0,o.kt)("strong",{parentName:"p"},"Webhooks"),"\xa0from the top panel."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36372).Z,width:"1187",height:"751"})),(0,o.kt)("p",null,"Then select the domain for which you want to configure snowplow."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2553).Z,width:"1205",height:"538"})),(0,o.kt)("p",null,"Once you have the desired domain selected, you can configure snowplow for the type of events that interest you."),(0,o.kt)("p",null,'Following is an example configuring the "Spam Complaints" event. The process is identical for all events.'),(0,o.kt)("p",null,'Click on the cross next to the event type you woudl like to configure. In this case "Spam Complaints":'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67521).Z,width:"1187",height:"555"})),(0,o.kt)("p",null,"Then set the collector URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.mailgun/v1\n")),(0,o.kt)("p",null,"Finally click on\xa0",(0,o.kt)("strong",{parentName:"p"},"Set Webhook URL"),". You can optionally click on\xa0",(0,o.kt)("strong",{parentName:"p"},"Test Webhook"),"\xa0to verify that your collector instance is reachable from Mailgun's servers."),(0,o.kt)("p",null,"You may want to set the snowplow\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"aid="),"\xa0parameter in your URL query string to the company for which this webhook has been configured; this is the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"app_id"),"\xa0parameter taken from the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),", however this is optional. The company is also contained in the received messages."),(0,o.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter by appending a query string to the end of the URL, in combination or separately with aid above. Here is what the final URL would look like for a configured aid and platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.mailgun/v1?aid=<company>&p=<platform code>\n")),(0,o.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."))}u.isMDXComponent=!0},36372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mailgun-1-89f9f315ff609950647cb2558bfeff0d.png"},2553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mailgun-2-c0145bb44af8cad166858be686c3b45b.png"},67521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mailgun-3-3ce9ff3a625c2511140b49e8a9bbb9b5.png"}}]);