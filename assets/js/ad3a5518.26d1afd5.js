"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[55401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Emitters",date:"2020-02-26",sidebar_position:60},i=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/python-tracker/emitters/index",id:"collecting-data/collecting-from-own-applications/python-tracker/emitters/index",title:"Emitters",description:"Tracker instances must be initialized with an emitter. This section will go into more depth about the Emitter class and its subclasses.",source:"@site/docs/collecting-data/collecting-from-own-applications/python-tracker/emitters/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/python-tracker/emitters",slug:"/collecting-data/collecting-from-own-applications/python-tracker/emitters/",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/emitters/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/python-tracker/emitters/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:60,frontMatter:{title:"Emitters",date:"2020-02-26",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Tracking specific events",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/tracking-specific-events/"},next:{title:"Contracts",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/contracts/"}},s={},c=[{value:"The basic Emitter class",id:"the-basic-emitter-class",level:2},{value:"The AsyncEmitter class",id:"the-asyncemitter-class",level:2},{value:"The CeleryEmitter class",id:"the-celeryemitter-class",level:2},{value:"The RedisEmitter class",id:"the-redisemitter-class",level:2},{value:"Manual flushing",id:"manual-flushing",level:3},{value:"Multiple emitters",id:"multiple-emitters",level:3},{value:"Custom emitters",id:"custom-emitters",level:3},{value:"Automatically retry sending failed events",id:"automatically-retry-sending-failed-events",level:3},{value:"Setting flush timer",id:"setting-flush-timer",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tracker instances must be initialized with an emitter. This section will go into more depth about the Emitter class and its subclasses."),(0,a.kt)("h2",{id:"the-basic-emitter-class"},"The basic Emitter class"),(0,a.kt)("p",null,"At its most basic, the Emitter class only needs a collector URI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from snowplow_tracker import Emitter\n\ne = Emitter("d3rkrsqld9gmqf.cloudfront.net")\n')),(0,a.kt)("p",null,"This is the signature of the constructor for the base Emitter class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'def __init__(\n        self,\n        endpoint: str,\n        protocol: Literal["http", "https"] = "http",\n        port: Optional[int] = None,\n        method: Literal["get", "post"] = "get",\n        buffer_size: Optional[int] = None,\n        on_success: Optional[Callable[[PayloadDictList], None]] = None,\n        on_failure: Optional[Callable[[int, PayloadDictList], None]] = None,\n        byte_limit: Optional[int] = None,\n        request_timeout: Optional[Union[float, Tuple[float, float]]] = None) -> None:\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Argument")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required?")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Type")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,a.kt)("td",{parentName:"tr",align:null},"The collector URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Dict")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"protocol")),(0,a.kt)("td",{parentName:"tr",align:null},"Request protocol: HTTP or HTTPS"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"List")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"port")),(0,a.kt)("td",{parentName:"tr",align:null},"The port to connect to"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Positive integer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"method")),(0,a.kt)("td",{parentName:"tr",align:null},"The method to use: \u201cget\u201d or \u201cpost\u201d"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"buffer_size")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of events to store before flushing"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Positive integer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"on_success")),(0,a.kt)("td",{parentName:"tr",align:null},"Callback executed when a flush is successful"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Function taking 1 argument")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"on_failure")),(0,a.kt)("td",{parentName:"tr",align:null},"Callback executed when a flush is unsuccessful"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Function taking 2 arguments")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"byte_limit")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of bytes to store before flushing"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Positive integer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"request_timeout")),(0,a.kt)("td",{parentName:"tr",align:null},"Timeout for HTTP requests"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Positive integer or tuple of 2 integers")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protocol"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"protocol"),'\xa0defaults to "http" but also supports "https".'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buffer_size"))),(0,a.kt)("p",null,"When the emitter receives an event, it adds it to a buffer. When the queue is full, all events in the queue get sent to the collector. The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"buffer_size"),"\xa0argument allows you to customize the queue size. By default, it is 1 for GET requests and 10 for POST requests. (So in the case of GET requests, each event is fired as soon as the emitter receives it.) If the emitter is configured to send POST requests, then instead of sending one for every event in the buffer, it will send a single request containing all those events in JSON format."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"byte_limit"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"byte_limit"),"\xa0is similar to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"buffer_size"),", but instead of counting events - it takes into account only the amount of bytes to be sent over the network.\xa0",(0,a.kt)("em",{parentName:"p"},"Warning"),": this limit is approximate with infelicity < 1%."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"on_success"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"on_success"),"\xa0is an optional callback that will execute whenever the queue is flushed successfully, that is, whenever every request sent has status code 200. It will be passed one argument: the number of events that were successfully sent."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"*","*","New in v0.9.0"))),(0,a.kt)("p",null,"Since version 0.9.0, the on","_","success callback function will be passed the array of successfully sent events, instead of just the number of them, in order to augment this functionality."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"on_failure"),"\xa0")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"on_failure"),"\xa0is similar, but executes when the flush is not wholly successful. It will be passed two arguments: the number of events that were successfully sent, and an array of unsent events."),(0,a.kt)("p",null,"An example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Prior to v0.9.0, the on_success callback receives only the number of successfully sent events\ndef success(num):\n    print(str(num) + " events sent successfully!")\n\n# Since v0.9.0, the on_success callback receives the array of successfully sent events\ndef new_success(arr):\n    for event_dict in arr:\n        print(event_dict)\n\ndef failure(num, arr):\n    print(str(num) + " events sent successfully!")\n    print("These events were not sent successfully:")\n    for event_dict in arr:\n        print(event_dict)\n     \n# prior to v0.9.0\n# e = Emitter("d3rkrsqld9gmqf.cloudfront.net", buffer_size=3, on_success=success, on_failure=failure)\n\n# since v0.9.0\ne = Emitter("d3rkrsqld9gmqf.cloudfront.net", buffer_size=3, on_success=new_success, on_failure=failure)\n\nt = Tracker(e)\n\n# This doesn\'t cause the emitter to send a request because the buffer_size was set to 3, not 1\nt.track_page_view("http://www.example.com")\nt.track_page_view("http://www.example.com/page1")\n\n# This does cause the emitter to try to send all 3 events\nt.track_page_view("http://www.example.com/page2")\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"*","*","New in v0.10.0"))),(0,a.kt)("p",null,"Since version 0.10.0, the constructors takes another\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"request_timeout"),"\xa0argument."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"request_timeout"))),(0,a.kt)("p",null,'Timeout for HTTP requests. Can be set either as single float value which applies to both "connect" AND "read" timeout, or as tuple with two float values which specify the "connect" and "read" timeouts separately.'),(0,a.kt)("h2",{id:"the-asyncemitter-class"},"The AsyncEmitter class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from snowplow_tracker import AsyncEmitter\n\ne = AsyncEmitter("d3rkrsqld9gmqf.cloudfront.net", thread_count=10)\n')),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncEmitter"),"\xa0class works just like the Emitter class, which is its parent class. It has one advantage, though: HTTP(S) requests are sent asynchronously, so the Tracker won't be blocked while the Emitter waits for a response. For this reason, the AsyncEmitter is recommended over the base\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Emitter"),"\xa0class."),(0,a.kt)("p",null,"The AsyncEmitter uses a fixed-size thread pool to perform network I/O. By default, this pool contains only one thread, but you can configure the number of threads in the constructor using the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"thread_count"),"\xa0argument, which is the only specific to AsyncEmitter argument."),(0,a.kt)("p",null,"Here is a complete example with all constructor parameters set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from snowplow_tracker import AsyncEmitter\n\ne = AsyncEmitter("d3rkrsqld9gmqf.cloudfront.net", \n            protocol="https",\n            port=None,\n            method="post",\n            buffer_size=10,\n            byte_limit=None,\n            on_success=None,\n            on_failure=None,\n            thread_count=1)\n')),(0,a.kt)("h2",{id:"the-celeryemitter-class"},"The CeleryEmitter class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important note"),": Since version 0.9.0, the CeleryEmitter is only available as an extra module. To use it, you need to install the snowplow-tracker as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ pip install snowplow-tracker[celery]\n")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"CeleryEmitter"),"\xa0class works just like the base\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Emitter"),"\xa0class, but it registers sending requests as a task for a\xa0",(0,a.kt)("a",{parentName:"p",href:"http://www.celeryproject.org/"},"Celery"),"\xa0worker. If there is a module named snowplow","_","celery","_","config.py on your PYTHONPATH, it will be used as the Celery configuration file; otherwise, a default configuration will be used. You can run the worker using this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"celery -A snowplow_tracker.emitters worker --loglevel=debug\n")),(0,a.kt)("p",null,"Note that\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"on_success"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"on_failure"),"\xa0callbacks cannot be supplied to this emitter."),(0,a.kt)("h2",{id:"the-redisemitter-class"},"The RedisEmitter class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important note"),": Since version 0.9.0, the RedisEmitter is only available as an extra module. To use it, you need to install the snowplow-tracker as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ pip install snowplow-tracker[redis]\n")),(0,a.kt)("p",null,"Use a RedisEmitter instance to store events in a\xa0",(0,a.kt)("a",{parentName:"p",href:"http://redis.io/"},"Redis"),"\xa0database for later use. This is the RedisEmitter constructor function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'def __init__(self, rdb=None, key="snowplow"):\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rdb"),"\xa0should be an instance of either the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Redis"),"\xa0or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"StrictRedis"),"\xa0class, found in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"redis"),"\xa0module. If it is not supplied, a default will be used.\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"key"),'\xa0is the key used to store events in the database. It defaults to "snowplow". The format for event storage is a Redis list of JSON strings.'),(0,a.kt)("p",null,"An example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from snowplow_tracker import RedisEmitter, Tracker\nimport redis\n\nrdb = redis.StrictRedis(db=2)\n\ne = RedisEmitter(rdb, "my_snowplow_key")\n\nt = Tracker(e)\n\nt.track_page_view("http://www.example.com")\n\n# Check that the event was stored in Redis:\nprint(rdb.lrange("my_snowplowkey", 0, -1))\n# prints something like:\n# [\'{"tv":"py-0.4.0", "ev": "pv", "url": "http://www.example.com", "dtm": 1400252420261, "tid": 7515828, "p": "pc"}\']\n')),(0,a.kt)("h3",{id:"manual-flushing"},"Manual flushing"),(0,a.kt)("p",null,"You can flush the emitter manually using the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"flush"),"\xa0method of the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Tracker"),"\xa0instance which is sending events to the emitter. This is a blocking call which synchronously sends all events in the emitter's buffer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"t.flush()\n")),(0,a.kt)("p",null,"You can alternatively perform an asynchronous flush, which tells the tracker to send all buffered events but doesn't wait for the sending to complete:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"t.flush(False)\n")),(0,a.kt)("p",null,"If you are using the AsyncEmitter, you shouldn't perform a synchronous flush inside an on","_","success or on","_","failure callback function as this can cause a deadlock."),(0,a.kt)("h3",{id:"multiple-emitters"},"Multiple emitters"),(0,a.kt)("p",null,"You can configure a tracker instance to send events to multiple emitters by passing the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Tracker"),"\xa0constructor function an array of emitters instead of a single emitter, or by using the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"addEmitter"),"\xa0method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from snowplow_tracker import Subject, Tracker, AsyncEmitter, RedisEmitter\nimport redis\n\ne1 = AsyncEmitter("collector1.cloudfront.net", method="get")\ne1 = AsyncEmitter("collector2.cloudfront.net", method="post")\n\nt = Tracker([e1, e2])\n\nrdb = redis.StrictRedis(db=2)\n\ne3 = RedisEmitter(rdb, "my_snowplow_key")\n\nt.addEmitter(e3)\n')),(0,a.kt)("h3",{id:"custom-emitters"},"Custom emitters"),(0,a.kt)("p",null,"You can create your own custom emitter class, either from scratch or by subclassing one of the existing classes (with the exception of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"CeleryEmitter"),", since it uses the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"pickle"),"\xa0module which doesn't work correctly with a class subclassed from a class located in a different module). The only requirement for compatibility is that is must have an\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"\xa0method which accepts a Python dictionary of name-value pairs."),(0,a.kt)("h3",{id:"automatically-retry-sending-failed-events"},"Automatically retry sending failed events"),(0,a.kt)("p",null,"You can use the following function as the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"on_failure"),"\xa0callback to immediately retry failed events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"def on_failure_retry(failed_event_count, failed_events):\n  # possible backoff-and-retry timeout here\n  for e in failed_events:\n    my_emitter.input(e)\n")),(0,a.kt)("p",null,"You may wish to add backoff logic to delay the resending."),(0,a.kt)("h3",{id:"setting-flush-timer"},"Setting flush timer"),(0,a.kt)("p",null,"You can flush your emitter based on some time interval:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'e1 = AsyncEmitter("collector1.cloudfront.net", method="post")\ne1.set_flush_timer(5)  # flush each 5 seconds\n')),(0,a.kt)("p",null,"Automatic flush can also be cancelled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"e1.cancel_flush()\n")))}p.isMDXComponent=!0}}]);