(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-072a2a38":"7bebaae7","chunk-24783ee0":"86809dc9","chunk-48fa10d6":"3d79e14f","chunk-5909aef1":"668bf232","chunk-65d6cff6":"d969b430","chunk-684879ab":"3f6ea256","chunk-c45573d2":"3dc5327e","chunk-27c9975c":"70a60a28","chunk-2d0af48a":"c514bf00","chunk-28f8f935":"8ff165d5","chunk-4500f9ac":"1bc878e6","chunk-51ce7c0c":"727f45bd","chunk-6b142b2b":"c9b6f680","chunk-d986601a":"072957d8","chunk-e867bd68":"dfc54724","chunk-5569e0be":"c4f30bd8","chunk-3176e668":"29d225ae","chunk-3c1c16bc":"b5f5ca9a","chunk-2ae050aa":"f9fb1d4a"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-072a2a38":1,"chunk-24783ee0":1,"chunk-48fa10d6":1,"chunk-5909aef1":1,"chunk-65d6cff6":1,"chunk-684879ab":1,"chunk-27c9975c":1,"chunk-28f8f935":1,"chunk-4500f9ac":1,"chunk-51ce7c0c":1,"chunk-6b142b2b":1,"chunk-d986601a":1,"chunk-e867bd68":1,"chunk-5569e0be":1,"chunk-3176e668":1,"chunk-3c1c16bc":1,"chunk-2ae050aa":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-072a2a38":"0e433876","chunk-24783ee0":"8b5fefc0","chunk-48fa10d6":"0e433876","chunk-5909aef1":"0e433876","chunk-65d6cff6":"0e433876","chunk-684879ab":"0e433876","chunk-c45573d2":"31d6cfe0","chunk-27c9975c":"4d790ebf","chunk-2d0af48a":"31d6cfe0","chunk-28f8f935":"fe395cc8","chunk-4500f9ac":"8b5fefc0","chunk-51ce7c0c":"aefcbcd3","chunk-6b142b2b":"8b5fefc0","chunk-d986601a":"b78db504","chunk-e867bd68":"052f0bfc","chunk-5569e0be":"0f8b769d","chunk-3176e668":"93ff9eba","chunk-3c1c16bc":"5ed80578","chunk-2ae050aa":"c7165aa4"}[t]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.request=r,delete a[t],f.parentNode.removeChild(f),n(c)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=c);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(t),u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"25fe":function(t,e,n){"use strict";var r=n("6d06"),a=n.n(r);a.a},"39e5":function(t,e,n){"use strict";var r=n("82c8"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=n("bc3a"),o=n.n(a),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:t.dark}},[n("v-navigation-drawer",{staticClass:"elevation-5",attrs:{floating:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return n("v-toolbar",{class:"elevation-"+(r?20:0)+" "+(t.dark?"royal-bg":"light-bg"),attrs:{flat:"",prominent:"",dark:"",xxxstyle:"position: absolute; bottom:0"}},[n("div",{staticClass:"text-uppercase caption ml-0"},[n("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:"https://speckle.works",target:"_blank"}},[n("b",[t._v("Speckle")]),t._v(",\n            "),n("span",{staticClass:"font-weight-light caption"},[t._v("the open source data platform for AEC.")])])])])}}])}),n("nav-drawer")],1),n("v-toolbar",{attrs:{app:"",flat:""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"text-uppercase font-weight-light"},[t._v(t._s(t.$route.name))]),t.$route.path.includes("view")?n("div",{staticClass:"mt-1"},[n("v-btn",{attrs:{small:"",round:"",flat:""},nativeOn:{click:function(e){return t.toggleControlsViewer(e)}}},[t._v(t._s(t.$store.state.viewerControls?"close":"show")+" controls")])],1):t._e(),n("v-spacer"),n("v-btn",{attrs:{small:"",flat:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("\n      Logout\n    ")]),n("v-btn",{attrs:{flat:"",small:"",icon:""},nativeOn:{click:function(e){return t.toggleDark()}}},[n("v-icon",{attrs:{small:""}},[t._v("wb_sunny")])],1)],1),n("v-content",[n("keep-alive",{attrs:{exclude:"StreamDetailView"}},[n("router-view")],1)],1),n("div",{staticClass:"tooltipOwner"}),n("div",{staticClass:"tooltipDoc"}),n("div",{staticClass:"tooltip"})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.state.isAuth?n("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[n("v-list-tile",{attrs:{to:"/"}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Home")]),n("v-list-tile-sub-title",{staticClass:"font-weight-light caption"},[t._v("Everything at a glance.")])],1)],1),n("v-list-tile",{attrs:{to:"/streams"}},[n("v-list-tile-action",[n("v-icon",[t._v("import_export")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Streams")]),n("v-list-tile-sub-title",{staticClass:"font-weight-light caption"},[t._v("Create and manage your streams.")])],1)],1),n("v-list-tile",{attrs:{to:"/projects"}},[n("v-list-tile-action",[n("v-icon",[t._v("business")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Projects")]),n("v-list-tile-sub-title",{staticClass:"font-weight-light caption"},[t._v("Group your data and share it with others.")])],1)],1),n("v-list-tile",{attrs:{to:"/trash"}},[n("v-list-tile-action",[n("v-icon",[t._v("delete_outline")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Archive")]),n("v-list-tile-sub-title",{staticClass:"font-weight-light caption"},[t._v("The good old recycle bin.")])],1)],1),"admin"===t.$store.state.user.role?n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v("settings")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Admin")]),n("v-list-tile-sub-title",{staticClass:"font-weight-light caption"},[t._v("Server administration (TODO)")])],1)],1):t._e(),n("v-divider",{staticClass:"ma-3"}),n("v-list-tile",{attrs:{to:"/view"}},[n("v-list-tile-action",[n("v-icon",[t._v("360")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Viewer")]),n("v-list-tile-sub-title",{staticClass:"font-weight-light caption"},[t._v("View Things! In Dimensions! With 3D!")])],1)],1),n("v-divider",{staticClass:"ma-3"})],1):t._e(),t.$store.state.isAuth?n("v-list",[n("v-list-tile",{attrs:{to:"/profile"}},[n("v-list-tile-action",[n("v-icon",[t._v("face")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Profile")])],1)],1),n("v-list-tile",{attrs:{to:"/plugins"}},[n("v-list-tile-action",[n("v-icon",[t._v("category")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Plugins")])],1)],1),n("v-list-tile",{attrs:{to:"/feedback"}},[n("v-list-tile-action",[n("v-icon",[t._v("feedback")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Feedback")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v("developer_board")])],1),n("v-list-tile-content",[n("v-list-tile-sub-title",{staticClass:"font-weight-light caption"},[t._v("You're connected at "+t._s(t.$store.state.serverManifest.serverName)),n("br"),t._v(t._s(t.$store.state.server))])],1)],1)],1):n("v-list",{attrs:{"three-line":""}},[n("v-list-tile",{attrs:{to:"/login"}},[n("v-list-tile-action",[n("v-icon",[t._v("face")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Login")]),n("v-list-tile-sub-title",[t._v("If you already have an account, login here!")])],1)],1),n("v-list-tile",{attrs:{to:"/register"}},[n("v-list-tile-action",[n("v-icon",[t._v("add")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Register")]),n("v-list-tile-sub-title",[t._v("If you don't have an account, create one here!")])],1)],1)],1)],1)},u=[],l={name:"SiteNavigation"},d=l,f=(n("39e5"),n("2877")),m=Object(f["a"])(d,s,u,!1,null,null,null);m.options.__file="NavDrawer.vue";var h=m.exports,v={name:"MainApp",components:{NavDrawer:h},data:function(t){return{drawer:!0,dark:!1,viewerControls:!0}},methods:{toggleDark:function(){this.dark=!this.dark,localStorage.setItem("dark",this.dark)},logout:function(){this.$store.dispatch("logout"),this.$router.push("/login")},toggleControlsViewer:function(){this.$store.commit("TOGGLE_VIEWER_CONTROLS")}},created:function(){this.$store.state.isAuth&&(this.$store.dispatch("getStreams","omit=objects,layers&isComputedResult=false&sort=updatedAt"),this.$store.dispatch("getProjects"),this.$store.dispatch("createClient")),"true"===localStorage.getItem("dark")&&(this.dark=!0,this.$store.commit("SET_DARK",!0))},updated:function(){var t=document.getElementsByClassName("md-overlay")[0];t&&(t.onclick=function(){this.showSidebar=!1}.bind(this))}},p=v,b=(n("5c0b"),Object(f["a"])(p,c,i,!1,null,null,null));b.options.__file="App.vue";var g=b.exports,_=n("8c4f"),E=n("795b"),k=n.n(E),w=n("a4bb"),j=n.n(w),S=(n("7514"),n("20d6"),n("5d73")),T=n.n(S),A=n("75fc"),y=(n("55dd"),n("b6d0")),I=n.n(y),O=(n("7f7f"),n("6762"),n("2fdb"),n("28a5"),n("6b54"),n("ac6a"),n("7618")),R=n("a745"),D=n.n(R),P=n("2f62"),C=n("c36e"),x=n.n(C),M=n("c64e"),L=n.n(M),U=n("1149"),W=n.n(U);function N(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(D()(t[n])||("object"===Object(O["a"])(t[n])&&null!==t[n]?e[n]=N(t[n]):e[n]=t[n]));return e}function J(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(D()(t[n])?e[n]="Array with ".concat(t[n].length," elements"):"object"===Object(O["a"])(t[n])&&null!==t[n]&&(e[n]=J(t[n])));return e}r["default"].use(P["a"]);var $=new P["a"].Store({state:{server:null,serverManifest:null,token:null,user:{},isAuth:!1,streams:[],deStreams:[],clients:[],projects:[],comments:[],users:[],loadedStreamIds:[],objects:[],legend:null,selectedObjects:[],myClient:null,dark:!1,viewerControls:!0},getters:{streamClients:function(t){return function(e){return t.clients.filter(function(t){return t.streamId===e})}},filteredStreams:function(t){return function(e){var n=t.streams.filter(function(t){return null==t.parent&&!1===t.deleted});return e&&0!==e.length?(e.forEach(function(e){if(e.key=e.key.toLowerCase(),null===e.value)n=n;else switch(e.key){case"private":n=e.value?n.filter(function(t){return t.private.toString()===e.value}):n.filter(function(t){return!0===t.private});break;case"public":n=e.value?n.filter(function(t){return(!t.private).toString()===e.value}):n.filter(function(t){return!1===t.private});break;case"tag":case"tags":var r=e.value.split(",").map(function(t){return t.toLowerCase()});n=n.filter(function(t){var e=t.tags.map(function(t){return t.toLowerCase()});return r.every(function(t){return e.includes(t)})});break;case"mine":n=n.filter(function(e){return e.owner===t.user._id});break;case"shared":n=n.filter(function(e){return e.owner!==t.user._id});break;case"name":n=n.filter(function(t){return!t.name||t.name.toLowerCase().includes(e.value.toLowerCase())});break;case"streamid":case"id":n=n.filter(function(t){return t.streamId.toLowerCase().includes(e.value.toLowerCase())});break}}),n):n}},objectPropertyKeys:function(t){var e=new I.a,n=new I.a;t.objects.forEach(function(t){if(t.properties){var r=W()(N(t.properties));for(var a in r)"hash"===a||"id"===a||a.toLowerCase().includes("hash")||a.toLowerCase().includes("_carbon")||a.includes("__")||(e.add(a),"string"===typeof r[a]&&n.add(a))}});var r={allKeys:Object(A["a"])(e).sort(function(t,e){return t.split(".").length-e.split(".").length}).sort(function(t,e){return t.length-e.length}),stringKeys:Object(A["a"])(n).sort(function(t,e){return t.split(".").length-e.split(".").length}).sort(function(t,e){return t.length-e.length})};return r},hasStructuralProperties:function(t){var e=!0,n=!1,r=void 0;try{for(var a,o=T()(t.objects);!(e=(a=o.next()).done);e=!0){var c=a.value;try{if(null!==c.properties.structural.result)return!0}catch(i){}}}catch(s){n=!0,r=s}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}return!1},structuralKeys:function(t){var e=new I.a,n=!0,r=!1,a=void 0;try{for(var o,c=T()(t.objects);!(n=(o=c.next()).done);n=!0){var i=o.value;try{var s=W()(J(i.properties.structural.result));for(var u in s)e.add(u)}catch(l){}}}catch(d){r=!0,a=d}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return Object(A["a"])(e)}},mutations:{SET_DARK:function(t,e){t.dark=e},TOGGLE_VIEWER_CONTROLS:function(t){t.viewerControls=!t.viewerControls},ADD_STREAMS:function(t,e){e.forEach(function(e){-1===t.streams.findIndex(function(t){return t.streamId===e.streamId})&&(e.description||(e.description="..."),e.tags||(e.tags=[]),t.streams.unshift(e))})},UPDATE_STREAM:function(t,e){var n=t.streams.find(function(t){return t.streamId===e.streamId});if(!n)throw new Error("could not find stream.");j()(e).forEach(function(t){n[t]=e[t]}),n.updatedAt=(new Date).toISOString()},UPDATE_STREAM_DATA:function(t,e){var n=t.streams.find(function(t){return t.streamId===e.streamId});e.layers&&(n.layers=e.layers),n.updatedAt=(new Date).toISOString()},DELETE_STREAM:function(t,e){var n=t.streams.findIndex(function(t){return t.streamId===e.streamId});n>-1?t.streams.splice(n,1):console.log("Failed to remove stream ".concat(e.streamId," from store."))},ADD_CLIENTS:function(t,e){e.forEach(function(e){-1===t.clients.findIndex(function(t){return t._id===e._id})&&t.clients.push(e)})},ADD_DE_STREAM:function(t,e){var n=t.deStreams.find(function(t){return t.streamId===e});n?(n.layers=e.layers,n.objects=e.objects):t.deStreams.push(e)},ADD_DE_STREAM_LAYER:function(t,e){console.log(e);var n=t.deStreams.find(function(t){return t.streamId===e.streamId}),r={name:"Param group ".concat(n.layers.length+1),orderIndex:n.layers.length,startIndex:n.objects.length,objectCount:0,topology:"0-0",guid:L()()};n.layers.push(r)},UPDATE_DE_STREAM_LAYER:function(t,e){var n=e.streamId,r=e.layer,a=e.objects,o=t.deStreams.find(function(t){return t.streamId===n}),c=!1,i=0;o.layers.forEach(function(t){if(c)t.startIndex+=i;else if(t.guid===r.guid){var e;t.name=r.name,t.topology="0-".concat(a.length),i=a.length-t.objectCount,(e=o.objects).splice.apply(e,[t.startIndex,t.objectCount].concat(Object(A["a"])(a))),t.objectCount=a.length,c=!0}})},REMOVE_DE_STREAM_LAYER:function(t,e){var n=e.streamId,r=e.layer,a=t.deStreams.find(function(t){return t.streamId===n});a.objects.splice(r.startIndex,r.objectCount);var o=!1;a.layers.forEach(function(t){o?(t.startIndex-=r.objectCount,t.orderIndex-=1):t.guid===r.guid&&(o=!0)}),a.layers=a.layers.filter(function(t){return t.guid!==r.guid})},APPEND_DE_STREAM_LAYERS_FROM_CSV:function(t,e){var n=e.streamId,r=e.transposed,a=t.deStreams.find(function(t){return t.streamId===n}),o=!0,c=!1,i=void 0;try{for(var s,u=T()(r);!(o=(s=u.next()).done);o=!0){var l,d=s.value,f={name:""!==d[0]?d[0]:"Unnamed",orderIndex:-1,startIndex:a.objects.length,objectCount:d.length-1,topology:"0-".concat(d.length-1),guid:L()()};a.layers.push(f);var m=d.slice(1,d.length);console.log(m),(l=a.objects).push.apply(l,Object(A["a"])(m.map(function(t){return t?"boolean"===typeof t?{type:"Boolean",value:t}:"number"===typeof t?{type:"Number",value:t}:"string"===typeof t?{type:"String",value:t}:void 0:{type:"Null",value:""}}))),0}}catch(h){c=!0,i=h}finally{try{o||null==u.return||u.return()}finally{if(c)throw i}}a.layers.forEach(function(t,e){console.log(e),t.orderIndex=e})},ADD_PROJECTS:function(t,e){e.forEach(function(e){-1===t.projects.findIndex(function(t){return t._id===e._id})&&(e.tags||(e.tags=[]),e.deleted||(e.deleted=!1),t.projects.unshift(e))})},UPDATE_PROJECT:function(t,e){var n=t.projects.find(function(t){return t._id===e._id});j()(e).forEach(function(t){n[t]=e[t]}),n.updatedAt=(new Date).toISOString()},DELETE_PROJECT:function(t,e){var n=t.projects.findIndex(function(t){return t._id===e._id});n>-1?t.projects.splice(n,1):console.log("Failed to remove project ".concat(e._id," from store."))},ADD_USER:function(t,e){var n=t.users.find(function(t){return t._id===e._id});n?n=e:t.users.unshift(e)},ADD_USERS:function(t,e){e.forEach(function(e){var n=t.users.find(function(t){return t._id===e._id});n?n=e:t.users.unshift(e)})},UPDATE_LUSER:function(t,e){var n=null;if(n=e._id===t.user._id?t.user:t.users.find(function(t){return t._id===e._id}),!n)return console.error("User not found; aborting update.");j()(e).forEach(function(t){n[t]=e[t]})},SET_SERVER:function(t,e){t.server=e},SET_SERVER_DETAILS:function(t,e){t.serverManifest=e},SET_TOKEN:function(t,e){t.token=e,t.isAuth=!0},SET_USER:function(t,e){t.user=e},SET_WEB_APP_CLIENT:function(t,e){t.client=e},FLUSH_ALL:function(t){t.token=null,t.user={},t.streams=[],t.projects=[],t.clients=[],t.users=[],t.comments=[],t.isAuth=!1},ADD_LOADED_STREAMID:function(t,e){t.loadedStreamIds=Object(A["a"])(new I.a([].concat(Object(A["a"])(t.loadedStreamIds),[e])))},REMOVE_LOADED_STREAMID:function(t,e){var n=t.loadedStreamIds.indexOf(e);-1!==n?t.loadedStreamIds.splice(n,1):console.warn("Failed to remove loaded streamid: ".concat(e," from ").concat(t.loadedStreamIds))},ADD_OBJECTS:function(t,e){var n;(n=t.objects).push.apply(n,Object(A["a"])(e))},UPDATE_OBJECTS_STREAMS:function(t,e){var n=e.objIds,r=e.streamToAdd,a=e.streamToRemove;n.forEach(function(e){var n=t.objects.find(function(t){return t._id===e});if(n&&(r&&-1===n.streams.indexOf(r)&&n.streams.push(r),a)){var o=n.streams.indexOf(a);-1!==o&&n.streams.splice(o,1)}})},REMOVE_OBJECTS:function(t,e){t.objects=t.objects.filter(function(t){return-1===e.indexOf(t._id)})},SET_SELECTED_OBJECTS:function(t,e){var n=e.objectIds;n.length>0?t.selectedObjects=Object(A["a"])(new I.a([].concat(Object(A["a"])(t.selectedObjects),Object(A["a"])(n)))):t.selectedObjects=[]},ADD_SELECTED_OBJECTS:function(t,e){var n=e.objectIds;t.selectedObjects=Object(A["a"])(new I.a([].concat(Object(A["a"])(t.selectedObjects),Object(A["a"])(n))))},REMOVE_SELECTED_OBJECTS:function(t,e){var n=e.objectIds;n.forEach(function(e){var n=t.selectedObjects.indexOf(e);-1!==n&&t.selectedObjects.splice(n,1)})},SET_LEGEND:function(t,e){t.legend=e}},actions:{getStream:function(t,e){return new k.a(function(n,r){var a=t.state.streams.find(function(t){return t.streamId===e.streamId});if(a)return n(a);o.a.get("streams/".concat(e.streamId,"?omit=objects")).then(function(e){return t.commit("ADD_STREAMS",[e.data.resource]),n(e)}).catch(function(t){return r(t)})})},refreshStream:function(t,e){return new k.a(function(n,r){o.a.get("streams/".concat(e.streamId,"?omit=objects")).then(function(e){return t.commit("UPDATE_STREAM",e.data.resource),n(e)}).catch(function(t){return r(t)})})},getStreams:function(t,e){return new k.a(function(n,r){o.a.get("streams?".concat(e||"")).then(function(e){return t.commit("ADD_STREAMS",e.data.resources),n(e.data.resources)}).catch(function(t){return console.log(t),r(t)})})},createStream:function(t,e){return new k.a(function(n,r){o.a.post("streams").then(function(n){return console.log(n),e.streamId=n.data.resource.streamId,n.data.resource.onlineEditable=!0,t.commit("ADD_STREAMS",[n.data.resource]),o.a.put("streams/".concat(n.data.resource.streamId),e)}).then(function(r){return console.log(r),t.commit("UPDATE_STREAM",e),n(e)}).catch(function(t){return console.error(t),r(t)})})},updateStream:function(t,e){o.a.put("streams/".concat(e.streamId),e).then(function(n){t.commit("UPDATE_STREAM",e)}).catch(function(t){console.warn(t)})},updateStreamObjectsAndLayers:function(t,e){var n=e.streamId,r=e.commitMessage;return new k.a(function(e,a){var c=t.state.deStreams.find(function(t){return t.streamId===n});if(!c)return a(new Error("Stream not found in store."));c.commitMessage=r+" (changed by ".concat(t.state.user.name," ").concat(t.state.user.surname,")"),c.lastChangedBy=t.state.user._id,t.commit("UPDATE_STREAM",{streamId:n,commitMessage:r}),o.a.post("streams/".concat(n,"/clone")).then(function(e){var r=t.state.streams.find(function(t){return t.streamId===n});return t.commit("UPDATE_STREAM",{streamId:n,children:[].concat(Object(A["a"])(r.children),[e.data.clone.streamId])}),o.a.put("streams/".concat(n),c)}).then(function(t){return e(t)}).catch(function(t){return a(t)})})},getStreamClients:function(t,e){o.a.get("streams/".concat(e.streamId,"/clients")).then(function(e){t.commit("ADD_CLIENTS",e.data.resources)}).catch(function(t){console.log(t)})},deleteStream:function(t,e){o.a.delete("streams/".concat(e.streamId)).then(function(n){t.commit("DELETE_STREAM",{streamId:e.streamId})}).catch(function(t){console.log(t)})},getStreamObjects:function(t,e){t.state.streams.find(function(t){return t.streamId===e});return new k.a(function(n,r){t.dispatch("getStream",{streamId:e}).then(function(){return o.a.get("streams/".concat(e,"?fields=objects,layers"))}).then(function(r){var a=r.data.resource.objects.map(function(t){return t._id});t.commit("UPDATE_STREAM",{streamId:e,objects:a,layers:r.data.resource.layers}),n(a)}).catch(function(t){r(t)})})},getObjects:function(t,e){return new k.a(function(t,n){o.a.post("objects/getbulk?omit=base64,rawData,canRead,canWrite,children,anonymousComments,name",e).then(function(e){t(e.data.resources)}).catch(function(t){return n(t)})})},getProject:function(t,e){return new k.a(function(n,r){o.a.get("projects/".concat(e._id)).then(function(e){return t.commit("ADD_PROJECTS",[e.data.resource]),n(e)}).catch(function(t){return console.error(t),r(t)})})},getProjects:function(t,e){return new k.a(function(n,r){o.a.get("projects?".concat(e||"")).then(function(e){return t.commit("ADD_PROJECTS",e.data.resources),n(e.data.resources)}).catch(function(t){return console.log(t),r(t)})})},createProject:function(t,e){return new k.a(function(n,r){o.a.post("projects",e||{name:"A new speckle project"}).then(function(e){return t.commit("ADD_PROJECTS",[e.data.resource]),n(e.data.resource)}).catch(function(t){return console.log(t),r(t)})})},updateProject:function(t,e){o.a.put("projects/".concat(e._id),e).then(function(n){t.commit("UPDATE_PROJECT",e)}).catch(function(t){console.warn(t)})},addUserToProject:function(t,e){var n=e.projectId,r=e.userId;return new k.a(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.put("projects/".concat(n,"/adduser/").concat(r)).then(function(a){var o={canWrite:Object(A["a"])(new I.a([].concat(Object(A["a"])(c.permissions.canWrite),[r]))),canRead:c.permissions.canRead},i=Object(A["a"])(new I.a([].concat(Object(A["a"])(c.canRead),[r])));return t.commit("UPDATE_PROJECT",{_id:n,permissions:o,canRead:i}),c.streams.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canWrite:x()([].concat(Object(A["a"])(n.canWrite),[r]))})}),e()}).catch(function(t){return console.warn(t),a(t)})})},upgradeUserInProject:function(t,e){var n=e.projectId,r=e.userId;return new k.a(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.put("projects/".concat(n,"/upgradeuser/").concat(r)).then(function(t){return o.a.get("projects/".concat(n,"?fields=permissions"))}).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,permissions:{canRead:a.data.resource.permissions.canRead,canWrite:a.data.resource.permissions.canWrite}}),c.streams.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canWrite:x()([].concat(Object(A["a"])(n.canWrite),[r])),canRead:x()([].concat(Object(A["a"])(n.canRead),[r]))})}),e()}).catch(function(t){return console.warn(t),a(t)})})},downgradeUserInProject:function(t,e){var n=e.projectId,r=e.userId;return new k.a(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.put("projects/".concat(n,"/downgradeuser/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,permissions:a.data.project.permissions}),a.data.streamsToAddReadAndPullWrite.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canWrite:n.canWrite.filter(function(t){return t!==r}),canRead:x()([].concat(Object(A["a"])(n.canRead),[r]))})}),a.data.streamsToAddToRead.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canRead:x()([].concat(Object(A["a"])(n.canRead),[r]))})}),e()}).catch(function(t){return console.warn(t),a(t)})})},removeUserInProject:function(t,e){var n=e.projectId,r=e.userId;return new k.a(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.delete("projects/".concat(n,"/removeuser/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,canRead:a.data.project.canRead,canWrite:a.data.project.canWrite,permissions:a.data.project.permissions}),a.data.streamsToPullBothFrom.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canRead:n.canRead.filter(function(t){return t!==r}),canWrite:n.canWrite.filter(function(t){return t!==r})})}),a.data.streamsToPullWriteFrom.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canWrite:n.canWrite.filter(function(t){return t!==r})})}),a.data.streamsToPullReadFrom.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canRead:n.canRead.filter(function(t){return t!==r})})}),e()}).catch(function(t){return console.warn(t),a(t)})})},addStreamToProject:function(t,e){var n=e.projectId,r=e.streamId;return new k.a(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.put("projects/".concat(n,"/addstream/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,streams:a.data.project.streams}),t.commit("UPDATE_STREAM",{streamId:r,canRead:a.data.stream.canRead,canWrite:a.data.stream.canWrite}),e()}).catch(function(t){return console.warn(t),a(t)})})},removeStreamFromProject:function(t,e){var n=e.projectId,r=e.streamId;return new k.a(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.delete("projects/".concat(n,"/removestream/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,streams:a.data.project.streams}),t.commit("UPDATE_STREAM",{streamId:r,canRead:a.data.stream.canRead,canWrite:a.data.stream.canWrite}),e()}).catch(function(t){return console.warn(t),a(t)})})},deleteProject:function(t,e){return new k.a(function(n,r){o.a.delete("projects/".concat(e._id)).then(function(r){t.commit("DELETE_PROJECT",{_id:e._id});var a=!0,o=!1,c=void 0;try{for(var i,s=T()(r.data.modifiedStreams);!(a=(i=s.next()).done);a=!0){var u=i.value;t.commit("UPDATE_STREAM",{streamId:u.streamId,canRead:u.canRead,canWrite:u.canWrite})}}catch(l){o=!0,c=l}finally{try{a||null==s.return||s.return()}finally{if(o)throw c}}return n()}).catch(function(t){return console.warn(t),r(t)})})},createClient:function(t,e){return new k.a(function(e,n){delete o.a.defaults.headers.common["Authorization"],o.a.post("clients",{role:"online-client",documentName:"Online interface",documentType:"browser",online:!0}).then(function(n){return console.log(n),t.commit("SET_WEB_APP_CLIENT",n.data.resource),e(n.data.resource)}).catch(function(t){return console.warn(t),n(t)}),o.a.defaults.headers.common["Authorization"]=t.state.token})},getUser:function(t,e){return new k.a(function(n,r){var a=t.state.users.find(function(t){return t._id===e._id});if(a)return n(a);o.a.get("accounts/".concat(e._id)).then(function(r){return t.state.user._id===e._id&&(r.data.resource.surname+=" (that is you!)"),t.commit("ADD_USER",r.data.resource),n(r.data.resource)}).catch(function(t){return r(t)})})},updateLoggedInUser:function(t,e){return new k.a(function(n,r){o.a.put("accounts",e).then(function(r){return t.commit("UPDATE_LUSER",e),n(r)}).catch(function(t){return r(t)})})},login:function(t,e){return new k.a(function(n,r){o.a.post("accounts/login",{email:e.email,password:e.password}).then(function(e){return t.commit("SET_TOKEN",e.data.resource.token),t.commit("SET_USER",e.data.resource),localStorage.setItem("token",e.data.resource.token),o.a.defaults.headers.common["Authorization"]=e.data.resource.token,n(e.data.resource)}).catch(function(t){return r(t)})})},logout:function(t,e){t.commit("FLUSH_ALL"),localStorage.removeItem("token"),o.a.defaults.headers.common["Authorization"]=""}}});r["default"].use(_["a"]);var B=new _["a"]({linkExactActiveClass:"is-active",routes:[{path:"/",name:"dashboard",component:function(){return n.e("chunk-24783ee0").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/login/:redirectTo?",name:"login",component:function(){return n.e("chunk-072a2a38").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-684879ab").then(n.bind(null,"73cf"))}},{path:"/streams",name:"streams",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-d986601a")]).then(n.bind(null,"cf8c"))},meta:{requiresAuth:!0}},{path:"/streams/:streamId",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-51ce7c0c")]).then(n.bind(null,"7057"))},meta:{requiresAuth:!0},children:[{name:"stream overview",path:"",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-28f8f935")]).then(n.bind(null,"a29c"))}},{name:"stream data",path:"data",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-3c1c16bc")]).then(n.bind(null,"05ce"))}},{name:"stream sharing",path:"sharing",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-27c9975c")]).then(n.bind(null,"69e0"))}},{name:"stream history",path:"history",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-3176e668")]).then(n.bind(null,"6a14"))}}]},{path:"/projects",name:"projects",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-6b142b2b")]).then(n.bind(null,"acca"))},meta:{requiresAuth:!0}},{path:"/projects/:projectId",name:"project overview",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-e867bd68"),n.e("chunk-5569e0be")]).then(n.bind(null,"07bd"))},meta:{requiresAuth:!0}},{path:"/view/:streamIds*",name:"viewer",component:function(){return Promise.all([n.e("chunk-e867bd68"),n.e("chunk-2ae050aa")]).then(n.bind(null,"e1b1"))},meta:{requiresAuth:!1}},{path:"/trash",name:"trash",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-4500f9ac")]).then(n.bind(null,"27c8"))},meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:function(){return n.e("chunk-48fa10d6").then(n.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/plugins",name:"plugins",component:function(){return n.e("chunk-5909aef1").then(n.bind(null,"793c"))},meta:{requiresAuth:!0}},{path:"/feedback",name:"feedback",component:function(){return n.e("chunk-65d6cff6").then(n.bind(null,"6e7a"))},meta:{requiresAuth:!0}}]});B.beforeEach(function(t,e,n){if(t.meta.requiresAuth&&!0===t.meta.requiresAuth&&!1===$.state.isAuth)return n({path:"/login"+(null!==t?"/"+window.btoa(t.path):"")});n()});var F=B,q=n("9483");Object(q["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var V=n("ce5b"),K=n.n(V),z=(n("bf40"),n("c0a4")),G=n.n(z),H=n("8682"),Y=n("4710"),Q=n.n(Y),X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{title:t.hint,contenteditable:!t.disabled},domProps:{innerHTML:t._s(t.getContent())},on:{blur:t.updateOnBlur,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateOnEnter(e)}}})},Z=[],tt=(n("a481"),{name:"EditableSpan",props:{text:{type:String,default:"loading..."},disabled:{type:Boolean,default:!1},hint:{type:String,default:"click and type to edit"},dataKey:{type:String,default:""}},computed:{},data:function(){return{innerText:null}},methods:{getContent:function(){return this.innerText&&""!==this.innerText.replace(/(\r\n|\n|\r)/gm,"")?this.innerText:this.text},updateOnBlur:function(t){var e=t.target.innerText.replace(/(\r\n|\n|\r)/gm,"");if(console.log(e.length),""===e)return t.target.innerText=this.text;this.getContent()!==e&&(this.innerText=e,this.$emit("update",{text:e,dataKey:this.dataKey}))},updateOnEnter:function(t){var e=t.target.innerText.replace(/(\r\n|\n|\r)/gm,"");if(""===e)return t.target.innerText=this.text;this.getContent()!==e?(t.target.blur(),this.innerText=e):t.target.blur()}}}),et=tt,nt=(n("25fe"),Object(f["a"])(et,X,Z,!1,null,"536ceca2",null));nt.options.__file="EditableSpan.vue";var rt=nt.exports;r["default"].config.productionTip=!1,r["default"].use(K.a,{theme:{primary:G.a.blue.darken1,secondary:G.a.blue.lighten4,accent:G.a.indigo.base}}),r["default"].use(H["a"],{locale:"en"});var at=localStorage.getItem("server");$.state.server=at||"".concat(window.location.origin,"/api"),o.a.defaults.baseURL=$.state.server;var ot=localStorage.getItem("token");o.a.get($.state.server).then(function(t){return $.state.serverManifest=t.data,o.a.get("".concat($.state.server,"/accounts?omit=logins"),{headers:{Authorization:ot}})}).then(function(t){null!==t&&200===t.status?(o.a.defaults.headers.common["Authorization"]=ot,$.state.isAuth=!0,$.state.user=t.data.resource,$.state.token=ot,it()):it()}).catch(function(t){it()}),r["default"].prototype.$http=o.a,window.bus=new r["default"];var ct=new Q.a;r["default"].mixin({methods:{getHexFromString:function(t){return ct.hex(t)}}}),r["default"].component("editable-span",rt);var it=function(){new r["default"]({router:F,store:$,render:function(t){return t(g)}}).$mount("#app")}},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"6d06":function(t,e,n){},"82c8":function(t,e,n){}});
//# sourceMappingURL=app.08be319d.js.map