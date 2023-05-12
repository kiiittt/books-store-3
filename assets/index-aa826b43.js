import"./support-b95d8cac.js";document.querySelector(".bestsellers-area");const d=document.querySelector(".bestsellers-list");let i=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;i<768?$():i<1440?C():i>=1440&&x();function $(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>_(e)).catch(e=>console.log(e))}function _(e){d.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        

        <div class="bestsellers-book-item" >
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover" data-id="${t.books[0]._id}" data-modal-open>

        <p class="bestsellers-book-title">${l(t.books[0].title,30)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>`).join(" ")}function C(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>v(e)).catch(e=>console.log(e))}function v(e){d.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        <div class="bestsellers-book-list">


        <div class="bestsellers-book-item" >
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover" data-id="${t.books[0]._id}" data-modal-open>

        <p class="bestsellers-book-title">${l(t.books[0].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" >
        <img src='${t.books[1].book_image}' class="bestsellers-book-cover" data-id="${t.books[1]._id}" data-modal-open>

        <p class="bestsellers-book-title">${l(t.books[1].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[1].author}</p>
        </div>
        

        <div class="bestsellers-book-item" >
        <img src='${t.books[2].book_image}' class="bestsellers-book-cover" data-id="${t.books[2]._id}" data-modal-open>

        <p class="bestsellers-book-title">${l(t.books[2].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>`).join(" ")}function x(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>T(e)).catch(e=>console.log(e))}function T(e){d.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${t.books[0]._id}" data-modal-open>
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[0].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${t.books[1]._id}" data-modal-open>
        <img src='${t.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[1].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${t.books[2]._id}" data-modal-open>
        <img src='${t.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[2].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${t.books[3]._id}" data-modal-open>
        <img src='${t.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[3].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${t.books[4]._id}" data-modal-open>
        <img src='${t.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[4].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>
        `).join(" ")}function l(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}const B=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const b=document.querySelector(".category_books"),S=document.querySelector(".bestsellers-area"),L=document.querySelector(".category_books_container");B.addEventListener("click",q);function q(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.id;return O(t),fetch(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>o.json()).then(o=>M(o,e)).catch(o=>console.log(o))}function E(){b.innerHTML=""}function M(e,t){S.style.display="none",L.style.display="flex",j(t),E(),A(e);const o=e.map(({book_image:s,title:n,author:r})=>`<li class = "category_books_items">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${l(n,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");b.insertAdjacentHTML("beforeend",o)}function j(e){const t=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),n=s[s.length-1],c=s.slice(0,s.length-1).join(" ");t.textContent=c;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=n,t.append(a)}function A(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),b.appendChild(t);return}}const H=document.querySelector(".img-and-description"),k=document.querySelectorAll(".bestsellers-list-item");for(let e=0;e<k.length;e+=1)k[e].addEventListener("click",W);function W(e){if(e.target.nodeName!=="IMG")return;const t=e.target.dataset.id;return console.log(t),fetch(`https://books-backend.p.goit.global/books/${t}`).then(o=>o.json()).then(o=>w(o)).catch(o=>console.log(o))}function w(e){H.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}function O(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const g=document.querySelector(".category_list");document.querySelector(".item-category");const u=document.querySelector(".category_books"),m=document.querySelector(".bestsellers-area"),y=document.querySelector(".category_books_container"),N=document.querySelector(".category_all");function D(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function I(e){const t=e.map(({list_name:o})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${o}</button>          

          </li>
      `).join("");g.insertAdjacentHTML("beforeend",t)}D().then(e=>I(e)).catch(e=>console.log(e));g.addEventListener("click",z);function z(e){if(e.target.className!=="category_button")return;const t=e.target.textContent;return f(t),p(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>h(o,e)).catch(o=>console.log(o))}function p(){u.innerHTML=""}function h(e,t){m.style.display="none",y.style.display="flex",F(t),K(e);const o=e.map(({book_image:s,title:n,author:r})=>`<li class = "category_books_items">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${G(n,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");u.insertAdjacentHTML("beforeend",o)}function G(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}function K(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),u.appendChild(t);return}}N.addEventListener("click",U);function U(e){m.style.display="flex",y.style.display="none";const t=e.target.className;J(t)}function F(e){const t=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),n=s[s.length-1],c=s.slice(0,s.length-1).join(" ");t.textContent=c;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=n,t.append(a)}function J(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function f(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const P=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");P.addEventListener("click",Q);function Q(e){if(e.target.className!=="bestsellers-general-category")return;const t=e.target.textContent;return f(t),p(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>h(o,e)).catch(o=>console.log(o))}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.openModal.addEventListener("click",t),e.closeModalBtn.addEventListener("click",o),window.addEventListener("keydown",s);function t(){e.modal.classList.toggle("is-hidden")}function o(){e.modal.classList.toggle("is-hidden")}function s(n){n.key==="Escape"&&e.modal.classList.add("is-hidden")}})();
