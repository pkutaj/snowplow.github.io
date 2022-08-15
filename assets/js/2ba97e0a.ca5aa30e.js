"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[84896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Adding data to your events: context and more",date:"2022-01-31",sidebar_position:4e3},i=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/index",id:"collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/index",title:"Adding data to your events: context and more",description:"There are multiple ways to add extra data to your tracked events, adding richness and value to your dataset:",source:"@site/docs/collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/flutter-tracker/adding-data",slug:"/collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/",permalink:"/docs/collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:4e3,frontMatter:{title:"Adding data to your events: context and more",date:"2022-01-31",sidebar_position:4e3},sidebar:"tutorialSidebar",previous:{title:"Tracking events",permalink:"/docs/collecting-data/collecting-from-own-applications/flutter-tracker/tracking-events/"},next:{title:"Sessions and data model",permalink:"/docs/collecting-data/collecting-from-own-applications/flutter-tracker/sessions-and-data-model/"}},l={},s=[{value:"Event context",id:"event-context",level:2},{value:"Adding user and platform data with Subject",id:"adding-user-and-platform-data-with-subject",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are multiple ways to add extra data to your tracked events, adding richness and value to your dataset:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Event context using self-describing data: Attach event context, describing anything you like, in the form of self-describing JSONs."),(0,o.kt)("li",{parentName:"ol"},"Subject: Include information about the user, or the platform on which the event occurred.")),(0,o.kt)("h2",{id:"event-context"},"Event context"),(0,o.kt)("p",null,"Event context is an incredibly powerful aspect of Snowplow tracking, which allows you to create very rich data. It is based on the same self-describing JSON schemas as the self-describing events. Using event context, you can add any details you like to your events, as long as you can describe them in a self-describing JSON schema."),(0,o.kt)("p",null,'Each schema will describe a single "entity". All of an event\u2019s entities together form the event context. The event context will be sent as one field of the event, finally ending up in one column (',(0,o.kt)("inlineCode",{parentName:"p"},"context"),") in your data storage. There is no limit to how many entities can be attached to one event."),(0,o.kt)("p",null,"Note that context can be added to any event type, not just self-describing events. This means that even a simple event type like a page view can hold complex and extensive information \u2013 reducing the chances of data loss and the amount of modelling (JOINs etc.) needed in modelling, while increasing the value of each event, and the sophistication of the possible use cases."),(0,o.kt)("p",null,"The entities you provide are validated against their schemas as the event is processed (during the enrich phase). If there is a mistake or mismatch, the event is processed as a Bad Event."),(0,o.kt)("p",null,'Once defined, an entity can be attached to any kind of event. This is also an important point; it means your tracking is as DRY as possible. Using the same "user" or "image" or "search result" (etc.) entities throughout your tracking reduces error, and again makes the data easier to model.'),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tracker.track(\n    Structured(category: 'shop', action: 'add-to-basket'),\n    contexts: [\n        const SelfDescribing(\n            schema: 'iglu:com.my_company/movie_poster/jsonschema/1-0-0',\n            data: {\n                'movie_name': 'Solaris',\n                'poster_country': 'JP',\n                'poster_date': '1978-01-01'\n            }\n        ),\n        const SelfDescribing(\n            schema: 'iglu:com.my_company/customer/jsonschema/1-0-0',\n            data: {\n                'p_buy': 0.23,\n                'segment': 'young_adult'\n            }\n        )\n    ]\n);\n")),(0,o.kt)("h2",{id:"adding-user-and-platform-data-with-subject"},"Adding user and platform data with Subject"),(0,o.kt)("p",null,"Subject information describes the user and device associated with the event, such as their user ID, what type of device they used, or what size screen that device had."),(0,o.kt)("p",null,"This information can be entered during tracker initialization by passing a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"SubjectConfiguration"),"\xa0instance to the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Snowplow.createTracker"),"\xa0method. All of the information is optional."),(0,o.kt)("p",null,"Some subject information is filled automatically by the tracker. This includes the platform of the user, timezone, language, resolution, and viewport."),(0,o.kt)("p",null,"Please refer to the section on subject configuration on the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/flutter-tracker/initialization-and-configuration/"},"Configuration page"),"\xa0to learn more."))}u.isMDXComponent=!0}}]);