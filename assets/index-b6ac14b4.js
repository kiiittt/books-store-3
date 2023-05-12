import"./support-eaba1970.js";document.querySelector(".bestsellers-area");const u=document.querySelector(".bestsellers-list");let d=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;d<768?_():d<1440?x():d>=1440&&L();function _(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>C(e)).catch(e=>console.log(e))}function C(e){u.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        

        <div class="bestsellers-book-item" >
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover" data-id="${t.books[0]._id}" data-modal-open>

        <p class="bestsellers-book-title">${a(t.books[0].title,30)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>`).join(" "),k()}function x(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>T(e)).catch(e=>console.log(e))}function T(e){u.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
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
        </li>`).join(" "),k()}function L(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>S(e)).catch(e=>console.log(e))}function S(e){u.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item"  >
        <div class="test-wraper" >
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover" data-id="${t.books[0]._id}" data-modal-open>
      </div>
        <p class="bestsellers-book-title">${a(t.books[0].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" >
        <div class='test-wraper'>
        <img src='${t.books[1].book_image}' class="bestsellers-book-cover" data-id="${t.books[1]._id}" data-modal-open>
      </div>
        <p class="bestsellers-book-title">${a(t.books[1].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" >
        <div class='test-wraper'>
        <img src='${t.books[2].book_image}' class="bestsellers-book-cover" data-id="${t.books[2]._id}" data-modal-open>
      </div>
        <p class="bestsellers-book-title">${a(t.books[2].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" >
        <div class='test-wraper'>
        <img src='${t.books[3].book_image}' class="bestsellers-book-cover" data-id="${t.books[3]._id}" data-modal-open>
      </div>
        <p class="bestsellers-book-title">${a(t.books[3].title,15)}</p>
        <p class="bestsellers-book-author">${t.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" >
        <div class='test-wraper'>
        <img src='${t.books[4].book_image}' class="bestsellers-book-cover" data-id="${t.books[4]._id}" data-modal-open>
      </div>
        <p class="bestsellers-book-title">${a(t.books[4].title,15)}</p>
        
        <p class="bestsellers-book-author">${t.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${t.list_name}">See more</button>
        </li>
        `).join(" "),k()}function a(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}const B=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const g=document.querySelector(".category_books"),q=document.querySelector(".bestsellers-area"),E=document.querySelector(".category_books_container");B.addEventListener("click",w);function w(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.id;return D(t),fetch(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>o.json()).then(o=>H(o,e)).catch(o=>console.log(o))}function M(){g.innerHTML=""}function H(e,t){q.style.display="none",E.style.display="flex",j(t),M(),A(e);const o=e.map(({book_image:s,title:l,author:c,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${a(l,15)}</p>
             <p class='bestsellers-book-author'>${c}</p></li>
      `).join("");g.insertAdjacentHTML("beforeend",o)}function j(e){const t=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");t.textContent=n;const r=document.createElement("span");r.classList="last_word_category_title",r.textContent=l,t.append(r)}function A(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),g.appendChild(t);return}}function k(){const e=document.querySelectorAll(".bestsellers-list-item");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",O)}const W=document.querySelector(".img-and-description");function O(e){if(e.target.className!=="bestsellers-book-cover")return;const t=e.target.dataset.id;return console.log(t),fetch(`https://books-backend.p.goit.global/books/${t}`).then(o=>o.json()).then(o=>N(o)).catch(o=>console.log(o))}function N(e){W.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}function D(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const y=document.querySelector(".category_list");document.querySelector(".item-category");const i=document.querySelector(".category_books"),p=document.querySelector(".bestsellers-area"),m=document.querySelector(".category_books_container"),I=document.querySelector(".category_all");function z(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function U(e){const t=e.map(({list_name:o})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${o}</button>          

          </li>
      `).join("");y.insertAdjacentHTML("beforeend",t)}z().then(e=>U(e)).catch(e=>console.log(e));y.addEventListener("click",Y);function Y(e){if(e.target.className!=="category_button")return;const t=e.target.textContent;return $(t),h(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>f(o,e)).catch(o=>console.log(o))}function h(){i.innerHTML=""}function f(e,t){p.style.display="none",m.style.display="flex",J(t),F(e);const o=e.map(({book_image:s,title:l,author:c,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${K(l,15)}</p>
             <p class='bestsellers-book-author'>${c}</p></li>
      `).join("");i.insertAdjacentHTML("beforeend",o)}function K(e,t){let o;return e.length<=t?o=e.slice(0,e.length):o=e.slice(0,t)+"...",o}function F(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),i.appendChild(t);return}}I.addEventListener("click",G);function G(e){p.style.display="flex",m.style.display="none";const t=e.target.className;P(t)}function J(e){const t=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");t.textContent=n;const r=document.createElement("span");r.classList="last_word_category_title",r.textContent=l,t.append(r)}function P(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function $(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const Q=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");Q.addEventListener("click",R);function R(e){if(e.target.className!=="bestsellers-general-category")return;const t=e.target.textContent;return $(t),h(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>f(o,e)).catch(o=>console.log(o))}document.querySelector(".svg-close");const V=document.querySelector("[data-modal]");m.addEventListener("click",X);function X(e){e.target.className==="bestsellers-book-cover"&&V.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");i.addEventListener("click",ee);const Z=document.querySelector(".img-and-description");function ee(e){if(e.target.className!=="bestsellers-book-cover")return;const t=e.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/${t}`).then(o=>o.json()).then(o=>te(o)).catch(o=>console.log(o))}function te(e){Z.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",o),window.addEventListener("keydown",s);function t(l){l.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function o(){e.modal.classList.toggle("is-hidden")}function s(l){l.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const b=document.querySelector(".scroll-up_hidden"),oe=()=>{const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?b.classList.add("scroll-up"):b.classList.remove("scroll-up")},v=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(v,0))};b.addEventListener("click",v);window.addEventListener("scroll",oe);
