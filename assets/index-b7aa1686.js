import"./modal-93006bd2.js";document.querySelector(".bestsellers-area");const r=document.querySelector(".bestsellers-list"),c=h();function h(){return fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).catch(t=>console.log(t))}k();function k(){window.screen.availWidth<768?f(c):window.screen.availWidth>=768&&window.screen.availWidth<1440?v(c):$(c)}function f(t){r.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        
        <div class="bestsellers-book-item">
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[0].title,30)}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function v(t){r.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[0].title,20)}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[1].title,20)}</p>
        <p class="bestsellers-book-author">${e.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[2].title,20)}</p>
        <p class="bestsellers-book-author">${e.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function $(t){r.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[0].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[1].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[2].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[3].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[4].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>
        `).join(" ")}function l(t,e){let s;return t.length<=e?s=t.slice(0,t.length):s=t.slice(0,e)+"...",s}window.addEventListener("resize",t=>{C(),k()});function C(){r.innerHTML=""}const u=document.querySelector(".category_list");document.querySelector(".item-category");const i=document.querySelector(".category_books"),g=document.querySelector(".bestsellers-area"),d=document.querySelector(".category_books_container"),_=document.querySelector(".category_all");function x(){return fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json())}function T(t){const e=t.map(({list_name:s})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${s}</button>          

          </li>
      `).join("");u.insertAdjacentHTML("beforeend",e)}x().then(t=>T(t)).catch(t=>console.log(t));u.addEventListener("click",L);function L(t){if(t.target.className!=="category_button")return;const e=t.target.textContent;return j(e),p(),fetch(`https://books-backend.p.goit.global/books/category?category=${t.target.textContent}`).then(s=>s.json()).then(s=>y(s,t)).catch(s=>console.log(s))}function p(){i.innerHTML=""}function y(t,e){g.style.display="none",d.style.display="flex",q(e),S(t);const s=t.map(({book_image:o,title:n,author:b})=>`<li class = "category_books_items">
          <img src='${o}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${n}</p>
             <p class='bestsellers-book-author'>${b}</p></li>
      `).join("");i.insertAdjacentHTML("beforeend",s)}function S(t){if(t.length===0){const e=document.createElement("p");e.textContent="Oops, there is no books in this category.",e.classList.add("no-books-message"),i.appendChild(e);return}}_.addEventListener("click",B);function B(t){g.style.display="flex",d.style.display="none";const e=t.target.className;console.log(e),H(e)}function q(t){const e=document.querySelector(".category_books_title"),o=t.target.textContent.split(" "),n=o[o.length-1],m=o.slice(0,o.length-1).join(" ");e.textContent=m;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=n,e.append(a)}function H(t){const e=document.querySelectorAll(".category_button"),s=document.querySelector(".category_all");e.forEach(o=>{o.textContent!==t?(o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)",s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.color="var(--color-of-categoryAll-text)"):(o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)")})}function j(t){const e=document.querySelectorAll(".category_button"),s=document.querySelector(".category_all");e.forEach(o=>{o.textContent===t?(o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.textAlign="left",o.style.color="var(--color-of-categoryAll-text)",s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)"):(o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)")})}const A=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");A.addEventListener("click",W);function W(t){if(t.target.className==="bestsellers-general-category")return t.target.textContent,p(),fetch(`https://books-backend.p.goit.global/books/category?category=${t.target.textContent}`).then(e=>e.json()).then(e=>y(e,t)).catch(e=>console.log(e))}
