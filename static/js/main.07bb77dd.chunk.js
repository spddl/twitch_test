(this.webpackJsonpTwitchChatViewer=this.webpackJsonpTwitchChatViewer||[]).push([[0],{199:function(e,t,a){e.exports=a.p+"static/media/TwitchGlitchWhite.5f80eca1.svg"},261:function(e,t,a){e.exports=a(526)},341:function(e,t,a){},401:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=401},429:function(e,t){},431:function(e,t){},526:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),c=a(18),l=a(54),i=a(55),u=a(58),m=a(56),h=a(26),g=a(57),p=a(246),d=a.n(p),f=a(247),b=a.n(f),v=a(248),E=a.n(v),y=new(a(257).a)({minHeight:19,defaultHeight:19,fixedWidth:!0,keyMapper:function(e){return e}}),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:19;y._minHeight=e,y._defaultHeight=e,y.clearAll()},w=a(66),D=(a(341),a(168)),C=a.n(D),T=RegExp(/\w+/,"g"),k=function(e){var t=e.msg,a=e.emotes,n=e.emotesArray,o=e.measure,s=e.id,c=(e.twitchEmotes,e.bttvEmotes),l=e.ffzEmotes,i=e.chan,u=[],m=[];if(c||l)for(var h;null!==(h=T.exec(t));)c&&(a&&a.globalbttv&&a.globalbttv.has(h[0])?u.push({badge:a.globalbttv.get(h[0]),name:h[0],start:h.index,end:h.index+h[0].length}):a&&a["".concat(i,"-bttv")]&&a["".concat(i,"-bttv")].has(h[0])&&u.push({badge:a["".concat(i,"-bttv")].get(h[0]),name:h[0],start:h.index,end:h.index+h[0].length})),l&&(a&&a.globalffz&&a.globalffz.has(h[0])?m.push({badge:a.globalffz.get(h[0]),name:h[0],start:h.index,end:h.index+h[0].length}):a&&a["".concat(i,"-ffz")]&&a["".concat(i,"-ffz")].has(h[0])&&m.push({badge:a["".concat(i,"-ffz")].get(h[0]),name:h[0],start:h.index,end:h.index+h[0].length}));if(0===n.length&&0===u.length&&0===m.length)return t;for(var g in t=t.split(""),n){var p=n[g],d=p.end-p.start,f=Array.apply(null,new Array(d+1)).map((function(){return""}));(t=t.slice(0,p.start).concat(f).concat(t.slice(p.end+1,t.length))).splice(p.start,1,r.a.createElement("img",{key:"".concat(s,"-").concat(p.id,"-").concat(g),onLoad:o,className:"emoticon",title:"Twitch Emoticon",alt:p.id,src:"//static-cdn.jtvnw.net/emoticons/v1/".concat(p.id,"/1.0"),srcSet:"//static-cdn.jtvnw.net/emoticons/v1/".concat(p.id,"/2.0 2x, //static-cdn.jtvnw.net/emoticons/v1/").concat(p.id,"/4.0 4x")}))}if(c)for(var b in u){var v=u[b],E=v.end-v.start,y=Array.apply(null,new Array(E+1)).map((function(){return""}));(t=t.slice(0,v.start).concat(y).concat(t.slice(v.end+1,t.length))).splice(v.start,1,r.a.createElement("img",{key:"".concat(v.badge.code,"-").concat(v.badge.id,"-").concat(b),onLoad:o,className:"emoticon",title:"BTTV: "+v.name,alt:v.badge.code,src:"//cdn.betterttv.net/emote/".concat(v.badge.id,"/1x"),srcSet:"//cdn.betterttv.net/emote/".concat(v.badge.id,"/2x 2x, //cdn.betterttv.net/emote/").concat(v.badge.id,"/3x 3x")}))}if(l)for(var O in m){var w=m[O],D=w.end-w.start,C=Array.apply(null,new Array(D+1)).map((function(){return""}));(t=t.slice(0,w.start).concat(C).concat(t.slice(w.end+1,t.length))).splice(w.start,1,r.a.createElement("img",{key:"".concat(w.badge.name,"-").concat(w.badge.id,"-").concat(O),onLoad:o,className:"emoticon",title:"FFZ: "+w.badge.name,alt:w.badge.name,src:"".concat(w.badge.urls[1]),srcSet:"".concat(w.badge.urls[2]," 2x, ").concat(w.badge.urls[4]," 4x")}))}return t},A=["#fc5c65","#fd9644","#fed330","#26de81","#2bcbba","#eb3b5a","#fa8231","#f7b731","#20bf6b","#0fb9b1","#45aaf2","#4b7bec","#a55eea","#d1d8e0","#778ca3","#2d98da","#3867d6","#8854d0","#a5b1c2","#4b6584"],j=function(){var e=Math.floor(Math.random()*A.length),t=A[e];return A.splice(e,1),A.length||(A=["#fc5c65","#fd9644","#fed330","#26de81","#2bcbba","#eb3b5a","#fa8231","#f7b731","#20bf6b","#0fb9b1","#45aaf2","#4b7bec","#a55eea","#d1d8e0","#778ca3","#2d98da","#3867d6","#8854d0","#a5b1c2","#4b6584"]),t},S=/(\x01ACTION )(.*)(\x01)/,N=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).emotes=e.emotes,a.twitchEmotes=e.twitchEmotes,a.bttvEmotes=e.bttvEmotes,a.ffzEmotes=e.ffzEmotes,a.chan=e.source.chan,a.msg=e.source.msg,a.name=e.source.name,a.tags=e.source.tags,a.timestamp=e.source.timestamp,a.msg&&-1!==a.msg.toLowerCase().indexOf("@"+a.chan)&&(a.styleColor={color:"red"});var n=S.exec(a.msg);return null!==n&&(a.msg=n[2],a.styleColor={color:a.tags.color}),a.tags&&a.tags.banDuration?a.styleColor={textDecorationLine:"line-through",textDecorationStyle:"wavy",textDecorationColor:"rgba(255, 193, 7, 0.8)"}:a.tags&&a.tags.banReason&&(a.styleColor={textDecorationLine:"line-through",textDecorationStyle:"wavy",textDecorationColor:"rgba(255, 0, 0, 0.8)"}),a.tags&&a.tags.emotes&&(a.msg=k({msg:a.msg,measure:e.measure,id:a.tags.id,emotesArray:a.tags.emotes,emotes:a.emotes,twitchEmotes:a.twitchEmotes,bttvEmotes:a.bttvEmotes,ffzEmotes:a.ffzEmotes,chan:a.chan})),a.tags&&!0===a.tags.color&&(a.tags.color=j()),a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return this.tags&&this.tags.banMsg&&(e=r.a.createElement("span",{style:{fontWeight:"bold"},className:"line_right"},this.tags.banMsg)),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"line_right",style:this.styleColor},this.msg),e)}}]),t}(n.Component),_=function(e){return e<10?"0"+e:e},x=function(e){return e<10?"00"+e:e<100?"0"+e:e},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=new Date(e),n=_(a.getHours()),r=_(a.getMinutes()),o=_(a.getSeconds()),s=x(a.getMilliseconds());if(!t){var c=_(a.getDate()),l=_(a.getMonth()),i=a.getFullYear();return"".concat(i,"-").concat(l,"-").concat(c," ").concat(n,":").concat(r,":").concat(o,".").concat(s)}return"".concat(n,":").concat(r,":").concat(o,".").concat(s)},R=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&arguments[1];var e=0,t="";return function(a,n){if(e===a)return t;var r=L(a,n);return e=a,t=r,r}}(),P=a(30),I=a(258),F=a(72),M=a(40),B=!1,z=!1;function H(e,t){if(B&&console.log("::: Filter channel '".concat(t.get("channel"),"', name '").concat(t.get("name"),"', msg '").concat(t.get("msg"),"'")),void 0===t.find((function(e){return""!==e})))return B&&console.log("Filter return { logs: allLogs, length: allLogs.size }"),{logs:e,length:e.size,scrollBottom:!0};z&&console.time("Filter");var a=t.get("channel"),n=t.get("name"),r=t.get("msg").toLowerCase();B&&console.log("::: Filter channel '".concat(a,"', name '").concat(n,"', msg '").concat(r,"'"));var o=e.filter((function(e){if(a&&e.chan!==a)return!1;if(n&&e.name!==n)return!1;if(r&&-1===e.msg.toLowerCase().indexOf(r)){if(e.name&&-1===e.name.toLowerCase().indexOf(r))return!1;if(!e.name)return!1}return!0}));return z&&console.timeEnd("Filter"),{logs:o,length:o.size}}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=function(e,t){return{type:t,value:e}},V={allLogs:Object(M.a)(),logs:Object(M.a)(),length:0,scrollBottom:!0,filter:Object(M.b)({name:"",msg:"",channel:""}),settings:Object(M.b)(JSON.parse(localStorage.getItem("settings"))||{modalShow:!1,twitchBadges:!0,bttvBadges:!0,twitchEmotes:!0,bttvEmotes:!0,ffzEmotes:!0,fontClass:"inconsolata-font",fontSize:13,rowHeight:19,maxLines:5e4,channelColor:{}}),channels:Object(M.a)(JSON.parse(localStorage.getItem("channels"))||[]),badges:{global:Object(M.b)()},emotes:{global:Object(M.b)()}},W=Object(F.c)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"scrollBottom":0,t=G({},t,{scrollBottom:a.value});break;case"ADD_DATA":for(var n=t.settings.get("channelColor")||{},r=0,o=a.value.length;r<o;r++)n[a.value[r].chan]||(n[a.value[r].chan]=j());var s=(e=t.allLogs).push.apply(e,Object(I.a)(a.value));t.allLogs=s;break;case"REMOVE_DATA":var c=t.allLogs.findIndex((function(e){return!!(e&&e.tags&&e.tags.id&&e.tags.id===a.value.tags.targetMsgId)}));if(-1!==c){var l=t.allLogs.get(c);t.allLogs=t.allLogs.set(c,Object.assign({},l,{tags:a.value.tags})),console.log("REMOVE_DATA found_",c,t.allLogs.get(c))}break;case"EDIT_DATA":t.allLogs.forEach((function(e,n){var r=-1;if(e.chan===a.value.chan&&e.name===a.value.username&&(r=n),-1!==r){var o=t.allLogs.get(r);t.allLogs=t.allLogs.set(r,Object.assign({},o,{tags:a.value.tags}))}return!0}));break;case"ADD_ROOMID":var i=t.channels.findIndex((function(e){return e.name===a.value.name}));return-1!==i&&(t.channels=t.channels.set(i,a.value),a.value=t.channels),localStorage.setItem("channels",JSON.stringify(a.value.toArray())),G({},t,{channels:a.value});case"ADD_CHANNEL":var u=t.channels.find((function(e){return e.name===a.value.name}));if(u)break;(n=t.settings.get("channelColor")||{})&&n[a.value.name]||(n[a.value.name]=j());var m=t.channels.push({name:a.value.name,roomId:a.value.roomId});return G({},t,{channels:m});case"CHANNELS":return localStorage.setItem("channels",JSON.stringify(a.value.toArray())),G({},t,{channels:a.value});case"UPDATE_EMOTES":return t.emotes[a.value.key]=Object(M.b)(a.value.value),G({},t,{emotes:t.emotes});case"UPDATE_BADGES":return t.badges[a.value.key]=Object(M.b)(a.value.value),G({},t,{badges:t.badges})}switch(a.type){case"ADD_FILTER_channel":t.filter=t.filter.set("channel",a.value);break;case"ADD_FILTER_name":t.filter=t.filter.set("name",a.value);break;case"ADD_FILTER_msg":t.filter=t.filter.set("msg",a.value)}switch(a.type){case"ADD_FILTER_name":case"ADD_FILTER_channel":case"ADD_FILTER_msg":case"scrollBottom":case"ADD_DATA":var h="ADD_FILTER_name"===a.type||"ADD_FILTER_channel"===a.type||"ADD_FILTER_msg"===a.type;if(t.scrollBottom||h){var g=H(t.allLogs,t.filter),p=g.logs,d=g.length,f=g.scrollBottom,b=Number(t.settings.get("maxLines"));if(d>b){var v=10*b/100,E=b-v;t.allLogs=t.allLogs.takeLast(E),p=p.takeLast(E),d=E,O()}return G({},t,{scrollBottom:f||t.scrollBottom,logs:p,length:d})}return void 0===t.filter.find((function(e){return""!==e}))?G({},t,{logs:t.allLogs,length:t.allLogs.size}):G({},t)}switch(a.type){case"channelColor":var y=a.value;a.value=G({},t.settings.get(a.type),{},y);case"modalShow":case"twitchBadges":case"bttvBadges":case"twitchEmotes":case"bttvEmotes":case"ffzEmotes":case"fontClass":case"fontSize":case"rowHeight":case"appShow":case"hostnameShow":case"maxLines":isNaN(!a.value)&&(a.value=Number(a.value));var w=t.settings.set(a.type,a.value);t=G({},t,{settings:w}),localStorage.setItem("settings",JSON.stringify(w.toObject()))}return t}),V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Z=!1,X=function(){var e,t;return"undefined"!==typeof document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),{hidden:e,visibilityChange:t}},$=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleResize=function(e){Z&&console.log("handleResize()"),e<640?a.setState({mobile:!0}):a.setState({mobile:!1}),O(),a.bindListRef.current&&a.bindListRef.current.forceUpdateGrid()},a.listenScrollEvent=function(e){var t=e.scrollHeight,n=e.scrollTop,r=e.clientHeight;Z&&console.log("listenScrollEvent() if ((".concat(t," - ").concat(n,") === ").concat(r,")")),0===t&&0===n||(t-n===r?a.props.scrollBottom||a.props.update(!0,"scrollBottom"):a.props.scrollBottom&&a.props.update(!1,"scrollBottom"))},a.UserNameRenderer=function(e){return r.a.createElement("span",{className:"username line_right",onClick:function(){return a.updateFilter(e.name,"name")},style:{color:e&&e.tags&&e.tags.color?e.tags.color:"#EEE"}},e.name)},a.decamelize=function(e){return e.replace(/([a-z\d])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1-$2").toLowerCase()},a.createBadge=function(e){var t=e.measure,a=e.name,n=e.badge,o=e.tags;switch(a){case"subscriber":n=n.versions[o.badges.subscriber]?n.versions[o.badges.subscriber]:Object.keys(n.versions)[0];break;case"bits":n=n.versions[o.badges.bits]?n.versions[o.badges.bits]:Object.keys(n.versions)[0];break;default:n=n.versions[0]?n.versions[0]:n.versions[1]?n.versions[1]:Object.keys(n.versions)[0]}try{return r.a.createElement("img",{onLoad:t,key:a||"",title:n.title||"",alt:n.title||"","aria-label":n.title||"",className:"line_right",src:n.image_url_1x,srcSet:"".concat(n.image_url_1x," 1x, ").concat(n.image_url_2x," 2x, ").concat(n.image_url_4x," 4x")})}catch(s){return console.warn(s),r.a.createElement("img",{onLoad:t,key:a,alt:a,className:"line_right"})}},a.createBadgeTags=function(e){var t=e.source,n=e.measure,o=[];if(t&&t.tags&&t.tags.badges)for(var s in t.tags.badges)if(t.tags.badges.hasOwnProperty(s)){var c=void 0;if(a.props.badges[t.chan]&&a.props.badges[t.chan].has(s)){var l=a.props.badges[t.chan].get(s);c=a.createBadge({measure:n,name:s,badge:l,tags:t.tags})}else if(a.props.badges.global.has(s)){var i=a.props.badges.global.get(s);c=a.createBadge({measure:n,name:s,badge:i,tags:t.tags})}else c=r.a.createElement("span",{className:"line_right badge badge-primary",key:s,title:s},s);o.push(c)}return o},Z&&console.log("LogContainer constructor",e),a.bindListRef=r.a.createRef(),a.state={mobile:window.innerWidth<640,scrollBottom:!0},a.updateFilter=a.updateFilter.bind(Object(h.a)(a));var n=X(),o=n.hidden,s=n.visibilityChange;return"undefined"!==typeof document.addEventListener&&"undefined"!==typeof o&&document.addEventListener(s,(function(){document[o]||O()}),!1),a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;Z&&console.log("componentDidMount()"),this.bindListRef.current&&this.bindListRef.current.forceUpdateGrid(),window.addEventListener("resize",C()((function(){return e.handleResize(window.innerWidth)}),100))}},{key:"componentWillUnmount",value:function(){var e=this;try{window.removeResizeListener("resize",C()((function(){return e.handleResize(window.innerWidth)}),100))}catch(t){}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(Z&&console.log("componentDidUpdate()"),this.props.length!==e.length){if(this.props.scrollBottom){var r=this.props.length;this.bindListRef.current.scrollToRow(r),this.setState({_scrollingToRow:r},(function(){n.bindListRef.current.scrollToRow(r)}))}this.props.filter!==e.filter&&O()}}},{key:"updateFilter",value:function(e,t){Z&&console.log("updateFilter()",e,t),this.props.filter[t]===e&&(e=""),this.props.update(e,"ADD_FILTER_"+t)}},{key:"classifierLevel",value:function(e){var t=this;return r.a.createElement("span",{onClick:function(){return t.updateFilter(e.chan,"channel")}},e.chan)}},{key:"render",value:function(){var e=this;Z&&console.log("LogContainer RENDER",this.props,"############################################");var t="";return this.props.scrollBottom||(t=r.a.createElement(w.a,{variant:"secondary",id:"scrollDown",onClick:function(){e.bindListRef.current.scrollToRow(e.props.length),e.props.update(!0,"scrollBottom"),O()}},"scroll down")),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"calc(100vh - 60px)",fontSize:Number(this.props.settings.get("fontSize")),fontFamily:"'".concat(this.props.settings.get("fontClass"),"', monospace")},className:"bg-dark text-list"},r.a.createElement(d.a,null,(function(t){var a=t.height,n=t.width;return r.a.createElement(b.a,{id:"list",height:a,width:n-3,overscanColumnCount:0,overscanRowCount:10,scrollingResetTimeInterval:0,ref:e.bindListRef,rowCount:e.props.length,deferredMeasurementCache:y,onScroll:e.listenScrollEvent,rowHeight:y.rowHeight,noRowsRenderer:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("i",null,"Nichts gefunden")))},rowRenderer:function(t){var a,n=t.index,o=t._key,s=t.parent,c=t.style,l=e.props.logs.get(n);a=l.tags&&l.tags.id?l.tags.id:o||n;var i=e.props.settings.get("channelColor")&&e.props.settings.get("channelColor")[l.chan]?{backgroundColor:e.props.settings.get("channelColor")[l.chan]}:{},u=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"line_both badge badge-primary",style:i,onClick:function(){return e.updateFilter(l.chan,"channel")}},l.chan));return r.a.createElement(E.a,{cache:y,columnIndex:0,key:a,parent:s,rowIndex:n},(function(t){var n=t.measure;return r.a.createElement("div",{key:a,style:Y({},c,{padding:".3rem",wordWrap:"break-word",lineHeight:"20px"})},r.a.createElement("span",null,R(l.timestamp,e.state.mobile)),":",u,e.props.settings.get("twitchBadges")||e.props.settings.get("bttvBadges")?e.createBadgeTags({source:l,measure:n}):"",e.UserNameRenderer(l),r.a.createElement(N,{source:l,emotes:e.props.emotes,twitchEmotes:e.props.settings.get("twitchEmotes"),bttvEmotes:e.props.settings.get("bttvEmotes"),ffzEmotes:e.props.settings.get("ffzEmotes"),measure:n}))}))}})})),t))}}]),t}(n.PureComponent),q=Object(P.b)((function(e){return{scrollBottom:e.scrollBottom,logs:e.logs,length:e.length,filter:e.filter,settings:e.settings,badges:e.badges,emotes:e.emotes}}),{update:Q})($),K=a(47),ee=a(171),te=a(254),ae=a(17),ne=a(38),re=a(120),oe=a(75),se=a(78),ce=a(117),le=a(13),ie=a(253),ue=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e,a))).handleShow=n.handleShow.bind(Object(h.a)(n)),n.handleClose=n.handleClose.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.state={restart:!1,temp:"",addChannel:""},n}return Object(g.a)(t,e),Object(i.a)(t,[{key:"handleShow",value:function(){this.props.update(!0,"modalShow")}},{key:"handleClose",value:function(){this.props.update(!1,"modalShow")}},{key:"handleChange",value:function(e){var t=e.target;this.setState({addChannel:t.value})}},{key:"render",value:function(){var e=this;var t=[];return this.props.channels.forEach((function(a){t.push(r.a.createElement(le.a,{key:a.name,className:"mb-3"},r.a.createElement(le.a.Prepend,null,r.a.createElement(le.a.Text,null,a.name)),r.a.createElement(ne.a,{key:a.name,type:"color",name:a.name,defaultValue:e.props.settings.get("channelColor")[a.name],onChange:function(t){var a=t.target;e.props.update(Object(c.a)({},a.name,a.value),"channelColor")}}),r.a.createElement(le.a.Append,null,r.a.createElement(w.a,{variant:"outline-danger",onClick:function(){var t=e.props.channels,n=t.indexOf(a);n>-1&&(t=t.splice(n,1)),e.props.update(t,"CHANNELS")}},"X"))))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"outline-secondary",onClick:this.handleShow},r.a.createElement("span",{role:"img","aria-label":"Gear"},"\u2699")),r.a.createElement(se.a,{size:"lg",show:this.props.settings.get("modalShow"),onHide:this.handleClose,scrollable:!0},r.a.createElement(se.a.Header,{closeButton:!0},r.a.createElement(se.a.Title,null,"Einstellungen")),r.a.createElement(se.a.Body,null,r.a.createElement(ce.a,{in:this.state.restart},r.a.createElement("div",{onClick:function(){window.location.reload()}},r.a.createElement(ie.a,{variant:"danger"},"Webseite Aktualisieren notwenig (F5)"))),r.a.createElement(ae.a.Group,{as:re.a},r.a.createElement(ae.a.Label,{column:!0,sm:"1"},"Font"),r.a.createElement(oe.a,{sm:"11"},r.a.createElement(ae.a.Control,{as:"select",name:"fontClass",value:this.props.settings.get("fontClass"),onChange:function(t){var a=t.target;e.props.update(a.value,"fontClass")}},r.a.createElement("option",{value:"Arimo"},"Arimo"),r.a.createElement("option",{value:"Hind"},"Hind"),r.a.createElement("option",{value:"IBM Plex Sans"},"IBM Plex Sans"),r.a.createElement("option",{value:"Montserrat"},"Montserrat"),r.a.createElement("option",{value:"Muli"},"Muli"),r.a.createElement("option",{value:"Nunito Sans"},"Nunito Sans"),r.a.createElement("option",{value:"Gothic A1"},"Gothic A1"),r.a.createElement("option",{value:"Roboto"},"Roboto"),r.a.createElement("option",{value:"Rubik"},"Rubik"),r.a.createElement("option",{value:"Source Sans Pro"},"Source Sans Pro"),r.a.createElement("option",{value:"Poppins"},"Poppins"),r.a.createElement("option",{value:"Open Sans"},"Open Sans"),r.a.createElement("option",{value:"Work Sans"},"Work Sans")))),r.a.createElement(le.a,{className:"mb-3"},r.a.createElement(le.a.Prepend,null,r.a.createElement(le.a.Text,{id:"basic-addon1"},"Font Size")),r.a.createElement(ne.a,{type:"number",placeholder:"Font Size","aria-label":"Font Size",name:"fontSize",onChange:function(t){var a=t.target;e.props.update(a.value,a.name)},defaultValue:this.props.settings.get("fontSize"),min:"6",max:"30"}),r.a.createElement(le.a.Append,null,r.a.createElement(le.a.Text,null,"px"))),r.a.createElement(le.a,{className:"mb-3"},r.a.createElement(le.a.Prepend,null,r.a.createElement(le.a.Text,null,"Row Height")),r.a.createElement(ne.a,{type:"number",placeholder:"Row Height","aria-label":"Row Height",name:"rowHeight",onChange:function(t){var a=t.target;e.props.update(a.value,a.name),e.setState({restart:!0})},defaultValue:this.props.settings.get("rowHeight"),min:"3",max:"60"}),r.a.createElement(le.a.Append,null,r.a.createElement(le.a.Text,null,"px"))),r.a.createElement(le.a,{className:"mb-3"},r.a.createElement(le.a.Prepend,null,r.a.createElement(le.a.Text,null,"Max Lines")),r.a.createElement(ne.a,{type:"number",placeholder:"Max Lines","aria-label":"Max Lines",onChange:function(t){var a=t.target;e.props.update(a.value,a.name),e.setState({restart:!0})},name:"maxLines",defaultValue:this.props.settings.get("maxLines"),min:"1"})),r.a.createElement(ae.a.Group,{as:re.a},r.a.createElement(ae.a.Label,{column:!0,md:"3",lg:!0},"Zeige Badges von:"),r.a.createElement(oe.a,{md:"auto"},r.a.createElement(ae.a.Check,{inline:!0,custom:!0,type:"switch",id:"checkbox-twitchBadges",label:"Twitch",name:"twitchBadges",defaultChecked:this.props.settings.get("twitchBadges"),onChange:function(t){var a=t.target;e.props.update(a.checked,a.name)}}),r.a.createElement(ae.a.Check,{inline:!0,custom:!0,type:"switch",id:"checkbox-bttvBadges",label:"BTTV",name:"bttvBadges",defaultChecked:this.props.settings.get("bttvBadges"),onChange:function(t){var a=t.target;e.props.update(a.checked,a.name)}}))),r.a.createElement(ae.a.Group,{as:re.a},r.a.createElement(ae.a.Label,{column:!0,md:"3",lg:!0},"Zeige Emotes von:"),r.a.createElement(oe.a,{md:"auto"},r.a.createElement(ae.a.Check,{inline:!0,custom:!0,type:"switch",id:"checkbox-twitchEmotes",label:"Twitch",name:"twitchEmotes",defaultChecked:this.props.settings.get("twitchEmotes"),onChange:function(t){var a=t.target;e.props.update(a.checked,a.name)}}),r.a.createElement(ae.a.Check,{inline:!0,custom:!0,type:"switch",id:"checkbox-bttvEmotes",label:"BTTV",name:"bttvEmotes",defaultChecked:this.props.settings.get("bttvEmotes"),onChange:function(t){var a=t.target;e.props.update(a.checked,a.name)}}),r.a.createElement(ae.a.Check,{inline:!0,custom:!0,type:"switch",id:"checkbox-ffzEmotes",label:"FrankerFaceZ",name:"ffzEmotes",defaultChecked:this.props.settings.get("ffzEmotes"),onChange:function(t){var a=t.target;e.props.update(a.checked,a.name)}}))),t,r.a.createElement(le.a,{className:"mb-3"},r.a.createElement(ne.a,{placeholder:"add Channel","aria-label":"add Channel","aria-describedby":"basic-addon9",value:this.state.addChannel,onChange:this.handleChange,onKeyPress:function(t){"Enter"===t.key&&(e.props.update({name:e.state.addChannel.toLowerCase(),roomId:void 0},"ADD_CHANNEL"),e.setState({addChannel:""}))}}),r.a.createElement(le.a.Append,null,r.a.createElement(w.a,{variant:"outline-success",onClick:function(){e.props.update({name:e.state.addChannel.toLowerCase(),roomId:void 0},"ADD_CHANNEL"),e.setState({addChannel:""})}},"Add")))),r.a.createElement(se.a.Footer,null,r.a.createElement(w.a,{variant:"secondary",onClick:this.handleClose},"Schliessen"))))}}]),t}(n.PureComponent),me=Object(P.b)((function(e){return{settings:e.settings,channels:e.channels}}),{update:Q})(ue),he=a(77),ge=a(260);function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var fe=!1;var be=Object(ge.a)();Object(he.configureUrlQuery)({history:be,addChangeHandlers:!0});var ve={QueryChannel:{type:he.UrlQueryParamTypes.string,queryParam:"channel"},QueryName:{type:he.UrlQueryParamTypes.string,queryParam:"name"},QueryMsg:{type:he.UrlQueryParamTypes.string,queryParam:"msg"}},Ee=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e)),fe&&console.log("TopBar",e),a.state={},a.timer={},a.updateFilter=a.updateFilter.bind(Object(h.a)(a)),a.updateDebounceFilter=function(e,t){var a=null;return function(){var n=this,r=arguments;clearTimeout(a),a=setTimeout((function(){e.apply(n,r)}),t)}}(a.updateFilter,150),a.onWheelHandler=a.onWheelHandler.bind(Object(h.a)(a)),a.onTouchMoveHandler=a.onTouchMoveHandler.bind(Object(h.a)(a)),a.onTouchStartHandler=a.onTouchStartHandler.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.QueryChannel&&this.props.update(this.props.QueryChannel,"ADD_FILTER_channel"),this.props.QueryName&&this.props.update(this.props.QueryName,"ADD_FILTER_name"),this.props.QueryMsg&&this.props.update(this.props.QueryMsg,"ADD_FILTER_msg")}},{key:"updateFilter",value:function(e,t){switch(this.props.update(e,"ADD_FILTER_"+t),t){case"channel":this.props.onChangeQueryChannel(e);break;case"name":this.props.onChangeQueryName(e);break;case"msg":this.props.onChangeQueryMsg(e)}}},{key:"updateFilterNext",value:function(e,t){switch(fe&&console.log("updateFilterNext",{type:e,up:t}),e){case"channel":var a=Object.keys(this.props.settings.get("channelColor"));if(console.log({ChannelArray:a}),1!==a.length){var n,r=a.indexOf(this.props.filter.get("channel"));t?void 0===a[n=r-1]&&(n=a.length-1):void 0===a[n=r+1]&&(n=0),this.updateFilter(a[n],e)}break;case"name":var o=Object.keys(this.props.settings.get("appColor"));if(1!==o.length){var s,c=o.indexOf(this.props.filter.get("name"));t?void 0===o[s=c-1]&&(s=o.length-1):void 0===o[s=c+1]&&(s=0),this.updateFilter(o[s],e)}break;default:console.warn("updateFilterNext:",e)}}},{key:"onWheelHandler",value:function(e,t){var a;a=!(e.deltaY>0),this.updateFilterNext(t,a)}},{key:"onTouchMoveHandler",value:function(e,t){var a,n=e.touches;this.state.touchReset||(a=!(n[0].pageY-this.state.touchY>0),this.setState({touchReset:!0}),this.updateFilterNext(t,a))}},{key:"onTouchStartHandler",value:function(e){var t=e.touches[0];this.setState({touchY:t.pageY,touchReset:!1})}},{key:"render",value:function(){var e=this;fe&&console.log("TopbarContainer RENDER",this.props,"############################################");var t="";if(""!==this.props.filter.get("channel")){var n=this.props.settings.get("channelColor")&&this.props.settings.get("channelColor")[this.props.filter.get("channel")]?{backgroundColor:this.props.settings.get("channelColor")[this.props.filter.get("channel")]}:{};t=r.a.createElement(ee.a,{variant:"secondary",ref:"app",style:de({},n,{margin:"0 5px 5px",touchAction:"pan-down"}),onClick:function(){return e.updateFilter("","channel")},onWheel:function(t){return e.onWheelHandler(t,"channel")},onTouchMove:function(t){return e.onTouchMoveHandler(t,"channel")},onTouchStart:this.onTouchStartHandler},this.props.filter.get("channel")),this.props.onChangeQueryChannel(this.props.filter.get("channel"))}var o="";if(""!==this.props.filter.get("name")){var s=this.props.settings.get("appColor")&&this.props.settings.get("appColor")[this.props.filter.get("name")]?{color:this.props.settings.get("appColor")[this.props.filter.get("name")]}:{};o=r.a.createElement(ee.a,{variant:"secondary",ref:"app",style:de({},s,{margin:"0 5px 5px",touchAction:"pan-down"}),onClick:function(){return e.updateFilter("","name")},onWheel:function(t){return e.onWheelHandler(t,"name")},onTouchMove:function(t){return e.onTouchMoveHandler(t,"name")},onTouchStart:this.onTouchStartHandler},this.props.filter.get("name")),this.props.onChangeQueryName(this.props.filter.get("name"))}return r.a.createElement(K.a,{bg:"dark",variant:"dark",style:{height:"60px"},collapseOnSelect:!0},r.a.createElement(K.a.Brand,null,r.a.createElement(K.a.Text,{className:"d-lg-none"},r.a.createElement("img",{src:a(199),alt:"logo",width:"30",height:"30",className:"d-inline-block align-top"})),r.a.createElement(K.a.Text,{className:"d-none d-lg-block"},r.a.createElement("img",{src:a(199),alt:"logo",width:"30",height:"30",className:"d-inline-block align-top",style:{marginRight:"5px"}}),"TwitchChatViewer")),r.a.createElement(K.a.Text,null,r.a.createElement("span",{className:"d-lg-none"},this.props.length),r.a.createElement("span",{className:"d-none d-lg-block"},this.props.length," lines")),r.a.createElement(K.a.Collapse,{className:"justify-content-center"},r.a.createElement(K.a.Text,null,r.a.createElement(te.a,null,t,o))),r.a.createElement(K.a.Collapse,{className:"justify-content-end"},r.a.createElement(ae.a,{inline:!0,onSubmit:function(t){t.preventDefault(),e.updateFilter(e.refs.search.value,"msg")}},r.a.createElement(ae.a.Group,{style:{marginBottom:0}},r.a.createElement(ne.a,{style:{width:"40vw"},type:"text",placeholder:"Search",className:"btn-dark",ref:"search",defaultValue:this.props.filter.get("msg"),onChange:function(){return e.updateDebounceFilter(e.refs.search.value,"msg")}}))),r.a.createElement(me,null)))}}]),t}(n.PureComponent),ye=Object(F.b)(Object(P.b)((function(e){return{length:e.length,filter:e.filter,settings:e.settings}}),{update:Q}),Object(he.addUrlProps)({urlPropsQueryConfig:ve}))(Ee),Oe=a(118),we=a.n(Oe),De=a(255),Ce=a(259);function Te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Te(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ae=a(76),je=a.n(Ae),Se=a(256);function Ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var _e,xe=new(a.n(Se).a)({token:"",username:"justinfan".concat(Math.floor(8e4*Math.random()+1e3)),chat:{joinTimeout:6e4},log:{level:0}}).chat,Le=Object(P.b)((function(e){return{channels:e.channels}}),{update:Q})((function(e){var t=e.update,a=e.channels;if(3===xe._readyState){var n=a.toArray().map((function(e){return e.name})),r=Object.keys(xe._channelState).map((function(e){return e.substr(1)})),o=je()(n,r);if(o.length){var s=!0,l=!1,i=void 0;try{for(var u,m=function(){var e=u.value;xe.join(e).then((function(a){t({name:e,roomId:a.roomState.roomId},"ADD_ROOMID"),t([{timestamp:+new Date,chan:e,msg:"=> JOIN"}],"ADD_DATA")}))},h=o[Symbol.iterator]();!(s=(u=h.next()).done);s=!0)m()}catch(y){l=!0,i=y}finally{try{s||null==h.return||h.return()}finally{if(l)throw i}}}var g=je()(r,n);if(g.length){var p=!0,d=!1,f=void 0;try{for(var b,v=function(){var e=b.value;xe.join(e).then((function(){t([{timestamp:+new Date,chan:e,msg:"<= LEAVE"}],"ADD_DATA")}))},E=g[Symbol.iterator]();!(p=(b=E.next()).done);p=!0)v()}catch(y){d=!0,f=y}finally{try{p||null==E.return||E.return()}finally{if(d)throw f}}}}else 0===xe._readyState&&(xe.connect().then(Object(De.a)(we.a.mark((function e(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.toArray().map((function(e){return xe.join(e.name).then((function(a){return t([{timestamp:+new Date,chan:e.name,msg:"=> JOIN"}],"ADD_DATA")}))}));case 1:case"end":return e.stop()}}),e)})))).catch((function(e){console.warn(e)})),xe.on("*",(function(e){var a=e.channel,n=e.command,r=e.message,o=e.tags,s=e.timestamp,l=e.username,i=e._raw;s=s||+new Date;var u=a&&a.substr(1),m=l;switch(n){case"PRIVMSG":o&&o.badges&&o.badges!=={}&&(o.badges_=o.badges,o.badges=i.split(";")[1].substr(7).split(",").reduce((function(e,t){if(""===t)return e;var a=t.split("/"),n=Object(Ce.a)(a,2),r=n[0],o=n[1];switch(r){case"admin":case"broadcaster":case"global-mod":case"moderator":case"partner":case"premium":case"staff":case"sub-gifter":case"turbo":case"vip":return ke({},e,Object(c.a)({},r,"1"===o));case"bits":case"bits-leader":case"subscriber":return ke({},e,Object(c.a)({},r,Number(o)));default:return ke({},e,Object(c.a)({},r,o))}}),{})),t([{timestamp:s,chan:u,name:m,msg:r,tags:o,raw:i}],"ADD_DATA");break;case"USERNOTICE":t([{timestamp:s,chan:u,msg:o.systemMsg}],"ADD_DATA");break;case"CLEARMSG":o=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ne(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,{banReason:!0,banMsg:"[CLEARMSG]"}),t({timestamp:s,chan:u,username:l,tags:o},"REMOVE_DATA");break;case"CLEARCHAT":o.banDuration?o.banMsg="[TIMEOUT, ".concat(o.banDuration+"s"+(o.banReason?", "+o.banReason:""),"]"):o.banMsg="[BAN, banReason: ".concat(o.banReason,"]"),t({timestamp:s,chan:u,username:l,tags:o},"EDIT_DATA");break;case"JOIN":case"PART":break;case"CONNECTED":t([{timestamp:s,chan:"twitch.tv",msg:"CONNECTED"}],"ADD_DATA");break;case"NOT_READY":t([{timestamp:s,chan:"twitch.tv",msg:"TODO: NOT_READY"}],"ADD_DATA");break;case"CONNECTING":t([{timestamp:s,chan:"twitch.tv",msg:"TODO: CONNECTING"}],"ADD_DATA");break;case"RECONNECTING":t([{timestamp:s,chan:"twitch.tv",msg:"TODO: RECONNECTING"}],"ADD_DATA");break;case"DISCONNECTING":t([{timestamp:s,chan:"twitch.tv",msg:"TODO: DISCONNECTING"}],"ADD_DATA");break;case"DISCONNECTED":t([{timestamp:s,chan:"twitch.tv",msg:"TODO: DISCONNECTED"}],"ADD_DATA");break;case"NOTICE":t([{timestamp:s,chan:a,msg:r}],"ADD_DATA"),console.log("NOTICE",{channel:a,command:n,message:r,tags:o,timestamp:s,username:l});break;case"001":case"002":case"003":case"004":case"353":case"366":case"372":case"375":case"376":case"CAP":case"MODE":case"PING":case"ROOMSTATE":case"PARSE_ERROR_ENCOUNTERED":break;default:console.log("default",{channel:a,command:n,message:r,tags:o,timestamp:s,username:l})}})));return null})),Re=Object(P.b)((function(e){return{channels:e.channels,badges:e.badges,emotes:e.emotes}}),{update:Q})((function(e){var t=e.update,a=e.badges,n=e.emotes,r=e.channels.toArray().filter((function(e){return e.roomId})),o=_e;return je()(r,o).length,je()(o,r).length,0===a.global.size&&fetch("https://badges.twitch.tv/v1/badges/global/display").then((function(e){if(200!==e.status)throw new Error(e.status||e.statusText);return e.json()})).then((function(e){return t({key:"global",value:e.badge_sets},"UPDATE_BADGES")})).catch((function(e){"404"!==e.message&&console.warn(e.message)})),0===n.global.size&&(fetch("https://api.betterttv.net/2/emotes").then((function(e){if(200!==e.status)throw new Error(e.status||e.statusText);return e.json()})).then((function(e){for(var a={},n=0,r=e.emotes.length;n<r;n++)a[e.emotes[n].code]=e.emotes[n];t({key:"globalbttv",value:a},"UPDATE_EMOTES")})).catch((function(e){"404"!==e.message&&console.warn(e.message)})),fetch("https://api.frankerfacez.com/v1/set/global").then((function(e){if(200!==e.status)throw new Error(e.status||e.statusText);return e.json()})).then((function(e){for(var a=e.sets[e.default_sets[0]].emoticons,n={},r=0,o=a.length;r<o;r++)n[a[r].name]=a[r];t({key:"globalffz",value:n},"UPDATE_EMOTES")})).catch((function(e){"404"!==e.message&&console.warn(e.message)}))),r.forEach((function(e){a[e.name]||fetch("https://badges.twitch.tv/v1/badges/channels/".concat(e.roomId,"/display")).then((function(e){if(200!==e.status)throw new Error(e.status||e.statusText);return e.json()})).then((function(a){t({key:e.name,value:a.badge_sets},"UPDATE_BADGES")})).catch((function(e){"404"!==e.message&&console.warn(e.message)})),n["".concat(e.name,"-bttv")]||fetch("https://api.betterttv.net/2/channels/".concat(e.name)).then((function(e){if(200!==e.status)throw new Error(e.status||e.statusText);return e.json()})).then((function(a){for(var n={},r=0,o=a.emotes.length;r<o;r++)n[a.emotes[r].code]=a.emotes[r];t({key:"".concat(e.name,"-bttv"),value:n},"UPDATE_EMOTES")})).catch((function(e){"404"!==e.message&&console.warn(e.message)})),n["".concat(e.name,"-ffz")]||fetch("https://api.frankerfacez.com/v1/room/id/".concat(e.roomId)).then((function(e){if(200!==e.status)throw new Error(e.status||e.statusText);return e.json()})).then((function(a){if(a.room&&a.room.set&&a.sets[a.room.set]&&a.sets[a.room.set].emoticons&&0!==a.sets[a.room.set].emoticons.length){for(var n=a.sets[a.room.set].emoticons,r={},o=0,s=n.length;o<s;o++)r[n[o].name]=n[o];t({key:"".concat(e.name,"-ffz"),value:r},"UPDATE_EMOTES")}})).catch((function(e){"404"!==e.message&&console.warn(e.message)}))})),_e=r,null}));s.a.render(r.a.createElement(P.a,{store:W},r.a.createElement(ye,null),r.a.createElement(q,null),r.a.createElement(Le,null),r.a.createElement(Re,null)),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.07bb77dd.chunk.js.map