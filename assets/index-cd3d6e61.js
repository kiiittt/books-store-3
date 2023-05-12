import"./support-eaba1970.js";document.querySelector(".bestsellers-area");const b=document.querySelector(".bestsellers-list");let d=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;d<768?L():d<1440?T():d>=1440&&q();function L(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>B(e)).catch(e=>console.log(e))}function B(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        

        <div class="bestsellers-book-item" >
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover" data-id="${t.books[0]._id}" data-modal-open>

        <p class="bestsellers-book-title">${a(t.books[0].title,30)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>`).join(" ")}function T(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>x(e)).catch(e=>console.log(e))}function x(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        <div class="bestsellers-book-list">


        <div class="bestsellers-book-item" >
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover" data-id="${t.books[0]._id}" data-modal-open>

        <p class="bestsellers-book-title">${a(t.books[0].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" >
        <img src='${t.books[1].book_image}' class="bestsellers-book-cover" data-id="${t.books[1]._id}" data-modal-open>

        <p class="bestsellers-book-title">${a(t.books[1].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[1].author}</p>
        </div>
        

        <div class="bestsellers-book-item" >
        <img src='${t.books[2].book_image}' class="bestsellers-book-cover" data-id="${t.books[2]._id}" data-modal-open>

        <p class="bestsellers-book-title">${a(t.books[2].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>`).join(" ")}function q(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>E(e)).catch(e=>console.log(e))}function E(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${t.books[0]._id}" data-modal-open>
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${a(t.books[0].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${t.books[1]._id}" data-modal-open>
        <img src='${t.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${a(t.books[1].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${t.books[2]._id}" data-modal-open>
        <img src='${t.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${a(t.books[2].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${t.books[3]._id}" data-modal-open>
        <img src='${t.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${a(t.books[3].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${t.books[4]._id}" data-modal-open>
        <img src='${t.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${a(t.books[4].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>
        `).join(" ")}function a(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}const M=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const m=document.querySelector(".category_books"),j=document.querySelector(".bestsellers-area"),w=document.querySelector(".category_books_container");M.addEventListener("click",A);function A(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.id;return U(t),fetch(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>o.json()).then(o=>W(o,e)).catch(o=>console.log(o))}function H(){m.innerHTML=""}function W(e,t){j.style.display="none",w.style.display="flex",O(t),H(),N(e);const o=e.map(({book_image:s,title:l,author:r})=>`<li class = "category_books_items">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${a(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");m.insertAdjacentHTML("beforeend",o)}function O(e){const t=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),l=s[s.length-1],c=s.slice(0,s.length-1).join(" ");t.textContent=c;const n=document.createElement("span");n.classList="last_word_category_title",n.textContent=l,t.append(n)}function N(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),m.appendChild(t);return}}const D=document.querySelector(".img-and-description"),I=document.querySelector(".bestsellers-area");I.addEventListener("click",z);function z(e){if(e.target.nodeName!=="IMG")return;const t=e.target.dataset.id;return console.log(t),fetch(`https://books-backend.p.goit.global/books/${t}`).then(o=>o.json()).then(o=>{K(o),p(),h()}).catch(o=>console.log(o))}function K(e){D.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}function U(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const g=document.querySelector(".btn-modal-js"),Y=document.querySelector(".modal__remove-btn-js"),y=document.querySelector(".modal_remove-block-js"),F="books data-1";JSON.parse(localStorage.getItem(F));const p=()=>{g.classList.add("is-hidden-modal"),y.classList.remove("is-hidden-modal")},h=()=>{g.classList.remove("is-hidden-modal"),y.classList.add("is-hidden-modal")};g.addEventListener("click",p);Y.addEventListener("click",h);const f=document.querySelector(".category_list");document.querySelector(".item-category");const i=document.querySelector(".category_books"),$=document.querySelector(".bestsellers-area"),k=document.querySelector(".category_books_container"),G=document.querySelector(".category_all");function J(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function R(e){const t=e.map(({list_name:o})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${o}</button>          

          </li>
      `).join("");f.insertAdjacentHTML("beforeend",t)}J().then(e=>R(e)).catch(e=>console.log(e));f.addEventListener("click",P);function P(e){if(e.target.className!=="category_button")return;const t=e.target.textContent;return C(t),_(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>v(o,e)).catch(o=>console.log(o))}function _(){i.innerHTML=""}function v(e,t){$.style.display="none",k.style.display="flex",Z(t),V(e);const o=e.map(({book_image:s,title:l,author:r,_id:c})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${c}">
          </div>
             <p class='bestsellers-book-title book-text'>${Q(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");i.insertAdjacentHTML("beforeend",o)}function Q(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}function V(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),i.appendChild(t);return}}G.addEventListener("click",X);function X(e){$.style.display="flex",k.style.display="none";const t=e.target.className;ee(t)}function Z(e){const t=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),l=s[s.length-1],c=s.slice(0,s.length-1).join(" ");t.textContent=c;const n=document.createElement("span");n.classList="last_word_category_title",n.textContent=l,t.append(n)}function ee(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function C(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const te=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");te.addEventListener("click",oe);function oe(e){if(e.target.className!=="bestsellers-general-category")return;const t=e.target.textContent;return C(t),_(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>v(o,e)).catch(o=>console.log(o))}document.querySelector(".svg-close");const se=document.querySelector("[data-modal]");k.addEventListener("click",le);function le(e){e.target.className==="bestsellers-book-cover"&&se.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");i.addEventListener("click",ne);const ae=document.querySelector(".img-and-description");function ne(e){if(e.target.className!=="bestsellers-book-cover")return;const t=e.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/${t}`).then(o=>o.json()).then(o=>re(o)).catch(o=>console.log(o))}function re(e){ae.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",o),window.addEventListener("keydown",s);function t(l){l.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function o(){e.modal.classList.toggle("is-hidden")}function s(l){l.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const u=document.querySelector(".scroll-up_hidden"),ce=()=>{const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?u.classList.add("scroll-up"):u.classList.remove("scroll-up")},S=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(S,0))};u.addEventListener("click",S);window.addEventListener("scroll",ce);
