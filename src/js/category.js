const categoryList = document.querySelector('.category_list');

const itemEl = document.querySelector('.item-category');

const categoryBooks = document.querySelector('.category_books');

const bestsellersContainer = document.querySelector('.bestsellers-area');
const categoryBooksContainer = document.querySelector(
  '.category_books_container'
);

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
            <button type = "button" class="link">${list_name}</button>          

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
  if (event.target.nodeName !== 'BUTTON') {
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
  // присвоює ім'я категорії заголовку
  const categoryBooksTitle = document.querySelector('.category_books_title');
  const currentCategory = event.target.textContent;
  categoryBooksTitle.textContent = currentCategory;

  // Перевірка на наявність книг в масиві категорій
  if (books.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'Oops, there is no books in this category.';
    message.classList.add('no-books-message');
    categoryBooks.appendChild(message);
    return;
  }

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

// Зміна кольору назви категорії та заголовку в блоці "Категорії"
function changeCategoryColor(selectedCategory) {
  const allCategories = document.querySelectorAll('.link');
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
