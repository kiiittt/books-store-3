var j=Object.defineProperty;var W=(e,o,t)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var u=(e,o,t)=>(W(e,typeof o!="symbol"?o+"":o,t),t);import"./auth-script-875bde25.js";import"https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";import"https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";class _{constructor(){u(this,"spinnerEl",document.createElement("div"));u(this,"circleFirst",document.createElement("div"));u(this,"circleSecond",document.createElement("div"));u(this,"modalEl",document.querySelector(".modal"));this.spinnerEl.classList.add("spinner"),this.circleFirst.classList.add("circle","circle-1","is-hidden"),this.circleSecond.classList.add("circle","circle-2","is-hidden"),this.spinnerEl.appendChild(this.circleFirst),this.spinnerEl.appendChild(this.circleSecond),document.body.appendChild(this.spinnerEl)}show(){this.spinnerEl.classList.remove("is-hidden"),this.circleFirst.classList.remove("is-hidden"),this.circleSecond.classList.remove("is-hidden"),this.modalEl.classList.contains("is-hidden")||this.modalEl.classList.add("is-hidden")}hide(){this.spinnerEl.classList.add("is-hidden"),this.circleFirst.classList.add("is-hidden"),this.circleSecond.classList.add("is-hidden"),this.modalEl.classList.contains("is-hidden")&&this.modalEl.classList.remove("is-hidden")}getEl(){return this.spinnerEl}}const a=new _,v=document.querySelector(".bestsellers-list");let p=[];const S=async()=>{a.show();const e=await fetch("https://books-backend.p.goit.global/books/top-books");e.ok?(p=await e.json(),f(),T(p)):console.error("Error fetching books:",e.status),a.hide()};S().then(e=>{p=e,f(),T(p)}).catch(e=>console.error(e));let h=0,E=0;function f(){h=window.screen.availWidth<768?1:window.screen.availWidth>=768&&window.screen.availWidth<1440?3:5,E=h===1?30:h===3?20:15}function T(e){if(!e||e.length===0)return;f();let o="";for(let t=0;t<e.length;t++){const s=e[t].list_name;o+=`
      <li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${s}</p>
        <div class="bestsellers-book-list">`;const l=e[t].books;if(!(!l||l.length===0)){for(let r=0;r<l.length&&r!==h;r++){const n=l[r];o+=`
        <div class="bestsellers-book-item">
          <div class="test-wraper">
            <img src="${n.book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${n._id}" loading="lazy" data-modal-open>
          </div>
          <p class="bestsellers-book-title">${$(n.title,E)}</p>
          <p class="bestsellers-book-author">${n.author}</p>
        </div>`}o+=`
        </div>
        <button class="bestsellers-button" data-id="${e[t].list_name}">See more</button>
      </li>`}}v.innerHTML=o,U()}window.addEventListener("resize",e=>{I(),f(),S()});function I(){v.innerHTML=""}function $(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}const D=document.querySelector(".bestsellers-list"),L=document.querySelector(".category_books"),P=document.querySelector(".bestsellers-area"),F=document.querySelector(".category_books_container");D.addEventListener("click",z);function z(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.dataset.id;return Q(o),a.show(),fetch(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>t.json()).then(t=>{R(t,e),a.hide()}).catch(t=>{console.log(t),a.hide()})}function G(){L.innerHTML=""}function R(e,o){P.style.display="none",F.style.display="flex",J(o),G(),K(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${$(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");L.insertAdjacentHTML("beforeend",t)}function J(e){const o=document.querySelector(".category_books_title"),s=e.target.dataset.id.split(" "),l=s.at(-1),n=s.slice(0,s.at(-1)).join(" ");o.textContent=n;const c=document.createElement("span");c.classList="last_word_category_title",c.textContent=l,o.append(c)}function K(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),L.appendChild(o);return}}function U(){const e=document.querySelectorAll(".bestsellers-list-item");for(let o=0;o<e.length;o+=1)e[o].addEventListener("click",Y)}const x=document.querySelector(".img-and-description"),m=document.querySelector(".btn-modal-add-js"),w="books";let i=JSON.parse(localStorage.getItem(w))||[];function Y(e){if(e.target.className!=="bestsellers-book-cover")return;const o=e.target.dataset.id;a.show(),x.innerHTML="<p>Loading...</p>",fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>{V(t),a.hide()}).catch(t=>{console.log(t),a.hide()})}let g=null;function V(e){x.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`,g=e,i.find(o=>o._id===g._id)?(m.textContent="REMOVE FROM THE SHOPPING LIST",b.classList.remove("visually-hidden")):(m.textContent="ADD TO SHOPPING LIST",b.classList.add("visually-hidden"))}function Q(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{const l=s.textContent===e;s.style.fontWeight=l?"700":"400",s.style.lineHeight=l?"1.33":"1.12",s.style.textTransform=l?"uppercase":"none",s.style.textAlign=l?"left":"",s.style.color=l?"var(--color-of-categoryAll-text)":"var(--color-of-category-text)"}),t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"}m.addEventListener("click",X);const b=document.querySelector(".under-modal-btn-text");function X(){if(i.find(e=>e._id===g._id)){const e=i.findIndex(o=>o._id===g._id);i.splice(e,1),localStorage.setItem("books",JSON.stringify(i)),m.textContent="ADD TO SHOPPING LIST",b.classList.add("visually-hidden")}else i.push(g),localStorage.setItem(w,JSON.stringify(i)),m.textContent="REMOVE FROM THE SHOPPING LIST",b.classList.remove("visually-hidden")}const d=new _,B=document.querySelector(".category_list"),k=document.querySelector(".category_books"),q=document.querySelector(".bestsellers-area"),C=document.querySelector(".category_books_container"),Z=document.querySelector(".category_all");async function ee(){return await(await fetch("https://books-backend.p.goit.global/books/category-list")).json()}function te(e){const o=e.map(({list_name:t})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${t}</button>
          </li>
      `).join("");B.insertAdjacentHTML("beforeend",o)}ee().then(e=>te(e)).catch(e=>console.log(e));B.addEventListener("click",oe);function oe(e){if(e.target.className!=="category_button")return;const o=e.target.textContent;return H(o),M(),d.show(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>{O(t,e),d.hide()}).catch(t=>{console.log(t),d.hide()})}d.hide();function M(){k.innerHTML=""}function O(e,o){q.style.display="none",C.style.display="flex",re(o),le(e);const t=e.map(({book_image:s,title:l,author:r,_id:n})=>`<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover' data-id="${n}">
          </div>
             <p class='bestsellers-book-title book-text'>${se(l,15)}</p>
             <p class='bestsellers-book-author'>${r}</p></li>
      `).join("");k.insertAdjacentHTML("beforeend",t)}function se(e,o){let t;return e.length<=o?t=e.slice(0,e.length):t=e.slice(0,o)+"...",t}function le(e){if(e.length===0){const o=document.createElement("p");o.textContent="Oops, there is no books in this category.",o.classList.add("no-books-message"),k.appendChild(o);return}}Z.addEventListener("click",ne);function ne(e){q.style.display="flex",C.style.display="none";const o=e.target.className;ae(o)}function re(e){const o=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),l=s.at(-1),n=s.slice(0,s.at(-1)).join(" ");o.textContent=n;const c=document.createElement("span");c.classList="last_word_category_title",c.textContent=l,o.append(c)}function ae(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",t.style.fontWeight="700",t.style.lineHeight="1.33",t.style.textTransform="uppercase",t.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function H(e){const o=document.querySelectorAll(".category_button"),t=document.querySelector(".category_all");o.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",t.style.fontWeight="400",t.style.lineHeight="1.12",t.style.textTransform="none",t.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const ce=document.querySelector(".bestsellers-list");document.querySelector(".bestsellers-general-category");ce.addEventListener("click",ie);function ie(e){if(e.target.className!=="bestsellers-general-category")return;const o=e.target.textContent;return H(o),M(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(t=>t.json()).then(t=>O(t,e)).catch(t=>console.log(t))}document.querySelector(".svg-close");const de=document.querySelector("[data-modal]");C.addEventListener("click",ue);function ue(e){e.target.className==="bestsellers-book-cover"&&de.classList.toggle("is-hidden")}document.querySelectorAll(".bestsellers-list-item");k.addEventListener("click",ge);const A=document.querySelector(".img-and-description");function ge(e){if(e.target.className!=="bestsellers-book-cover")return;d.show();const o=e.target.dataset.id;return A.innerHTML="<p>Loading...</p>",fetch(`https://books-backend.p.goit.global/books/${o}`).then(t=>t.json()).then(t=>{me(t),d.hide()}).catch(t=>{console.log(t),d.hide()})}function me(e){A.innerHTML=`<img class="img-modal" src="${e.book_image}" alt="Image cover" />
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
      </div>`}(()=>{const e={openModalBtn:document.querySelector(".bestsellers-area"),openModal:document.querySelector(".category_books_container"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",t),window.addEventListener("keydown",s);function o(l){l.target.className==="bestsellers-book-cover"&&e.modal.classList.toggle("is-hidden")}function t(){e.modal.classList.toggle("is-hidden")}function s(l){l.key==="Escape"&&e.modal.classList.add("is-hidden")}})();const ye=document.querySelector(".container"),y=document.createElement("div");y.classList.add("scroll-up_hidden");const he=()=>{const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?y.classList.add("scroll-up"):y.classList.remove("scroll-up")},N=()=>{window.pageYOffset>0&&(window.scrollBy(0,-65),setTimeout(N,0))};y.addEventListener("click",N);window.addEventListener("scroll",he);ye.appendChild(y);