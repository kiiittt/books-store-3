(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&f(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();(()=>{const c={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),booksRow1:document.querySelector("[data-background-books__row1]"),booksRow2:document.querySelector("[data-background-books__row2]"),booksRow3:document.querySelector("[data-background-books__row3]")};c.openMenuBtn.addEventListener("click",u),c.closeMenuBtn.addEventListener("click",u);function u(){c.menu.classList.toggle("is-open"),c.booksRow1.classList.toggle("roll-left-open"),c.booksRow2.classList.toggle("roll-right-open"),c.booksRow3.classList.toggle("roll-left-open")}})();document.getElementById("open-button-menu").addEventListener("click",function(c){var u=c.target;u.classList.toggle("icon-burger"),u.classList.toggle("icon-close")},!1);const G=document.querySelector(".theme-toggle-button"),X=(c,u=null)=>{const r=document.documentElement.getAttribute("theme");u==="dark"||!r||r==="dark"?document.documentElement.setAttribute("theme","light"):document.documentElement.setAttribute("theme","dark")};G.addEventListener("click",()=>X());window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&X(G,"dark");const ot=window.location.pathname;document.querySelectorAll(".main-menu-tablet-list a, .main-menu-mobile-list a").forEach(c=>{c.href.includes(`${ot}`)&&c.classList.add("current")});const q=document.querySelector(".category_list");document.querySelector(".item-category");const V=document.querySelector(".category_books"),D=document.querySelector(".bestsellers-area"),K=document.querySelector(".category_books_container"),rt=document.querySelector(".category_all");function it(){return fetch("https://books-backend.p.goit.global/books/category-list").then(c=>c.json())}function at(c){const u=c.map(({list_name:r})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${r}</button>          

          </li>
      `).join("");q.insertAdjacentHTML("beforeend",u)}it().then(c=>at(c)).catch(c=>console.log(c));q.addEventListener("click",lt);function lt(c){if(c.target.className!=="category_button")return;const u=c.target.textContent;return gt(u),ct(),fetch(`https://books-backend.p.goit.global/books/category?category=${c.target.textContent}`).then(r=>r.json()).then(r=>ut(r,c)).catch(r=>console.log(r))}function ct(){V.innerHTML=""}function ut(c,u){D.style.display="none",K.style.display="flex",dt(u),ft(c);const r=c.map(({book_image:f,title:e,author:n})=>`<li class = "category_books_items">
          <img src='${f}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${e}</p>
             <p class='bestsellers-book-author'>${n}</p></li>
      `).join("");V.insertAdjacentHTML("beforeend",r)}function ft(c){if(c.length===0){const u=document.createElement("p");u.textContent="Oops, there is no books in this category.",u.classList.add("no-books-message"),V.appendChild(u);return}}rt.addEventListener("click",pt);function pt(c){D.style.display="flex",K.style.display="none";const u=c.target.className;console.log(u),ht(u)}function dt(c){const u=document.querySelector(".category_books_title"),f=c.target.textContent.split(" "),e=f[f.length-1],s=f.slice(0,f.length-1).join(" ");u.textContent=s;const h=document.createElement("span");h.classList="last_word_category_title",h.textContent=e,u.append(h)}function ht(c){const u=document.querySelectorAll(".category_button"),r=document.querySelector(".category_all");u.forEach(f=>{f.textContent!==c?(f.style.fontWeight="400",f.style.lineHeight="1.12",f.style.textTransform="none",f.style.color="var(--color-of-category-text)",r.style.fontWeight="700",r.style.lineHeight="1.33",r.style.textTransform="uppercase",r.style.color="var(--color-of-categoryAll-text)"):(f.style.fontWeight="400",f.style.lineHeight="1.12",f.style.textTransform="none",f.style.color="var(--color-of-category-text)")})}function gt(c){const u=document.querySelectorAll(".category_button"),r=document.querySelector(".category_all");u.forEach(f=>{f.textContent===c?(f.style.fontWeight="700",f.style.lineHeight="1.33",f.style.textTransform="uppercase",f.style.textAlign="left",f.style.color="var(--color-of-categoryAll-text)",r.style.fontWeight="400",r.style.lineHeight="1.12",r.style.textTransform="none",r.style.color="var(--color-of-category-text)"):(f.style.fontWeight="400",f.style.lineHeight="1.12",f.style.textTransform="none",f.style.color="var(--color-of-category-text)")})}const Z=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1%402x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2%402x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3%402x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4%402x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5%402x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6%402x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7%402x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8%402x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9%402x.png"}],Y=document.querySelector(".support-list"),mt=document.querySelector(".support-button");let R=0,N=0,F=0;W();window.addEventListener("resize",c=>{J(),R=0,N=0,W()});mt.addEventListener("click",yt);function W(){window.screen.availWidth<768?F=4:F=6;let c=vt(N,F,Z);bt(c)}function vt(c,u,r){return c*u+u<=r.length?r.slice(c*u,c*u+u):r.slice(c*u)}function bt(c){const u=c.map(({title:r,url:f,img:e,img2x:n})=>(R+=1,`
            <li class="support-list-item"> 
                <span class="fund-number">0${R}</span>
                <a class="fund-link" href="${f}" target="_blank">
                    <img class="fund-logo" srcset="${e} 1x, ${n} 2x" src="${e}" alt="${r}"/>
                </a>
            </li>`)).join("");Y.innerHTML=u}function J(){Y.innerHTML=""}function yt(){N+1<Math.ceil(Z.length/F)?N+=1:(N=0,R=0),J(),W()}document.querySelector(".bestsellers-area");const U=document.querySelector(".bestsellers-list");let z=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;z<768?xt():z<1440?Et():z>=1440&&Pt();function xt(){fetch("https://books-backend.p.goit.global/books/top-books").then(c=>c.json()).then(c=>kt(c)).catch(c=>console.log(c))}function kt(c){U.innerHTML=c.map(u=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${u.list_name}</p>
        
        <div class="bestsellers-book-item">
        <img src='${u.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[0].title}</p>
        <p class="bestsellers-book-author">${u.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function Et(){fetch("https://books-backend.p.goit.global/books/top-books").then(c=>c.json()).then(c=>_t(c)).catch(c=>console.log(c))}function _t(c){U.innerHTML=c.map(u=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${u.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item">
        <img src='${u.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[0].title}</p>
        <p class="bestsellers-book-author">${u.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item">
        <img src='${u.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[1].title}</p>
        <p class="bestsellers-book-author">${u.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item">
        <img src='${u.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[2].title}</p>
        <p class="bestsellers-book-author">${u.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function Pt(){fetch("https://books-backend.p.goit.global/books/top-books").then(c=>c.json()).then(c=>Ct(c)).catch(c=>console.log(c))}function Ct(c){U.innerHTML=c.map(u=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${u.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item">
        <img src='${u.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[0].title}</p>
        <p class="bestsellers-book-author">${u.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${u.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[1].title}</p>
        <p class="bestsellers-book-author">${u.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${u.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[2].title}</p>
        <p class="bestsellers-book-author">${u.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${u.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[3].title}</p>
        <p class="bestsellers-book-author">${u.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${u.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${u.books[4].title}</p>
        <p class="bestsellers-book-author">${u.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>
        `).join(" ")}var Mt={exports:{}};(function(c,u){(function(f,e){c.exports=e()})(window,function(){return function(r){var f={};function e(n){if(f[n])return f[n].exports;var s=f[n]={i:n,l:!1,exports:{}};return r[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}return e.m=r,e.c=f,e.d=function(n,s,h){e.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:h})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,s){if(s&1&&(n=e(n)),s&8||s&4&&typeof n=="object"&&n&&n.__esModule)return n;var h=Object.create(null);if(e.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:n}),s&2&&typeof n!="string")for(var g in n)e.d(h,g,function(l){return n[l]}.bind(null,g));return h},e.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(s,"a",s),s},e.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},e.p="dist",e(e.s=10)}([function(r,f,e){function n(s,h){var g=Object.prototype.hasOwnProperty,l,d,v,P;for(v=1,P=arguments.length;v<P;v+=1){l=arguments[v];for(d in l)g.call(l,d)&&(s[d]=l[d])}return s}r.exports=n},function(r,f,e){function n(s){return s===void 0}r.exports=n},function(r,f,e){function n(s){return s instanceof Array}r.exports=n},function(r,f,e){var n=e(2),s=e(17),h=e(6);function g(l,d,v){n(l)?s(l,d,v):h(l,d,v)}r.exports=g},function(r,f,e){function n(s){return typeof s=="string"||s instanceof String}r.exports=n},function(r,f,e){function n(s){return s instanceof Function}r.exports=n},function(r,f,e){function n(s,h,g){var l;g=g||null;for(l in s)if(s.hasOwnProperty(l)&&h.call(g,s[l],l,s)===!1)break}r.exports=n},function(r,f,e){var n=e(18),s=e(0);function h(g,l){var d;return l||(l=g,g=null),d=l.init||function(){},g&&n(d,g),l.hasOwnProperty("static")&&(s(d,l.static),delete l.static),s(d.prototype,l),d}r.exports=h},function(r,f,e){var n=e(2);function s(h,g,l){var d,v;if(l=l||0,!n(g))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(g,h,l);for(v=g.length,d=l;l>=0&&d<v;d+=1)if(g[d]===h)return d;return-1}r.exports=s},function(r,f,e){var n=e(29),s=e(30),h=e(5),g={capitalizeFirstLetter:function(l){return l.substring(0,1).toUpperCase()+l.substring(1,l.length)},isContained:function(l,d){return d?l===d?!0:d.contains(l):!1},createElementByTemplate:function(l,d){var v=document.createElement("div"),P=h(l)?l(d):n(l,d);return v.innerHTML=P,v.firstChild},bind:function(l,d){var v=Array.prototype.slice,P;return l.bind?l.bind.apply(l,v.call(arguments,1)):(P=v.call(arguments,2),function(){return l.apply(d,P.length?P.concat(v.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};r.exports=g},function(r,f,e){e(11),r.exports=e(12)},function(r,f,e){},function(r,f,e){var n=e(13),s=e(7),h=e(0),g=e(1),l=e(20),d=e(9),v={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},P=s({init:function(i,t){this._options=h({},v,t),this._currentPage=0,this._view=new l(i,this._options,d.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&d.sendHostName()},_setCurrentPage:function(i){this._currentPage=i||this._options.page},_getLastPage:function(){var i=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return i||1},_getPageIndex:function(i){var t,o;return this._options.centerAlign?(t=Math.floor(this._options.visiblePages/2),o=i-t,o=Math.max(o,1),o=Math.min(o,this._getLastPage()-this._options.visiblePages+1),o):Math.ceil(i/this._options.visiblePages)},_getRelativePage:function(i){var t=i==="prev",o=this.getCurrentPage();return t?o-1:o+1},_getMorePageIndex:function(i){var t=this._getPageIndex(this.getCurrentPage()),o=this._options.visiblePages,a=i==="prev",m;return this._options.centerAlign?m=a?t-1:t+o:m=a?(t-1)*o:t*o+1,m},_convertToValidPage:function(i){var t=this._getLastPage();return i=Math.max(i,1),i=Math.min(i,t),i},_paginate:function(i){var t=this._makeViewData(i||this._options.page);this._setCurrentPage(i),this._view.update(t)},_makeViewData:function(i){var t={},o=this._getLastPage(),a=this._getPageIndex(i),m=this._getPageIndex(o),_=this._getEdge(i);return t.leftPageNumber=_.left,t.rightPageNumber=_.right,t.prevMore=a>1,t.nextMore=a<m,t.page=i,t.currentPageIndex=i,t.lastPage=o,t.lastPageListIndex=o,t},_getEdge:function(i){var t,o,a,m=this._getLastPage(),_=this._options.visiblePages,B=this._getPageIndex(i);return this._options.centerAlign?(a=Math.floor(_/2),t=Math.max(i-a,1),o=t+_-1,o>m&&(t=Math.max(m-_+1,1),o=m)):(t=(B-1)*_+1,o=B*_,o=Math.min(o,m)),{left:t,right:o}},_onClickHandler:function(i,t){switch(i){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(i){g(i)&&(i=this._options.totalItems),this._options.totalItems=i,this._paginate(1)},movePageTo:function(i){i=this._convertToValidPage(i),this.invoke("beforeMove",{page:i})&&(this._paginate(i),this.fire("afterMove",{page:i}))},setTotalItems:function(i){this._options.totalItems=i},setItemsPerPage:function(i){this._options.itemsPerPage=i},getCurrentPage:function(){return this._currentPage||this._options.page}});n.mixin(P),r.exports=P},function(r,f,e){var n=e(0),s=e(14),h=e(4),g=e(16),l=e(2),d=e(5),v=e(3),P=/\s+/g;function i(){this.events=null,this.contexts=null}i.mixin=function(t){n(t.prototype,i.prototype)},i.prototype._getHandlerItem=function(t,o){var a={handler:t};return o&&(a.context=o),a},i.prototype._safeEvent=function(t){var o=this.events,a;return o||(o=this.events={}),t&&(a=o[t],a||(a=[],o[t]=a),o=a),o},i.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},i.prototype._indexOfContext=function(t){for(var o=this._safeContext(),a=0;o[a];){if(t===o[a][0])return a;a+=1}return-1},i.prototype._memorizeContext=function(t){var o,a;s(t)&&(o=this._safeContext(),a=this._indexOfContext(t),a>-1?o[a][1]+=1:o.push([t,1]))},i.prototype._forgetContext=function(t){var o,a;s(t)&&(o=this._safeContext(),a=this._indexOfContext(t),a>-1&&(o[a][1]-=1,o[a][1]<=0&&o.splice(a,1)))},i.prototype._bindEvent=function(t,o,a){var m=this._safeEvent(t);this._memorizeContext(a),m.push(this._getHandlerItem(o,a))},i.prototype.on=function(t,o,a){var m=this;h(t)?(t=t.split(P),v(t,function(_){m._bindEvent(_,o,a)})):g(t)&&(a=o,v(t,function(_,B){m.on(B,_,a)}))},i.prototype.once=function(t,o,a){var m=this;if(g(t)){a=o,v(t,function(B,p){m.once(p,B,a)});return}function _(){o.apply(a,arguments),m.off(t,_,a)}this.on(t,_,a)},i.prototype._spliceMatches=function(t,o){var a=0,m;if(l(t))for(m=t.length;a<m;a+=1)o(t[a])===!0&&(t.splice(a,1),m-=1,a-=1)},i.prototype._matchHandler=function(t){var o=this;return function(a){var m=t===a.handler;return m&&o._forgetContext(a.context),m}},i.prototype._matchContext=function(t){var o=this;return function(a){var m=t===a.context;return m&&o._forgetContext(a.context),m}},i.prototype._matchHandlerAndContext=function(t,o){var a=this;return function(m){var _=t===m.handler,B=o===m.context,p=_&&B;return p&&a._forgetContext(m.context),p}},i.prototype._offByEventName=function(t,o){var a=this,m=d(o),_=a._matchHandler(o);t=t.split(P),v(t,function(B){var p=a._safeEvent(B);m?a._spliceMatches(p,_):(v(p,function(b){a._forgetContext(b.context)}),a.events[B]=[])})},i.prototype._offByHandler=function(t){var o=this,a=this._matchHandler(t);v(this._safeEvent(),function(m){o._spliceMatches(m,a)})},i.prototype._offByObject=function(t,o){var a=this,m;this._indexOfContext(t)<0?v(t,function(_,B){a.off(B,_)}):h(o)?(m=this._matchContext(t),a._spliceMatches(this._safeEvent(o),m)):d(o)?(m=this._matchHandlerAndContext(o,t),v(this._safeEvent(),function(_){a._spliceMatches(_,m)})):(m=this._matchContext(t),v(this._safeEvent(),function(_){a._spliceMatches(_,m)}))},i.prototype.off=function(t,o){h(t)?this._offByEventName(t,o):arguments.length?d(t)?this._offByHandler(t):g(t)&&this._offByObject(t,o):(this.events={},this.contexts=[])},i.prototype.fire=function(t){this.invoke.apply(this,arguments)},i.prototype.invoke=function(t){var o,a,m,_;if(!this.hasListener(t))return!0;for(o=this._safeEvent(t),a=Array.prototype.slice.call(arguments,1),m=0;o[m];){if(_=o[m],_.handler.apply(_.context,a)===!1)return!1;m+=1}return!0},i.prototype.hasListener=function(t){return this.getListenerLength(t)>0},i.prototype.getListenerLength=function(t){var o=this._safeEvent(t);return o.length},r.exports=i},function(r,f,e){var n=e(1),s=e(15);function h(g){return!n(g)&&!s(g)}r.exports=h},function(r,f,e){function n(s){return s===null}r.exports=n},function(r,f,e){function n(s){return s===Object(s)}r.exports=n},function(r,f,e){function n(s,h,g){var l=0,d=s.length;for(g=g||null;l<d&&h.call(g,s[l],l,s)!==!1;l+=1);}r.exports=n},function(r,f,e){var n=e(19);function s(h,g){var l=n(g.prototype);l.constructor=h,h.prototype=l}r.exports=s},function(r,f,e){function n(s){function h(){}return h.prototype=s,new h}r.exports=n},function(r,f,e){var n=e(3),s=e(7),h=e(21),g=e(22),l=e(24),d=e(25),v=e(0),P=e(4),i=e(28),t=e(9),o={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},a=["first","prev","next","last"],m=["prev","next"],_="The container element is invalid.",B=s({init:function(p,b,w){this._containerElement=null,this._firstItemClassName=b.firstItemClassName,this._lastItemClassName=b.lastItemClassName,this._template=v({},o,b.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(p),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(w)},_setRootElement:function(p){if(P(p)?p=document.getElementById(p)||document.querySelector(p):p.jquery&&(p=p[0]),!i(p))throw new Error(_);this._containerElement=p},_setMoveButtons:function(){n(a,function(p){this._buttons[p]=t.createElementByTemplate(this._template.moveButton,{type:p})},this)},_setDisabledMoveButtons:function(){n(a,function(p){var b="disabled"+t.capitalizeFirstLetter(p);this._buttons[b]=t.createElementByTemplate(this._template.disabledMoveButton,{type:p})},this)},_setMoreButtons:function(){n(m,function(p){var b=p+"More";this._buttons[b]=t.createElementByTemplate(this._template.moreButton,{type:p})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(p){var b;p.page>1?b=this._buttons.first:b=this._buttons.disabledFirst,this._getContainerElement().appendChild(b)},_appendPrevButton:function(p){var b;p.currentPageIndex>1?b=this._buttons.prev:b=this._buttons.disabledPrev,this._getContainerElement().appendChild(b)},_appendNextButton:function(p){var b;p.currentPageIndex<p.lastPageListIndex?b=this._buttons.next:b=this._buttons.disabledNext,this._getContainerElement().appendChild(b)},_appendLastButton:function(p){var b;p.page<p.lastPage?b=this._buttons.last:b=this._buttons.disabledLast,this._getContainerElement().appendChild(b)},_appendPrevMoreButton:function(p){var b;p.prevMore&&(b=this._buttons.prevMore,d(b,this._firstItemClassName),this._getContainerElement().appendChild(b))},_appendNextMoreButton:function(p){var b;p.nextMore&&(b=this._buttons.nextMore,d(b,this._lastItemClassName),this._getContainerElement().appendChild(b))},_appendPages:function(p){var b=p.leftPageNumber,w=p.rightPageNumber,T,I;for(I=b;I<=w;I+=1)I===p.page?T=t.createElementByTemplate(this._template.currentPage,{page:I}):(T=t.createElementByTemplate(this._template.page,{page:I}),this._enabledPageElements.push(T)),I===b&&!p.prevMore&&d(T,this._firstItemClassName),I===w&&!p.nextMore&&d(T,this._lastItemClassName),this._getContainerElement().appendChild(T)},_attachClickEvent:function(p){var b=this._getContainerElement();g(b,"click",function(w){var T=h(w),I,O;l(w),O=this._getButtonType(T),O||(I=this._getPageNumber(T)),p(O,I)},this)},_getButtonType:function(p){var b,w=this._buttons;return n(w,function(T,I){return t.isContained(p,T)?(b=I,!1):!0},this),b},_getPageNumber:function(p){var b=this._findPageElement(p),w;return b&&(w=parseInt(b.innerText,10)),w},_findPageElement:function(p){for(var b=0,w=this._enabledPageElements.length,T;b<w;b+=1)if(T=this._enabledPageElements[b],t.isContained(p,T))return T;return null},_empty:function(){this._enabledPageElements=[],n(this._buttons,function(p,b){this._buttons[b]=p.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(p){this._empty(),this._appendFirstButton(p),this._appendPrevButton(p),this._appendPrevMoreButton(p),this._appendPages(p),this._appendNextMoreButton(p),this._appendNextButton(p),this._appendLastButton(p)}});r.exports=B},function(r,f,e){function n(s){return s.target||s.srcElement}r.exports=n},function(r,f,e){var n=e(4),s=e(3),h=e(23);function g(v,P,i,t){if(n(P)){s(P.split(/\s+/g),function(o){l(v,o,i,t)});return}s(P,function(o,a){l(v,a,o,i)})}function l(v,P,i,t){function o(a){i.call(t||v,a||window.event)}"addEventListener"in v?v.addEventListener(P,o):"attachEvent"in v&&v.attachEvent("on"+P,o),d(v,P,i,o)}function d(v,P,i,t){var o=h(v,P),a=!1;s(o,function(m){return m.handler===i?(a=!0,!1):!0}),a||o.push({handler:i,wrappedHandler:t})}r.exports=g},function(r,f,e){var n="_feEventKey";function s(h,g){var l=h[n],d;return l||(l=h[n]={}),d=l[g],d||(d=l[g]=[]),d}r.exports=s},function(r,f,e){function n(s){if(s.preventDefault){s.preventDefault();return}s.returnValue=!1}r.exports=n},function(r,f,e){var n=e(3),s=e(8),h=e(26),g=e(27);function l(d){var v=Array.prototype.slice.call(arguments,1),P=d.classList,i=[],t;if(P){n(v,function(o){d.classList.add(o)});return}t=h(d),t&&(v=[].concat(t.split(/\s+/),v)),n(v,function(o){s(o,i)<0&&i.push(o)}),g(d,i)}r.exports=l},function(r,f,e){var n=e(1);function s(h){return!h||!h.className?"":n(h.className.baseVal)?h.className:h.className.baseVal}r.exports=s},function(r,f,e){var n=e(2),s=e(1);function h(g,l){if(l=n(l)?l.join(" "):l,l=l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(g.className.baseVal)){g.className=l;return}g.className.baseVal=l}r.exports=h},function(r,f,e){function n(s){return typeof HTMLElement=="object"?s&&(s instanceof HTMLElement||!!s.nodeType):!!(s&&s.nodeType)}r.exports=n},function(r,f,e){var n=e(8),s=e(3),h=e(2),g=e(4),l=e(0),d=/{{\s?|\s?}}/g,v=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,P=/\[\s?|\s?\]/,i=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,t=/\./,o=/^["']\w+["']$/,a=/"|'/g,m=/^-?\d+\.?\d*$/,_=2,B={if:I,each:O,with:Q},p="a".split(/a/).length===3,b=function(){return p?function(y,x){return y.split(x)}:function(y,x){var k=[],E=0,C,M;for(x.global||(x=new RegExp(x,"g")),C=x.exec(y);C!==null;)M=C.index,k.push(y.slice(E,M)),E=M+C[0].length,C=x.exec(y);return k.push(y.slice(E)),k}}();function w(y,x){var k,E=x[y];return y==="true"?E=!0:y==="false"?E=!1:o.test(y)?E=y.replace(a,""):v.test(y)?(k=y.split(P),E=w(k[0],x)[w(k[1],x)]):i.test(y)?(k=y.split(t),E=w(k[0],x)[k[1]]):m.test(y)&&(E=parseFloat(y)),E}function T(y,x){var k=[y],E=[],C=0,M=0;return s(x,function(L,S){L.indexOf("if")===0?C+=1:L==="/if"?C-=1:!C&&(L.indexOf("elseif")===0||L==="else")&&(k.push(L==="else"?["true"]:L.split(" ").slice(1)),E.push(x.slice(M,S)),M=S+1)}),E.push(x.slice(M)),{exps:k,sourcesInsideIf:E}}function I(y,x,k){var E=T(y,x),C=!1,M="";return s(E.exps,function(L,S){return C=H(L,k),C&&(M=$(E.sourcesInsideIf[S],k)),!C}),M}function O(y,x,k){var E=H(y,k),C=h(E)?"@index":"@key",M={},L="";return s(E,function(S,A){M[C]=A,M["@this"]=S,l(k,M),L+=$(x.slice(),k)}),L}function Q(y,x,k){var E=n("as",y),C=y[E+1],M=H(y.slice(0,E),k),L={};return L[C]=M,$(x,l(k,L))||""}function tt(y,x,k){var E=y.splice(x+1,k-x);return E.pop(),E}function et(y,x,k){for(var E=B[y],C=1,M=0,L,S=M+_,A=x[S];C&&g(A);)A.indexOf(y)===0?C+=1:A.indexOf("/"+y)===0&&(C-=1,L=S),S+=_,A=x[S];if(C)throw Error(y+" needs {{/"+y+"}} expression.");return x[M]=E(x[M].split(" ").slice(1),tt(x,M,L),k),x}function H(y,x){var k=w(y[0],x);return k instanceof Function?nt(k,y.slice(1),x):k}function nt(y,x,k){var E=[];return s(x,function(C){E.push(w(C,k))}),y.apply(null,E)}function $(y,x){for(var k=1,E=y[k],C,M,L;g(E);)C=E.split(" "),M=C[0],B[M]?(L=et(M,y.splice(k,y.length-k),x),y=y.concat(L)):y[k]=H(C,x),k+=_,E=y[k];return y.join("")}function st(y,x){return $(b(y,d),x)}r.exports=st},function(r,f,e){var n=e(1),s=e(31),h=7*24*60*60*1e3;function g(d){var v=new Date().getTime();return v-d>h}function l(d,v){var P="https://www.google-analytics.com/collect",i=location.hostname,t="event",o="use",a="TOAST UI "+d+" for "+i+": Statistics",m=window.localStorage.getItem(a);!n(window.tui)&&window.tui.usageStatistics===!1||m&&!g(m)||(window.localStorage.setItem(a,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&s(P,{v:1,t,tid:v,cid:i,dp:i,dh:d,el:d,ec:o})},1e3))}r.exports=l},function(r,f,e){var n=e(6);function s(h,g){var l=document.createElement("img"),d="";return n(g,function(v,P){d+="&"+P+"="+v}),d=d.substring(1),l.src=h+"?"+d,l.style.display="none",document.body.appendChild(l),document.body.removeChild(l),l}r.exports=s}])})})(Mt);const j=document.querySelector('button[data-value=""]');j&&j.addEventListener("click",wt);function wt(){j.classList.contains("js-active")||j.classList.add("js-active"),watchedArray()}(()=>{const c={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalBackdrop:document.querySelector("[data-modal-backdrop]")};window.addEventListener("keydown",u);function u(r){r.key==="Escape"&&c.modalBackdrop.classList.add("is-hidden")}})();
