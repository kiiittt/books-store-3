(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),booksRow1:document.querySelector("[data-background-books__row1]"),booksRow2:document.querySelector("[data-background-books__row2]"),booksRow3:document.querySelector("[data-background-books__row3]")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t);function t(){e.menu.classList.toggle("is-open"),e.booksRow1.classList.toggle("roll-left-open"),e.booksRow2.classList.toggle("roll-right-open"),e.booksRow3.classList.toggle("roll-left-open")}})();document.getElementById("open-button-menu").addEventListener("click",function(e){var t=e.target;t.classList.toggle("icon-burger"),t.classList.toggle("icon-close")},!1);const b=document.querySelector(".theme-toggle-button"),p=(e,t=null)=>{const o=document.documentElement.getAttribute("theme");t==="dark"||!o||o==="dark"?document.documentElement.setAttribute("theme","light"):document.documentElement.setAttribute("theme","dark")};b.addEventListener("click",()=>p());window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&p(b,"dark");const v=window.location.pathname;document.querySelectorAll(".main-menu-tablet-list a, .main-menu-mobile-list a").forEach(e=>{e.href.includes(`${v}`)&&e.classList.add("current")});const k=document.querySelector(".category_list");document.querySelector(".item-category");const d=document.querySelector(".category_books"),$=document.querySelector(".bestsellers-area"),L=document.querySelector(".category_books_container");function x(){return fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json())}function _(e){const t=e.map(({list_name:o})=>`
          <li class="item-category">
            <button type = "button" class="link">${o}</button>          

          </li>
      `).join("");k.insertAdjacentHTML("beforeend",t)}x().then(e=>_(e)).catch(e=>console.log(e));k.addEventListener("click",M);function M(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.textContent;return q(t),B(),fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.textContent}`).then(o=>o.json()).then(o=>S(o,e)).catch(o=>console.log(o))}function B(){d.innerHTML=""}function S(e,t){$.style.display="none",L.style.display="flex";const o=document.querySelector(".category_books_title"),n=t.target.textContent;if(o.textContent=n,e.length===0){const l=document.createElement("p");l.textContent="Oops, there is no books in this category.",l.classList.add("no-books-message"),d.appendChild(l);return}const s=e.map(({book_image:l,title:r,author:w})=>`<li class = "category_books_items">
          <img src='${l}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${r}</p>
             <p class='bestsellers-book-author'>${w}</p></li>
      `).join("");d.insertAdjacentHTML("beforeend",s)}function q(e){const t=document.querySelectorAll(".link"),o=document.querySelector(".category_all");t.forEach(n=>{n.textContent===e?(n.style.fontWeight="700",n.style.lineHeight="1.33",n.style.textTransform="uppercase",n.style.textAlign="left",n.style.color="var(--color-of-categoryAll-text)",o.style.fontWeight="400",o.style.lineHeight="1.12",o.style.textTransform="none",o.style.color="var(--color-of-category-text)"):(n.style.fontWeight="400",n.style.lineHeight="1.12",n.style.textTransform="none",n.style.color="var(--color-of-category-text)")})}const h=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1%402x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2%402x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3%402x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4%402x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5%402x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6%402x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7%402x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8%402x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9.png",img2x:"https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9%402x.png"}],f=document.querySelector(".support-list"),E=document.querySelector(".support-button");let c=0,i=0,a=0;m();window.addEventListener("resize",e=>{y(),c=0,i=0,m()});E.addEventListener("click",T);function m(){window.screen.availWidth<768?a=4:a=6;let e=F(i,a,h);C(e)}function F(e,t,o){return e*t+t<=o.length?o.slice(e*t,e*t+t):o.slice(e*t)}function C(e){const t=e.map(({title:o,url:n,img:s,img2x:l})=>(c+=1,`
            <li class="support-list-item"> 
                <span class="fund-number">0${c}</span>
                <a class="fund-link" href="${n}" target="_blank">
                    <img class="fund-logo" srcset="${s} 1x, ${l} 2x" src="${s}" alt="${o}"/>
                </a>
            </li>`)).join("");f.innerHTML=t}function y(){f.innerHTML=""}function T(){i+1<Math.ceil(h.length/a)?i+=1:(i=0,c=0),y(),m()}document.querySelector(".bestsellers-area");const g=document.querySelector(".bestsellers-list");let u=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;u<768?z():u<1440?A():u>=1440&&O();function z(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>j(e)).catch(e=>console.log(e))}function j(e){g.innerHTML=e.map(t=>`<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${t.list_name}</p>
        
        <div class="bestsellers-book-item">
        <img src='${t.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${t.books[0].title}</p>
        <p class="bestsellers-book-author">${t.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button">See more</button>
        </li>`).join(" ")}function A(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>H(e)).catch(e=>console.log(e))}function H(e){g.innerHTML=e.map(t=>`<li class="bestsellers-list-item>
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
        </li>`).join(" ")}function O(){fetch("https://books-backend.p.goit.global/books/top-books").then(e=>e.json()).then(e=>W(e)).catch(e=>console.log(e))}function W(e){g.innerHTML=e.map(t=>`<li class="bestsellers-list-item>
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
        `).join(" ")}(()=>{const e={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalBackdrop:document.querySelector("[data-modal-backdrop]")};e.closeModalBtn.addEventListener("click",t),e.modalBackdrop.addEventListener("click",t),window.addEventListener("keydown",o);function t(){e.modalBackdrop.classList.toggle("is-hidden")}function o(n){n.key==="Escape"&&e.modalBackdrop.classList.add("is-hidden")}})();
