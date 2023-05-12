const bestsellersArea = document.querySelector('.bestsellers-area');
const bestsellersList = document.querySelector('.bestsellers-list');

let w =
  document.documentElement.clientWidth ||
  document.body.clientWidth ||
  window.innerWidth;

// getBestsellersLog();

// function getBestsellersLog(){
//     fetch(`https://books-backend.p.goit.global/books/top-books`)
//         .then(response => response.json())
//         .then(bestsellers => console.log(bestsellers))
//         .catch(error => console.log(error));
// }

if (w < 768) {
  getBestsellersMobile();
} else if (w < 1440) {
  getBestsellersTablet();
} else if (w >= 1440) {
  getBestsellersDesktop();
}

function getBestsellersMobile() {
  fetch(`https://books-backend.p.goit.global/books/top-books`)
    .then(response => response.json())
    .then(bestsellers => renderBestsellersMobile(bestsellers))
    .catch(error => console.log(error));
}
function renderBestsellersMobile(bestsellers) {
  bestsellersList.innerHTML = bestsellers
    .map(bestseller => {
      return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        

        <div class="bestsellers-book-item" >
        <img src='${
          bestseller.books[0].book_image
        }' class="bestsellers-book-cover" data-id="${
          bestseller.books[0]._id
        }" data-modal-open>

        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[0].title,
          30
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>
    
        <button class="bestsellers-button" data-id="${
          bestseller.list_name
        }">See more</button>
        </li>`;
    })
    .join(' ');
}

function getBestsellersTablet() {
  fetch(`https://books-backend.p.goit.global/books/top-books`)
    .then(response => response.json())
    .then(bestsellers => renderBestsellersTablet(bestsellers))
    .catch(error => console.log(error));
}
function renderBestsellersTablet(bestsellers) {
  bestsellersList.innerHTML = bestsellers
    .map(bestseller => {
      return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        <div class="bestsellers-book-list">


        <div class="bestsellers-book-item" >
        <img src='${
          bestseller.books[0].book_image
        }' class="bestsellers-book-cover" data-id="${
          bestseller.books[0]._id
        }" data-modal-open>

        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[0].title,
          20
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" >
        <img src='${
          bestseller.books[1].book_image
        }' class="bestsellers-book-cover" data-id="${
          bestseller.books[1]._id
        }" data-modal-open>

        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[1].title,
          20
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[1].author}</p>
        </div>
        

        <div class="bestsellers-book-item" >
        <img src='${
          bestseller.books[2].book_image
        }' class="bestsellers-book-cover" data-id="${
          bestseller.books[2]._id
        }" data-modal-open>

        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[2].title,
          20
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[2].author}</p>
        </div>

        </div>
        <button class="bestsellers-button" data-id="${
          bestseller.list_name
        }">See more</button>
        </li>`;
    })
    .join(' ');
}

function getBestsellersDesktop() {
  fetch(`https://books-backend.p.goit.global/books/top-books`)
    .then(response => response.json())
    .then(bestsellers => renderBestsellersDesktop(bestsellers))
    .catch(error => console.log(error));
}
function renderBestsellersDesktop(bestsellers) {
  bestsellersList.innerHTML = bestsellers
    .map(bestseller => {
      return `<li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${bestseller.list_name}</p>
        <div class="bestsellers-book-list">

        <div class="bestsellers-book-item" data-id="${
          bestseller.books[0]._id
        }" data-modal-open>
        <img src='${
          bestseller.books[0].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[0].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[0].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${
          bestseller.books[1]._id
        }" data-modal-open>
        <img src='${
          bestseller.books[1].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[1].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[1].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${
          bestseller.books[2]._id
        }" data-modal-open>
        <img src='${
          bestseller.books[2].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[2].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[2].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${
          bestseller.books[3]._id
        }" data-modal-open>
        <img src='${
          bestseller.books[3].book_image
        }' class="bestsellers-book-cover">
        <p class="bestsellers-book-title">${formatBookName(
          bestseller.books[3].title,
          15
        )}</p>
        <p class="bestsellers-book-author">${bestseller.books[3].author}</p>
        </div>

        <div class="bestsellers-book-item" data-id="${
          bestseller.books[4]._id
        }" data-modal-open>
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
        <button class="bestsellers-button" data-id="${
          bestseller.list_name
        }">See more</button>
        </li>
        `;
    })
    .join(' ');
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
  changeCategoryColor(bookCategory);
  // console.log(bookCategory);
  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${bookCategory}`
  )
    .then(response => response.json())
    .then(book => renderBooksList(book, event))
    .catch(error => console.log(error));
}
// Очищення книг попередньої категорії
function clearBooksList() {
  categoryBooks.innerHTML = '';
}
function renderBooksList(books, event) {
  bestsellersContainer.style.display = 'none';
  categoryBooksContainer.style.display = 'flex';
  // присвоює ім'я категорії заголовку та колір
  separatesWordsAddToTitle(event);
  clearBooksList();
  // Перевірка на наявність книг в масиві
  checksBooks(books);
  // Відмальовка картки книги
  const markup = books
    .map(({ book_image, title, author }) => {
      return `<li class = "category_books_items">
          <img src='${book_image}' alt='book-cover' class='bestsellers-book-cover'>
             <p class='bestsellers-book-title book-text'>${formatBookName(
               title,
               15
             )}</p>
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





const modalEl = document.querySelector('.img-and-description');
const bookDetails = document.querySelector('.bestsellers-area'); 
bookDetails.addEventListener('click', openBookDetails);


 function openBookDetails(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const bookId = event.target.dataset.id;
//   console.log(bookId);

  return fetch(`https://books-backend.p.goit.global/books/${bookId}`)
    .then(response => response.json())
    .then(book => {renderBookModal(book)
        addBookToShoppingList(book),
        removeBookFromShoppingList(book)}
                                  
    )
    .catch(error => console.log(error));

}


function renderBookModal(book) {
  modalEl.innerHTML = `<img class="img-modal" src="${book.book_image}" alt="Image cover" />
      <div class="div-text-modal">
        <h1 class="item-modal">${book.title}</h1>
        <h3 class="autor-name-modal">${book.author}</h3>
        <p class="description-modal">${book.description}</p>
        <ul class="ul-modal">
          <li class="li-modal">
          <a href="${book.buy_links[0].url}" class="amazon-modal" target="_blank"></a>
          </li>
          <li class="li-modal">
          <a href="${book.buy_links[1].url}" class="book-modal" target="_blank"></a>
          </li>
          <li class="li-modal">
          <a href="${book.buy_links[4].url}" class="books-modal" target="_blank">
          </a></li>
        </ul>
      </div>`;
}

// Зміна кольору назви категорії та заголовку в блоці "Категорії"
function changeCategoryColor(selectedCategory) {
  const allCategories = document.querySelectorAll('.category_button');
  const categoryAll = document.querySelector('.category_all');

  allCategories.forEach(category => {
    if (category.textContent === selectedCategory) {
      // Задає стилі "Категорії книг" по кліку на категорію
      category.style.fontWeight = '700';
      category.style.lineHeight = '1.33';
      category.style.textTransform = 'uppercase';
      category.style.textAlign = 'left';
      category.style.color = 'var(--color-of-categoryAll-text)';
      // Задає стилі "category_all" по кліку на категорію
      categoryAll.style.fontWeight = '400';
      categoryAll.style.lineHeight = '1.12';
      categoryAll.style.textTransform = 'none';
      categoryAll.style.color = 'var(--color-of-category-text)';
    } else {
      category.style.fontWeight = '400';
      category.style.lineHeight = '1.12';
      category.style.textTransform = 'none';
      category.style.color = 'var(--color-of-category-text)';
    }
  });
}



const addShopingBtn = document.querySelector('.btn-modal-js');
const removeShopingBtn = document.querySelector('.modal__remove-btn-js');
const bookRemove = document.querySelector('.modal_remove-block-js');
const BOOKS_DATA_KEY = 'books data-330';
const bookArray = JSON.parse(localStorage.getItem(BOOKS_DATA_KEY)) || [];

const addBookToShoppingList = (bookId) => {
      bookArray.push(bookId);
      localStorage.setItem(BOOKS_DATA_KEY, JSON.stringify(bookArray));
        
      console.log(bookId);
      
    
    addShopingBtn.classList.add('is-hidden-modal');
    bookRemove.classList.remove('is-hidden-modal');
  };
  
  const removeBookFromShoppingList = (bookId) => {
    const index = bookArray.findIndex(book => book._id === bookId);
    if (index > -1) {
      bookArray.splice(index, 1);
      localStorage.setItem(BOOKS_DATA_KEY, JSON.stringify(bookArray));
    }
    
    addShopingBtn.classList.remove('is-hidden-modal');
    bookRemove.classList.add('is-hidden-modal');
  };



addShopingBtn.addEventListener('click', addBookToShoppingList);
removeShopingBtn.addEventListener('click', removeBookFromShoppingList);

