var A=Object.defineProperty;var H=(e,o,t)=>o in e?A(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>(H(e,typeof o!="symbol"?o+"":o,t),t);import"./support-7a5141ed.js";class C{constructor(){i(this,"spinnerEl",document.createElement("div"));i(this,"circleFirst",document.createElement("div"));i(this,"circleSecond",document.createElement("div"));i(this,"modalEl",document.querySelector(".modal"));this.spinnerEl.classList.add("spinner"),this.circleFirst.classList.add("circle","circle-1","is-hidden"),this.circleSecond.classList.add("circle","circle-2","is-hidden"),this.spinnerEl.appendChild(this.circleFirst),this.spinnerEl.appendChild(this.circleSecond),document.body.appendChild(this.spinnerEl)}show(){this.spinnerEl.classList.remove("is-hidden"),this.circleFirst.classList.remove("is-hidden"),this.circleSecond.classList.remove("is-hidden"),this.modalEl.classList.contains("is-hidden")||this.modalEl.classList.add("is-hidden")}hide(){this.spinnerEl.classList.add("is-hidden"),this.circleFirst.classList.add("is-hidden"),this.circleSecond.classList.add("is-hidden"),this.modalEl.classList.contains("is-hidden")&&this.modalEl.classList.remove("is-hidden")}getEl(){return this.spinnerEl}}const d=new C,_=document.querySelector(".bestsellers-list");let u=[];const O=async()=>{d.show();const e=await fetch("https://books-backend.p.goit.global/books/top-books");e.ok?(u=await e.json(),y(),f(u)):console.error("Error fetching books:",e.status),d.hide()};O().then(e=>{u=e,y(),f(u)}).catch(e=>console.error(e));let m=0,h=0;function y(){window.screen.availWidth<768?(m=1,h=30):window.screen.availWidth>=768&&window.screen.availWidth<1440?(m=3,h=20):(m=5,h=15)}function f(e){if(!e||e.length===0)return;y();let o="";for(let t=0;t<e.length;t++){const s=e[t].list_name;o+=`
      <li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${s}</p>
        <div class="bestsellers-book-list">`;const l=e[t].books;if(!(!l||l.length===0)){for(let r=0;r<l.length&&r!==m;r++){const n=l[r];o+=`
        <div class="bestsellers-book-item">
          <div class="test-wraper">
            <img src="${n.book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${n._id}" loading="lazy" data-modal-open>
          </div>
          <p class="bestsellers-book-title">${v(n.title,h)}</p>
          <p class="bestsellers-book-author">${n.author}</p>
        </div>`}o+=`
        </div>
        <button class="bestsellers-button" data-id="${e[t].list_name}">See more</button>
      </li>`}}_.innerHTML=o,Y()}window.addEventListener("resize",e=>{W(),y(),f(u)});function W(){_.innerHTML=""}function v(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}const j=document.querySelector(".bestsellers-list");document.querySelector(".category_list");document.querySelector(".item-category");const p=document.querySelector(".category_books"),N=document.querySelector(".bestsellers-area"),I=document.querySelector(".category_books_container");j.addEventListener("click",D);function D(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.dataset.id;return P(o),fetch(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>t.json()).then(t=>F(t,e)).catch(t=>console.log(t))}function z(){p.innerHTML=""}function F(e,o){N.style.display="none",I.style.display="flex",K(o),z(),U(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${v(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");p.insertAdjacentHTML("beforeend",t)}function K(e){const o=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");o.textContent=n;const c=document.createElement("span");c.classList="last_word_category_title",c.textContent=l,o.append(c)}function U(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),p.appendChild(o);return}}function Y(){const e=document.querySelectorAll(".bestsellers-list-item");for(let o=0;o<e.length;o+=1)e[o].addEventListener("click",J)}const S=document.querySelector(".img-and-description");function J(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;d.show(),S.innerHTML="<p>Loading...</p>",fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>{G(t),d.hide()}).catch(t=>{console.log(t),d.hide()})}function G(e){S.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}function P(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const Q=document.querySelector(".btn-modal-add-js"),E="books-data-01";let L=JSON.parse(localStorage.getItem(E))||[];Q.addEventListener("click",R);function R(){const o={id:document.querySelector(".book-modal").dataset.bookId};L.push(o),localStorage.setItem(E,JSON.stringify(L))}const a=new C,$=document.querySelector(".category_list"),b=document.querySelector(".category_books"),T=document.querySelector(".bestsellers-area"),k=document.querySelector(".category_books_container"),V=document.querySelector(".category_all");function X(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function Z(e){const o=e.map(({list_name:t})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${t}</button>
          </li>
      `).join("");$.insertAdjacentHTML("beforeend",o)}X().then(e=>Z(e)).catch(e=>console.log(e));$.addEventListener("click",ee);function ee(e){if(e.target.className!=="category_button")return;const o=e.target.textContent;return B(o),x(),a.show(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>{w(t,e),a.hide()}).catch(t=>{console.log(t),a.hide()})}a.hide();function x(){b.innerHTML=""}function w(e,o){T.style.display="none",k.style.display="flex",le(o),oe(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${te(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");b.insertAdjacentHTML("beforeend",t)}function te(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}function oe(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),b.appendChild(o);return}}V.addEventListener("click",se);function se(e){T.style.display="flex",k.style.display="none";const o=e.target.className;ne(o)}function le(e){const o=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),l=s[s.length-1],n=s.slice(0,s.length-1).join(" ");o.textContent=n;const c=document.createElement("span");c.classList="last_word_category_title",c.textContent=l,o.append(c)}function ne(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",t.style.fontWeight="700",t.style.lineHeight="1.33",t.style.textTransform="uppercase",t.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function B(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const re=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");re.addEventListener("click",ce);function ce(e){if(e.target.className!=="bestsellers-general-category")return;const o=e.target.textContent;return B(o),x(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>w(t,e)).catch(t=>console.log(t))}document.querySelector(".svg-close");const ae=document.querySelector("[data-modal]");k.addEventListener("click",ie);function ie(e){e.target.className==="bestsellers-book-cover"&&ae.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");b.addEventListener("click",de);const q=document.querySelector(".img-and-description");function de(e){if(e.target.className!=="bestsellers-book-cover")return;a.show();const o=e.target.dataset.id;return q.innerHTML="<p>Loading...</p>",fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>{ue(t),a.hide()}).catch(t=>{console.log(t),a.hide()})}function ue(e){q.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",t),window.addEventListener("keydown",s);function o(l){l.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function t(){e.modal.classList.toggle("is-hidden")}function s(l){l.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const ge=document.querySelector(".container"),g=document.createElement("div");g.classList.add("scroll-up_hidden");const me=()=>{const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?g.classList.add("scroll-up"):g.classList.remove("scroll-up")},M=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(M,0))};g.addEventListener("click",M);window.addEventListener("scroll",me);ge.appendChild(g);
