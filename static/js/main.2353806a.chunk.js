(this["webpackJsonpLogein-Webpage"]=this["webpackJsonpLogein-Webpage"]||[]).push([[0],{218:function(e,t,n){e.exports=n.p+"static/media/TwitchGlitchWhite.5f80eca1.svg"},282:function(e,t,n){e.exports=n(566)},362:function(e,t,n){},441:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=441},469:function(e,t){},471:function(e,t){},566:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),s=n.n(o),l=n(51),c=n(69),i=n(70),u=n(73),p=n(71),h=n(24),m=n(74),d=n(265),g=n.n(d),f=n(266),b=n.n(f),v=n(267),E=n.n(v),y=new(n(279).a)({minHeight:19,defaultHeight:19,fixedWidth:!0,keyMapper:function(e){return e}}),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:19;y._minHeight=e,y._defaultHeight=e,y.clearAll()},w=n(62),k=(n(362),n(174)),C=n.n(k),D=n(270),S=n.n(D),j=function(e){return e<10?"0"+e:e},A=function(e){return e<10?"00"+e:e<100?"0"+e:e},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(e),a=j(n.getHours()),r=j(n.getMinutes()),o=j(n.getSeconds()),s=A(n.getMilliseconds());if(!t){var l=j(n.getDate()),c=j(n.getMonth()),i=n.getFullYear();return"".concat(i,"-").concat(c,"-").concat(l," ").concat(a,":").concat(r,":").concat(o,".").concat(s)}return"".concat(a,":").concat(r,":").concat(o,".").concat(s)},_=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&arguments[1];var e=0,t="";return function(n,a){if(e===n)return t;var r=T(n,a);return e=n,t=r,r}}(),L=n(27),N=n(280),R=n(72),x=n(55),F=!1,P=!1;function H(e,t){if(F&&console.log(">>>> Filter",e,t),F&&console.log("::: Filter channel '".concat(t.get("channel"),"', name '").concat(t.get("name"),"', msg '").concat(t.get("msg"),"'")),void 0===t.find((function(e){return""!==e})))return F&&console.log("Filter return { logs: allLogs, length: allLogs.size }"),{logs:e,length:e.size,scrollBottom:!0};P&&console.time("Filter");var n=t.get("channel"),a=t.get("name"),r=t.get("msg").toLowerCase();F&&console.log("::: Filter channel '".concat(n,"', name '").concat(a,"', msg '").concat(r,"'"));var o=e.filter((function(e){return(!n||e.chan===n)&&((!a||e.name===a)&&(!r||-1!==e.msg.toLowerCase().indexOf(r)))}));return P&&console.timeEnd("Filter"),{logs:o,length:o.size}}var I=["#fc5c65","#fd9644","#fed330","#26de81","#2bcbba","#eb3b5a","#fa8231","#f7b731","#20bf6b","#0fb9b1","#45aaf2","#4b7bec","#a55eea","#d1d8e0","#778ca3","#2d98da","#3867d6","#8854d0","#a5b1c2","#4b6584"],M=function(){var e=Math.floor(Math.random()*I.length),t=I[e];return I.splice(e,1),I.length||(I=["#fc5c65","#fd9644","#fed330","#26de81","#2bcbba","#eb3b5a","#fa8231","#f7b731","#20bf6b","#0fb9b1","#45aaf2","#4b7bec","#a55eea","#d1d8e0","#778ca3","#2d98da","#3867d6","#8854d0","#a5b1c2","#4b6584"]),t};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e,t){return{type:t,value:e}},W={allLogs:Object(x.a)(),logs:Object(x.a)(),length:0,scrollBottom:!0,filter:Object(x.b)({name:"",level:"",hostname:"",msg:""}),settings:Object(x.b)(JSON.parse(localStorage.getItem("settings"))||{modalShow:!1,detectLinks:!1,fontClass:"inconsolata-font",fontSize:13,rowHeight:19,maxLines:5e4,channelColor:{}}),channels:Object(x.a)(JSON.parse(localStorage.getItem("channels"))||[]),badges:{global:Object(x.b)()}},Q=Object(R.c)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"scrollBottom":0,t=z({},t,{scrollBottom:n.value});break;case"ADD_DATA":for(var a=t.settings.get("channelColor")||{},r=0,o=n.value.length;r<o;r++)a[n.value[r].chan]||(a[n.value[r].chan]=M());var s=(e=t.allLogs).push.apply(e,Object(N.a)(n.value));t.allLogs=s;break;case"ADD_ROOMID":var l=t.channels.findIndex((function(e){return e.name===n.value.name}));return-1!==l&&(t.channels=t.channels.set(l,n.value),n.value=t.channels),localStorage.setItem("channels",JSON.stringify(n.value.toArray())),z({},t,{channels:n.value});case"ADD_CHANNEL":(a=t.settings.get("channelColor")||{})&&a[n.value.name]||(a[n.value.name]=M());var c=t.channels.push({name:n.value.name,roomId:n.value.roomId});return z({},t,{channels:c});case"CHANNELS":return localStorage.setItem("channels",JSON.stringify(n.value.toArray())),z({},t,{channels:n.value});case"UPDATE_BADGES":return t.badges[n.value.key]=Object(x.b)(n.value.value),z({},t,{badges:t.badges})}switch(n.type){case"ADD_FILTER_channel":t.filter=t.filter.set("channel",n.value);break;case"ADD_FILTER_name":t.filter=t.filter.set("name",n.value);break;case"ADD_FILTER_msg":t.filter=t.filter.set("msg",n.value)}switch(n.type){case"ADD_FILTER_name":case"ADD_FILTER_channel":case"ADD_FILTER_msg":case"scrollBottom":case"ADD_DATA":var i="ADD_FILTER_name"===n.type||"ADD_FILTER_channel"===n.type||"ADD_FILTER_msg"===n.type;if(t.scrollBottom||i){var u=H(t.allLogs,t.filter),p=u.logs,h=u.length,m=u.scrollBottom,d=Number(t.settings.get("maxLines"));if(h>d){var g=10*d/100,f=d-g;t.allLogs=t.allLogs.takeLast(f),p=p.takeLast(f),h=f,O()}return z({},t,{scrollBottom:m||t.scrollBottom,logs:p,length:h})}return void 0===t.filter.find((function(e){return""!==e}))?z({},t,{logs:t.allLogs,length:t.allLogs.size}):z({},t)}switch(n.type){case"channelColor":var b=n.value;n.value=z({},t.settings.get(n.type),{},b);case"modalShow":case"detectLinks":case"fontClass":case"fontSize":case"rowHeight":case"appShow":case"hostnameShow":case"maxLines":isNaN(!n.value)&&(n.value=Number(n.value));var v=t.settings.set(n.type,n.value);t=z({},t,{settings:v}),localStorage.setItem("settings",JSON.stringify(v.toObject()))}return t}),W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=!1,Y=function(){var e,t;return"undefined"!==typeof document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),{hidden:e,visibilityChange:t}},X=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleResize=function(e){V&&console.log("handleResize()"),e<640?n.setState({mobile:!0}):n.setState({mobile:!1}),O(),n.bindListRef.current&&n.bindListRef.current.forceUpdateGrid()},n.listenScrollEvent=function(e){var t=e.scrollHeight,a=e.scrollTop,r=e.clientHeight;V&&console.log("listenScrollEvent() if ((".concat(t," - ").concat(a,") === ").concat(r,")")),0===t&&0===a||(t-a===r?n.props.scrollBottom||n.props.update(!0,"scrollBottom"):n.props.scrollBottom&&n.props.update(!1,"scrollBottom"))},n.UserNameRenderer=function(e){return r.a.createElement("span",{className:"username",onClick:function(){return n.updateFilter(e.name,"name")},style:{color:e&&e.tags&&e.tags.color?e.tags.color:"#EEE"}},e.name)},n.msgAttention=function(e){return e.msg=n.props.settings.get("detectLinks")?S()(e.msg,{truncate:[30,15],attributes:[{name:"target",value:"_blank"}]}):e.msg,e&&e.tags&&e.tags.attention?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.msg},style:{color:"red"}}):e&&e.tags&&e.tags.action?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.msg},style:{color:e.tags.color}}):r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.msg}})},n.decamelize=function(e){return e.replace(/([a-z\d])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1-$2").toLowerCase()},n.createBadge=function(e){var t=e.name,n=e.badge,a=e.tags;switch(t){case"subscriber":n=n.versions[a.badges.subscriber]?n.versions[a.badges.subscriber]:Object.keys(n.versions)[0];break;case"bits":n=n.versions[a.badges.bits]?n.versions[a.badges.bits]:Object.keys(n.versions)[0];break;default:n=n.versions[0]?n.versions[0]:n.versions[1]?n.versions[1]:Object.keys(n.versions)[0]}try{return r.a.createElement("img",{key:t||"",title:n.title||"",alt:n.title||"","aria-label":n.title||"",className:"line",src:n.image_url_1x,srcSet:"".concat(n.image_url_1x," 1x, ").concat(n.image_url_2x," 2x, ").concat(n.image_url_3x," 4x")})}catch(o){return console.warn(o),r.a.createElement("img",{key:t,alt:t,className:"line"})}},V&&console.log("LogContainer constructor",e),n.bindListRef=r.a.createRef(),n.state={mobile:window.innerWidth<640,scrollBottom:!0},n.updateFilter=n.updateFilter.bind(Object(h.a)(n));var a=Y(),o=a.hidden,s=a.visibilityChange;return"undefined"!==typeof document.addEventListener&&"undefined"!==typeof o&&document.addEventListener(s,(function(){document[o]||O()}),!1),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;V&&console.log("componentDidMount()"),this.bindListRef.current&&this.bindListRef.current.forceUpdateGrid(),window.addEventListener("resize",C()((function(){return e.handleResize(window.innerWidth)}),100))}},{key:"componentWillUnmount",value:function(){var e=this;try{window.removeResizeListener("resize",C()((function(){return e.handleResize(window.innerWidth)}),100))}catch(t){}}},{key:"componentDidUpdate",value:function(e,t,n){var a=this;if(V&&console.log("componentDidUpdate()"),this.props.length!==e.length){if(this.props.scrollBottom){var r=this.props.length;this.bindListRef.current.scrollToRow(r),this.setState({_scrollingToRow:r},(function(){a.bindListRef.current.scrollToRow(r)}))}this.props.filter!==e.filter&&O()}}},{key:"updateFilter",value:function(e,t){V&&console.log("updateFilter()",e,t),this.props.filter[t]===e&&(e=""),this.props.update(e,"ADD_FILTER_"+t)}},{key:"classifierLevel",value:function(e){var t=this;return r.a.createElement("span",{onClick:function(){return t.updateFilter(e.chan,"channel")}},e.chan)}},{key:"render",value:function(){var e=this;V&&console.log("LogContainer RENDER",this.props,"############################################");var t="";return this.props.scrollBottom||(t=r.a.createElement(w.a,{variant:"secondary",id:"scrollDown",onClick:function(){e.bindListRef.current.scrollToRow(e.props.length),e.props.update(!0,"scrollBottom"),O()}},"scroll down")),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"calc(100vh - 60px)",fontSize:Number(this.props.settings.get("fontSize")),fontFamily:"'".concat(this.props.settings.get("fontClass"),"', monospace")},className:"bg-dark text-list"},r.a.createElement(g.a,null,(function(t){var n=t.height,a=t.width;return r.a.createElement(b.a,{id:"list",height:n,width:a-3,overscanColumnCount:0,overscanRowCount:10,scrollingResetTimeInterval:0,ref:e.bindListRef,rowCount:e.props.length,deferredMeasurementCache:y,onScroll:e.listenScrollEvent,rowHeight:y.rowHeight,noRowsRenderer:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("i",null,"Nichts gefunden")))},rowRenderer:function(t){var n,a=t.index,o=t._key,s=t.parent,l=t.style,c=e.props.logs.get(a);n=c.tags&&c.tags.id?c.tags.id:o||a;var i=e.props.settings.get("channelColor")&&e.props.settings.get("channelColor")[c.chan]?{backgroundColor:e.props.settings.get("channelColor")[c.chan]}:{},u=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"line badge badge-primary",style:i,onClick:function(){return e.updateFilter(c.chan,"channel")}},c.chan)),p=[];if(c&&c.tags&&c.tags.badges)for(var h in c.tags.badges)if(c.tags.badges.hasOwnProperty(h)){var m=void 0;if(h=e.decamelize(h),e.props.badges[c.chan]&&e.props.badges[c.chan].has(h)){var d=e.props.badges[c.chan].get(h);m=e.createBadge({name:h,badge:d,tags:c.tags})}else if(e.props.badges.global.has(h)){var g=e.props.badges.global.get(h);m=e.createBadge({name:h,badge:g,tags:c.tags})}else m=r.a.createElement("span",{className:"line badge badge-primary",key:h,title:h},h);p.push(m)}return r.a.createElement(E.a,{cache:y,columnIndex:0,key:n,parent:s,rowIndex:a},(function(){return r.a.createElement("div",{key:n,style:J({},l,{padding:".3rem",wordWrap:"break-word",lineHeight:"20px"})},r.a.createElement("span",null,_(c.timestamp,e.state.mobile)),":",u,p,r.a.createElement("span",{className:"line"},e.UserNameRenderer(c)),r.a.createElement("span",{className:"line"},e.msgAttention(c)))}))}})})),t))}}]),t}(a.PureComponent),$=Object(L.b)((function(e){return{scrollBottom:e.scrollBottom,logs:e.logs,length:e.length,filter:e.filter,settings:e.settings,badges:e.badges}}),{update:U})(X),Z=n(44),q=n(177),K=n(276),ee=n(54),te=n(35),ne=n(275),ae=n(117),re=n(78),oe=n(116),se=n(13),le=n(274),ce=function(e){function t(e,n){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e,n))).handleShow=a.handleShow.bind(Object(h.a)(a)),a.handleClose=a.handleClose.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.state={restart:!1,temp:"",addChannel:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleShow",value:function(){this.props.update(!0,"modalShow")}},{key:"handleClose",value:function(){this.props.update(!1,"modalShow")}},{key:"handleChange",value:function(e){var t=e.target;this.setState({addChannel:t.value})}},{key:"render",value:function(){var e=this;var t=[];return this.props.channels.forEach((function(n){t.push(r.a.createElement(se.a,{key:n.name,className:"mb-3"},r.a.createElement(se.a.Prepend,null,r.a.createElement(se.a.Text,null,n.name)),r.a.createElement(te.a,{key:n.name,type:"color",name:n.name,defaultValue:e.props.settings.get("channelColor")[n.name],onChange:function(t){var n=t.target;e.props.update(Object(l.a)({},n.name,n.value),"channelColor")}}),r.a.createElement(se.a.Append,null,r.a.createElement(w.a,{variant:"outline-danger",onClick:function(){var t=e.props.channels,a=t.indexOf(n);a>-1&&(t=t.splice(a,1)),e.props.update(t,"CHANNELS")}},"X"))))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"outline-secondary",onClick:this.handleShow},r.a.createElement("span",{role:"img","aria-label":"Gear"},"\u2699")),r.a.createElement(re.a,{size:"lg",show:this.props.settings.get("modalShow"),onHide:this.handleClose,scrollable:!0},r.a.createElement(re.a.Header,{closeButton:!0},r.a.createElement(re.a.Title,null,"Einstellungen")),r.a.createElement(re.a.Body,null,r.a.createElement(oe.a,{in:this.state.restart},r.a.createElement("div",{onClick:function(){window.location.reload()}},r.a.createElement(le.a,{variant:"danger"},"Webseite Aktualisieren notwenig (F5)"))),r.a.createElement(ee.a.Group,{as:ne.a},r.a.createElement(ee.a.Label,{column:!0,sm:"1"},"Font"),r.a.createElement(ae.a,{sm:"11"},r.a.createElement(ee.a.Control,{as:"select",name:"fontClass",value:this.props.settings.get("fontClass"),onChange:function(t){var n=t.target;e.props.update(n.value,"fontClass")}},r.a.createElement("option",{value:"Arimo"},"Arimo"),r.a.createElement("option",{value:"Hind"},"Hind"),r.a.createElement("option",{value:"IBM Plex Sans"},"IBM Plex Sans"),r.a.createElement("option",{value:"Montserrat"},"Montserrat"),r.a.createElement("option",{value:"Muli"},"Muli"),r.a.createElement("option",{value:"Nunito Sans"},"Nunito Sans"),r.a.createElement("option",{value:"Gothic A1"},"Gothic A1"),r.a.createElement("option",{value:"Roboto"},"Roboto"),r.a.createElement("option",{value:"Rubik"},"Rubik"),r.a.createElement("option",{value:"Source Sans Pro"},"Source Sans Pro"),r.a.createElement("option",{value:"Poppins"},"Poppins"),r.a.createElement("option",{value:"Open Sans"},"Open Sans"),r.a.createElement("option",{value:"Work Sans"},"Work Sans")))),r.a.createElement(se.a,{className:"mb-3"},r.a.createElement(se.a.Prepend,null,r.a.createElement(se.a.Text,{id:"basic-addon1"},"Font Size")),r.a.createElement(te.a,{type:"number",placeholder:"Font Size","aria-label":"Font Size",name:"fontSize",onChange:function(t){var n=t.target;e.props.update(n.value,n.name)},defaultValue:this.props.settings.get("fontSize"),min:"6",max:"30"}),r.a.createElement(se.a.Append,null,r.a.createElement(se.a.Text,null,"px"))),r.a.createElement(se.a,{className:"mb-3"},r.a.createElement(se.a.Prepend,null,r.a.createElement(se.a.Text,null,"Row Height")),r.a.createElement(te.a,{type:"number",placeholder:"Row Height","aria-label":"Row Height",name:"rowHeight",onChange:function(t){var n=t.target;e.props.update(n.value,n.name),e.setState({restart:!0})},defaultValue:this.props.settings.get("rowHeight"),min:"3",max:"60"}),r.a.createElement(se.a.Append,null,r.a.createElement(se.a.Text,null,"px"))),r.a.createElement(se.a,{className:"mb-3"},r.a.createElement(se.a.Prepend,null,r.a.createElement(se.a.Text,null,"Max Lines")),r.a.createElement(te.a,{type:"number",placeholder:"Max Lines","aria-label":"Max Lines",onChange:function(t){var n=t.target;e.props.update(n.value,n.name),e.setState({restart:!0})},name:"maxLines",defaultValue:this.props.settings.get("maxLines"),min:"1"})),r.a.createElement("div",{key:"checkbox-detectLinks",className:"mb-3"},r.a.createElement(ee.a.Check,{custom:!0,type:"checkbox",id:"checkbox-detectLinks",label:"Erkenne URLs/EMails/IP-Adressen und konvertiere zu einem Link",name:"detectLinks",defaultChecked:this.props.settings.get("detectLinks"),onChange:function(t){var n=t.target;e.props.update(n.checked,n.name)}})),r.a.createElement("div",{key:"checkbox-showBadges",className:"mb-3"},r.a.createElement(ee.a.Check,{custom:!0,type:"checkbox",id:"checkbox-showBadges",label:"Zeige Badges an",name:"showBadges",defaultChecked:this.props.settings.get("showBadges"),onChange:function(t){var n=t.target;e.props.update(n.checked,n.name)}})),t,r.a.createElement(se.a,{className:"mb-3"},r.a.createElement(te.a,{placeholder:"add Channel","aria-label":"add Channel","aria-describedby":"basic-addon9",value:this.state.addChannel,onChange:this.handleChange}),r.a.createElement(se.a.Append,null,r.a.createElement(w.a,{variant:"outline-success",onClick:function(){e.props.update({name:e.state.addChannel.toLowerCase(),roomId:void 0},"ADD_CHANNEL"),e.setState({addChannel:""})}},"Add")))),r.a.createElement(re.a.Footer,null,r.a.createElement(w.a,{variant:"secondary",onClick:this.handleClose},"Schliessen"))))}}]),t}(a.PureComponent),ie=Object(L.b)((function(e){return{settings:e.settings,channels:e.channels}}),{update:U})(ce),ue=n(77),pe=n(281);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=!1;var ge=Object(pe.a)();Object(ue.configureUrlQuery)({history:ge,addChangeHandlers:!0});var fe={QueryChannel:{type:ue.UrlQueryParamTypes.string,queryParam:"channel"},QueryName:{type:ue.UrlQueryParamTypes.string,queryParam:"name"},QueryMsg:{type:ue.UrlQueryParamTypes.string,queryParam:"msg"}},be=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(u.a)(this,Object(p.a)(t).call(this,e)),de&&console.log("TopBar",e),n.state={},n.timer={},n.updateFilter=n.updateFilter.bind(Object(h.a)(n)),n.updateDebounceFilter=function(e,t){var n=null;return function(){var a=this,r=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(a,r)}),t)}}(n.updateFilter,150),n.onWheelHandler=n.onWheelHandler.bind(Object(h.a)(n)),n.onTouchMoveHandler=n.onTouchMoveHandler.bind(Object(h.a)(n)),n.onTouchStartHandler=n.onTouchStartHandler.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.QueryChannel&&this.props.update(this.props.QueryHostname,"ADD_FILTER_channel"),this.props.QueryName&&this.props.update(this.props.QueryApp,"ADD_FILTER_name"),this.props.QueryMsg&&this.props.update(this.props.QueryMsg,"ADD_FILTER_msg")}},{key:"updateFilter",value:function(e,t){switch(this.props.update(e,"ADD_FILTER_"+t),t){case"channel":this.props.onChangeQueryChannel(e);break;case"name":this.props.onChangeQueryName(e);break;case"msg":this.props.onChangeQueryMsg(e)}}},{key:"updateFilterNext",value:function(e,t){switch(de&&console.log("updateFilterNext",{type:e,up:t}),e){case"channel":var n=Object.keys(this.props.settings.get("channelColor"));if(console.log({ChannelArray:n}),1!==n.length){var a,r=n.indexOf(this.props.filter.get("channel"));t?void 0===n[a=r-1]&&(a=n.length-1):void 0===n[a=r+1]&&(a=0),this.updateFilter(n[a],e)}break;case"name":var o=Object.keys(this.props.settings.get("appColor"));if(1!==o.length){var s,l=o.indexOf(this.props.filter.get("name"));t?void 0===o[s=l-1]&&(s=o.length-1):void 0===o[s=l+1]&&(s=0),this.updateFilter(o[s],e)}break;default:console.warn("updateFilterNext:",e)}}},{key:"onWheelHandler",value:function(e,t){var n;n=!(e.deltaY>0),this.updateFilterNext(t,n)}},{key:"onTouchMoveHandler",value:function(e,t){var n,a=e.touches;this.state.touchReset||(n=!(a[0].pageY-this.state.touchY>0),this.setState({touchReset:!0}),this.updateFilterNext(t,n))}},{key:"onTouchStartHandler",value:function(e){var t=e.touches[0];this.setState({touchY:t.pageY,touchReset:!1})}},{key:"render",value:function(){var e=this;de&&console.log("TopbarContainer RENDER",this.props,"############################################");var t="";if(""!==this.props.filter.get("channel")){var a=this.props.settings.get("channelColor")&&this.props.settings.get("channelColor")[this.props.filter.get("channel")]?{backgroundColor:this.props.settings.get("channelColor")[this.props.filter.get("channel")]}:{};t=r.a.createElement(q.a,{variant:"secondary",ref:"app",style:me({},a,{margin:"0 5px 5px",touchAction:"pan-down"}),onClick:function(){return e.updateFilter("","channel")},onWheel:function(t){return e.onWheelHandler(t,"channel")},onTouchMove:function(t){return e.onTouchMoveHandler(t,"channel")},onTouchStart:this.onTouchStartHandler},this.props.filter.get("channel")),this.props.onChangeQueryChannel(this.props.filter.get("channel"))}var o="";if(""!==this.props.filter.get("name")){var s=this.props.settings.get("appColor")&&this.props.settings.get("appColor")[this.props.filter.get("name")]?{color:this.props.settings.get("appColor")[this.props.filter.get("name")]}:{};o=r.a.createElement(q.a,{variant:"secondary",ref:"app",style:me({},s,{margin:"0 5px 5px",touchAction:"pan-down"}),onClick:function(){return e.updateFilter("","name")},onWheel:function(t){return e.onWheelHandler(t,"name")},onTouchMove:function(t){return e.onTouchMoveHandler(t,"name")},onTouchStart:this.onTouchStartHandler},this.props.filter.get("name")),this.props.onChangeQueryName(this.props.filter.get("name"))}return r.a.createElement(Z.a,{bg:"dark",variant:"dark",style:{height:"60px"},collapseOnSelect:!0},r.a.createElement(Z.a.Brand,null,r.a.createElement(Z.a.Text,{className:"d-lg-none"},r.a.createElement("img",{src:n(218),alt:"logo",width:"30",height:"30",className:"d-inline-block align-top"})),r.a.createElement(Z.a.Text,{className:"d-none d-lg-block"},r.a.createElement("img",{src:n(218),alt:"logo",width:"30",height:"30",className:"d-inline-block align-top",style:{marginRight:"5px"}}),"TwitchChatViewer")),r.a.createElement(Z.a.Text,null,r.a.createElement("span",{className:"d-lg-none"},this.props.length),r.a.createElement("span",{className:"d-none d-lg-block"},this.props.length," lines")),r.a.createElement(Z.a.Collapse,{className:"justify-content-center"},r.a.createElement(Z.a.Text,null,r.a.createElement(K.a,null,t,o))),r.a.createElement(Z.a.Collapse,{className:"justify-content-end"},r.a.createElement(ee.a,{inline:!0,onSubmit:function(t){t.preventDefault(),e.updateFilter(e.refs.search.value,"msg")}},r.a.createElement(te.a,{type:"text",placeholder:"Search",className:"mr-sm-2 btn-dark",ref:"search",defaultValue:this.props.filter.get("msg"),onChange:function(){return e.updateDebounceFilter(e.refs.search.value,"msg")}})),r.a.createElement(ie,null)))}}]),t}(a.PureComponent),ve=Object(R.b)(Object(L.b)((function(e){return{length:e.length,filter:e.filter,settings:e.settings}}),{update:U}),Object(ue.addUrlProps)({urlPropsQueryConfig:fe}))(be);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=n(118),ye=n.n(Ee),Oe=n(277),we=n(76),ke=n.n(we),Ce=n(278),De=new(n.n(Ce).a)({token:"",username:"justinfan".concat(Math.floor(8e4*Math.random()+1e3)),chat:{joinTimeout:6e4}}).chat;De._log._level=-1;var Se,je=/(\x01ACTION )(.*)(\x01)/,Ae=Object(L.b)((function(e){return{channels:e.channels}}),{update:U})((function(e){var t,n=e.update,a=e.channels;if(3===De._readyState){var r=a.toArray().map((function(e){return e.name})),o=Object.keys(De._channelState).map((function(e){return e.substr(1)})),s=ke()(r,o);s.length&&De.join(s[0]).then((function(e){n({name:s[0],roomId:e.roomState.roomId},"ADD_ROOMID"),n([{timestamp:+new Date,chan:s[0],msg:"=> JOIN"}],"ADD_DATA")}));var l=ke()(o,r);l.length&&(console.log("part",l),t=l[0],De.part(t))}else 0===De._readyState&&(De.connect().then(Object(Oe.a)(ye.a.mark((function e(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.toArray().map((function(e){return De.join(e.name).then((function(t){return n([{timestamp:+new Date,chan:e.name,msg:"=> JOIN"}],"ADD_DATA")}))}));case 1:case"end":return e.stop()}}),e)})))).catch((function(e){console.warn(e)})),De.on("*",(function(e){var t=e.channel,a=e.command,r=e.message,o=e.tags,s=e.timestamp,l=e.username;s=s||+new Date;var c,i=t&&t.substr(1),u=l;switch(a){case"PRIVMSG":c=function(e,t){if(t===[])return e;e=e.split("");for(var n=0,a=t.length;n<a;n++)e.splice(t[n].start,t[n].end,'<img class="emoticon" src="//static-cdn.jtvnw.net/emoticons/v1/'+t[n].id+'/1.0">');return e.join("")}(r,o.emotes),null===o.color&&(o.color=M()),-1!==c.toLowerCase().indexOf("@"+i)&&(o.attention=!0);var p=je.exec(c);null!==p&&(c=p[2],o.action=!0),n([{timestamp:s,chan:i,name:u,msg:c,tags:o}],"ADD_DATA");break;case"USERNOTICE":n([{timestamp:s,chan:i,msg:o.systemMsg}],"ADD_DATA");break;case"CLEARMSG":console.log({channel:t,command:a,message:r,tags:o,timestamp:s,username:l}),n([{timestamp:s,chan:i,msg:"REMOVE ".concat(l,", ").concat(o.targetMsgId)}],"ADD_DATA");break;case"CLEARCHAT":c=o.banDuration?"TIMEOUT: ".concat(l,", ").concat(o.banDuration+"s"+(o.banReason?", "+o.banReason:"")):"BAN: ".concat(l,", banReason: ").concat(o.banReason),n([{timestamp:s,chan:i,msg:c}],"ADD_DATA");break;case"JOIN":case"PART":break;case"CONNECTED":n([{timestamp:s,chan:"twitch.tv",msg:"CONNECTED"}],"ADD_DATA");break;case"001":case"002":case"003":case"004":case"353":case"366":case"372":case"375":case"376":case"CAP":case"MODE":case"PING":case"ROOMSTATE":case"PARSE_ERROR_ENCOUNTERED":break;default:console.log("default",{channel:t,command:a,message:r,tags:o,timestamp:s,username:l})}})));return null})),Te=Object(L.b)((function(e){return{channels:e.channels,badges:e.badges}}),{update:U})((function(e){var t=e.update,n=e.badges,a=e.channels.toArray().filter((function(e){return e.roomId})),r=Se;return ke()(a,r).length,ke()(r,a).length,0===n.global.size&&fetch("https://badges.twitch.tv/v1/badges/global/display").then((function(e){return e.json()})).then((function(e){return t({key:"global",value:e.badge_sets},"UPDATE_BADGES")})),a.forEach((function(e){n[e.name]||fetch("https://badges.twitch.tv/v1/badges/channels/".concat(e.roomId,"/display")).then((function(e){return e.json()})).then((function(n){t({key:e.name,value:n.badge_sets},"UPDATE_BADGES")}))})),Se=a,null}));s.a.render(r.a.createElement(L.a,{store:Q},r.a.createElement(ve,null),r.a.createElement($,null),r.a.createElement(Ae,null),r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[282,1,2]]]);
//# sourceMappingURL=main.2353806a.chunk.js.map