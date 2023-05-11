import"./modal-67b1ae5f.js";document.querySelector(".bestsellers-area");const a=document.querySelector(".bestsellers-list");let n=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;n<768?m():n<1440?h():n>=1440&&v();function m(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>y(t)).catch(t=>console.log(t))}function y(t){a.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        
        <div class="bestsellers-book-item">
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[0].title}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function h(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>f(t)).catch(t=>console.log(t))}function f(t){a.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[0].title}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[1].title}</p>
        <p class="bestsellers-book-author">${e.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[2].title}</p>
        <p class="bestsellers-book-author">${e.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function v(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>$(t)).catch(t=>console.log(t))}function $(t){a.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[0].title}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[1].title}</p>
        <p class="bestsellers-book-author">${e.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[2].title}</p>
        <p class="bestsellers-book-author">${e.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[3].title}</p>
        <p class="bestsellers-book-author">${e.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${e.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${e.books[4].title}</p>
        <p class="bestsellers-book-author">${e.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>
        `).join(" ")}const b=document.querySelector(".category_list");document.querySelector(".item-category");const c=document.querySelector(".category_books"),k=document.querySelector(".bestsellers-area"),g=document.querySelector(".category_books_container"),C=document.querySelector(".category_all");function _(){return fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json())}function x(t){const e=t.map(({list_name:s})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${s}</button>          

          </li>
      `).join("");b.insertAdjacentHTML("beforeend",e)}_().then(t=>x(t)).catch(t=>console.log(t));b.addEventListener("click",T);function T(t){if(t.target.className!=="category_button")return;const e=t.target.textContent;return j(e),u(),fetch(`https://books-backend.p.goit.global/books/category?category=${t.target.textContent}`).then(s=>s.json()).then(s=>d(s,t)).catch(s=>console.log(s))}function u(){c.innerHTML=""}function d(t,e){k.style.display="none",g.style.display="flex",B(e),S(t);const s=t.map(({book_image:o,title:l,author:i})=>`<li class = "category_books_items">
          <img src='${o}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${l}</p>
             <p class='bestsellers-book-author'>${i}</p></li>
      `).join("");c.insertAdjacentHTML("beforeend",s)}function S(t){if(t.length===0){const e=document.createElement("p");e.textContent="Oops, there is no books in this category.",e.classList.add("no-books-message"),c.appendChild(e);return}}C.addEventListener("click",L);function L(t){k.style.display="flex",g.style.display="none";const e=t.target.className;console.log(e),q(e)}function B(t){const e=document.querySelector(".category_books_title"),o=t.target.textContent.split(" "),l=o[o.length-1],p=o.slice(0,o.length-1).join(" ");e.textContent=p;const r=document.createElement("span");r.classList="last_word_category_title",r.textContent=l,e.append(r)}function q(t){const e=document.querySelectorAll(".category_button"),s=document.querySelector(".category_all");e.forEach(o=>{o.textContent!==t?(o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)",s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.color="var(--color-of-categoryAll-text)"):(o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)")})}function j(t){const e=document.querySelectorAll(".category_button"),s=document.querySelector(".category_all");e.forEach(o=>{o.textContent===t?(o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.textAlign="left",o.style.color="var(--color-of-categoryAll-text)",s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)"):(o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)")})}const A=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");A.addEventListener("click",H);function H(t){if(t.target.className==="bestsellers-general-category")return t.target.textContent,u(),fetch(`https://books-backend.p.goit.global/books/category?category=${t.target.textContent}`).then(e=>e.json()).then(e=>d(e,t)).catch(e=>console.log(e))}
