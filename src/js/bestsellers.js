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
        
        <div class="bestsellers-book-item" data-id="${bestseller.books[0]._id}" data-modal-open>
        <img src='${bestseller.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[0].title, 30)}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${bestseller.list_name}">See more</button>
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
        return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${bestseller.books[0]._id}" data-modal-open>
        <img src='${bestseller.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[0].title, 20)}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-id="${bestseller.books[1]._id}" data-modal-open>
        <img src='${bestseller.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[1].title, 20)}</p>
        <p class="bestsellers-book-author">${bestseller.books[1].author}</p>
        </div>
        
        <div class="bestsellers-book-item" data-id="${bestseller.books[2]._id}" data-modal-open>
        <img src='${bestseller.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[2].title, 20)}</p>
        <p class="bestsellers-book-author">${bestseller.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${bestseller.list_name}">See more</button>
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
        return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${bestseller.books[0]._id}" data-modal-open>
        <img src='${bestseller.books[0].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[0].title, 15)}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${bestseller.books[1]._id}" data-modal-open>
        <img src='${bestseller.books[1].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[1].title, 15)}</p>
        <p class="bestsellers-book-author">${bestseller.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${bestseller.books[2]._id}" data-modal-open>
        <img src='${bestseller.books[2].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[2].title, 15)}</p>
        <p class="bestsellers-book-author">${bestseller.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${bestseller.books[3]._id}" data-modal-open>
        <img src='${bestseller.books[3].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[3].title, 15)}</p>
        <p class="bestsellers-book-author">${bestseller.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${bestseller.books[4]._id}" data-modal-open>
        <img src='${bestseller.books[4].book_image}' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(bestseller.books[4].title, 15)}</p>
        <p class="bestsellers-book-author">${bestseller.books[4].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${bestseller.list_name}">See more</button>
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

const seeMoreBtn = document.querySelector('.bestsellers-list');
const categoryList = document.querySelector('.category_list');
const itemEl = document.querySelector('.item-category');
const categoryBooks = document.querySelector('.category_books');
const bestsellersContainer = document.querySelector('.bestsellers-area');
const categoryBooksContainer = document.querySelector(
  '.category_books_container'
);

seeMoreBtn.addEventListener('click', openMoreBooks);

function openMoreBooks(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const bookCategory = event.target.dataset.id;

  // console.log(bookCategory);
  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${bookCategory}`
  )
    .then(response => response.json())
    .then(book => renderBooksList(book, event))
    .catch(error => console.log(error));
}

function renderBooksList(books, event) {
  bestsellersContainer.style.display = 'none';
  categoryBooksContainer.style.display = 'flex';
  // присвоює ім'я категорії заголовку та колір
  separatesWordsAddToTitle(event);

  // Перевірка на наявність книг в масиві
  checksBooks(books);
  // Відмальовка картки книги
  const markup = books
    .map(({ book_image, title, author }) => {
      return `<li class = "category_books_items">
          <img src='${book_image}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${title}</p>
             <p class='bestsellers-book-author'>${author}</p></li>
      `;
    })
    .join('');
  categoryBooks.insertAdjacentHTML('beforeend', markup);
}

function separatesWordsAddToTitle(event) {
  const categoryBooksTitle = document.querySelector('.category_books_title');

  const currentCategory = event.target.dataset.id;

  const arrrayCurrentCategory = currentCategory.split(' ');

  const lastElementBookTitle =
    arrrayCurrentCategory[arrrayCurrentCategory.length - 1];
  const arrrayWordsOfCategoryTitle = arrrayCurrentCategory.slice(
    0,
    arrrayCurrentCategory.length - 1
  );
  const wordsOfCategoryTitle = arrrayWordsOfCategoryTitle.join(' ');
  categoryBooksTitle.textContent = wordsOfCategoryTitle;
  const textEl = document.createElement('span');
  textEl.classList = 'last_word_category_title';
  textEl.textContent = lastElementBookTitle;
  categoryBooksTitle.append(textEl);
}

function checksBooks(books) {
  if (books.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'Oops, there is no books in this category.';
    message.classList.add('no-books-message');
    categoryBooks.appendChild(message);
    return;
  }
}
