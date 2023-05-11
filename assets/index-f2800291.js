import"./modal-f44718c4.js";document.querySelector(".bestsellers-area");const b=document.querySelector(".bestsellers-list");let i=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;i<768?f():i<1440?_():i>=1440&&v();function f(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>$(e)).catch(e=>console.log(e))}function $(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        
        <div class="bestsellers-book-item" data-id="${t.books[0]._id}" data-modal-open>
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[0].title,30)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>`).join(" ")}function _(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>C(e)).catch(e=>console.log(e))}function C(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${t.books[0]._id}" data-modal-open>
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[0].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-id="${t.books[1]._id}" data-modal-open>
        <img src='${t.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[1].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-id="${t.books[2]._id}" data-modal-open>
        <img src='${t.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[2].title,20)}</p>
        <p class="bestsellers-book-author">${t.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>`).join(" ")}function v(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>x(e)).catch(e=>console.log(e))}function x(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
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
        `).join(" ")}function l(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}const T=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const d=document.querySelector(".category_books"),B=document.querySelector(".bestsellers-area"),S=document.querySelector(".category_books_container");T.addEventListener("click",q);function q(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.id;return E(t),fetch(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>o.json()).then(o=>j(o,e)).catch(o=>console.log(o))}function L(){d.innerHTML=""}function j(e,t){B.style.display="none",S.style.display="flex",A(t),L(),W(e);const o=e.map(({book_image:s,title:r,author:a})=>`<li class = "category_books_items">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${l(r,15)}</p>
             <p class='bestsellers-book-author'>${a}</p></li>
      `).join("");d.insertAdjacentHTML("beforeend",o)}function A(e){const t=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),r=s[s.length-1],c=s.slice(0,s.length-1).join(" ");t.textContent=c;const n=document.createElement("span");n.classList="last_word_category_title",n.textContent=r,t.append(n)}function W(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),d.appendChild(t);return}}function E(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const u=document.querySelector(".category_list");document.querySelector(".item-category");const k=document.querySelector(".category_books"),g=document.querySelector(".bestsellers-area"),y=document.querySelector(".category_books_container"),H=document.querySelector(".category_all");function M(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function O(e){const t=e.map(({list_name:o})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${o}</button>          

          </li>
      `).join("");u.insertAdjacentHTML("beforeend",t)}M().then(e=>O(e)).catch(e=>console.log(e));u.addEventListener("click",w);function w(e){if(e.target.className!=="category_button")return;const t=e.target.textContent;return h(t),p(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>m(o,e)).catch(o=>console.log(o))}function p(){k.innerHTML=""}function m(e,t){g.style.display="none",y.style.display="flex",U(t),D(e);const o=e.map(({book_image:s,title:r,author:a})=>`<li class = "category_books_items">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${N(r,15)}</p>
             <p class='bestsellers-book-author'>${a}</p></li>
      `).join("");k.insertAdjacentHTML("beforeend",o)}function N(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}function D(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),k.appendChild(t);return}}H.addEventListener("click",z);function z(e){g.style.display="flex",y.style.display="none";const t=e.target.className;F(t)}function U(e){const t=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),r=s[s.length-1],c=s.slice(0,s.length-1).join(" ");t.textContent=c;const n=document.createElement("span");n.classList="last_word_category_title",n.textContent=r,t.append(n)}function F(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function h(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const G=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");G.addEventListener("click",I);function I(e){if(e.target.className!=="bestsellers-general-category")return;const t=e.target.textContent;return h(t),p(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>m(o,e)).catch(o=>console.log(o))}
