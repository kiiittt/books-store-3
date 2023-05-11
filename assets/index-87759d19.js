import"./modal-f44718c4.js";document.querySelector(".bestsellers-area");const c=document.querySelector(".bestsellers-list");let r=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;r<768?y():r<1440?f():r>=1440&&_();function y(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>h(t)).catch(t=>console.log(t))}function h(t){c.innerHTML=t.map(o=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${o.list_name}</p>
        
        <div class="bestsellers-book-item" data-id="${o.books[0]._id}" data-modal-open>
        <img src='${o.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[0].title,30)}</p>
        <p class="bestsellers-book-author">${o.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${o.list_name}">See more</button>
        </li>`).join(" ")}function f(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>$(t)).catch(t=>console.log(t))}function $(t){c.innerHTML=t.map(o=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${o.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${o.books[0]._id}" data-modal-open>
        <img src='${o.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[0].title,20)}</p>
        <p class="bestsellers-book-author">${o.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-id="${o.books[1]._id}" data-modal-open>
        <img src='${o.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[1].title,20)}</p>
        <p class="bestsellers-book-author">${o.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-id="${o.books[2]._id}" data-modal-open>
        <img src='${o.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[2].title,20)}</p>
        <p class="bestsellers-book-author">${o.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${o.list_name}">See more</button>
        </li>`).join(" ")}function _(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>v(t)).catch(t=>console.log(t))}function v(t){c.innerHTML=t.map(o=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${o.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${o.books[0]._id}" data-modal-open>
        <img src='${o.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[0].title,15)}</p>
        <p class="bestsellers-book-author">${o.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${o.books[1]._id}" data-modal-open>
        <img src='${o.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[1].title,15)}</p>
        <p class="bestsellers-book-author">${o.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${o.books[2]._id}" data-modal-open>
        <img src='${o.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[2].title,15)}</p>
        <p class="bestsellers-book-author">${o.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${o.books[3]._id}" data-modal-open>
        <img src='${o.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[3].title,15)}</p>
        <p class="bestsellers-book-author">${o.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${o.books[4]._id}" data-modal-open>
        <img src='${o.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(o.books[4].title,15)}</p>
        <p class="bestsellers-book-author">${o.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${o.list_name}">See more</button>
        </li>
        `).join(" ")}function l(t,o){let s;return t.length<=o?s=t.slice(0,t.length):s=t.slice(0,o)+"...",s}const d=document.querySelector(".category_list");document.querySelector(".item-category");const i=document.querySelector(".category_books"),k=document.querySelector(".bestsellers-area"),g=document.querySelector(".category_books_container"),C=document.querySelector(".category_all");function x(){return fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json())}function T(t){const o=t.map(({list_name:s})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${s}</button>          

          </li>
      `).join("");d.insertAdjacentHTML("beforeend",o)}x().then(t=>T(t)).catch(t=>console.log(t));d.addEventListener("click",S);function S(t){if(t.target.className!=="category_button")return;const o=t.target.textContent;return A(o),u(),fetch(`https://books-backend.p.goit.global/books/category?category=${t.target.textContent}`).then(s=>s.json()).then(s=>p(s,t)).catch(s=>console.log(s))}function u(){i.innerHTML=""}function p(t,o){k.style.display="none",g.style.display="flex",q(o),B(t);const s=t.map(({book_image:e,title:a,author:b})=>`<li class = "category_books_items">
          <img src='${e}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${a}</p>
             <p class='bestsellers-book-author'>${b}</p></li>
      `).join("");i.insertAdjacentHTML("beforeend",s)}function B(t){if(t.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),i.appendChild(o);return}}C.addEventListener("click",L);function L(t){k.style.display="flex",g.style.display="none";const o=t.target.className;console.log(o),j(o)}function q(t){const o=document.querySelector(".category_books_title"),e=t.target.textContent.split(" "),a=e[e.length-1],m=e.slice(0,e.length-1).join(" ");o.textContent=m;const n=document.createElement("span");n.classList="last_word_category_title",n.textContent=a,o.append(n)}function j(t){const o=document.querySelectorAll(".category_button"),s=document.querySelector(".category_all");o.forEach(e=>{e.textContent!==t?(e.style.fontWeight="400",e.style.lineHeight="1.12",e.style.textTransform="none",e.style.color="var(--color-of-category-text)",s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.color="var(--color-of-categoryAll-text)"):(e.style.fontWeight="400",e.style.lineHeight="1.12",e.style.textTransform="none",e.style.color="var(--color-of-category-text)")})}function A(t){const o=document.querySelectorAll(".category_button"),s=document.querySelector(".category_all");o.forEach(e=>{e.textContent===t?(e.style.fontWeight="700",e.style.lineHeight="1.33",e.style.textTransform="uppercase",e.style.textAlign="left",e.style.color="var(--color-of-categoryAll-text)",s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)"):(e.style.fontWeight="400",e.style.lineHeight="1.12",e.style.textTransform="none",e.style.color="var(--color-of-category-text)")})}const H=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");H.addEventListener("click",W);function W(t){if(t.target.className==="bestsellers-general-category")return t.target.textContent,u(),fetch(`https://books-backend.p.goit.global/books/category?category=${t.target.textContent}`).then(o=>o.json()).then(o=>p(o,t)).catch(o=>console.log(o))}
