import {
  fetchBooksByCategory,
  fetchCategorys,
  fetchBookDetails,
} from './APi/APi.js';
import { modalBookTemplate } from './component/modal/modal_book';
import { generateBookMarkup } from './component/generate_book/generateBookTemplate';
import { changeCategoryColor } from './component/changeColor/styleCategorogyColor';
import { changeCategoryAllColor } from './component/changeColor/styleCategorogyColorAll';
import { Spiner } from './spinner';
const spinner = new Spiner();

const categoryList = document.querySelector('.category_list');
// const itemEl = document.querySelector('.item-category'); // оскільки не використовується закоментував
const categoryBooks = document.querySelector('.category_books');
const bestsellersContainer = document.querySelector('.bestsellers-area');
const categoryBooksContainer = document.querySelector(
  '.category_books_container'
);
const categoryAll = document.querySelector('.category_all');

// !!! Блок Категорії !!!
// Надсилає запит на отримання списку категорій

fetchCategorys()
  .then(category => renderCategoryList(category))
  .catch(error => console.log(error));

// відмальовує розмітку блоку категорії
function renderCategoryList(categorys) {
  const markup = categorys
    .map(({ list_name }) => {
      return `
          <li class="item-category">
            <button type = "button" class="category_button">${list_name}</button>
          </li>
      `;
    })
    .join('');
  categoryList.insertAdjacentHTML('beforeend', markup);
}

// Клік по категорії

categoryList.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  if (event.target.className !== 'category_button') {
    return;
  }

  const selectedCategory = event.target.textContent;

  changeCategoryColor(selectedCategory);
  clearBooksList();
  spinner.show();

  return fetchBooksByCategory(event.target.textContent)
    .then(book => {
      renderBooksList(book, event);
      spinner.hide();
    })
    .catch(error => {
      console.log(error);
      spinner.hide();
    });
}
spinner.hide();

// Очищення книг попередньої категорії
function clearBooksList() {
  categoryBooks.innerHTML = '';
}
// відмальовує розмітку книг по кліку на категорію
function renderBooksList(books, event) {
  bestsellersContainer.style.display = 'none';
  categoryBooksContainer.style.display = 'flex';
  // присвоює ім'я категорії заголовку та колір
  separatesWordsAddToTitle(event);

  // Перевірка на наявність книг в масиві
  checksBooks(books);
  // Відмальовка картки книги
  const markup = books.map(book => generateBookMarkup(book)).join('');
  categoryBooks.insertAdjacentHTML('beforeend', markup);
}

// Перевірка на наявність книг в масиві
function checksBooks(books) {
  if (books.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'Oops, there is no books in this category.';
    message.classList.add('no-books-message');
    categoryBooks.appendChild(message);
    return;
  }
}
// Перемикає категорії
categoryAll.addEventListener('click', onBtnClickChangeCategory);
function onBtnClickChangeCategory(event) {
  bestsellersContainer.style.display = 'flex';
  categoryBooksContainer.style.display = 'none';

  const selectedCategory = event.target.className;

  changeCategoryAllColor(selectedCategory);
}
// Додає назву категорії у блок категорій а також задає колір тексту
function separatesWordsAddToTitle(event) {
  const categoryBooksTitle = document.querySelector('.category_books_title');

  const currentCategory = event.target.textContent;

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

// Кліки в категорії Бесцелери по назві категорії книг !!!
const bestsellersListEl = document.querySelector('.bestsellers-list');
const bestsellersGeneralCategory = document.querySelector(
  '.bestsellers-general-category'
);
bestsellersListEl.addEventListener('click', onTitleBestsellersClick);

function onTitleBestsellersClick(event) {
  if (event.target.className !== 'bestsellers-general-category') {
    return;
  }

  const selectedCategory = event.target.textContent;

  changeCategoryColor(selectedCategory);
  clearBooksList();

  return fetchBooksByCategory(event.target.textContent)
    .then(book => renderBooksList(book, event))
    .catch(error => console.log(error));
}

const closeModalBtnCategory = document.querySelector('.svg-close');
const modalCategory = document.querySelector('[data-modal]');

categoryBooksContainer.addEventListener('click', toggleModalOpen);
// closeModalBtnCategory.addEventListener('click', toggleModal);

// window.addEventListener('keydown', handleKeyDown);

function toggleModalOpen(event) {
  if (event.target.className !== 'bestsellers-book-cover') {
    return;
  }
  modalCategory.classList.toggle('is-hidden');

  // document.body.style.overflow = refs.modal.classList.contains("is-hidden") ? "" : "hidden";
}

const bookDetails = document.querySelectorAll('.bestsellers-list-item');

categoryBooks.addEventListener('click', openBookDetails);

const modalEl = document.querySelector('.img-and-description');

function openBookDetails(event) {
  if (event.target.className !== 'bestsellers-book-cover') {
    return;
  }
  spinner.show();

  const bookId = event.target.dataset.id;

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

function renderBookModal(book) {
  modalEl.innerHTML = modalBookTemplate(book);
}
