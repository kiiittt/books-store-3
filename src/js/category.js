const categoryList = document.querySelector('.category_list');

const itemEl = document.querySelector('.item-category');

const categoryBooks = document.querySelector('.category_books');

const bestsellersContainer = document.querySelector('.bestsellers-area');

const categoryBooksContainer = document.querySelector(
  '.category_books_container'
);
const categoryAll = document.querySelector('.category_all');
// !!! Блок Категорії !!!
// Надсилає запит на отримання списку категорій
function fetchCategorys() {
  return fetch('https://books-backend.p.goit.global/books/category-list').then(
    response => response.json()
  );
}
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

fetchCategorys()
  .then(category => renderCategoryList(category))
  .catch(error => console.log(error));

// Клік по категорії

categoryList.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  if (event.target.className !== 'category_button') {
    return;
  }

  const selectedCategory = event.target.textContent;

  changeCategoryColor(selectedCategory);
  clearBooksList();

  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${event.target.textContent}`
  )
    .then(response => response.json())
    .then(book => renderBooksList(book, event))
    .catch(error => console.log(error));
}

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
  const markup = books
    .map(({ book_image, title, author, _id }) => {
      return `<li class = "category_books_items">
          <img src='${book_image}' alt='book-cover' class='bestsellers-book-cover' data-id="${_id}">
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
function formatBookName(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message.slice(0, message.length);
  } else {
    result = message.slice(0, maxLength) + '...';
  }
  return result;
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
// Змінює колір кнопки All Categories
function changeCategoryAllColor(selectedCategory) {
  const allCategories = document.querySelectorAll('.category_button');
  const categoryAll = document.querySelector('.category_all');

  allCategories.forEach(category => {
    if (category.textContent !== selectedCategory) {
      // Задає стилі "All Categories" по кліку
      category.style.fontWeight = '400';
      category.style.lineHeight = '1.12';
      category.style.textTransform = 'none';
      category.style.color = 'var(--color-of-category-text)';
      // Задає стилі категоріям книг по кліку на категорію
      categoryAll.style.fontWeight = '700';
      categoryAll.style.lineHeight = '1.33';
      categoryAll.style.textTransform = 'uppercase';
      categoryAll.style.color = 'var(--color-of-categoryAll-text)';
    } else {
      category.style.fontWeight = '400';
      category.style.lineHeight = '1.12';
      category.style.textTransform = 'none';
      category.style.color = 'var(--color-of-category-text)';
    }
  });
}
// Зміна кольору назви категорії та заголовку в блоці "Категорії"
function changeCategoryColor(selectedCategory) {
  const allCategories = document.querySelectorAll('.category_button');
  const categoryAll = document.querySelector('.category_all');

  // Меняем цвет для выбранной категории та заголовку категорії
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

//
//
//
//
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

  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${event.target.textContent}`
  )
    .then(response => response.json())
    .then(book => renderBooksList(book, event))
    .catch(error => console.log(error));
}

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// .// .

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

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// .//

const bookDetails = document.querySelectorAll('.bestsellers-list-item');

categoryBooks.addEventListener('click', openBookDetails);

const modalEl = document.querySelector('.img-and-description');

function openBookDetails(event) {
  if (event.target.className !== 'bestsellers-book-cover') {
    return;
  }
  const bookId = event.target.dataset.id;

  return fetch(`https://books-backend.p.goit.global/books/${bookId}`)
    .then(response => response.json())
    .then(book => renderBookModal(book))
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
