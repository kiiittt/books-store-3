import { booksApi } from './APi/APi.js';
import { modalBookTemplate } from './component/modal/modal_book';
import { generateBookMarkup } from './component/generate_book/generateBookTemplate';
import { changeCategoryColor } from './component/changeColor/styleCategorogyColor';
import { changeCategoryAllColor } from './component/changeColor/styleCategorogyColorAll';
import { Spiner } from './component/loader-sing-up/spinner';

const spinner = new Spiner();

const categoryList = document.querySelector('.category_list');
const categoryBooks = document.querySelector('.category_books');
const bestsellersContainer = document.querySelector('.bestsellers-area');
const categoryBooksContainer = document.querySelector(
  '.category_books_container'
);
const categoryAll = document.querySelector('.category_all');

// Category section | Запит на отримання списку категорій
await booksApi
  .fetchCategorys()
  .then(category => renderCategoryList(category))
  .catch(error => console.log(error));

// Рендеринг списку категорій
function renderCategoryList(categories) {
  const markup = categories
    .map(
      category => `
      <li class="item-category">
        <button type="button" class="category_button">${category.list_name}</button>
      </li>
    `
    )
    .join('');

  categoryList.insertAdjacentHTML('beforeend', markup);
}

// Обробка кліку на кнопку категорії
categoryList.addEventListener('click', onButtonClick);

async function onButtonClick(event) {
  if (event.target.className !== 'category_button') {
    return;
  }

  changeCategoryColor(event.target.textContent);
  clearBooksList();

  spinner.show();

  return await booksApi
    .fetchBooksByCategory(event.target.textContent)
    .then(book => {
      renderBooksList(book, event);
    })
    .catch(error => {
      console.log(error);
    });
}

spinner.hide();

// Очищення списку книг
function clearBooksList() {
  categoryBooks.innerHTML = '';
}

// Рендеринг списку книг
function renderBooksList(books, event) {
  bestsellersContainer.style.display = 'none';
  categoryBooksContainer.style.display = 'flex';
  separatesWordsAddToTitle(event);
  checksBooks(books);

  const markup = books.map(book => generateBookMarkup(book)).join('');
  categoryBooks.insertAdjacentHTML('beforeend', markup);
}

// Перевірка наявності книг у списку
function checksBooks(books) {
  if (books.length === 0) {
    categoryBooks.innerHTML =
      '<p class="no-books-message">Oops, there are no books in this category.</p>';
    return;
  }
}

// Обробка кліку на кнопку "All Categories"
categoryAll.addEventListener('click', onBtnClickChangeCategory);

function onBtnClickChangeCategory(event) {
  bestsellersContainer.style.display = 'flex';
  categoryBooksContainer.style.display = 'none';

  const selectedCategory = event.target.className;

  changeCategoryAllColor(selectedCategory);
}

// Додавання назви категорії до заголовку та кольору
function separatesWordsAddToTitle(event) {
  const categoryBooksTitle = document.querySelector('.category_books_title');
  const currentCategory = event.target.textContent;
  const arrrayCurrentCategory = currentCategory.split(' ');
  const lastElementBookTitle = arrrayCurrentCategory.pop();
  const wordsOfCategoryTitle = arrrayCurrentCategory.join(' ');

  categoryBooksTitle.textContent = wordsOfCategoryTitle;
  const textEl = document.createElement('span');
  textEl.classList.add('last_word_category_title');
  textEl.textContent = lastElementBookTitle;
  categoryBooksTitle.appendChild(textEl);
}

// Обробка кліку на заголовок "Bestsellers"
const bestsellersListEl = document.querySelector('.bestsellers-list');
const bestsellersGeneralCategory = document.querySelector(
  '.bestsellers-general-category'
);

bestsellersListEl.addEventListener('click', onTitleBestsellersClick);

async function onTitleBestsellersClick(event) {
  if (event.target.className !== 'bestsellers-general-category') {
    return;
  }

  changeCategoryColor(event.target.textContent);
  clearBooksList();

  return await booksApi
    .fetchBooksByCategory(event.target.textContent)
    .then(book => renderBooksList(book, event))
    .catch(error => console.log(error));
}

const modalCategory = document.querySelector('[data-modal]');

categoryBooksContainer.addEventListener('click', toggleModalOpen);

function toggleModalOpen(event) {
  if (event.target.className !== 'bestsellers-book-cover') {
    return;
  }
  modalCategory.classList.toggle('is-hidden');
}

const bookDetails = document.querySelectorAll('.bestsellers-list-item');

categoryBooks.addEventListener('click', openBookDetails);

const modalEl = document.querySelector('.img-and-description');

async function openBookDetails(event) {
  if (event.target.className !== 'bestsellers-book-cover') {
    return;
  }

  const bookId = event.target.dataset.id;
  spinner.show();

  modalEl.innerHTML = '<p>Loading...</p>';

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

function renderBookModal(book) {
  modalEl.innerHTML = modalBookTemplate(book);
}
