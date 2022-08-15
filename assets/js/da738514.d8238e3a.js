"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[66393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),c=r,u=k["".concat(d,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Video tracking",date:"2021-12-23",sidebar_position:4500},i=void 0,o={unversionedId:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/video-tracking/index",id:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/video-tracking/index",title:"Video tracking",description:"Video tracking enables collecting events about video playback from the\xa0Video node\xa0provided in the Roku SceneGraph SDK for media playback. Once enabled for a Video node, the tracker subscribes to selected events and tracks them automatically. This makes adding video tracking into your Roku channels really simple.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/video-tracking/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/video-tracking",slug:"/migrated/collecting-data/collecting-from-own-applications/roku-tracker/video-tracking/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/video-tracking/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:4500,frontMatter:{title:"Video tracking",date:"2021-12-23",sidebar_position:4500},sidebar:"tutorialSidebar",previous:{title:"Configuring how events are sent",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/configuration/"},next:{title:"Device info context",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/device-context/"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Media Player Events",id:"media-player-events",level:2},{value:"Captured Types of Events",id:"captured-types-of-events",level:2},{value:"Playback Position Events",id:"playback-position-events",level:3},{value:"Event Type:\xa0<code>percentprogress</code>",id:"event-typepercentprogress",level:4},{value:"Event Type:\xa0<code>position</code>",id:"event-typeposition",level:4},{value:"State Change Events",id:"state-change-events",level:3}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Video tracking enables collecting events about video playback from the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developer.roku.com/en-gb/docs/references/scenegraph/media-playback-nodes/video.md"},"Video node"),"\xa0provided in the Roku SceneGraph SDK for media playback. Once enabled for a Video node, the tracker subscribes to selected events and tracks them automatically. This makes adding video tracking into your Roku channels really simple."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To start video tracking for a Video node, assign a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"roAssociativeArray"),"\xa0with the video node to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"enableVideoTracking"),"\xa0property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'m.global.snowplow.enableVideoTracking = {\n    label: "videoLabel", \' optional\n    video: m.Video\n}\n')),(0,r.kt)("p",null,"In addition to the video node, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"enableVideoTracking"),"\xa0property accepts several optional attributes listed in the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"video")),(0,r.kt)("td",{parentName:"tr",align:null},"Video"),(0,r.kt)("td",{parentName:"tr",align:null},"Video node to be tracked"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"An identifiable custom label sent with the event"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.captureEvents")),(0,r.kt)("td",{parentName:"tr",align:null},"String","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Types of events to capture"),(0,r.kt)("td",{parentName:"tr",align:null},"no, defaults to all events except for\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"position"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.boundaries")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Percentage boundaries in playback for which events will be sent"),(0,r.kt)("td",{parentName:"tr",align:null},"no, defaults to\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"[10, 25, 50, 75]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.positionInterval")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval in seconds in which\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"position"),"\xa0events should be reported"),(0,r.kt)("td",{parentName:"tr",align:null},"no, defaults to 5")))),(0,r.kt)("p",null,"To stop tracking events from the video node, set the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"disableVideoTracking"),"\xa0property. The tracker will then stop observing and tracking events from the video node. The property should be set with an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"roAssociativeArray"),"\xa0with exactly one attribute,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"video"),", like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"m.global.snowplow.disableVideoTracking = {\n    video: m.video\n}\n")),(0,r.kt)("h2",{id:"media-player-events"},"Media Player Events"),(0,r.kt)("p",null,"All playback events are tracked automatically and conform to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"media_player_event"),"\xa0schema. The schema has two properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of event"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"Identifiable custom label"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"The events are enriched with two context entities. The first is the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"media_player"),"\xa0context entity that provides the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currentTime")),(0,r.kt)("td",{parentName:"tr",align:null},"The current playback time"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"duration")),(0,r.kt)("td",{parentName:"tr",align:null},"A double-precision floating-point value indicating the duration of the media in seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ended")),(0,r.kt)("td",{parentName:"tr",align:null},"If playback of the media has ended"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isLive")),(0,r.kt)("td",{parentName:"tr",align:null},"If the media is live"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loop")),(0,r.kt)("td",{parentName:"tr",align:null},"If the video should restart after ending"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"muted")),(0,r.kt)("td",{parentName:"tr",align:null},"If the media element is muted"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"paused")),(0,r.kt)("td",{parentName:"tr",align:null},"If the media element is paused"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"percentProgress")),(0,r.kt)("td",{parentName:"tr",align:null},"The percent of the way through the media"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"playbackRate")),(0,r.kt)("td",{parentName:"tr",align:null},"Playback rate (1 is normal)"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"volume"),"\xa0."),(0,r.kt)("td",{parentName:"tr",align:null},"Volume percent"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,"The second is the Roku\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"video"),"\xa0context with these properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"videoId")),(0,r.kt)("td",{parentName:"tr",align:null},"ID generated when video tracking of the video node was initialized."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contentId")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of video provided in content metadata."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contentTitle")),(0,r.kt)("td",{parentName:"tr",align:null},"Title of video provided in content metadata."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contentUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of video provided in content metadata."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contentType")),(0,r.kt)("td",{parentName:"tr",align:null},"Category of video (e.g., movie, season, series) provided in content metadata."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"streamFormat")),(0,r.kt)("td",{parentName:"tr",align:null},"Container format of video (e.g., mp4, wma, mkv) provided in content metadata."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"streamUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the current stream."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"measuredBitrate")),(0,r.kt)("td",{parentName:"tr",align:null},"Measured bitrate (bps) of the network when the stream was selected."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"streamBitrate")),(0,r.kt)("td",{parentName:"tr",align:null},"Current bitrate of the stream."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isUnderrun")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the stream was downloaded due to an underrun."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isResumed")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the playback was resumed after trickplay."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"videoFormat")),(0,r.kt)("td",{parentName:"tr",align:null},"Video codec of the currently playing video stream (e.g., hevc, mpeg2, mpeg4","_","15)."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeToStartStreaming")),(0,r.kt)("td",{parentName:"tr",align:null},"Time in seconds from playback being started until the video actually began playing."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"Width of the video play window in pixels. 0 if the play window is set to the width of the entire display screen."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:null},"Height of the video play window in pixels. 0 if the play window is set to the height of the entire display screen."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"errorStr")),(0,r.kt)("td",{parentName:"tr",align:null},"A diagnostic message indicating a video play error. Refer to the Roku Video documentation for the format of the string."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"captured-types-of-events"},"Captured Types of Events"),(0,r.kt)("p",null,"The tracker automatically captures several types of events. You may configure which types of events to track by passing a list of the types into the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"options.captureEvents"),"\xa0property during tracker initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'m.global.snowplow.enableVideoTracking = {\n    video: m.Video,\n    options: {\n        captureEvents: ["playing", "paused"]\n    }\n}\n')),(0,r.kt)("p",null,"Overall, the types of events can be grouped into two categories: playback position events, and state change events."),(0,r.kt)("h3",{id:"playback-position-events"},"Playback Position Events"),(0,r.kt)("p",null,'These "ping" events report changes in the playback position of the video while playing. There are two types of the events:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"percentprogress"),"\xa0events report when the playback reaches certain boundaries defined as percentages of the total playback duration."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"position"),"\xa0events are regular events sent when the playback changes by a certain number of seconds.")),(0,r.kt)("h4",{id:"event-typepercentprogress"},"Event Type:\xa0",(0,r.kt)("inlineCode",{parentName:"h4"},"percentprogress")),(0,r.kt)("p",null,"Percent progress events are sent when predefined percentage boundaries in playback are reached. The boundaries may be configured using a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"boundaries"),"\xa0list when initializing video tracking:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'m.global.snowplow.enableVideoTracking = {\n    video: m.Video,\n    options: {\n        captureEvents: ["percentprogress"],\n        boundaries: [25, 50, 75, 100]\n    }\n}\n')),(0,r.kt)("p",null,"The tracker sends percent progress events by default for the following percentage boundaries: 10%, 25%, 50%, and 75% of total playback."),(0,r.kt)("p",null,"These events can not be reported for live streams since they assume that the total duration of the video is known."),(0,r.kt)("h4",{id:"event-typeposition"},"Event Type:\xa0",(0,r.kt)("inlineCode",{parentName:"h4"},"position")),(0,r.kt)("p",null,"Position events report the current playback position in regular intervals. These events are not reported by default. They can be activated using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"options.captureEvents"),"\xa0property."),(0,r.kt)("p",null,"The events are sent whenever the playback head changes by more than the predefined position interval. The interval defaults to 5 seconds. It can be configured using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"options.positionInterval"),"\xa0property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'m.global.snowplow.enableVideoTracking = {\n    video: m.Video,\n    options: {\n        captureEvents: ["position"],\n        positionInterval: 15 \' seconds\n    }\n}\n')),(0,r.kt)("p",null,"These events do not require the total duration of the video to be known and can be reported for live streams as well."),(0,r.kt)("h3",{id:"state-change-events"},"State Change Events"),(0,r.kt)("p",null,"State change events are sent when the state of the video node changes due to interaction from the user, changes in the playback, or through any other influence. Transitions between the following states are captured:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paused")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buffering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stopped")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"finished")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Error occured in the playback. The\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"errorStr"),"\xa0property in the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"video"),"\xa0context will provide more details on the error.")))),(0,r.kt)("p",null,"The event type of the events (",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\xa0property) reflects the current state."),(0,r.kt)("p",null,"All of the state changes are reported by default. In order to capture only selected states, use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"options.captureEvents"),"\xa0property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'m.global.snowplow.enableVideoTracking = {\n    video: m.Video,\n    options: {\n        captureEvents: ["playing", "paused"]\n    }\n}\n')))}m.isMDXComponent=!0}}]);