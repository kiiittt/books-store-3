var B=Object.defineProperty;var q=(e,o,t)=>o in e?B(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var d=(e,o,t)=>(q(e,typeof o!="symbol"?o+"":o,t),t);import"./support-ee1f5232.js";class w{constructor(){d(this,"spinnerEl",document.createElement("div"));d(this,"circleFirst",document.createElement("div"));d(this,"circleSecond",document.createElement("div"));this.spinnerEl.classList.add("spinner"),this.circleFirst.classList.add("circle","circle-1","is-hidden"),this.circleSecond.classList.add("circle","circle-2","is-hidden"),this.spinnerEl.appendChild(this.circleFirst),this.spinnerEl.appendChild(this.circleSecond),document.body.appendChild(this.spinnerEl)}show(){this.spinnerEl.classList.remove("is-hidden"),this.circleFirst.classList.remove("is-hidden"),this.circleSecond.classList.remove("is-hidden")}hide(){this.spinnerEl.classList.add("is-hidden"),this.circleFirst.classList.add("is-hidden"),this.circleSecond.classList.add("is-hidden")}getEl(){return this.spinnerEl}}const y=new w,C=document.querySelector(".bestsellers-list");let a=[];const A=async()=>{y.show();const e=await fetch("https://books-backend.p.goit.global/books/top-books");e.ok?(a=await e.json(),m(),b(a)):console.error("Error fetching books:",e.status),y.hide()};A().then(e=>{a=e,m(),b(a)}).catch(e=>console.error(e));let u=0,g=0;function m(){window.screen.availWidth<768?(u=1,g=30):window.screen.availWidth>=768&&window.screen.availWidth<1440?(u=3,g=20):(u=5,g=15)}function b(e){if(!e||e.length===0)return;m();let o="";for(let t=0;t<e.length;t++){const s=e[t].list_name;o+=`
      <li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${s}</p>
        <div class="bestsellers-book-list">`;const l=e[t].books;if(!(!l||l.length===0)){for(let r=0;r<l.length&&r!==u;r++){const n=l[r];o+=`
        <div class="bestsellers-book-item">
          <div class="test-wraper">
            <img src="${n.book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${n._id}" loading="lazy" data-modal-open>
          </div>
          <p class="bestsellers-book-title">${_(n.title,g)}</p>
          <p class="bestsellers-book-author">${n.author}</p>
        </div>`}o+=`
        </div>
        <button class="bestsellers-button" data-id="${e[t].list_name}">See more</button>
      </li>`}}C.innerHTML=o,F()}window.addEventListener("resize",e=>{M(),m(),b(a)});function M(){C.innerHTML=""}function _(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}const H=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const f=document.querySelector(".category_books"),O=document.querySelector(".bestsellers-area"),W=document.querySelector(".category_books_container");H.addEventListener("click",j);function j(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.dataset.id;return J(o),fetch(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>t.json()).then(t=>I(t,e)).catch(t=>console.log(t))}function N(){f.innerHTML=""}function I(e,o){O.style.display="none",W.style.display="flex",D(o),N(),z(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${_(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");f.insertAdjacentHTML("beforeend",t)}function D(e){const o=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");o.textContent=n;const c=document.createElement("span");c.classList="last_word_category_title",c.textContent=l,o.append(c)}function z(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),f.appendChild(o);return}}function F(){const e=document.querySelectorAll(".bestsellers-list-item");for(let o=0;o<e.length;o+=1)e[o].addEventListener("click",U)}const K=document.querySelector(".img-and-description");function U(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;return y.show(),fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>{Y(t),y.hide()}).catch(t=>console.log(t))}function Y(e){K.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}function J(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const G=document.querySelector(".btn-modal-add-js"),v="books-data-01";let p=JSON.parse(localStorage.getItem(v))||[];G.addEventListener("click",P);function P(){const o={id:document.querySelector(".book-modal").dataset.bookId};p.push(o),localStorage.setItem(v,JSON.stringify(p))}const L=document.querySelector(".category_list");document.querySelector(".item-category");const h=document.querySelector(".category_books"),S=document.querySelector(".bestsellers-area"),k=document.querySelector(".category_books_container"),Q=document.querySelector(".category_all");function R(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function V(e){const o=e.map(({list_name:t})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${t}</button>          

          </li>
      `).join("");L.insertAdjacentHTML("beforeend",o)}R().then(e=>V(e)).catch(e=>console.log(e));L.addEventListener("click",X);function X(e){if(e.target.className!=="category_button")return;const o=e.target.textContent;return x(o),$(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>E(t,e)).catch(t=>console.log(t))}function $(){h.innerHTML=""}function E(e,o){S.style.display="none",k.style.display="flex",oe(o),ee(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${Z(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");h.insertAdjacentHTML("beforeend",t)}function Z(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}function ee(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),h.appendChild(o);return}}Q.addEventListener("click",te);function te(e){S.style.display="flex",k.style.display="none";const o=e.target.className;se(o)}function oe(e){const o=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");o.textContent=n;const c=document.createElement("span");c.classList="last_word_category_title",c.textContent=l,o.append(c)}function se(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",t.style.fontWeight="700",t.style.lineHeight="1.33",t.style.textTransform="uppercase",t.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function x(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const le=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");le.addEventListener("click",ne);function ne(e){if(e.target.className!=="bestsellers-general-category")return;const o=e.target.textContent;return x(o),$(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>E(t,e)).catch(t=>console.log(t))}document.querySelector(".svg-close");const re=document.querySelector("[data-modal]");k.addEventListener("click",ce);function ce(e){e.target.className==="bestsellers-book-cover"&&re.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");h.addEventListener("click",ie);const ae=document.querySelector(".img-and-description");function ie(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>de(t)).catch(t=>console.log(t))}function de(e){ae.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",t),window.addEventListener("keydown",s);function o(l){l.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function t(){e.modal.classList.toggle("is-hidden")}function s(l){l.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const ue=document.querySelector(".container"),i=document.createElement("div");i.classList.add("scroll-up_hidden");const ge=()=>{const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?i.classList.add("scroll-up"):i.classList.remove("scroll-up")},T=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(T,0))};i.addEventListener("click",T);window.addEventListener("scroll",ge);ue.appendChild(i);
