import"./modal-f44718c4.js";document.querySelector(".bestsellers-area");const b=document.querySelector(".bestsellers-list");let i=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;i<768?h():i<1440?$():i>=1440&&C();function h(){fetch("https://books-backend.p.goit.global/books/top-books").then(o=>o.json()).then(o=>f(o)).catch(o=>console.log(o))}function f(o){b.innerHTML=o.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        
        <div class="bestsellers-book-item" data-id="${t.books[0]._id}" data-modal-open>
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(t.books[0].title,30)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>`).join(" ")}function $(){fetch("https://books-backend.p.goit.global/books/top-books").then(o=>o.json()).then(o=>_(o)).catch(o=>console.log(o))}function _(o){b.innerHTML=o.map(t=>`<li class="bestsellers-list-item">
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
        </li>`).join(" ")}function C(){fetch("https://books-backend.p.goit.global/books/top-books").then(o=>o.json()).then(o=>v(o)).catch(o=>console.log(o))}function v(o){b.innerHTML=o.map(t=>`<li class="bestsellers-list-item">
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
        `).join(" ")}function l(o,t){let s;return o.length<=t?s=o.slice(0,o.length):s=o.slice(0,t)+"...",s}const x=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const k=document.querySelector(".category_books"),T=document.querySelector(".bestsellers-area"),B=document.querySelector(".category_books_container");x.addEventListener("click",S);function S(o){if(o.target.nodeName!=="BUTTON")return;const t=o.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/category?category=${t}`).then(s=>s.json()).then(s=>q(s,o)).catch(s=>console.log(s))}function q(o,t){T.style.display="none",B.style.display="flex",L(t),j(o);const s=o.map(({book_image:e,title:r,author:n})=>`<li class = "category_books_items">
          <img src='${e}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${r}</p>
             <p class='bestsellers-book-author'>${n}</p></li>
      `).join("");k.insertAdjacentHTML("beforeend",s)}function L(o){const t=document.querySelector(".category_books_title"),e=o.target.dataset.id.split(" "),r=e[e.length-1],c=e.slice(0,e.length-1).join(" ");t.textContent=c;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=r,t.append(a)}function j(o){if(o.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),k.appendChild(t);return}}const g=document.querySelector(".category_list");document.querySelector(".item-category");const d=document.querySelector(".category_books"),u=document.querySelector(".bestsellers-area"),y=document.querySelector(".category_books_container"),E=document.querySelector(".category_all");function W(){return fetch("https://books-backend.p.goit.global/books/category-list").then(o=>o.json())}function A(o){const t=o.map(({list_name:s})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${s}</button>          

          </li>
      `).join("");g.insertAdjacentHTML("beforeend",t)}W().then(o=>A(o)).catch(o=>console.log(o));g.addEventListener("click",H);function H(o){if(o.target.className!=="category_button")return;const t=o.target.textContent;return D(t),p(),fetch(`https://books-backend.p.goit.global/books/category?category=${o.target.textContent}`).then(s=>s.json()).then(s=>m(s,o)).catch(s=>console.log(s))}function p(){d.innerHTML=""}function m(o,t){u.style.display="none",y.style.display="flex",w(t),M(o);const s=o.map(({book_image:e,title:r,author:n})=>`<li class = "category_books_items">
          <img src='${e}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${r}</p>
             <p class='bestsellers-book-author'>${n}</p></li>
      `).join("");d.insertAdjacentHTML("beforeend",s)}function M(o){if(o.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),d.appendChild(t);return}}E.addEventListener("click",O);function O(o){u.style.display="flex",y.style.display="none";const t=o.target.className;console.log(t),N(t)}function w(o){const t=document.querySelector(".category_books_title"),e=o.target.textContent.split(" "),r=e[e.length-1],c=e.slice(0,e.length-1).join(" ");t.textContent=c;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=r,t.append(a)}function N(o){const t=document.querySelectorAll(".category_button"),s=document.querySelector(".category_all");t.forEach(e=>{e.textContent!==o?(e.style.fontWeight="400",e.style.lineHeight="1.12",e.style.textTransform="none",e.style.color="var(--color-of-category-text)",s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.color="var(--color-of-categoryAll-text)"):(e.style.fontWeight="400",e.style.lineHeight="1.12",e.style.textTransform="none",e.style.color="var(--color-of-category-text)")})}function D(o){const t=document.querySelectorAll(".category_button"),s=document.querySelector(".category_all");t.forEach(e=>{e.textContent===o?(e.style.fontWeight="700",e.style.lineHeight="1.33",e.style.textTransform="uppercase",e.style.textAlign="left",e.style.color="var(--color-of-categoryAll-text)",s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)"):(e.style.fontWeight="400",e.style.lineHeight="1.12",e.style.textTransform="none",e.style.color="var(--color-of-category-text)")})}const z=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");z.addEventListener("click",U);function U(o){if(o.target.className==="bestsellers-general-category")return o.target.textContent,p(),fetch(`https://books-backend.p.goit.global/books/category?category=${o.target.textContent}`).then(t=>t.json()).then(t=>m(t,o)).catch(t=>console.log(t))}
