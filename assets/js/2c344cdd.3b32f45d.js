"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[59680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Initialization",date:"2020-02-26",sidebar_position:20},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/python-tracker/intialization/index",id:"collecting-data/collecting-from-own-applications/python-tracker/intialization/index",title:"Initialization",description:"Assuming you have completed the\xa0Python Tracker Setup\xa0for your Python project, you are now ready to initialize the Python Tracker.",source:"@site/docs/collecting-data/collecting-from-own-applications/python-tracker/intialization/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/python-tracker/intialization",slug:"/collecting-data/collecting-from-own-applications/python-tracker/intialization/",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/intialization/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/python-tracker/intialization/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Initialization",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/setup/"},next:{title:"Adding extra data: The Subject class",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/adding-extra-data-the-subject-class/"}},c={},p=[{value:"Importing the module",id:"importing-the-module",level:3},{value:"Creating a tracker",id:"creating-a-tracker",level:3},{value:"<code>emitters</code>",id:"emitters",level:4},{value:"<code>subject</code>",id:"subject",level:4},{value:"<code>namespace</code>",id:"namespace",level:4},{value:"<code>app_id</code>",id:"app_id",level:4},{value:"<code>encode_base64</code>",id:"encode_base64",level:4},{value:"<code>json_encoder</code> - (new in v0.9.0)",id:"json_encoder---new-in-v090",level:4}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Assuming you have completed the\xa0Python Tracker Setup\xa0for your Python project, you are now ready to initialize the Python Tracker."),(0,r.kt)("h3",{id:"importing-the-module"},"Importing the module"),(0,r.kt)("p",null,"Require the Python Tracker's module into your Python code like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from snowplow_tracker import Tracker, Emitter, Subject\n")),(0,r.kt)("p",null,"That's it - you are now ready to initialize a tracker instance."),(0,r.kt)("h3",{id:"creating-a-tracker"},"Creating a tracker"),(0,r.kt)("p",null,"The simplest tracker initialization only requires you to provide the Emitter's endpoint to which the tracker will log events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'e = Emitter("d3rkrsqld9gmqf.cloudfront.net")\nt = Tracker(e)\n')),(0,r.kt)("p",null,"The tracker parameters are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emitters")),(0,r.kt)("td",{parentName:"tr",align:null},"The emitter(s) to which events are sent"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject")),(0,r.kt)("td",{parentName:"tr",align:null},"The user being tracked"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject.Subject()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the tracker instance"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The application ID"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encode_base64")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable\xa0",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"base 64 encoding")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json_encoder")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom JSON serializer"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None"))))),(0,r.kt)("p",null,"Here is a more complete example in which every tracker parameter is set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'e = Emitter("d3rkrsqld9gmqf.cloudfront.net")\ns = Subject().set_platform("srv")\n\ntracker = Tracker( e, \n                   subject=s, \n                   namespace="cf", \n                   app_id="aid", \n                   encode_base64=False,\n                   json_encoder=my_custom_encoder)\n')),(0,r.kt)("h4",{id:"emitters"},(0,r.kt)("inlineCode",{parentName:"h4"},"emitters")),(0,r.kt)("p",null,"This can be a single emitter or an array containing at least one emitter. The tracker will send events to these emitters, which will in turn send them to a collector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'e1 = Emitter("mycollector.com")\ne2 = Emitter("myothercollector.com", port=8080)\ntracker = Tracker([e1, e2])\n')),(0,r.kt)("h4",{id:"subject"},(0,r.kt)("inlineCode",{parentName:"h4"},"subject")),(0,r.kt)("p",null,"The user which the Tracker will track. This should be an instance of the\xa0Subject\xa0class. You don't need to set this during Tracker construction; in this case the tracker will set a default subject, which you can also change using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.set_subject"),"\xa0method afterwards."),(0,r.kt)("p",null,"*","*",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"New in v0.9.0"))),(0,r.kt)("p",null,"Since version 0.9.0, you can also set a different subject per event instead of having to change the default subject. You can read more about it in the Subject documentation ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/python-tracker/adding-extra-data-the-subject-class/"},"here"),"."),(0,r.kt)("h4",{id:"namespace"},(0,r.kt)("inlineCode",{parentName:"h4"},"namespace")),(0,r.kt)("p",null,"If provided, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),"\xa0argument will be attached to every event fired by the new tracker. This allows you to later identify which tracker fired which event if you have multiple trackers running."),(0,r.kt)("h4",{id:"app_id"},(0,r.kt)("inlineCode",{parentName:"h4"},"app_id")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"app_id"),"\xa0argument lets you set the application ID to any string."),(0,r.kt)("h4",{id:"encode_base64"},(0,r.kt)("inlineCode",{parentName:"h4"},"encode_base64")),(0,r.kt)("p",null,"By default, unstructured events and custom contexts are encoded into Base64 to ensure that no data is lost or corrupted. You can turn encoding on or off using the Boolean\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"encode_base64"),"\xa0argument."),(0,r.kt)("h4",{id:"json_encoder---new-in-v090"},(0,r.kt)("inlineCode",{parentName:"h4"},"json_encoder")," - (new in v0.9.0)"),(0,r.kt)("p",null,"This parameter allows you to customize the JSON encoder used to serialize objects added to the payload. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from json.encoder import JSONEncoder\ndef complex_encoder(c):\n    if isinstance(c,complex):\n        return [c.real, c.imag]\n    return JSONEncoder.default(c)\n\nt = Tracker(e, json_encoder=complex_encoder)\n")))}s.isMDXComponent=!0}}]);