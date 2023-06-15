var F=Object.defineProperty;var z=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var u=(e,t,o)=>(z(e,typeof t!="symbol"?t+"":t,o),o);import"./auth-script-3d577eaf.js";import"https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";import"https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";async function G(){const e=await fetch("https://books-backend.p.goit.global/books/top-books");if(e.ok)return await e.json();throw new Error("Error fetching books:",e.status)}async function R(){return await(await fetch("https://books-backend.p.goit.global/books/category-list")).json()}async function J(e){const t=await fetch(`https://books-backend.p.goit.global/books/category?category=${e}`);if(t.ok)return await t.json();throw new Error("Error fetching category books:",t.status)}async function T(e){const t=await fetch(`https://books-backend.p.goit.global/books/${e}`);if(t.ok)return await t.json();throw new Error("Error fetching book details:",t.status)}async function v(e){return await(await fetch(`https://books-backend.p.goit.global/books/category?category=${e}`)).json()}const B=e=>`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
      <div class="div-text-modal">
        <h1 class="item-modal">${e.title}</h1>
        <h3 class="autor-name-modal">${e.author}</h3>
        <p class="description-modal">${e.description}</p>
        <ul class="ul-modal">
          <li class="li-modal amazon-modal-books">
          <a href="${e.buy_links[0].url}" class="amazon-modal" target="_blank"></a>
          </li>
          <li class="li-modal">
          <a href="${e.buy_links[1].url}" class="book-modal" target="_blank"></a>
          </li>
          <li class="li-modal">
          <a href="${e.buy_links[4].url}" class="books-modal" target="_blank">
          </a></li>
        </ul>
      </div>`;function x(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}const M=({book_image:e,title:t,author:o,_id:s})=>`<li class="category_books_items">
    <div class="test-wraper">
      <img src="${e}" alt="book-cover" class="bestsellers-book-cover" data-id="${s}">
    </div>
    <p class="bestsellers-book-title book-text">${x(t,15)}</p>
    <p class="bestsellers-book-author">${o}</p>
  </li>`;function E(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{const n=s.textContent===e;s.style.fontWeight=n?"700":"400",s.style.lineHeight=n?"1.33":"1.12",s.style.textTransform=n?"uppercase":"none",s.style.textAlign=n?"left":"",s.style.color=n?"var(--color-of-categoryAll-text)":"var(--color-of-category-text)"}),o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"}class ${constructor(){u(this,"spinnerEl",document.createElement("div"));u(this,"circleFirst",document.createElement("div"));u(this,"circleSecond",document.createElement("div"));u(this,"modalEl",document.querySelector(".modal"));this.spinnerEl.classList.add("spinner"),this.circleFirst.classList.add("circle","circle-1","is-hidden"),this.circleSecond.classList.add("circle","circle-2","is-hidden"),this.spinnerEl.appendChild(this.circleFirst),this.spinnerEl.appendChild(this.circleSecond),document.body.appendChild(this.spinnerEl)}show(){this.spinnerEl.classList.remove("is-hidden"),this.circleFirst.classList.remove("is-hidden"),this.circleSecond.classList.remove("is-hidden"),this.modalEl.classList.contains("is-hidden")||this.modalEl.classList.add("is-hidden")}hide(){this.spinnerEl.classList.add("is-hidden"),this.circleFirst.classList.add("is-hidden"),this.circleSecond.classList.add("is-hidden"),this.modalEl.classList.contains("is-hidden")&&this.modalEl.classList.remove("is-hidden")}getEl(){return this.spinnerEl}}const c=new $,q=document.querySelector(".bestsellers-list");let h=[];const O=async()=>{c.show();try{h=await G(),b(),S(h)}catch{console.error(error)}c.hide()};O().then(e=>{h=e,b(),S(h)}).catch(e=>console.error(e));let p=0,f=0;function b(){const e=window.innerWidth;e<768?(p=1,f=30):e>=768&&e<1440?(p=3,f=20):(p=5,f=15)}function S(e){if(!e||e.length===0)return;b();let t="";for(let o=0;o<e.length;o++){const s=e[o].list_name;t+=`
      <li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${s}</p>
        <div class="bestsellers-book-list">`;const n=e[o].books;if(!(!n||n.length===0)){for(let a=0;a<n.length&&a!==p;a++){const r=n[a];t+=`
        <div class="bestsellers-book-item">
          <div class="test-wraper">
            <img src="${r.book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${r._id}" loading="lazy" data-modal-open>
          </div>
          <p class="bestsellers-book-title">${x(r.title,f)}</p>
          <p class="bestsellers-book-author">${r.author}</p>
        </div>`}t+=`
        </div>
        <button class="bestsellers-button" data-id="${e[o].list_name}">See more</button>
      </li>`}}q.innerHTML=t,oe()}window.addEventListener("resize",()=>{K(),b(),S(h),O()});function K(){q.innerHTML=""}const U=document.querySelector(".bestsellers-list"),w=document.querySelector(".category_books"),Y=document.querySelector(".bestsellers-area"),V=document.querySelector(".category_books_container");U.addEventListener("click",Q);function Q(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.id;E(t),c.show(),J(t).then(o=>{Z(o,e),c.hide()}).catch(o=>{console.log(o),c.hide()}).finally(()=>{window.scrollTo({top:0})})}function X(){w.innerHTML=""}function Z(e,t){Y.style.display="none",V.style.display="flex",ee(t),X(),te(e);const o=e.map(s=>M(s)).join("");w.insertAdjacentHTML("beforeend",o)}function ee(e){const t=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),n=s.at(-1),r=s.slice(0,s.length-1).join(" ");t.textContent=r;const C=document.createElement("span");C.classList="last_word_category_title",C.textContent=n,t.append(C)}function te(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),w.appendChild(t);return}}function oe(){const e=document.querySelectorAll(".bestsellers-list-item");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",se)}const H=document.querySelector(".img-and-description"),m=document.querySelector(".btn-modal-add-js"),A="books";let i=JSON.parse(localStorage.getItem(A))||[];function se(e){if(e.target.className!=="bestsellers-book-cover")return;const t=e.target.dataset.id;c.show(),H.innerHTML="<p>Loading...</p>",T(t).then(o=>{ne(o),c.hide()}).catch(o=>{console.log(o),c.hide()})}let g=null;function ne(e){H.innerHTML=B(e),g=e,i.find(t=>t._id===g._id)?(m.textContent="REMOVE FROM THE SHOPPING LIST",k.classList.remove("visually-hidden")):(m.textContent="ADD TO SHOPPING LIST",k.classList.add("visually-hidden"))}m.addEventListener("click",le);const k=document.querySelector(".under-modal-btn-text");function le(){if(i.find(e=>e._id===g._id)){const e=i.findIndex(t=>t._id===g._id);i.splice(e,1),localStorage.setItem("books",JSON.stringify(i)),m.textContent="ADD TO SHOPPING LIST",k.classList.add("visually-hidden")}else i.push(g),localStorage.setItem(A,JSON.stringify(i)),m.textContent="REMOVE FROM THE SHOPPING LIST",k.classList.remove("visually-hidden")}function re(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{const n=s.textContent===e;s.style.fontWeight=n?"700":"400",s.style.lineHeight=n?"1.33":"1.12",s.style.textTransform=n?"uppercase":"none",s.style.color=n?"var(--color-of-categoryAll-text)":"var(--color-of-category-text)"}),o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.color="var(--color-of-categoryAll-text)"}const d=new $,N=document.querySelector(".category_list"),L=document.querySelector(".category_books"),j=document.querySelector(".bestsellers-area"),_=document.querySelector(".category_books_container"),ce=document.querySelector(".category_all");R().then(e=>ae(e)).catch(e=>console.log(e));function ae(e){const t=e.map(o=>`
      <li class="item-category">
        <button type="button" class="category_button">${o.list_name}</button>
      </li>
    `).join("");N.insertAdjacentHTML("beforeend",t)}N.addEventListener("click",ie);function ie(e){if(e.target.className==="category_button")return E(e.target.textContent),I(),d.show(),v(e.target.textContent).then(t=>{D(t,e),d.hide()}).catch(t=>{console.log(t),d.hide()})}d.hide();function I(){L.innerHTML=""}function D(e,t){j.style.display="none",_.style.display="flex",ge(t),de(e);const o=e.map(s=>M(s)).join("");L.insertAdjacentHTML("beforeend",o)}function de(e){if(e.length===0){L.innerHTML='<p class="no-books-message">Oops, there are no books in this category.</p>';return}}ce.addEventListener("click",ue);function ue(e){j.style.display="flex",_.style.display="none";const t=e.target.className;re(t)}function ge(e){const t=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),n=s.pop(),a=s.join(" ");t.textContent=a;const r=document.createElement("span");r.classList.add("last_word_category_title"),r.textContent=n,t.appendChild(r)}const he=document.querySelector(".bestsellers-list");he.addEventListener("click",me);function me(e){if(e.target.className==="bestsellers-general-category")return E(e.target.textContent),I(),v(e.target.textContent).then(t=>D(t,e)).catch(t=>console.log(t)).finally(()=>{window.scrollTo({top:0})})}const ye=document.querySelector("[data-modal]");_.addEventListener("click",pe);function pe(e){e.target.className==="bestsellers-book-cover"&&ye.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");L.addEventListener("click",fe);const W=document.querySelector(".img-and-description");function fe(e){if(e.target.className!=="bestsellers-book-cover")return;d.show();const t=e.target.dataset.id;W.innerHTML="<p>Loading...</p>",T(t).then(o=>{ke(o),d.hide()}).catch(o=>{console.log(o),d.hide()})}function ke(e){W.innerHTML=B(e)}const l={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalContainer:document.querySelector(".modal")};l.openModalBtn.addEventListener("click",be);l.closeModalBtn.addEventListener("click",Le);window.addEventListener("keydown",Ce);l.modal.addEventListener("click",Ee);function be(e){e.target.className==="bestsellers-book-cover"&&(l.modal.classList.toggle("is-hidden"),l.modalContainer.classList.toggle("is-hidden"))}function Le(){l.modal.classList.toggle("is-hidden"),l.modalContainer.classList.toggle("is-hidden")}function Ce(e){e.key==="Escape"&&(l.modal.classList.add("is-hidden"),l.modalContainer.classList.add("is-hidden"))}function Ee(e){e.target===l.modal&&(l.modal.classList.add("is-hidden"),l.modalContainer.classList.add("is-hidden"))}const Se=document.querySelector(".container"),y=document.createElement("div");y.classList.add("scroll-up_hidden");const we=()=>{const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?y.classList.add("scroll-up"):y.classList.remove("scroll-up")},P=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(P,0))};y.addEventListener("click",P);window.addEventListener("scroll",we);Se.appendChild(y);
