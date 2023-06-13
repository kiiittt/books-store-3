import {
  fetchBestsellers,
  fetchCategoryBooks,
  fetchBookDetails,
} from './APi/APi.js';
import { Spiner } from './spinner';

const spinner = new Spiner();

// const bestsellersArea = document.querySelector('.bestsellers-area');
const bestsellersList = document.querySelector('.bestsellers-list');

let bestsellersArray = [];
const getBestseller = async () => {
  spinner.show();
  try {
    const bestsellers = await fetchBestsellers();
    bestsellersArray = bestsellers;
    getBooksNumber();
    bestsellersMarkup(bestsellersArray);
  } catch {
    console.error(error);
  }
  spinner.hide();
};

getBestseller()
  .then(bestsellers => {
    bestsellersArray = bestsellers;
    getBooksNumber();
    bestsellersMarkup(bestsellersArray);
  })
  .catch(error => console.error(error));

let booksNumber = 0;
let titleLength = 0;

function getBooksNumber() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    booksNumber = 1;
    titleLength = 30;
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    booksNumber = 3;
    titleLength = 20;
  } else {
    booksNumber = 5;
    titleLength = 15;
  }
}

window.addEventListener('resize', () => {
  clearBestsellers();
  getBooksNumber();
  bestsellersMarkup(bestsellersArray);
});

function bestsellersMarkup(bestsellers) {
  if (!bestsellers || bestsellers.length === 0) {
    return;
  }

  getBooksNumber();
  let categoryMarkup = '';
  for (let i = 0; i < bestsellers.length; i++) {
    const category = bestsellers[i].list_name;
    categoryMarkup += `
      <li class="bestsellers-list-item">
        <p class="bestsellers-general-category">${category}</p>
        <div class="bestsellers-book-list">`;

    const books = bestsellers[i].books;
    if (!books || books.length === 0) {
      continue;
    }

    for (let j = 0; j < books.length; j++) {
      if (j === booksNumber) {
        break;
      }
      const book = books[j];
      categoryMarkup += `
        <div class="bestsellers-book-item">
          <div class="test-wraper">
            <img src="${
              book.book_image
            }" alt="book-cover" class="bestsellers-book-cover" data-id="${
        book._id
      }" loading="lazy" data-modal-open>
          </div>
          <p class="bestsellers-book-title">${formatBookName(
            book.title,
            titleLength
          )}</p>
          <p class="bestsellers-book-author">${book.author}</p>
        </div>`;
    }

    categoryMarkup += `
        </div>
        <button class="bestsellers-button" data-id="${bestsellers[i].list_name}">See more</button>
      </li>`;
  }

  bestsellersList.innerHTML = categoryMarkup;
  addListener();
}

window.addEventListener('resize', e => {
  clearBestsellers();
  getBooksNumber();
  // bestsellersMarkup(bestsellersArray);
  getBestseller();
});

function clearBestsellers() {
  bestsellersList.innerHTML = '';
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
// const categoryList = document.querySelector('.category_list');
// const itemEl = document.querySelector('.item-category');
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

  spinner.show();

  fetchCategoryBooks(bookCategory)
    .then(book => {
      renderBooksList(book, event);
      spinner.hide();
    })
    .catch(error => {
      console.log(error);
      spinner.hide();
    });
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
    .map(({ book_image, title, author, _id }) => {
      return `<li class = "category_books_items">
          <div class="test-wraper">
          <img src='${book_image}' alt='book-cover' class='bestsellers-book-cover' data-id="${_id}">
          </div>
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

  const lastElementBookTitle = arrrayCurrentCategory.at(-1);
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

function addListener() {
  const bookDetails = document.querySelectorAll('.bestsellers-list-item');

  for (let i = 0; i < bookDetails.length; i += 1) {
    bookDetails[i].addEventListener('click', openBookDetails);
  }
}

const modalEl = document.querySelector('.img-and-description');
const addShopingBtn = document.querySelector('.btn-modal-add-js');
const BOOKS_DATA_KEY = 'books';
let books = JSON.parse(localStorage.getItem(BOOKS_DATA_KEY)) || [];

function openBookDetails(event) {
  if (event.target.className !== 'bestsellers-book-cover') {
    return;
  }

  const bookId = event.target.dataset.id;
  spinner.show();

  modalEl.innerHTML = '<p>Loading...</p>';

  fetchBookDetails(bookId)
    .then(book => {
      renderBookModal(book);
      spinner.hide();
    })
    .catch(error => {
      console.log(error);
      spinner.hide();
    });
}

let selectedBook = null;

function renderBookModal(book) {
  modalEl.innerHTML = `<img class="img-modal" src="${book.book_image}" alt="Image cover" />
      <div class="div-text-modal">
        <h1 class="item-modal">${book.title}</h1>
        <h3 class="autor-name-modal">${book.author}</h3>
        <p class="description-modal">${book.description}</p>
        <ul class="ul-modal">
          <li class="li-modal">
            <a href="${book.buy_links[0].url}" class="amazon-modal" target="_blank" data-book-id="${book._id}"></a>
          </li>
          <li class="li-modal">
            <a href="${book.buy_links[1].url}" class="book-modal" target="_blank" data-book-id="${book._id}"></a>
          </li>
          <li class="li-modal">
            <a href="${book.buy_links[4].url}" class="books-modal" target="_blank" data-book-id="${book._id}">
          </a></li>
        </ul>
      </div>`;
  selectedBook = book;
  if (books.find(book => book._id === selectedBook._id)) {
    addShopingBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    underModalBtnText.classList.remove('visually-hidden');
  } else {
    addShopingBtn.textContent = 'ADD TO SHOPPING LIST';
    underModalBtnText.classList.add('visually-hidden');
  }
}

// Зміна кольору назви категорії та заголовку в блоці "Категорії"
function changeCategoryColor(selectedCategory) {
  const allCategories = document.querySelectorAll('.category_button');
  const categoryAll = document.querySelector('.category_all');

  allCategories.forEach(category => {
    const isSelectedCategory = category.textContent === selectedCategory;
    category.style.fontWeight = isSelectedCategory ? '700' : '400';
    category.style.lineHeight = isSelectedCategory ? '1.33' : '1.12';
    category.style.textTransform = isSelectedCategory ? 'uppercase' : 'none';
    category.style.textAlign = isSelectedCategory ? 'left' : '';
    category.style.color = isSelectedCategory
      ? 'var(--color-of-categoryAll-text)'
      : 'var(--color-of-category-text)';
  });

  categoryAll.style.fontWeight = '400';
  categoryAll.style.lineHeight = '1.12';
  categoryAll.style.textTransform = 'none';
  categoryAll.style.color = 'var(--color-of-category-text)';
}

addShopingBtn.addEventListener('click', addToLocalStorage);

const underModalBtnText = document.querySelector('.under-modal-btn-text');

function addToLocalStorage() {
  if (books.find(book => book._id === selectedBook._id)) {
    const index = books.findIndex(book => book._id === selectedBook._id);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    addShopingBtn.textContent = 'ADD TO SHOPPING LIST';
    underModalBtnText.classList.add('visually-hidden');
  } else {
    books.push(selectedBook);
    localStorage.setItem(BOOKS_DATA_KEY, JSON.stringify(books));
    addShopingBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    underModalBtnText.classList.remove('visually-hidden');
  }

  // const bookId = document.querySelector('.book-modal').dataset.bookId;
  // const bookData = {
  //   id: bookId,
  // };

  // bookArray.push(bookData);
  // localStorage.setItem(BOOKS_DATA_KEY, JSON.stringify(bookArray));
}
