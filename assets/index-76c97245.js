import"./modal-893d4ce5.js";document.querySelector(".bestsellers-area");const d=document.querySelector(".bestsellers-list");let i=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;i<768?f():i<1440?_():i>=1440&&v();function f(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>$(t)).catch(t=>console.log(t))}function $(t){d.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        

        <div class="bestsellers-book-item" >
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover" data-id="${e.books[0]._id}" data-modal-open>

        <p class="bestsellers-book-title">${l(e.books[0].title,30)}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${e.list_name}">See more</button>
        </li>`).join(" ")}function _(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>C(t)).catch(t=>console.log(t))}function C(t){d.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        <div class="bestsellers-book-list">


        <div class="bestsellers-book-item" >
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover" data-id="${e.books[0]._id}" data-modal-open>

        <p class="bestsellers-book-title">${l(e.books[0].title,20)}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" >
        <img src='${e.books[1].book_image}' class="bestsellers-book-cover" data-id="${e.books[1]._id}" data-modal-open>

        <p class="bestsellers-book-title">${l(e.books[1].title,20)}</p>
        <p class="bestsellers-book-author">${e.books[1].author}</p>
        </div>
        

        <div class="bestsellers-book-item" >
        <img src='${e.books[2].book_image}' class="bestsellers-book-cover" data-id="${e.books[2]._id}" data-modal-open>

        <p class="bestsellers-book-title">${l(e.books[2].title,20)}</p>
        <p class="bestsellers-book-author">${e.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${e.list_name}">See more</button>
        </li>`).join(" ")}function v(){fetch("https://books-backend.p.goit.global/books/top-books").then(t=>t.json()).then(t=>x(t)).catch(t=>console.log(t))}function x(t){d.innerHTML=t.map(e=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${e.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${e.books[0]._id}" data-modal-open>
        <img src='${e.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[0].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${e.books[1]._id}" data-modal-open>
        <img src='${e.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[1].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${e.books[2]._id}" data-modal-open>
        <img src='${e.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[2].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${e.books[3]._id}" data-modal-open>
        <img src='${e.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[3].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${e.books[4]._id}" data-modal-open>
        <img src='${e.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${l(e.books[4].title,15)}</p>
        <p class="bestsellers-book-author">${e.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${e.list_name}">See more</button>
        </li>
        `).join(" ")}function l(t,e){let o;return t.length<=e?o=t.slice(0,t.length):o=t.slice(0,e)+"...",o}const T=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const b=document.querySelector(".category_books"),B=document.querySelector(".bestsellers-area"),S=document.querySelector(".category_books_container");T.addEventListener("click",q);function q(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.id;return N(e),fetch(`https://books-backend.p.goit.global/books/category?category=${e}`).then(o=>o.json()).then(o=>j(o,t)).catch(o=>console.log(o))}function L(){b.innerHTML=""}function j(t,e){B.style.display="none",S.style.display="flex",E(e),L(),A(t);const o=t.map(({book_image:s,title:a,author:n})=>`<li class = "category_books_items">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${l(a,15)}</p>
             <p class='bestsellers-book-author'>${n}</p></li>
      `).join("");b.insertAdjacentHTML("beforeend",o)}function E(t){const e=document.querySelector(".category_books_title"),s=t.target.dataset.id.split(" "),a=s[s.length-1],c=s.slice(0,s.length-1).join(" ");e.textContent=c;const r=document.createElement("span");r.classList="last_word_category_title",r.textContent=a,e.append(r)}function A(t){if(t.length===0){const e=document.createElement("p");e.textContent="Oops, there is no books in this category.",e.classList.add("no-books-message"),b.appendChild(e);return}}const H=document.querySelector(".img-and-description"),W=document.querySelector(".bestsellers-area");W.addEventListener("click",M);function M(t){if(t.target.nodeName!=="IMG")return;const e=t.target.dataset.id;return console.log(e),fetch(`https://books-backend.p.goit.global/books/${e}`).then(o=>o.json()).then(o=>O(o)).catch(o=>console.log(o))}function O(t){H.innerHTML=`<img class="img-modal" src="${t.book_image}" alt="Image cover" />
      <div class="div-text-modal">
        <h1 class="item-modal">${t.title}</h1>
        <h3 class="autor-name-modal">${t.author}</h3>
        <p class="description-modal">${t.description}</p>
        <ul class="ul-modal">
          <li class="li-modal">
          <a href="${t.buy_links[0].url}" class="amazon-modal" target="_blank"></a>
          </li>
          <li class="li-modal">
          <a href="${t.buy_links[1].url}" class="book-modal" target="_blank"></a>
          </li>
          <li class="li-modal">
          <a href="${t.buy_links[4].url}" class="books-modal" target="_blank">
          </a></li>
        </ul>
      </div>`}function N(t){const e=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");e.forEach(s=>{s.textContent===t?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const u=document.querySelector(".category_list");document.querySelector(".item-category");const k=document.querySelector(".category_books"),g=document.querySelector(".bestsellers-area"),y=document.querySelector(".category_books_container"),w=document.querySelector(".category_all");function D(){return fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json())}function I(t){const e=t.map(({list_name:o})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${o}</button>          

          </li>
      `).join("");u.insertAdjacentHTML("beforeend",e)}D().then(t=>I(t)).catch(t=>console.log(t));u.addEventListener("click",z);function z(t){if(t.target.className!=="category_button")return;const e=t.target.textContent;return h(e),m(),fetch(`https://books-backend.p.goit.global/books/category?category=${t.target.textContent}`).then(o=>o.json()).then(o=>p(o,t)).catch(o=>console.log(o))}function m(){k.innerHTML=""}function p(t,e){g.style.display="none",y.style.display="flex",J(e),U(t);const o=t.map(({book_image:s,title:a,author:n})=>`<li class = "category_books_items">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${G(a,15)}</p>
             <p class='bestsellers-book-author'>${n}</p></li>
      `).join("");k.insertAdjacentHTML("beforeend",o)}function G(t,e){let o;return t.length<=e?o=t.slice(0,t.length):o=t.slice(0,e)+"...",o}function U(t){if(t.length===0){const e=document.createElement("p");e.textContent="Oops, there is no books in this category.",e.classList.add("no-books-message"),k.appendChild(e);return}}w.addEventListener("click",F);function F(t){g.style.display="flex",y.style.display="none";const e=t.target.className;K(e)}function J(t){const e=document.querySelector(".category_books_title"),s=t.target.textContent.split(" "),a=s[s.length-1],c=s.slice(0,s.length-1).join(" ");e.textContent=c;const r=document.createElement("span");r.classList="last_word_category_title",r.textContent=a,e.append(r)}function K(t){const e=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");e.forEach(s=>{s.textContent!==t?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function h(t){const e=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");e.forEach(s=>{s.textContent===t?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const P=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");P.addEventListener("click",Q);function Q(t){if(t.target.className!=="bestsellers-general-category")return;const e=t.target.textContent;return h(e),m(),fetch(`https://books-backend.p.goit.global/books/category?category=${t.target.textContent}`).then(o=>o.json()).then(o=>p(o,t)).catch(o=>console.log(o))}
