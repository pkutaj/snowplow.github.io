"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[89391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"Sendgrid",date:"2020-02-26",sidebar_position:110},i=void 0,l={unversionedId:"collecting-data/collecting-data-from-third-parties/sendgrid/index",id:"collecting-data/collecting-data-from-third-parties/sendgrid/index",title:"Sendgrid",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/sendgrid/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/sendgrid",slug:"/collecting-data/collecting-data-from-third-parties/sendgrid/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/sendgrid/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/sendgrid/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:110,frontMatter:{title:"Sendgrid",date:"2020-02-26",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Pingdom",permalink:"/docs/collecting-data/collecting-data-from-third-parties/pingdom/"},next:{title:"StatusGator",permalink:"/docs/collecting-data/collecting-data-from-third-parties/statusgator/"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"Configure SendGrid",id:"configure-sendgrid",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,o.kt)("a",{parentName:"p",href:"http://sendgrid.com/"},"SendGrid"),"."),(0,o.kt)("p",null,"Available events are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Processed"),(0,o.kt)("li",{parentName:"ul"},"Dropped"),(0,o.kt)("li",{parentName:"ul"},"Delivered"),(0,o.kt)("li",{parentName:"ul"},"Deferred"),(0,o.kt)("li",{parentName:"ul"},"Bounce"),(0,o.kt)("li",{parentName:"ul"},"Open"),(0,o.kt)("li",{parentName:"ul"},"Click"),(0,o.kt)("li",{parentName:"ul"},"Spam Report"),(0,o.kt)("li",{parentName:"ul"},"Unsubscribe"),(0,o.kt)("li",{parentName:"ul"},"Group Unsubscribe"),(0,o.kt)("li",{parentName:"ul"},"Group Resubscribe")),(0,o.kt)("h3",{id:"compatibility"},"Compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The support of the latest version of Sendgrid webhook has been introduced in\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r114-polonnaruwa"},"Snowplow R114 Polonnaruwa")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sendgrid.com/docs/API_Reference/Webhooks/index.html"},"SendGrid webhook API"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Integrating SendGrid's webhooks into Snowplow is a two-stage process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure SendGrid to send events to Snowplow"),(0,o.kt)("li",{parentName:"ol"},"(Optional) Create the SendGrid events tables for Amazon Redshift")),(0,o.kt)("h2",{id:"configure-sendgrid"},"Configure SendGrid"),(0,o.kt)("p",null,"First login to SendGrid. Select\xa0",(0,o.kt)("strong",{parentName:"p"},"Settings"),"\xa0from the menu panel along the left-hand side of the screen. You should then navigate in the expanded list to the\xa0",(0,o.kt)("strong",{parentName:"p"},"Mail Settings"),"\xa0page."),(0,o.kt)("p",null,"Select\xa0",(0,o.kt)("strong",{parentName:"p"},"Event Notification"),"\xa0from the list by clicking the row. Ensure it's switched\xa0",(0,o.kt)("strong",{parentName:"p"},"ON"),"\xa0in order to send events to Snowplow."),(0,o.kt)("p",null,"Click\xa0",(0,o.kt)("strong",{parentName:"p"},"edit"),"\xa0on the top right-hand side of the\xa0",(0,o.kt)("strong",{parentName:"p"},"Event Notification"),"\xa0dropdown."),(0,o.kt)("p",null,"For the\xa0",(0,o.kt)("strong",{parentName:"p"},"HTTP POST URL"),"\xa0field you will need to provide the URI to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by SendGrid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://<collector host>/com.sendgrid/v3\n")),(0,o.kt)("p",null,"Our Webhooks setup page should look like this after we have added our\xa0",(0,o.kt)("strong",{parentName:"p"},"HTTP POST URL"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2020/10/sendgrid.png"},(0,o.kt)("img",{parentName:"a",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2020/10/sendgrid.png?w=1024",alt:null}))),(0,o.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter by appending a query string to the end of the URL so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://<collector host>/com.sendgrid/v3?p=<platform code>\n")),(0,o.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,o.kt)("p",null,"The other values you can set up manually in the similar fashion are\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"nuid"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"aid"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"cv"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"eid"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ttm"),", and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,o.kt)("p",null,"Before we save our SendGrid webhook we can configure what types of events SendGrid will send to our webhook and what channels will trigger these events. Simply select the boxes that are applicable to you and SendGrid will send these events to our webhook."))}c.isMDXComponent=!0}}]);