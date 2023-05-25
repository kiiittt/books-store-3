var q=Object.defineProperty;var A=(e,o,t)=>o in e?q(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var u=(e,o,t)=>(A(e,typeof o!="symbol"?o+"":o,t),t);import"./support-43b698ce.js";class _{constructor(){u(this,"spinnerEl",document.createElement("div"));u(this,"circleFirst",document.createElement("div"));u(this,"circleSecond",document.createElement("div"));this.spinnerEl.classList.add("spinner"),this.circleFirst.classList.add("circle","circle-1","is-hidden"),this.circleSecond.classList.add("circle","circle-2","is-hidden"),this.spinnerEl.appendChild(this.circleFirst),this.spinnerEl.appendChild(this.circleSecond),document.body.appendChild(this.spinnerEl)}show(){this.spinnerEl.classList.remove("is-hidden"),this.circleFirst.classList.remove("is-hidden"),this.circleSecond.classList.remove("is-hidden")}hide(){this.spinnerEl.classList.add("is-hidden"),this.circleFirst.classList.add("is-hidden"),this.circleSecond.classList.add("is-hidden")}getEl(){return this.spinnerEl}}const m=new _,v=document.querySelector(".bestsellers-list");let i=[];const M=async()=>{m.show();const e=await fetch("https://books-backend.p.goit.global/books/top-books");e.ok?(i=await e.json(),h(),f(i)):console.error("Error fetching books:",e.status),m.hide()};M().then(e=>{i=e,h(),f(i)}).catch(e=>console.error(e));let g=0,y=0;function h(){window.screen.availWidth<768?(g=1,y=30):window.screen.availWidth>=768&&window.screen.availWidth<1440?(g=3,y=20):(g=5,y=15)}function f(e){if(!e||e.length===0)return;h();let o="";for(let t=0;t<e.length;t++){const s=e[t].list_name;o+=`
      <li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${s}</p>
        <div class="bestsellers-book-list">`;const l=e[t].books;if(!(!l||l.length===0)){for(let r=0;r<l.length&&r!==g;r++){const n=l[r];o+=`
        <div class="bestsellers-book-item">
          <div class="test-wraper">
            <img src="${n.book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${n._id}" loading="lazy" data-modal-open>
          </div>
          <p class="bestsellers-book-title">${L(n.title,y)}</p>
          <p class="bestsellers-book-author">${n.author}</p>
        </div>`}o+=`
        </div>
        <button class="bestsellers-button" data-id="${e[t].list_name}">See more</button>
      </li>`}}v.innerHTML=o,K()}window.addEventListener("resize",e=>{H(),h(),f(i)});function H(){v.innerHTML=""}function L(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}const O=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const p=document.querySelector(".category_books"),W=document.querySelector(".bestsellers-area"),j=document.querySelector(".category_books_container");O.addEventListener("click",N);function N(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.dataset.id;return G(o),fetch(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>t.json()).then(t=>D(t,e)).catch(t=>console.log(t))}function I(){p.innerHTML=""}function D(e,o){W.style.display="none",j.style.display="flex",z(o),I(),F(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${L(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");p.insertAdjacentHTML("beforeend",t)}function z(e){const o=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");o.textContent=n;const c=document.createElement("span");c.classList="last_word_category_title",c.textContent=l,o.append(c)}function F(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),p.appendChild(o);return}}function K(){const e=document.querySelectorAll(".bestsellers-list-item");for(let o=0;o<e.length;o+=1)e[o].addEventListener("click",Y)}const U=document.querySelector(".img-and-description");function Y(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;return m.show(),fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>{J(t),m.hide()}).catch(t=>console.log(t))}function J(e){U.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
      <div class="div-text-modal">
        <h1 class="item-modal">${e.title}</h1>
        <h3 class="autor-name-modal">${e.author}</h3>
        <p class="description-modal">${e.description}</p>
        <ul class="ul-modal">
          <li class="li-modal">
          <a href="${e.buy_links[0].url}" class="amazon-modal" target="_blank" data-book-id="${e._id}"></a>
          </li>
          <li class="li-modal">
          <a href="${e.buy_links[1].url}" class="book-modal" target="_blank" data-book-id="${e._id}"></a>
          </li>
          <li class="li-modal">
          <a href="${e.buy_links[4].url}" class="books-modal" target="_blank" data-book-id="${e._id}">
          </a></li>
        </ul>
      </div>`}function G(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const P=document.querySelector(".btn-modal-add-js"),S="books-data-01";let C=JSON.parse(localStorage.getItem(S))||[];P.addEventListener("click",Q);function Q(){const o={id:document.querySelector(".book-modal").dataset.bookId};C.push(o),localStorage.setItem(S,JSON.stringify(C))}const a=new _,$=document.querySelector(".category_list"),b=document.querySelector(".category_books"),E=document.querySelector(".bestsellers-area"),k=document.querySelector(".category_books_container"),R=document.querySelector(".category_all");function V(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function X(e){const o=e.map(({list_name:t})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${t}</button>          

          </li>
      `).join("");$.insertAdjacentHTML("beforeend",o)}V().then(e=>X(e)).catch(e=>console.log(e));$.addEventListener("click",Z);function Z(e){if(e.target.className!=="category_button")return;const o=e.target.textContent;return w(o),x(),a.show(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>{T(t,e),a.hide()}).catch(t=>{console.log(t),a.hide()})}a.hide();function x(){b.innerHTML=""}function T(e,o){E.style.display="none",k.style.display="flex",se(o),te(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${ee(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");b.insertAdjacentHTML("beforeend",t)}function ee(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}function te(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),b.appendChild(o);return}}R.addEventListener("click",oe);function oe(e){E.style.display="flex",k.style.display="none";const o=e.target.className;le(o)}function se(e){const o=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");o.textContent=n;const c=document.createElement("span");c.classList="last_word_category_title",c.textContent=l,o.append(c)}function le(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",t.style.fontWeight="700",t.style.lineHeight="1.33",t.style.textTransform="uppercase",t.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function w(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const ne=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");ne.addEventListener("click",re);function re(e){if(e.target.className!=="bestsellers-general-category")return;const o=e.target.textContent;return w(o),x(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>T(t,e)).catch(t=>console.log(t))}document.querySelector(".svg-close");const ce=document.querySelector("[data-modal]");k.addEventListener("click",ae);function ae(e){e.target.className==="bestsellers-book-cover"&&ce.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");b.addEventListener("click",de);const ie=document.querySelector(".img-and-description");function de(e){if(e.target.className!=="bestsellers-book-cover")return;a.show();const o=e.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>{ue(t),a.hide()}).catch(t=>{console.log(t),a.hide()})}function ue(e){ie.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",t),window.addEventListener("keydown",s);function o(l){l.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function t(){e.modal.classList.toggle("is-hidden")}function s(l){l.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const ge=document.querySelector(".container"),d=document.createElement("div");d.classList.add("scroll-up_hidden");const ye=()=>{const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?d.classList.add("scroll-up"):d.classList.remove("scroll-up")},B=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(B,0))};d.addEventListener("click",B);window.addEventListener("scroll",ye);ge.appendChild(d);
