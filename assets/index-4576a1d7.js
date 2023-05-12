import"./support-eaba1970.js";document.querySelector(".bestsellers-area");const f=document.querySelector(".bestsellers-list");let u=[];const L=async()=>await(await fetch("https://books-backend.p.goit.global/books/top-books")).json();L().then(e=>{u=e,y(),k(u)}).catch(e=>console.error(e));let c=0,i=0;function y(){window.screen.availWidth<768?(c=1,i=30):window.screen.availWidth>=768&&window.screen.availWidth<1440?(c=3,i=20):(c=5,i=15)}function k(e){y();let o="";for(let t=0;t<e.length;t++){const l=e[t].list_name;o+=`
        <li class="bestsellers-list-item">
            <p class="bestsellers-general-category">${l}</p>
            <div class="bestsellers-book-list">`;const s=e[t].books;for(let n=0;n<s.length&&n!==c;n++){const r=s[n];o+=`
              <div class="bestsellers-book-item" >
                <div class="test-wraper" >
                  <img src="${r.book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${r._id}" loading="lazy" data-modal-open>
                </div>
                <p class="bestsellers-book-title">${h(r.title,i)}</p>
                <p class="bestsellers-book-author">${r.author}</p>
              </div>`}o+=`
            </div>
            <button class="bestsellers-button" data-id="${e[t].list_name}">See more</button>
        </li>`}f.innerHTML=o,W()}window.addEventListener("resize",e=>{T(),y(),k(u)});function T(){f.innerHTML=""}function h(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}const S=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const m=document.querySelector(".category_books"),q=document.querySelector(".bestsellers-area"),B=document.querySelector(".category_books_container");S.addEventListener("click",w);function w(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.dataset.id;return z(o),fetch(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>t.json()).then(t=>M(t,e)).catch(t=>console.log(t))}function E(){m.innerHTML=""}function M(e,o){q.style.display="none",B.style.display="flex",A(o),E(),H(e);const t=e.map(({book_image:l,title:s,author:n})=>`<li class = "category_books_items">
          <img src='${l}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${h(s,15)}</p>
             <p class='bestsellers-book-author'>${n}</p></li>
      `).join("");m.insertAdjacentHTML("beforeend",t)}function A(e){const o=document.querySelector(".category_books_title"),l=e.target.dataset.id.split(" "),s=l[l.length-1],r=l.slice(0,l.length-1).join(" ");o.textContent=r;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=s,o.append(a)}function H(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),m.appendChild(o);return}}function W(){const e=document.querySelectorAll(".bestsellers-list-item");for(let o=0;o<e.length;o+=1)e[o].addEventListener("click",O)}const j=document.querySelector(".img-and-description");function O(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>N(t)).catch(t=>console.log(t))}function N(e){j.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}function z(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(l=>{l.textContent===e?(l.style.fontWeight="700",l.style.lineHeight="1.33",l.style.textTransform="uppercase",l.style.textAlign="left",l.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(l.style.fontWeight="400",l.style.lineHeight="1.12",l.style.textTransform="none",l.style.color="var(--color-of-category-text)")})}const p=document.querySelector(".category_list");document.querySelector(".item-category");const d=document.querySelector(".category_books"),C=document.querySelector(".bestsellers-area"),b=document.querySelector(".category_books_container"),D=document.querySelector(".category_all");function I(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function U(e){const o=e.map(({list_name:t})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${t}</button>          

          </li>
      `).join("");p.insertAdjacentHTML("beforeend",o)}I().then(e=>U(e)).catch(e=>console.log(e));p.addEventListener("click",Y);function Y(e){if(e.target.className!=="category_button")return;const o=e.target.textContent;return v(o),_(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>$(t,e)).catch(t=>console.log(t))}function _(){d.innerHTML=""}function $(e,o){C.style.display="none",b.style.display="flex",J(o),F(e);const t=e.map(({book_image:l,title:s,author:n,_id:r})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${l}' alt='book-cover' class='bestsellers-book-cover' data-id="${r}">
          </div>
             <p class='bestsellers-book-title book-text'>${K(s,15)}</p>
             <p class='bestsellers-book-author'>${n}</p></li>
      `).join("");d.insertAdjacentHTML("beforeend",t)}function K(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}function F(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),d.appendChild(o);return}}D.addEventListener("click",G);function G(e){C.style.display="flex",b.style.display="none";const o=e.target.className;P(o)}function J(e){const o=document.querySelector(".category_books_title"),l=e.target.textContent.split(" "),s=l[l.length-1],r=l.slice(0,l.length-1).join(" ");o.textContent=r;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=s,o.append(a)}function P(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(l=>{l.textContent!==e?(l.style.fontWeight="400",l.style.lineHeight="1.12",l.style.textTransform="none",l.style.color="var(--color-of-category-text)",t.style.fontWeight="700",t.style.lineHeight="1.33",t.style.textTransform="uppercase",t.style.color="var(--color-of-categoryAll-text)"):(l.style.fontWeight="400",l.style.lineHeight="1.12",l.style.textTransform="none",l.style.color="var(--color-of-category-text)")})}function v(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(l=>{l.textContent===e?(l.style.fontWeight="700",l.style.lineHeight="1.33",l.style.textTransform="uppercase",l.style.textAlign="left",l.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(l.style.fontWeight="400",l.style.lineHeight="1.12",l.style.textTransform="none",l.style.color="var(--color-of-category-text)")})}const Q=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");Q.addEventListener("click",R);function R(e){if(e.target.className!=="bestsellers-general-category")return;const o=e.target.textContent;return v(o),_(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>$(t,e)).catch(t=>console.log(t))}document.querySelector(".svg-close");const V=document.querySelector("[data-modal]");b.addEventListener("click",X);function X(e){e.target.className==="bestsellers-book-cover"&&V.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");d.addEventListener("click",ee);const Z=document.querySelector(".img-and-description");function ee(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>te(t)).catch(t=>console.log(t))}function te(e){Z.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",t),window.addEventListener("keydown",l);function o(s){s.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function t(){e.modal.classList.toggle("is-hidden")}function l(s){s.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const g=document.querySelector(".scroll-up_hidden"),oe=()=>{const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?g.classList.add("scroll-up"):g.classList.remove("scroll-up")},x=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(x,0))};g.addEventListener("click",x);window.addEventListener("scroll",oe);
