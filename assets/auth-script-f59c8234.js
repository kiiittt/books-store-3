import{initializeApp as gt}from"https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";import{getAuth as ht,onAuthStateChanged as mt,createUserWithEmailAndPassword as vt,updateProfile as xt,signOut as yt,signInWithEmailAndPassword as Et}from"https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))h(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&h(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}})();(()=>{const x={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),booksRow1:document.querySelector("[data-background-books__row1]"),booksRow2:document.querySelector("[data-background-books__row2]"),booksRow3:document.querySelector("[data-background-books__row3]")};x.openMenuBtn.addEventListener("click",_),x.closeMenuBtn.addEventListener("click",_);function _(){x.menu.classList.toggle("is-open"),x.booksRow1.classList.toggle("roll-left-open"),x.booksRow2.classList.toggle("roll-right-open"),x.booksRow3.classList.toggle("roll-left-open")}})();document.getElementById("open-button-menu").addEventListener("click",function(x){var _=x.target;_.classList.toggle("icon-burger"),_.classList.toggle("icon-close")},!1);const H=document.querySelector(".theme-toggle-button"),bt=()=>{const x=document.documentElement.getAttribute("theme"),_=H.checked;x==="dark"&&!_?(document.documentElement.setAttribute("theme","light"),localStorage.setItem("theme","light")):x==="light"&&_&&(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","dark"))};H.addEventListener("change",bt);const Z=localStorage.getItem("theme");Z&&document.documentElement.setAttribute("theme",Z);const Pt=localStorage.getItem("checkboxState");Pt==="checked"&&(H.checked=!0);H.addEventListener("change",()=>{const x=H.checked?"checked":"unchecked";localStorage.setItem("checkboxState",x)});const _t=window.location.pathname;document.querySelectorAll(".main-menu-tablet-list a, .main-menu-mobile-list a").forEach(x=>{x.href.includes(`${_t}`)&&x.classList.add("current")});var St={exports:{}};(function(x,_){(function(h,e){x.exports=e()})(window,function(){return function(u){var h={};function e(n){if(h[n])return h[n].exports;var s=h[n]={i:n,l:!1,exports:{}};return u[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}return e.m=u,e.c=h,e.d=function(n,s,f){e.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:f})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,s){if(s&1&&(n=e(n)),s&8||s&4&&typeof n=="object"&&n&&n.__esModule)return n;var f=Object.create(null);if(e.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:n}),s&2&&typeof n!="string")for(var d in n)e.d(f,d,function(a){return n[a]}.bind(null,d));return f},e.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(s,"a",s),s},e.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},e.p="dist",e(e.s=10)}([function(u,h,e){function n(s,f){var d=Object.prototype.hasOwnProperty,a,l,g,S;for(g=1,S=arguments.length;g<S;g+=1){a=arguments[g];for(l in a)d.call(a,l)&&(s[l]=a[l])}return s}u.exports=n},function(u,h,e){function n(s){return s===void 0}u.exports=n},function(u,h,e){function n(s){return s instanceof Array}u.exports=n},function(u,h,e){var n=e(2),s=e(17),f=e(6);function d(a,l,g){n(a)?s(a,l,g):f(a,l,g)}u.exports=d},function(u,h,e){function n(s){return typeof s=="string"||s instanceof String}u.exports=n},function(u,h,e){function n(s){return s instanceof Function}u.exports=n},function(u,h,e){function n(s,f,d){var a;d=d||null;for(a in s)if(s.hasOwnProperty(a)&&f.call(d,s[a],a,s)===!1)break}u.exports=n},function(u,h,e){var n=e(18),s=e(0);function f(d,a){var l;return a||(a=d,d=null),l=a.init||function(){},d&&n(l,d),a.hasOwnProperty("static")&&(s(l,a.static),delete a.static),s(l.prototype,a),l}u.exports=f},function(u,h,e){var n=e(2);function s(f,d,a){var l,g;if(a=a||0,!n(d))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(d,f,a);for(g=d.length,l=a;a>=0&&l<g;l+=1)if(d[l]===f)return l;return-1}u.exports=s},function(u,h,e){var n=e(29),s=e(30),f=e(5),d={capitalizeFirstLetter:function(a){return a.substring(0,1).toUpperCase()+a.substring(1,a.length)},isContained:function(a,l){return l?a===l?!0:l.contains(a):!1},createElementByTemplate:function(a,l){var g=document.createElement("div"),S=f(a)?a(l):n(a,l);return g.innerHTML=S,g.firstChild},bind:function(a,l){var g=Array.prototype.slice,S;return a.bind?a.bind.apply(a,g.call(arguments,1)):(S=g.call(arguments,2),function(){return a.apply(l,S.length?S.concat(g.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};u.exports=d},function(u,h,e){e(11),u.exports=e(12)},function(u,h,e){},function(u,h,e){var n=e(13),s=e(7),f=e(0),d=e(1),a=e(20),l=e(9),g={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},S=s({init:function(r,t){this._options=f({},g,t),this._currentPage=0,this._view=new a(r,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(r){this._currentPage=r||this._options.page},_getLastPage:function(){var r=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return r||1},_getPageIndex:function(r){var t,i;return this._options.centerAlign?(t=Math.floor(this._options.visiblePages/2),i=r-t,i=Math.max(i,1),i=Math.min(i,this._getLastPage()-this._options.visiblePages+1),i):Math.ceil(r/this._options.visiblePages)},_getRelativePage:function(r){var t=r==="prev",i=this.getCurrentPage();return t?i-1:i+1},_getMorePageIndex:function(r){var t=this._getPageIndex(this.getCurrentPage()),i=this._options.visiblePages,o=r==="prev",p;return this._options.centerAlign?p=o?t-1:t+i:p=o?(t-1)*i:t*i+1,p},_convertToValidPage:function(r){var t=this._getLastPage();return r=Math.max(r,1),r=Math.min(r,t),r},_paginate:function(r){var t=this._makeViewData(r||this._options.page);this._setCurrentPage(r),this._view.update(t)},_makeViewData:function(r){var t={},i=this._getLastPage(),o=this._getPageIndex(r),p=this._getPageIndex(i),P=this._getEdge(r);return t.leftPageNumber=P.left,t.rightPageNumber=P.right,t.prevMore=o>1,t.nextMore=o<p,t.page=r,t.currentPageIndex=r,t.lastPage=i,t.lastPageListIndex=i,t},_getEdge:function(r){var t,i,o,p=this._getLastPage(),P=this._options.visiblePages,w=this._getPageIndex(r);return this._options.centerAlign?(o=Math.floor(P/2),t=Math.max(r-o,1),i=t+P-1,i>p&&(t=Math.max(p-P+1,1),i=p)):(t=(w-1)*P+1,i=w*P,i=Math.min(i,p)),{left:t,right:i}},_onClickHandler:function(r,t){switch(r){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(r){d(r)&&(r=this._options.totalItems),this._options.totalItems=r,this._paginate(1)},movePageTo:function(r){r=this._convertToValidPage(r),this.invoke("beforeMove",{page:r})&&(this._paginate(r),this.fire("afterMove",{page:r}))},setTotalItems:function(r){this._options.totalItems=r},setItemsPerPage:function(r){this._options.itemsPerPage=r},getCurrentPage:function(){return this._currentPage||this._options.page}});n.mixin(S),u.exports=S},function(u,h,e){var n=e(0),s=e(14),f=e(4),d=e(16),a=e(2),l=e(5),g=e(3),S=/\s+/g;function r(){this.events=null,this.contexts=null}r.mixin=function(t){n(t.prototype,r.prototype)},r.prototype._getHandlerItem=function(t,i){var o={handler:t};return i&&(o.context=i),o},r.prototype._safeEvent=function(t){var i=this.events,o;return i||(i=this.events={}),t&&(o=i[t],o||(o=[],i[t]=o),i=o),i},r.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},r.prototype._indexOfContext=function(t){for(var i=this._safeContext(),o=0;i[o];){if(t===i[o][0])return o;o+=1}return-1},r.prototype._memorizeContext=function(t){var i,o;s(t)&&(i=this._safeContext(),o=this._indexOfContext(t),o>-1?i[o][1]+=1:i.push([t,1]))},r.prototype._forgetContext=function(t){var i,o;s(t)&&(i=this._safeContext(),o=this._indexOfContext(t),o>-1&&(i[o][1]-=1,i[o][1]<=0&&i.splice(o,1)))},r.prototype._bindEvent=function(t,i,o){var p=this._safeEvent(t);this._memorizeContext(o),p.push(this._getHandlerItem(i,o))},r.prototype.on=function(t,i,o){var p=this;f(t)?(t=t.split(S),g(t,function(P){p._bindEvent(P,i,o)})):d(t)&&(o=i,g(t,function(P,w){p.on(w,P,o)}))},r.prototype.once=function(t,i,o){var p=this;if(d(t)){o=i,g(t,function(w,c){p.once(c,w,o)});return}function P(){i.apply(o,arguments),p.off(t,P,o)}this.on(t,P,o)},r.prototype._spliceMatches=function(t,i){var o=0,p;if(a(t))for(p=t.length;o<p;o+=1)i(t[o])===!0&&(t.splice(o,1),p-=1,o-=1)},r.prototype._matchHandler=function(t){var i=this;return function(o){var p=t===o.handler;return p&&i._forgetContext(o.context),p}},r.prototype._matchContext=function(t){var i=this;return function(o){var p=t===o.context;return p&&i._forgetContext(o.context),p}},r.prototype._matchHandlerAndContext=function(t,i){var o=this;return function(p){var P=t===p.handler,w=i===p.context,c=P&&w;return c&&o._forgetContext(p.context),c}},r.prototype._offByEventName=function(t,i){var o=this,p=l(i),P=o._matchHandler(i);t=t.split(S),g(t,function(w){var c=o._safeEvent(w);p?o._spliceMatches(c,P):(g(c,function(m){o._forgetContext(m.context)}),o.events[w]=[])})},r.prototype._offByHandler=function(t){var i=this,o=this._matchHandler(t);g(this._safeEvent(),function(p){i._spliceMatches(p,o)})},r.prototype._offByObject=function(t,i){var o=this,p;this._indexOfContext(t)<0?g(t,function(P,w){o.off(w,P)}):f(i)?(p=this._matchContext(t),o._spliceMatches(this._safeEvent(i),p)):l(i)?(p=this._matchHandlerAndContext(i,t),g(this._safeEvent(),function(P){o._spliceMatches(P,p)})):(p=this._matchContext(t),g(this._safeEvent(),function(P){o._spliceMatches(P,p)}))},r.prototype.off=function(t,i){f(t)?this._offByEventName(t,i):arguments.length?l(t)?this._offByHandler(t):d(t)&&this._offByObject(t,i):(this.events={},this.contexts=[])},r.prototype.fire=function(t){this.invoke.apply(this,arguments)},r.prototype.invoke=function(t){var i,o,p,P;if(!this.hasListener(t))return!0;for(i=this._safeEvent(t),o=Array.prototype.slice.call(arguments,1),p=0;i[p];){if(P=i[p],P.handler.apply(P.context,o)===!1)return!1;p+=1}return!0},r.prototype.hasListener=function(t){return this.getListenerLength(t)>0},r.prototype.getListenerLength=function(t){var i=this._safeEvent(t);return i.length},u.exports=r},function(u,h,e){var n=e(1),s=e(15);function f(d){return!n(d)&&!s(d)}u.exports=f},function(u,h,e){function n(s){return s===null}u.exports=n},function(u,h,e){function n(s){return s===Object(s)}u.exports=n},function(u,h,e){function n(s,f,d){var a=0,l=s.length;for(d=d||null;a<l&&f.call(d,s[a],a,s)!==!1;a+=1);}u.exports=n},function(u,h,e){var n=e(19);function s(f,d){var a=n(d.prototype);a.constructor=f,f.prototype=a}u.exports=s},function(u,h,e){function n(s){function f(){}return f.prototype=s,new f}u.exports=n},function(u,h,e){var n=e(3),s=e(7),f=e(21),d=e(22),a=e(24),l=e(25),g=e(0),S=e(4),r=e(28),t=e(9),i={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},o=["first","prev","next","last"],p=["prev","next"],P="The container element is invalid.",w=s({init:function(c,m,M){this._containerElement=null,this._firstItemClassName=m.firstItemClassName,this._lastItemClassName=m.lastItemClassName,this._template=g({},i,m.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(c),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(M)},_setRootElement:function(c){if(S(c)?c=document.getElementById(c)||document.querySelector(c):c.jquery&&(c=c[0]),!r(c))throw new Error(P);this._containerElement=c},_setMoveButtons:function(){n(o,function(c){this._buttons[c]=t.createElementByTemplate(this._template.moveButton,{type:c})},this)},_setDisabledMoveButtons:function(){n(o,function(c){var m="disabled"+t.capitalizeFirstLetter(c);this._buttons[m]=t.createElementByTemplate(this._template.disabledMoveButton,{type:c})},this)},_setMoreButtons:function(){n(p,function(c){var m=c+"More";this._buttons[m]=t.createElementByTemplate(this._template.moreButton,{type:c})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(c){var m;c.page>1?m=this._buttons.first:m=this._buttons.disabledFirst,this._getContainerElement().appendChild(m)},_appendPrevButton:function(c){var m;c.currentPageIndex>1?m=this._buttons.prev:m=this._buttons.disabledPrev,this._getContainerElement().appendChild(m)},_appendNextButton:function(c){var m;c.currentPageIndex<c.lastPageListIndex?m=this._buttons.next:m=this._buttons.disabledNext,this._getContainerElement().appendChild(m)},_appendLastButton:function(c){var m;c.page<c.lastPage?m=this._buttons.last:m=this._buttons.disabledLast,this._getContainerElement().appendChild(m)},_appendPrevMoreButton:function(c){var m;c.prevMore&&(m=this._buttons.prevMore,l(m,this._firstItemClassName),this._getContainerElement().appendChild(m))},_appendNextMoreButton:function(c){var m;c.nextMore&&(m=this._buttons.nextMore,l(m,this._lastItemClassName),this._getContainerElement().appendChild(m))},_appendPages:function(c){var m=c.leftPageNumber,M=c.rightPageNumber,B,k;for(k=m;k<=M;k+=1)k===c.page?B=t.createElementByTemplate(this._template.currentPage,{page:k}):(B=t.createElementByTemplate(this._template.page,{page:k}),this._enabledPageElements.push(B)),k===m&&!c.prevMore&&l(B,this._firstItemClassName),k===M&&!c.nextMore&&l(B,this._lastItemClassName),this._getContainerElement().appendChild(B)},_attachClickEvent:function(c){var m=this._getContainerElement();d(m,"click",function(M){var B=f(M),k,N;a(M),N=this._getButtonType(B),N||(k=this._getPageNumber(B)),c(N,k)},this)},_getButtonType:function(c){var m,M=this._buttons;return n(M,function(B,k){return t.isContained(c,B)?(m=k,!1):!0},this),m},_getPageNumber:function(c){var m=this._findPageElement(c),M;return m&&(M=parseInt(m.innerText,10)),M},_findPageElement:function(c){for(var m=0,M=this._enabledPageElements.length,B;m<M;m+=1)if(B=this._enabledPageElements[m],t.isContained(c,B))return B;return null},_empty:function(){this._enabledPageElements=[],n(this._buttons,function(c,m){this._buttons[m]=c.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(c){this._empty(),this._appendFirstButton(c),this._appendPrevButton(c),this._appendPrevMoreButton(c),this._appendPages(c),this._appendNextMoreButton(c),this._appendNextButton(c),this._appendLastButton(c)}});u.exports=w},function(u,h,e){function n(s){return s.target||s.srcElement}u.exports=n},function(u,h,e){var n=e(4),s=e(3),f=e(23);function d(g,S,r,t){if(n(S)){s(S.split(/\s+/g),function(i){a(g,i,r,t)});return}s(S,function(i,o){a(g,o,i,r)})}function a(g,S,r,t){function i(o){r.call(t||g,o||window.event)}"addEventListener"in g?g.addEventListener(S,i):"attachEvent"in g&&g.attachEvent("on"+S,i),l(g,S,r,i)}function l(g,S,r,t){var i=f(g,S),o=!1;s(i,function(p){return p.handler===r?(o=!0,!1):!0}),o||i.push({handler:r,wrappedHandler:t})}u.exports=d},function(u,h,e){var n="_feEventKey";function s(f,d){var a=f[n],l;return a||(a=f[n]={}),l=a[d],l||(l=a[d]=[]),l}u.exports=s},function(u,h,e){function n(s){if(s.preventDefault){s.preventDefault();return}s.returnValue=!1}u.exports=n},function(u,h,e){var n=e(3),s=e(8),f=e(26),d=e(27);function a(l){var g=Array.prototype.slice.call(arguments,1),S=l.classList,r=[],t;if(S){n(g,function(i){l.classList.add(i)});return}t=f(l),t&&(g=[].concat(t.split(/\s+/),g)),n(g,function(i){s(i,r)<0&&r.push(i)}),d(l,r)}u.exports=a},function(u,h,e){var n=e(1);function s(f){return!f||!f.className?"":n(f.className.baseVal)?f.className:f.className.baseVal}u.exports=s},function(u,h,e){var n=e(2),s=e(1);function f(d,a){if(a=n(a)?a.join(" "):a,a=a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(d.className.baseVal)){d.className=a;return}d.className.baseVal=a}u.exports=f},function(u,h,e){function n(s){return typeof HTMLElement=="object"?s&&(s instanceof HTMLElement||!!s.nodeType):!!(s&&s.nodeType)}u.exports=n},function(u,h,e){var n=e(8),s=e(3),f=e(2),d=e(4),a=e(0),l=/{{\s?|\s?}}/g,g=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,S=/\[\s?|\s?\]/,r=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,t=/\./,i=/^["']\w+["']$/,o=/"|'/g,p=/^-?\d+\.?\d*$/,P=2,w={if:k,each:N,with:ct},c="a".split(/a/).length===3,m=function(){return c?function(v,y){return v.split(y)}:function(v,y){var E=[],b=0,C,L;for(y.global||(y=new RegExp(y,"g")),C=y.exec(v);C!==null;)L=C.index,E.push(v.slice(b,L)),b=L+C[0].length,C=y.exec(v);return E.push(v.slice(b)),E}}();function M(v,y){var E,b=y[v];return v==="true"?b=!0:v==="false"?b=!1:i.test(v)?b=v.replace(o,""):g.test(v)?(E=v.split(S),b=M(E[0],y)[M(E[1],y)]):r.test(v)?(E=v.split(t),b=M(E[0],y)[E[1]]):p.test(v)&&(b=parseFloat(v)),b}function B(v,y){var E=[v],b=[],C=0,L=0;return s(y,function(I,A){I.indexOf("if")===0?C+=1:I==="/if"?C-=1:!C&&(I.indexOf("elseif")===0||I==="else")&&(E.push(I==="else"?["true"]:I.split(" ").slice(1)),b.push(y.slice(L,A)),L=A+1)}),b.push(y.slice(L)),{exps:E,sourcesInsideIf:b}}function k(v,y,E){var b=B(v,y),C=!1,L="";return s(b.exps,function(I,A){return C=R(I,E),C&&(L=z(b.sourcesInsideIf[A],E)),!C}),L}function N(v,y,E){var b=R(v,E),C=f(b)?"@index":"@key",L={},I="";return s(b,function(A,T){L[C]=T,L["@this"]=A,a(E,L),I+=z(y.slice(),E)}),I}function ct(v,y,E){var b=n("as",v),C=v[b+1],L=R(v.slice(0,b),E),I={};return I[C]=L,z(y,a(E,I))||""}function lt(v,y,E){var b=v.splice(y+1,E-y);return b.pop(),b}function ft(v,y,E){for(var b=w[v],C=1,L=0,I,A=L+P,T=y[A];C&&d(T);)T.indexOf(v)===0?C+=1:T.indexOf("/"+v)===0&&(C-=1,I=A),A+=P,T=y[A];if(C)throw Error(v+" needs {{/"+v+"}} expression.");return y[L]=b(y[L].split(" ").slice(1),lt(y,L,I),E),y}function R(v,y){var E=M(v[0],y);return E instanceof Function?dt(E,v.slice(1),y):E}function dt(v,y,E){var b=[];return s(y,function(C){b.push(M(C,E))}),v.apply(null,b)}function z(v,y){for(var E=1,b=v[E],C,L,I;d(b);)C=b.split(" "),L=C[0],w[L]?(I=ft(L,v.splice(E,v.length-E),y),v=v.concat(I)):v[E]=R(C,y),E+=P,b=v[E];return v.join("")}function pt(v,y){return z(m(v,l),y)}u.exports=pt},function(u,h,e){var n=e(1),s=e(31),f=7*24*60*60*1e3;function d(l){var g=new Date().getTime();return g-l>f}function a(l,g){var S="https://www.google-analytics.com/collect",r=location.hostname,t="event",i="use",o="TOAST UI "+l+" for "+r+": Statistics",p=window.localStorage.getItem(o);!n(window.tui)&&window.tui.usageStatistics===!1||p&&!d(p)||(window.localStorage.setItem(o,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&s(S,{v:1,t,tid:g,cid:r,dp:r,dh:l,el:l,ec:i})},1e3))}u.exports=a},function(u,h,e){var n=e(6);function s(f,d){var a=document.createElement("img"),l="";return n(d,function(g,S){l+="&"+S+"="+g}),l=l.substring(1),a.src=f+"?"+l,a.style.display="none",document.body.appendChild(a),document.body.removeChild(a),a}u.exports=s}])})})(St);const U=document.querySelector('button[data-value=""]');U&&U.addEventListener("click",Ct);function Ct(){U.classList.contains("js-active")||U.classList.add("js-active"),watchedArray()}const J=document.querySelector(".js-gallery"),et="books-data-01";let nt=JSON.parse(localStorage.getItem(et))||[];const Y=localStorage.getItem(et);Y?nt=JSON.parse(Y):console.log("No book data found in local storage");function Lt(x){return x.map(_=>`<li class="gallery__item" data-book="${_._id}">
        <img
          class="gallery__img"
          src="${_.book_image}"
          alt="${_.title}"
          width
          loading="lazy"/>

        <div class="gallery__wrap">
          <h2 class="name-book">${_.title}</h2>
          <div class="gallery__info">
            <p class="category-book">${_.description}</p>
            <svg class="svg-remove-list">
              <use></use>
            </svg>
            <p class="basic-description-book">${_.description}</p>
            <p class="autor-book">${_.author}</p>
            <ul class="internet-marcets">
              <li class="123">
                <svg class="amazon">
                  <use href="./img/shop-img/sprite.svg#amazon"></use>
                </svg>
              </li>
              <li class="123">
                <svg>
                  <use href=""></use>
                </svg>
              </li>
              <li class="123">
                <svg>
                  <use href=""></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </li>`).join("")}J?J.innerHTML=Lt(nt):console.log('Element with class "js-gallery" not found');const st=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1%402x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2%402x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3%402x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4%402x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5%402x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6%402x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7%402x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8%402x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9%402x.png"}],it=document.querySelector(".support-list"),Mt=document.querySelector(".support-button");let $=0,F=0,q=0;G();window.addEventListener("resize",It);Mt.addEventListener("click",kt);function It(){rt(),$=0,F=0,G()}function G(){q=window.innerWidth<768?4:6;const x=wt(F,q,st);Bt(x)}function wt(x,_,u){const h=x*_,e=h+_;return u.slice(h,e)}function Bt(x){const _=x.map(({title:u,url:h,img:e,img2x:n})=>($+=1,`
      <li class="support-list-item"> 
        <span class="fund-number">${At($)}</span>
        <a class="fund-link" href="${h}" target="_blank">
          <img class="fund-logo" srcset="${e} 1x, ${n} 2x" src="${e}" alt="${u}"/>
        </a>
      </li>`)).join("");it.innerHTML=_}function rt(){it.innerHTML=""}function kt(){F+1<Math.ceil(st.length/q)?F+=1:(F=0,$=0),rt(),G()}function At(x){return String(x).padStart(2,"0")}const Tt=document.querySelector(".btn-signup"),Ot=document.querySelector(".modal-close-js"),D=document.querySelector(".auth-modal-js"),X=document.querySelector(".form--btn-submit"),K=document.querySelector(".form__btn-sign-up"),W=document.querySelector(".form__btn-sign-in"),ot=document.querySelector(".form-add");document.querySelector(".form-input-name");function Nt(){D.classList.remove("is-hidden")}function Ft(){D.classList.add("is-hidden")}function Ht(){D.classList.add("is-hidden")}function Rt(){K.classList.remove("active"),W.classList.add("active"),X.textContent="Sign In",ot.innerHTML=""}function zt(){W.classList.remove("active"),K.classList.add("active"),X.textContent="Sign Up",ot.innerHTML=`
	<div class="form-input">
		<input type="text" 
		class="form-input-name input-auth" 
		placeholder="Name" 
		name="name" 
		required />
	</div>
 `}X.addEventListener("click",Ht);W.addEventListener("click",Rt);K.addEventListener("click",zt);Tt.addEventListener("click",Nt);Ot.addEventListener("click",Ft);const jt={apiKey:"AIzaSyD8Kd3K0g3O4pf6MJ2ISuj7niFF7gY68-M",authDomain:"authentication-f6359.firebaseapp.com",projectId:"authentication-f6359",storageBucket:"authentication-f6359.appspot.com",messagingSenderId:"490964966849",appId:"1:490964966849:web:f93da1cfe963d7548da340"},Ut=gt(jt),O=ht(Ut),$t=document.querySelector("form#authForm"),Vt=document.querySelector("#signUpButton"),V=document.querySelector("#signOutButton"),j=document.querySelector(".user-info"),Q=document.querySelector(".btn-signup"),at=document.querySelector(".modal-js"),qt=document.querySelector(".backdrop-auth"),tt=document.querySelector(".form--btn-submit"),Gt=document.querySelector(".btn-profile"),Dt=()=>{mt(O,x=>{x?(j.querySelector("span").nextSibling.textContent=x.displayName,Q.classList.add("is-hidden"),j.classList.remove("is-hidden"),V.classList.add("is-hidden")):(Q.classList.remove("is-hidden"),j.classList.add("is-hidden"))})};Dt();const ut=(x,_,u)=>{vt(O,_,u).then(h=>{const e=h.user;return console.log(e),qt.classList.add("is-hidden"),at.classList.add("is-hidden"),xt(O.currentUser,{displayName:x})}).then(()=>{j.querySelector("span").nextSibling.textContent=O.currentUser.displayName}).catch(h=>{const e=h.code,n=h.message;console.log(e+n)})},Xt=(x,_)=>{Et(O,x,_).then(u=>{at.classList.add("is-hidden"),console.log(u)}).catch(u=>{const h=u.code,e=u.message;console.log(h+e)})},Kt=()=>{yt(O).then(()=>{V.classList.remove("is-hidden")}).catch(x=>{const _=x.code,u=x.message;console.log(_+u)})};function Wt(x){x.preventDefault();const{email:_,password:u}=x.currentTarget.elements,h=_.value.trim(),e=u.value.trim();if(tt.textContent.toLowerCase()==="sign up"){const{name:n}=x.currentTarget.elements,s=n.value.trim();ut(s,h,e)}else tt.textContent.toLowerCase()==="sign in"?Xt(h,e):alert("Щось пішло не так")}const Zt=()=>{V.classList.toggle("is-hidden")};Vt.onclick=()=>{ut()};V.onclick=()=>{Kt()};$t.onsubmit=Wt;Gt.addEventListener("click",Zt);