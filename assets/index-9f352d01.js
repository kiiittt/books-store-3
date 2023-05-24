import"./support-7a116b72.js";document.querySelector(".bestsellers-area");const k=document.querySelector(".bestsellers-list");let u=[];const T=async()=>await(await fetch("https://books-backend.p.goit.global/books/top-books")).json();T().then(e=>{u=e,y(),h(u)}).catch(e=>console.error(e));let c=0,i=0;function y(){window.screen.availWidth<768?(c=1,i=30):window.screen.availWidth>=768&&window.screen.availWidth<1440?(c=3,i=20):(c=5,i=15)}function h(e){y();let o="";for(let t=0;t<e.length;t++){const s=e[t].list_name;o+=`
        <li class="bestsellers-list-item">
            <p class="bestsellers-general-category">${s}</p>
            <div class="bestsellers-book-list">`;const l=e[t].books;for(let r=0;r<l.length&&r!==c;r++){const n=l[r];o+=`
              <div class="bestsellers-book-item" >
                <div class="test-wraper" >
                  <img src="${n.book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${n._id}" loading="lazy" data-modal-open>
                </div>
                <p class="bestsellers-book-title">${p(n.title,i)}</p>
                <p class="bestsellers-book-author">${n.author}</p>
              </div>`}o+=`
            </div>
            <button class="bestsellers-button" data-id="${e[t].list_name}">See more</button>
        </li>`}k.innerHTML=o,j()}window.addEventListener("resize",e=>{q(),y(),h(u)});function q(){k.innerHTML=""}function p(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}const B=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const m=document.querySelector(".category_books"),w=document.querySelector(".bestsellers-area"),E=document.querySelector(".category_books_container");B.addEventListener("click",A);function A(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.dataset.id;return z(o),fetch(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>t.json()).then(t=>H(t,e)).catch(t=>console.log(t))}function M(){m.innerHTML=""}function H(e,o){w.style.display="none",E.style.display="flex",O(o),M(),W(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${p(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");m.insertAdjacentHTML("beforeend",t)}function O(e){const o=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");o.textContent=n;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=l,o.append(a)}function W(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),m.appendChild(o);return}}function j(){const e=document.querySelectorAll(".bestsellers-list-item");for(let o=0;o<e.length;o+=1)e[o].addEventListener("click",I)}const N=document.querySelector(".img-and-description");function I(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>D(t)).catch(t=>console.log(t))}function D(e){N.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
      <div class="div-text-modal">
        <h1 class="item-modal">${e.title}</h1>
        <h3 class="autor-name-modal">${e.author}</h3>
        <p class="description-modal">${e.description}</p>
        <ul class="ul-modal">
          <li class="li-modal">
          <a href="${e.buy_links[0].url}" class="amazon-modal" target="_blank" data-book-id="${e._id}"></a>
          </li>
          <li class="li-modal">
          <a href="${e.buy_links[1].url}" class="book-modal" target="_blank" data-book-id="${e._id}"></a>
          </li>
          <li class="li-modal">
          <a href="${e.buy_links[4].url}" class="books-modal" target="_blank" data-book-id="${e._id}">
          </a></li>
        </ul>
      </div>`}function z(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const K=document.querySelector(".btn-modal-add-js"),_="books data-0";let f=JSON.parse(localStorage.getItem(_))||[];function U(){const o={id:document.querySelector(".book-modal").dataset.bookId};f.push(o),localStorage.setItem(_,JSON.stringify(f))}K.addEventListener("click",U);const C=document.querySelector(".category_list");document.querySelector(".item-category");const d=document.querySelector(".category_books"),$=document.querySelector(".bestsellers-area"),b=document.querySelector(".category_books_container"),Y=document.querySelector(".category_all");function J(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function F(e){const o=e.map(({list_name:t})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${t}</button>          

          </li>
      `).join("");C.insertAdjacentHTML("beforeend",o)}J().then(e=>F(e)).catch(e=>console.log(e));C.addEventListener("click",G);function G(e){if(e.target.className!=="category_button")return;const o=e.target.textContent;return L(o),v(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>S(t,e)).catch(t=>console.log(t))}function v(){d.innerHTML=""}function S(e,o){$.style.display="none",b.style.display="flex",V(o),Q(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${P(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");d.insertAdjacentHTML("beforeend",t)}function P(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}function Q(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),d.appendChild(o);return}}Y.addEventListener("click",R);function R(e){$.style.display="flex",b.style.display="none";const o=e.target.className;X(o)}function V(e){const o=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");o.textContent=n;const a=document.createElement("span");a.classList="last_word_category_title",a.textContent=l,o.append(a)}function X(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",t.style.fontWeight="700",t.style.lineHeight="1.33",t.style.textTransform="uppercase",t.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function L(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const Z=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");Z.addEventListener("click",ee);function ee(e){if(e.target.className!=="bestsellers-general-category")return;const o=e.target.textContent;return L(o),v(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>S(t,e)).catch(t=>console.log(t))}document.querySelector(".svg-close");const te=document.querySelector("[data-modal]");b.addEventListener("click",oe);function oe(e){e.target.className==="bestsellers-book-cover"&&te.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");d.addEventListener("click",le);const se=document.querySelector(".img-and-description");function le(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;return fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>ne(t)).catch(t=>console.log(t))}function ne(e){se.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",t),window.addEventListener("keydown",s);function o(l){l.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function t(){e.modal.classList.toggle("is-hidden")}function s(l){l.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const g=document.querySelector(".scroll-up_hidden"),re=()=>{const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?g.classList.add("scroll-up"):g.classList.remove("scroll-up")},x=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(x,0))};g.addEventListener("click",x);window.addEventListener("scroll",re);
