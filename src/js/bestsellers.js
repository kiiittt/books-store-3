const bestsellersArea = document.querySelector('.bestsellers-area');
const bestsellersList = document.querySelector('.bestsellers-list');

const bestsellers =  getBestsellers();

function getBestsellers() {
  return fetch('https://books-backend.p.goit.global/books/top-books')
    .then(response => response.json())
    .catch(error => console.log(error));
}

renderBestsellers();

function renderBestsellers() {
    if (window.screen.availWidth < 768) {
      renderBestsellersMobile(bestsellers);
    } else if (window.screen.availWidth >= 768 && window.screen.availWidth < 1440) {
      renderBestsellersTablet(bestsellers);
    } else {
      renderBestsellersDesktop(bestsellers);
    }
}

function renderBestsellersMobile(bestsellers){
    bestsellersList.innerHTML = bestsellers.map((bestseller) => {
        return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        
        <div class="bestsellers-book-item">
        <img src='${
          bestseller.books[0].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[0].title,
          30
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button">See more</button>
        </li>`;
    }).join(" ");
}


function renderBestsellersTablet(bestsellers){
    bestsellersList.innerHTML = bestsellers.map((bestseller) => {
        return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${
          bestseller.books[0].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[0].title,
          20
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-modal-open>
        <img src='${
          bestseller.books[1].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[1].title,
          20
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-modal-open>
        <img src='${
          bestseller.books[2].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[2].title,
          20
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>`;
    }).join(" ");
}

function renderBestsellersDesktop(bestsellers){
    bestsellersList.innerHTML = bestsellers.map((bestseller) => {
        return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${
          bestseller.books[0].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[0].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${
          bestseller.books[1].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[1].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${
          bestseller.books[2].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[2].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${
          bestseller.books[3].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[3].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-modal-open>
        <img src='${
          bestseller.books[4].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[4].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button">See more</button>
        </li>
        `;
    }).join(" ");
}

function formatBookName(message, maxLength) {
    let result;
    if (message.length <= maxLength) {
        result = message.slice(0, message.length);
    } else {
        result = message.slice(0, maxLength) + '...';
    }
    return result;
}

window.addEventListener('resize', e => {
    clearBestsellers();
    renderBestsellers();
});

function clearBestsellers() {
    bestsellersList.innerHTML = '';
}