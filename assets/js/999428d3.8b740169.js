"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[58562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return a?o.createElement(m,i(i({ref:t},p),{},{components:a})):o.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var c=2;c<l;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const l={title:"Google Analytics Plugin",date:"2020-08-21",sidebar_position:280},i=void 0,r={unversionedId:"migrated/collecting-data/collecting-from-own-applications/google-analytics-plugin/index",id:"migrated/collecting-data/collecting-from-own-applications/google-analytics-plugin/index",title:"Google Analytics Plugin",description:"The Google Analytics plugin allows you to mirror the events sent to GA to your Snowplow collector as well.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/google-analytics-plugin/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/google-analytics-plugin",slug:"/migrated/collecting-data/collecting-from-own-applications/google-analytics-plugin/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/google-analytics-plugin/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:280,frontMatter:{title:"Google Analytics Plugin",date:"2020-08-21",sidebar_position:280},sidebar:"tutorialSidebar",previous:{title:"API documentation",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/lua-tracker/api-documentation/"},next:{title:"Arduino Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/arduino-tracker/"}},s={},c=[{value:"Quickstart",id:"quickstart",level:2},{value:"Deployment with Google Tag Manager",id:"deployment-with-google-tag-manager",level:2},{value:"1. Create a new Custom JavaScript variable",id:"1-create-a-new-custom-javascript-variable",level:3},{value:"2. Add {{customTask - Snowplow duplicator}} to Google Analytics tags",id:"2-add-customtask---snowplow-duplicator-to-google-analytics-tags",level:3},{value:"Data structure",id:"data-structure",level:2}],p={toc:c};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Google Analytics plugin allows you to mirror the events sent to GA to your Snowplow collector as well."),(0,n.kt)("h2",{id:"quickstart"},"Quickstart"),(0,n.kt)("p",null,"You can use the plugin by requiring it and specifying your Snowplow endpoint:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<script>\n  // usual isogram\n  ga('create', 'UA-XXXXX-Y', 'auto');\n  ga('require', 'spGaPlugin', { endpoint: 'https://mycollector.mydomain.net' });\n  ga('send', 'pageView');\n<\/script>\n<script async src=\"https://cdn.jsdelivr.net/gh/snowplow/sp-js-assets/sp-ga-plugin/0.1.0/sp-ga-plugin.js\"><\/script>\n")),(0,n.kt)("p",null,"Where\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"https://mycollector.mydomain.net"),"\xa0is your Snowplow collector endpoint."),(0,n.kt)("h2",{id:"deployment-with-google-tag-manager"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/snowplow-incubator/snowplow-google-analytics-plugin#deployment-with-google-tag-manager"}),"Deployment with Google Tag Manager"),(0,n.kt)("p",null,"Google Tag Manager does not currently support loading plugins when using Google Analytics tag templates. A common workaround is to use a Custom HTML tag to load the tracker with the plugin, but this has the unfortunate consequence of requiring that\xa0",(0,n.kt)("em",{parentName:"p"},"all"),"\xa0tags to which the plugin should be applied use the same tracker name. This is difficult to do with Google Tag Manager in a way that doesn't compromise data collection quality."),(0,n.kt)("p",null,"The best way to deploy this using Google Tag Manager is to replicate the plugin functionality by overwriting the relevant task in the GA hit builder task queue. But instead of modifying\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"sendHitTask"),"\xa0directly, a safer way is to approach it via\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"customTask"),"."),(0,n.kt)("h3",{id:"1-create-a-new-custom-javascript-variable"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/snowplow-google-analytics-plugin#1-create-a-new-custom-javascript-variable"}),"1","."," Create a new Custom JavaScript variable"),(0,n.kt)("p",null,"Create a new Custom JavaScript variable, and name it {{customTask - Snowplow duplicator}}. Add the following code within:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function() {\n  // Add your snowplow collector endpoint here\n  var endpoint = 'https://mycollector.mydomain.com/';\n  \n  return function(model) {\n    var vendor = 'com.google.analytics';\n    var version = 'v1';\n    var path = ((endpoint.substr(-1) !== '/') ? endpoint + '/' : endpoint) + vendor + '/' + version;\n    \n    var globalSendTaskName = '_' + model.get('trackingId') + '_sendHitTask';\n    \n    var originalSendHitTask = window[globalSendTaskName] = window[globalSendTaskName] || model.get('sendHitTask');\n    \n    model.set('sendHitTask', function(sendModel) {\n      var payload = sendModel.get('hitPayload');\n      originalSendHitTask(sendModel);\n      var request = new XMLHttpRequest();\n      request.open('POST', path, true);\n      request.setRequestHeader('Content-type', 'text/plain; charset=UTF-8');\n      request.send(payload);\n    });\n  };\n}\n")),(0,n.kt)("p",null,"This stores a reference to the original\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"sendHitTask"),"\xa0in a globally scoped variable (e.g.\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"window['_UA-12345-1_sendHitTask']"),") to avoid multiple runs of this\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"customTask"),"\xa0from cascading on each other."),(0,n.kt)("h3",{id:"2-add-customtask---snowplow-duplicator-to-google-analytics-tags"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/snowplow-google-analytics-plugin#2-add-customtask---snowplow-duplicator-to-google-analytics-tags"}),"2","."," Add {{customTask - Snowplow duplicator}} to Google Analytics tags"),(0,n.kt)("p",null,"This variable must be added to every single Google Analytics tag in the GTM container, whose hits you want to duplicate to Snowplow."),(0,n.kt)("p",null,"The best way to do this is to leverage the Google Analytics Settings variable."),(0,n.kt)("p",null,"Regardless of whether you choose to add this variable directly to the tags' settings or into a Google Analytics Settings variable, you need to do the following."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Browse to the tags'\xa0",(0,n.kt)("strong",{parentName:"li"},"More Settings"),"\xa0option, expand it, and then expand\xa0",(0,n.kt)("strong",{parentName:"li"},"Fields to set"),'. If you are editing the tag directly (i.e. not using a Google Analytics Settings variable), you will need to check "Enable overriding settings in this tag" first.'),(0,n.kt)("li",{parentName:"ol"},"Add a new field with:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Field name"),": customTask"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Value"),": {{customTask - Snowplow duplicator}}")))),(0,n.kt)("p",null,"All tags which have this field set will now send the Google Analytics payload to the Snowplow endpoint."),(0,n.kt)("p",null,"Further reading on the topic:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.simoahava.com/analytics/google-analytics-settings-variable-in-gtm/"},(0,n.kt)("em",{parentName:"a"},"Google Analytics Settings Variable"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.simoahava.com/analytics/automatically-fork-google-analytics-hits-snowplow/"},(0,n.kt)("em",{parentName:"a"},"#GTMTips: Automatically Duplicate Google Analytics Hits To Snowplow")))),(0,n.kt)("h2",{id:"data-structure"},"Data structure"),(0,n.kt)("p",null,"You can find the specific schema for the properties that will be collected via Google Analytics in the IgluCentral repository:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.google.analytics"},"Google")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.google.analytics.measurement-protocol"},"Google Measurement Protocol")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.google.analytics.ecommerce"},"Google ecommerce")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.google.analytics.enhanced-ecommerce"},"Google ecommerce-enhanced")))}g.isMDXComponent=!0}}]);