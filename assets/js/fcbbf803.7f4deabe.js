"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[40327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Quick start guide",date:"2021-08-06",sidebar_position:10},i=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/quick-start-guide/index",id:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/quick-start-guide/index",title:"Quick start guide",description:"Tracker Maintenance Classification",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/quick-start-guide/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/quick-start-guide",slug:"/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/quick-start-guide/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/quick-start-guide/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"Quick start guide",date:"2021-08-06",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/"},next:{title:"Tracking events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/tracking-events/"}},l={},s=[{value:"Installation",id:"installation",level:2},{value:"Instrumentation",id:"instrumentation",level:2},{value:"Track events",id:"track-events",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Tracker Maintenance Classification"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@snowplow/react-native-tracker",alt:"Latest tracker version"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dependency-version/@snowplow/react-native-tracker/peer/react-native",alt:"Supported React Native versions"}))),(0,r.kt)("p",null,"In order to start sending events using the Snowplow React Native Tracker, the following steps are involved:"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install the tracker, add it as a dependency to your React Native app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install --save @snowplow/react-native-tracker\n")),(0,r.kt)("h2",{id:"instrumentation"},"Instrumentation"),(0,r.kt)("p",null,"Next, in your app create a new tracker using the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTracker")," method. As a minimal example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { createTracker } from '@snowplow/react-native-tracker';\n\nconst tracker = createTracker(\n    'appTracker',\n    {\n      endpoint: COLLECTOR_URL,\n    },\n);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"createTracker")," function takes as arguments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Required"),": The tracker namespace, which identifies each tracker"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Required"),": The Network configuration"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Optional"),": The Tracker Controller configuration")),(0,r.kt)("p",null,"The optional Tracker Controller configuration has as type definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"interface TrackerControllerConfiguration {\n  trackerConfig?: TrackerConfiguration,\n  sessionConfig?: SessionConfiguration,\n  emitterConfig?: EmitterConfiguration,\n  subjectConfig?: SubjectConfiguration,\n  gdprConfig?: GdprConfiguration,\n  gcConfig?: GCConfiguration\n}\n")),(0,r.kt)("p",null,"In other words, it provides a way for a fine grained tracker configuration."),(0,r.kt)("p",null,"As an example to create a tracker with all configurations provided (wherever applicable, the default values are shown):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const tracker = createTracker(\n    'appTracker',\n    {\n      endpoint: COLLECTOR_URL,\n      method: 'post'\n    },\n    {\n        trackerConfig: {\n            appId: 'my-app-id',\n            devicePlatform: 'mob',\n            base64Encoding: true,\n            logLevel: 'off',\n            applicationContext: true,\n            platformContext: true,\n            geoLocationContext: false,\n            sessionContext: true,\n            deepLinkContext: true,\n            screenContext: true,\n            screenViewAutotracking: true,\n            lifecycleAutotracking: false,\n            installAutotracking: true,\n            exceptionAutotracking: true,\n            diagnosticAutotracking: false\n        },\n        sessionConfig: {\n            foregroundTimeout: 1800,\n            backgroundTimeout: 1800\n        },\n        emitterConfig: {\n            bufferOption: 'single',\n            emitRange: 150,\n            threadPoolSize: 15,\n            byteLimitPost: 40000,\n            byteLimitGet: 40000\n        },\n        subjectConfig: {\n            userId: 'my-user-id',\n            networkUserId: '5d79770b-015b-4af8-8c91-b2ed6faf4b1e',\n            domainUserId: '7cdd5ea8-b0f5-47ea-a8bb-5ec8e98cdbd6',\n            useragent: 'some-useragent-string',\n            ipAddress: '123.45.67.89',\n            timezone: 'Europe/London',\n            language: 'en',\n            screenResolution: [123, 456],\n            screenViewport: [123, 456],\n            colorDepth: 20\n        },\n        gdprConfig: {\n            basisForProcessing: 'consent',\n            documentId: 'my-gdpr-doc-id',\n            documentVersion: '1.0.0',\n            documentDescription: 'my gdpr document description'\n        },\n        gcConfig: [\n            {\n                tag: 'my-first-gc-tag',\n                globalContexts: [\n                    {\n                        schema: 'my-gc-schema-01',\n                        data: {gcData: 'some data'}\n                    },\n                    {\n                        schema: 'my-gc-schema-02'\n                        data: {moreGCData: 'some more data'}\n                    },\n                ]\n            },\n            {\n                tag: 'another-gc-tag',\n                globalContexts: [\n                    {\n                        schema: 'my-gc-schema-03'\n                        data: {gcProp: 'some value'}\n                    },\n                ]\n            }\n        ]\n    }\n);\n")),(0,r.kt)("h2",{id:"track-events"},"Track events"),(0,r.kt)("p",null,"Once the tracker is initialized, you can use the tracker methods to track events, about which you can find out more in the following Tracking events section."))}d.isMDXComponent=!0}}]);