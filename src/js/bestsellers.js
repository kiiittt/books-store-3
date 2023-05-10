const bestsellersArea = document.querySelector('.bestsellers-area');
const bestsellersList = document.querySelector('.bestsellers-list');

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;

// getBestsellersLog();






// function getBestsellersLog(){
//     fetch(`https://books-backend.p.goit.global/books/top-books`)
//         .then(response => response.json())
//         .then(bestsellers => console.log(bestsellers))
//         .catch(error => console.log(error));
// }

if (w < 768) {
    getBestsellersMobile();
}
else if ( w < 1440) {
    getBestsellersTablet();
}
else if (w >= 1440) {
    getBestsellersDesktop();
}


function getBestsellersMobile(){
    fetch(`https://books-backend.p.goit.global/books/top-books`)
        .then(response => response.json())
        .then(bestsellers => renderBestsellersMobile(bestsellers))
        .catch(error => console.log(error));
}
function renderBestsellersMobile(bestsellers){
    bestsellersList.innerHTML = bestsellers.map((bestseller) => {
        return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        
        <div class="bestsellers-book-item">
        <img src='${bestseller.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[0].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button">See more</button>
        </li>`;
    }).join(" ");
}

function getBestsellersTablet(){
    fetch(`https://books-backend.p.goit.global/books/top-books`)
        .then(response => response.json())
        .then(bestsellers => renderBestsellersTablet(bestsellers))
        .catch(error => console.log(error));
}
function renderBestsellersTablet(bestsellers){
    bestsellersList.innerHTML = bestsellers.map((bestseller) => {
        return `<li class="bestsellers-list-item>
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item">
        <img src='${bestseller.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[0].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item">
        <img src='${bestseller.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[1].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item">
        <img src='${bestseller.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[2].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>`;
    }).join(" ");
}

function getBestsellersDesktop(){
    fetch(`https://books-backend.p.goit.global/books/top-books`)
        .then(response => response.json())
        .then(bestsellers => renderBestsellersDesktop(bestsellers))
        .catch(error => console.log(error));
}
function renderBestsellersDesktop(bestsellers){
    bestsellersList.innerHTML = bestsellers.map((bestseller) => {
        return `<li class="bestsellers-list-item>
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item">
        <img src='${bestseller.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[0].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${bestseller.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[1].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${bestseller.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[2].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${bestseller.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[3].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item">
        <img src='${bestseller.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${bestseller.books[4].title}</p>
        <p class="bestsellers-book-author">${bestseller.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>
        `;
    }).join(" ");
}
