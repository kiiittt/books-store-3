import { booksApi } from './APi/APi.js';
import { modalBookTemplate } from './component/modal/modal_book';
import { formatBookName } from './component/maxLength/maxLength';
import { generateBookMarkup } from './component/generate_book/generateBookTemplate';
import { changeCategoryColor } from './component/changeColor/styleCategorogyColor';
import { Spiner } from './component/loader-sing-up/spinner';
const spinner = new Spiner();

// const bestsellersArea = document.querySelector('.bestsellers-area');
const bestsellersList = document.querySelector('.bestsellers-list');
let bestsellersArray = [];

const getBestseller = async () => {
  spinner.show();
  try {
    const bestsellers = await booksApi.fetchBestsellers();
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

window.addEventListener('resize', () => {
  clearBestsellers();
  getBooksNumber();
  bestsellersMarkup(bestsellersArray);
  getBestseller();
});

function clearBestsellers() {
  bestsellersList.innerHTML = '';
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

async function openMoreBooks(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const bookCategory = event.target.dataset.id;
  changeCategoryColor(bookCategory);
  // console.log(bookCategory);

  spinner.show();

  const getTopValue = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      return 700;
    } else if (window.matchMedia('(max-width: 1440px)').matches) {
      return 600;
    } else {
      return 0;
    }
  };

  await booksApi
    .fetchBooksByCategory(bookCategory)
    .then(book => {
      renderBooksList(book, event);
      spinner.hide();
    })
    .catch(error => {
      console.error('Error fetching category books:', error);
      spinner.hide();
    })
    .finally(() => {
      const topValue = getTopValue();
      window.scrollTo({ top: topValue, behavior: 'smooth' });
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
  const markup = books.map(book => generateBookMarkup(book)).join('');
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

async function openBookDetails(event) {
  if (event.target.className !== 'bestsellers-book-cover') {
    return;
  }
  const bookId = event.target.dataset.id;

  modalEl.innerHTML = '<p>Loading...</p>';
  spinner.show();

  await booksApi
    .fetchBookDetails(bookId)
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
  modalEl.innerHTML = modalBookTemplate(book);
  selectedBook = book;
  if (books.find(book => book._id === selectedBook._id)) {
    addShopingBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    underModalBtnText.classList.remove('visually-hidden');
  } else {
    addShopingBtn.textContent = 'ADD TO SHOPPING LIST';
    underModalBtnText.classList.add('visually-hidden');
  }
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
