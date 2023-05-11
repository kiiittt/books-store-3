(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),booksRow1:document.querySelector("[data-background-books__row1]"),booksRow2:document.querySelector("[data-background-books__row2]"),booksRow3:document.querySelector("[data-background-books__row3]")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t);function t(){e.menu.classList.toggle("is-open"),e.booksRow1.classList.toggle("roll-left-open"),e.booksRow2.classList.toggle("roll-right-open"),e.booksRow3.classList.toggle("roll-left-open")}})();document.getElementById("open-button-menu").addEventListener("click",function(e){var t=e.target;t.classList.toggle("icon-burger"),t.classList.toggle("icon-close")},!1);const p=document.querySelector(".theme-toggle-button"),h=(e,t=null)=>{const o=document.documentElement.getAttribute("theme");t==="dark"||!o||o==="dark"?document.documentElement.setAttribute("theme","light"):document.documentElement.setAttribute("theme","dark")};p.addEventListener("click",()=>h());window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&h(p,"dark");const $=window.location.pathname;document.querySelectorAll(".main-menu-tablet-list a, .main-menu-mobile-list a").forEach(e=>{e.href.includes(`${$}`)&&e.classList.add("current")});const k=document.querySelector(".category_list");document.querySelector(".item-category");const m=document.querySelector(".category_books"),f=document.querySelector(".bestsellers-area"),y=document.querySelector(".category_books_container"),L=document.querySelector(".category_all");function _(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function C(e){const t=e.map(({list_name:o})=>`
          <li class="item-category">
            <button type = "button" class="category_button">${o}</button>          

          </li>
      `).join("");k.insertAdjacentHTML("beforeend",t)}_().then(e=>C(e)).catch(e=>console.log(e));k.addEventListener("click",S);function S(e){if(e.target.className!=="category_button")return;const t=e.target.textContent;return A(t),q(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>E(o,e)).catch(o=>console.log(o))}function q(){m.innerHTML=""}function E(e,t){f.style.display="none",y.style.display="flex",M(t),T(e);const o=e.map(({book_image:s,title:n,author:l})=>`<li class = "category_books_items">
          <img src='${s}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${n}</p>
             <p class='bestsellers-book-author'>${l}</p></li>
      `).join("");m.insertAdjacentHTML("beforeend",o)}function T(e){if(e.length===0){const t=document.createElement("p");t.textContent="Oops, there is no books in this category.",t.classList.add("no-books-message"),m.appendChild(t);return}}L.addEventListener("click",B);function B(e){f.style.display="flex",y.style.display="none";const t=e.target.className;console.log(t),F(t)}function M(e){const t=document.querySelector(".category_books_title"),s=e.target.textContent.split(" "),n=s[s.length-1],r=s.slice(0,s.length-1).join(" ");t.textContent=r;const u=document.createElement("span");u.classList="last_word_category_title",u.textContent=n,t.append(u)}function F(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent!==e?(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)",o.style.fontWeight="700",o.style.lineHeight="1.33",o.style.textTransform="uppercase",o.style.color="var(--color-of-categoryAll-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}function A(e){const t=document.querySelectorAll(".category_button"),o=document.querySelector(".category_all");t.forEach(s=>{s.textContent===e?(s.style.fontWeight="700",s.style.lineHeight="1.33",s.style.textTransform="uppercase",s.style.textAlign="left",s.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(s.style.fontWeight="400",s.style.lineHeight="1.12",s.style.textTransform="none",s.style.color="var(--color-of-category-text)")})}const w=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1%402x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2%402x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3%402x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4%402x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5%402x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6%402x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7%402x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8%402x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9%402x.png"}],v=document.querySelector(".support-list"),j=document.querySelector(".support-button");let i=0,a=0,c=0;g();window.addEventListener("resize",e=>{x(),i=0,a=0,g()});j.addEventListener("click",W);function g(){window.screen.availWidth<768?c=4:c=6;let e=z(a,c,w);H(e)}function z(e,t,o){return e*t+t<=o.length?o.slice(e*t,e*t+t):o.slice(e*t)}function H(e){const t=e.map(({title:o,url:s,img:n,img2x:l})=>(i+=1,`
            <li class="support-list-item"> 
                <span class="fund-number">0${i}</span>
                <a class="fund-link" href="${s}" target="_blank">
                    <img class="fund-logo" srcset="${n} 1x, ${l} 2x" src="${n}" alt="${o}"/>
                </a>
            </li>`)).join("");v.innerHTML=t}function x(){v.innerHTML=""}function W(){a+1<Math.ceil(w.length/c)?a+=1:(a=0,i=0),x(),g()}document.querySelector(".bestsellers-area");const b=document.querySelector(".bestsellers-list");let d=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;d<768?O():d<1440?N():d>=1440&&D();function O(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>R(e)).catch(e=>console.log(e))}function R(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        
        <div class="bestsellers-book-item">
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[0].title}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function N(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>P(e)).catch(e=>console.log(e))}function P(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item">
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[0].title}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item">
        <img src='${t.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[1].title}</p>
        <p class="bestsellers-book-author">${t.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item">
        <img src='${t.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[2].title}</p>
        <p class="bestsellers-book-author">${t.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function D(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>I(e)).catch(e=>console.log(e))}function I(e){b.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item">
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[0].title}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${t.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[1].title}</p>
        <p class="bestsellers-book-author">${t.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${t.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[2].title}</p>
        <p class="bestsellers-book-author">${t.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${t.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[3].title}</p>
        <p class="bestsellers-book-author">${t.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${t.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[4].title}</p>
        <p class="bestsellers-book-author">${t.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>
        `).join(" ")}(()=>{const e={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalBackdrop:document.querySelector("[data-modal-backdrop]")};window.addEventListener("keydown",t);function t(o){o.key==="Escape"&&e.modalBackdrop.classList.add("is-hidden")}})();
