(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e867bd68"],{"11e9":function(t,e,r){var n=r("52a7"),i=r("4630"),o=r("6821"),a=r("6a99"),s=r("69a8"),c=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=o(t),e=a(e,!0),c)try{return u(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},"3b8d":function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r("795b"),i=r.n(n);function o(t,e,r,n,o,a,s){try{var c=t[a](s),u=c.value}catch(l){return void r(l)}c.done?e(u):i.a.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new i.a(function(n,i){var a=t.apply(e,r);function s(t){o(a,n,i,s,c,"next",t)}function c(t){o(a,n,i,s,c,"throw",t)}s(void 0)})}}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"590b":function(t,e,r){},"5dbc":function(t,e,r){var n=r("d3f4"),i=r("8b97").set;t.exports=function(t,e,r){var o,a=e.constructor;return a!==r&&"function"==typeof a&&(o=a.prototype)!==r.prototype&&n(o)&&i&&i(t,o),t}},"8b97":function(t,e,r){var n=r("d3f4"),i=r("cb7c"),o=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:o}},9093:function(t,e,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new N(n||[]);return o._invoke=E(t,r,a),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function y(){}function m(){}var g={};g[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(k([])));b&&b!==r&&n.call(b,o)&&(g=b);var _=m.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){function e(r,i,o,a){var s=u(t[r],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var r;function i(t,n){function i(){return new Promise(function(r,i){e(t,n,r,i)})}return r=r?r.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=l;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return A()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=I(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function I(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=_.constructor=m,m.constructor=y,m[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,r,n,i){var o=new S(c(e,r,n,i));return t.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(_),_[s]="Generator",_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"96ed":function(t,e,r){"use strict";var n=r("590b"),i=r.n(n);i.a},aa77:function(t,e,r){var n=r("5ca1"),i=r("be13"),o=r("79e5"),a=r("fdef"),s="["+a+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(t,e,r){var i={},s=o(function(){return!!a[t]()||c[t]()!=c}),u=i[t]=s?e(h):a[t];r&&(i[r]=u),n(n.P+n.F*s,"String",i)},h=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},c5f6:function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),o=r("2d95"),a=r("5dbc"),s=r("6a99"),c=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,h=r("aa77").trim,p="Number",d=n[p],v=d,y=d.prototype,m=o(r("2aeb")(y))==p,g="trim"in String.prototype,w=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():h(e,3);var r,n,i,o=e.charCodeAt(0);if(43===o||45===o){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var a,c=e.slice(2),u=0,l=c.length;u<l;u++)if(a=c.charCodeAt(u),a<48||a>i)return NaN;return parseInt(c,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(m?c(function(){y.valueOf.call(r)}):o(r)!=p)?a(new v(w(e)),r,d):w(e)};for(var b,_=r("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)i(v,b=_[x])&&!i(d,b)&&f(d,b,l(v,b));d.prototype=y,y.constructor=d,r("2aba")(n,p,d)}},f6dc:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{"align-center":"",row:"",wrap:""},on:{mouseleave:t.mouseLeave}},[r("v-flex",{staticClass:"pb-0",attrs:{xs12:""}},[r("v-text-field",{ref:"searchField",attrs:{autofocus:"",box:"",flat:"",clearable:"","prepend-inner-icon":"search",label:"search for streams",spellcheck:"false",disabled:t.globalDisabled,loading:t.searchInProgress,"append-icon":"refresh"},on:{input:t.updateSearch,"click:append":function(e){return t.$store.dispatch("getStreams","omit=objects,layers&isComputedResult=false&sort=updatedAt")}},model:{value:t.searchfilter,callback:function(e){t.searchfilter=e},expression:"searchfilter"}})],1),t.showSearchResults?r("v-flex",{staticClass:"mb-5",staticStyle:{"margin-top":"-30px"},attrs:{xs12:""}},[r("v-card",{staticClass:"elevation-10"},[r("v-card-title",{staticClass:"subheading"},[t._v("Search results ("+t._s(t.paginatedStreams.length)+" streams)")]),r("v-divider"),t.paginatedStreams.length>0?r("v-card-text",{staticStyle:{"max-height":"410px","overflow-y":"auto","overflow-x":"hidden"}},[t.filters.length>0?r("v-list",{attrs:{"two-line":""}},t._l(t.paginatedStreams,function(e){return r("v-list-tile",{key:e.streamId},[r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                "+t._s(e.name)+"\n              ")]),r("v-list-tile-sub-title",{staticClass:"caption"},[r("v-icon",{attrs:{small:""}},[t._v("fingerprint")]),r("span",{staticClass:"caption",staticStyle:{"user-select":"all"}},[t._v(t._s(e.streamId))]),t._v(" "),r("v-icon",{attrs:{small:""}},[t._v("edit")]),r("timeago",{attrs:{datetime:e.updatedAt}})],1)],1),r("v-list-tile-action",[r("v-btn",{attrs:{fab:"",small:"",depressed:""},nativeOn:{click:function(r){return t.selectStream(e.streamId)}}},[r("v-icon",[t._v("add")])],1)],1)],1)}),1):t._e()],1):t._e()],1)],1):t._e()],1)},i=[],o=(r("6762"),r("2fdb"),r("28a5"),r("f7fe")),a=r.n(o),s={name:"StreamSearch",props:{streamsToOmit:{type:Array,default:function(){return[]}},globalDisabled:{type:Boolean,default:!1},writeOnly:Boolean},computed:{filteredStreams:function(){var t=this;return this.$store.getters.filteredStreams(this.filters).filter(function(e){return-1===t.streamsToOmit.indexOf(e.streamId)})},paginatedStreams:function(){var t=this,e=this.filteredStreams.slice(this.startIndex,this.endIndex);return this.writeOnly&&(e=e.filter(function(e){return e.owner===t.$store.state.user._id||e.canWrite.indexOf(t.$store.state.user._id)>-1})),e}},watch:{searchfilter:function(t){""===t||null===t?(this.showSearchResults=!1,this.searchInProgress=!1):this.searchInProgress=!0}},data:function(){return{searchfilter:"",filters:[],showSearchResults:!1,searchInProgress:!1,startIndex:0,endIndex:42}},methods:{mouseLeave:function(){this.$refs.searchField.blur()},refreshStreams:function(){this.$store.dispatch("getStreams","omit=objects,layers&isComputedResult=false&sort=updatedAt")},selectStream:function(t){this.$emit("selected-stream",t)},updateSearch:a()(function(t){if(this.searchfilter=t,""!==t&&null!==t){this.showSearchResults=!0,this.searchInProgress=!1;try{var e=this.searchfilter.split(" ").map(function(t){return t.includes(":")?{key:t.split(":")[0],value:t.split(":")[1]}:t.includes("public")||t.includes("private")||t.includes("mine")||t.includes("shared")?{key:t,value:null}:{key:"name",value:t}});this.filters=e}catch(r){this.filters=[{key:"name",value:t}]}}else this.showSearchResults=!1},1e3)}},c=s,u=(r("96ed"),r("2877")),l=Object(u["a"])(c,n,i,!1,null,"26c67241",null);l.options.__file="StreamSearch.vue";e["a"]=l.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-e867bd68.dfc54724.js.map