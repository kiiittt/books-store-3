var P=Object.defineProperty;var F=(e,t,o)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var d=(e,t,o)=>(F(e,typeof t!="symbol"?t+"":t,o),o);import"./auth-script-1c9cda5a.js";import"https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";import"https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";async function G(){const e=await fetch("https://books-backend.p.goit.global/books/top-books");if(e.ok)return await e.json();throw new Error("Error fetching books:",e.status)}async function R(){return await(await fetch("https://books-backend.p.goit.global/books/category-list")).json()}async function z(e){const t=await fetch(`https://books-backend.p.goit.global/books/category?category=${e}`);if(t.ok)return await t.json();throw new Error("Error fetching category books:",t.status)}async function _(e){const t=await fetch(`https://books-backend.p.goit.global/books/${e}`);if(t.ok)return await t.json();throw new Error("Error fetching book details:",t.status)}async function T(e){return await(await fetch(`https://books-backend.p.goit.global/books/category?category=${e}`)).json()}const v=e=>`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
      <div class="div-text-modal">
        <h1 class="item-modal">${e.title}</h1>
        <h3 class="autor-name-modal">${e.author}</h3>
        <p class="description-modal">${e.description}</p>
        <ul class="ul-modal">
          <li class="li-modal">
          <a href="${e.buy_links[0].url}" class="amazon-modal" target="_blank"></a>
          </li>
          <li class="li-modal">
          <a href="${e.buy_links[1].url}" class="book-modal" target="_blank"></a>
          </li>
          <li class="li-modal">
          <a href="${e.buy_links[4].url}" class="books-modal" target="_blank">
          </a></li>
        </ul>
      </div>`;function B(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}const x=({book_image:e,title:t,author:o,_id:s})=>`<li class="category_books_items">
    <div class="test-wraper">
      <img src="${e}" alt="book-cover" class="bestsellers-book-cover" data-id="${s}">
    </div>
    <p class="bestsellers-book-title book-text">${B(t,15)}</p>
    <p class="bestsellers-book-author">${o}</p>
  </li>`;function E(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{const n=s.textContent===e;s.style.fontWeight=n?"700":"400",s.style.lineHeight=n?"1.33":"1.12",s.style.textTransform=n?"uppercase":"none",s.style.textAlign=n?"left":"",s.style.color=n?"var(--color-of-categoryAll-text)":"var(--color-of-category-text)"}),o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"}class M{constructor(){d(this,"spinnerEl",document.createElement("div"));d(this,"circleFirst",document.createElement("div"));d(this,"circleSecond",document.createElement("div"));d(this,"modalEl",document.querySelector(".modal"));this.spinnerEl.classList.add("spinner"),this.circleFirst.classList.add("circle","circle-1","is-hidden"),this.circleSecond.classList.add("circle","circle-2","is-hidden"),this.spinnerEl.appendChild(this.circleFirst),this.spinnerEl.appendChild(this.circleSecond),document.body.appendChild(this.spinnerEl)}show(){this.spinnerEl.classList.remove("is-hidden"),this.circleFirst.classList.remove("is-hidden"),this.circleSecond.classList.remove("is-hidden"),this.modalEl.classList.contains("is-hidden")||this.modalEl.classList.add("is-hidden")}hide(){this.spinnerEl.classList.add("is-hidden"),this.circleFirst.classList.add("is-hidden"),this.circleSecond.classList.add("is-hidden"),this.modalEl.classList.contains("is-hidden")&&this.modalEl.classList.remove("is-hidden")}getEl(){return this.spinnerEl}}const r=new M,$=document.querySelector(".bestsellers-list");let g=[];const q=async()=>{r.show();try{g=await G(),k(),C(g)}catch{console.error(error)}r.hide()};q().then(e=>{g=e,k(),C(g)}).catch(e=>console.error(e));let m=0,p=0;function k(){const e=window.innerWidth;e<768?(m=1,p=30):e>=768&&e<1440?(m=3,p=20):(m=5,p=15)}function C(e){if(!e||e.length===0)return;k();let t="";for(let o=0;o<e.length;o++){const s=e[o].list_name;t+=`
      <li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${s}</p>
        <div class="bestsellers-book-list">`;const n=e[o].books;if(!(!n||n.length===0)){for(let c=0;c<n.length&&c!==m;c++){const l=n[c];t+=`
        <div class="bestsellers-book-item">
          <div class="test-wraper">
            <img src="${l.book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${l._id}" loading="lazy" data-modal-open>
          </div>
          <p class="bestsellers-book-title">${B(l.title,p)}</p>
          <p class="bestsellers-book-author">${l.author}</p>
        </div>`}t+=`
        </div>
        <button class="bestsellers-button" data-id="${e[o].list_name}">See more</button>
      </li>`}}$.innerHTML=t,te()}window.addEventListener("resize",()=>{J(),k(),C(g),q()});function J(){$.innerHTML=""}const K=document.querySelector(".bestsellers-list"),S=document.querySelector(".category_books"),U=document.querySelector(".bestsellers-area"),Y=document.querySelector(".category_books_container");K.addEventListener("click",V);function V(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.id;E(t),r.show(),z(t).then(o=>{X(o,e),r.hide()}).catch(o=>{console.log(o),r.hide()})}function Q(){S.innerHTML=""}function X(e,t){U.style.display="none",Y.style.display="flex",Z(t),Q(),ee(e);const o=e.map(s=>x(s)).join("");S.insertAdjacentHTML("beforeend",o)}function Z(e){const t=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),n=s.at(-1),l=s.slice(0,s.length-1).join(" ");t.textContent=l;const L=document.createElement("span");L.classList="last_word_category_title",L.textContent=n,t.append(L)}function ee(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),S.appendChild(t);return}}function te(){const e=document.querySelectorAll(".bestsellers-list-item");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",oe)}const O=document.querySelector(".img-and-description"),y=document.querySelector(".btn-modal-add-js"),H="books";let a=JSON.parse(localStorage.getItem(H))||[];function oe(e){if(e.target.className!=="bestsellers-book-cover")return;const t=e.target.dataset.id;r.show(),O.innerHTML="<p>Loading...</p>",_(t).then(o=>{se(o),r.hide()}).catch(o=>{console.log(o),r.hide()})}let u=null;function se(e){O.innerHTML=v(e),u=e,a.find(t=>t._id===u._id)?(y.textContent="REMOVE FROM THE SHOPPING LIST",f.classList.remove("visually-hidden")):(y.textContent="ADD TO SHOPPING LIST",f.classList.add("visually-hidden"))}y.addEventListener("click",ne);const f=document.querySelector(".under-modal-btn-text");function ne(){if(a.find(e=>e._id===u._id)){const e=a.findIndex(t=>t._id===u._id);a.splice(e,1),localStorage.setItem("books",JSON.stringify(a)),y.textContent="ADD TO SHOPPING LIST",f.classList.add("visually-hidden")}else a.push(u),localStorage.setItem(H,JSON.stringify(a)),y.textContent="REMOVE FROM THE SHOPPING LIST",f.classList.remove("visually-hidden")}function le(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{const n=s.textContent===e;s.style.fontWeight=n?"700":"400",s.style.lineHeight=n?"1.33":"1.12",s.style.textTransform=n?"uppercase":"none",s.style.color=n?"var(--color-of-categoryAll-text)":"var(--color-of-category-text)"}),o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.color="var(--color-of-categoryAll-text)"}const i=new M,A=document.querySelector(".category_list"),b=document.querySelector(".category_books"),N=document.querySelector(".bestsellers-area"),w=document.querySelector(".category_books_container"),re=document.querySelector(".category_all");R().then(e=>ce(e)).catch(e=>console.log(e));function ce(e){const t=e.map(o=>`
      <li class="item-category">
        <button type="button" class="category_button">${o.list_name}</button>
      </li>
    `).join("");A.insertAdjacentHTML("beforeend",t)}A.addEventListener("click",ae);function ae(e){if(e.target.className==="category_button")return E(e.target.textContent),j(),i.show(),T(e.target.textContent).then(t=>{I(t,e),i.hide()}).catch(t=>{console.log(t),i.hide()})}i.hide();function j(){b.innerHTML=""}function I(e,t){N.style.display="none",w.style.display="flex",ue(t),ie(e);const o=e.map(s=>x(s)).join("");b.insertAdjacentHTML("beforeend",o)}function ie(e){if(e.length===0){b.innerHTML='<p class="no-books-message">Oops, there are no books in this category.</p>';return}}re.addEventListener("click",de);function de(e){N.style.display="flex",w.style.display="none";const t=e.target.className;le(t)}function ue(e){const t=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),n=s.pop(),c=s.join(" ");t.textContent=c;const l=document.createElement("span");l.classList.add("last_word_category_title"),l.textContent=n,t.appendChild(l)}const ge=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");ge.addEventListener("click",ye);function ye(e){if(e.target.className==="bestsellers-general-category")return E(e.target.textContent),j(),T(e.target.textContent).then(t=>I(t,e)).catch(t=>console.log(t))}const he=document.querySelector("[data-modal]");w.addEventListener("click",me);function me(e){e.target.className==="bestsellers-book-cover"&&he.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");b.addEventListener("click",pe);const D=document.querySelector(".img-and-description");function pe(e){if(e.target.className!=="bestsellers-book-cover")return;i.show();const t=e.target.dataset.id;D.innerHTML="<p>Loading...</p>",_(t).then(o=>{fe(o),i.hide()}).catch(o=>{console.log(o),i.hide()})}function fe(e){D.innerHTML=v(e)}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",o),window.addEventListener("keydown",s);function t(n){n.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function o(){e.modal.classList.toggle("is-hidden")}function s(n){n.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const ke=document.querySelector(".container"),h=document.createElement("div");h.classList.add("scroll-up_hidden");const be=()=>{const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?h.classList.add("scroll-up"):h.classList.remove("scroll-up")},W=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(W,0))};h.addEventListener("click",W);window.addEventListener("scroll",be);ke.appendChild(h);