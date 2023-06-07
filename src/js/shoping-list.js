import Pagination from 'tui-pagination';


// const addToListBtn = document.querySelector('button[data-value=""]');
// console.log(addToListBtn);

// watchedArray();

// if (addToListBtn) {
//   addToListBtn.addEventListener('click', showAdd);
// }

// function showAdd() {
//   if (!addToListBtn.classList.contains('js-active')) {
//     addToListBtn.classList.add('js-active');
//   }
//   watchedArray();
// }

// function watchedArray() {
//     takeFromLocal('watched')
//     .then(data => {
//         if (data.length === 0) {
//           library.innerHTML = `
//           <p class="shop-list-title">This page is empty, add some books and proceed to order.</p>
//           <img
//           srcset="../img/shop-img/img-start-shop.png 1x, ../img/shop-img/img-start-shop@2x.png 2x"
//           class="shop-list-start-img"
//           src="../img/shop-img/img-start-shop.png"
//           alt="#">`;
//         } else {
//           const markup = createGalleryMarkup(data);
//           library.innerHTML = markup;
//         }
//       })
//       .catch(error => console.log());
//     if (
//       localStorage.getItem('watched') === null
//     ) {
//       document.querySelectorAll('.gallery__item').forEach(card => card.remove());
//     }
//   }

const shoppingListTitle = document.querySelector('.shop-list-title');
const shoppingListImg = document.querySelector('.shop-list-start-img');
const jsGallery = document.querySelector('.js-gallery');

const BOOKS_DATA_KEY = 'books';
let books = JSON.parse(localStorage.getItem(BOOKS_DATA_KEY)) || [];

if (books && books.length > 0) {
  shoppingListTitle.classList.add('visually-hidden');
  shoppingListImg.classList.add('visually-hidden');
  createGalleryMarkup(books);
}
// else {
//   shoppingListTitle.classList.remove('visually-hidden');
//   shoppingListImg.classList.remove('visually-hidden');
// }
  

function createGalleryMarkup(books) { 
  let galleryMarkup = '';
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    galleryMarkup += `
      <li class="gallery__item">
        <button type="button" class="basket-button" data-shopping-list-book-id="${book._id}">
          <svg>
            <use href="../img/shopping-list.svg#icon-basket"></use>
          </svg>
        </button>

        <div class="title-book-cover">
          <img
            class="shopping-book-cover"
            src="${book.book_image}"
            alt="book-cover"
            width="100"/>
        </div>

        <div class="gallery__wrap">
          <div class="shop-wrap">
            <h2 class="name-book">${book.title}</h2>
            <p class="category-book">${book.list_name}</p>
            <div class="basic-description-book">
              <p>${book.description}</p>
            </div>
          </div>
          <div class="shop-meta">
            <p class="autor-book">${book.author}</p>
        <ul class="ul-shopping">
          <li class="li-shopping">
            <a href="${book.buy_links[0].url}" class="amazon-shopping" target="_blank" data-book-id="${book._id}"></a>
          </li>
          <li class="li-shopping">
            <a href="${book.buy_links[1].url}" class="book-shopping" target="_blank" data-book-id="${book._id}"></a>
          </li>
          <li class="li-shopping">
            <a href="${book.buy_links[4].url}" class="books-shopping" target="_blank" data-book-id="${book._id}">
          </a></li>
        </ul>
          </div>
        </div>
      </li>`;
  }
  jsGallery.innerHTML = galleryMarkup;
  addEventListenerOnRemoveBookBtn();
}

// jsGallery.innerHTML = createGalleryMarkup(books);
// let bookArray = JSON.parse(localStorage.getItem(BOOKS_DATA_KEY)) || [];

// const storedBookData = localStorage.getItem(BOOKS_DATA_KEY);

// if (storedBookData) {
//   books = JSON.parse(storedBookData);
// } else {
//   console.log('No book data found in local storage');
// }



// function createGalleryMarkup(books) {

//   return books
//     .map(book => {
//       // const genres = genresListFormat(book.genre_ids);
//       // const bookYear = bookReleaseYearFormat(book);
//       // const poster = book.poster_path
//       //   ? `https://image.tmdb.org/t/p/w500/${book.poster_path}`
//       //   : noPoster;

//       return `<li class="gallery__item" data-book="${book._id}">
//         <img
//           class="gallery__img"
//           src="${book.book_image}"
//           alt="Image cover"
//           loading="lazy"/>

//         <div class="gallery__wrap">
//           <h2 class="name-book">${book.title}</h2>
//           <div class="gallery__info">
//             <p class="category-book">${book.list_name}</p>
//             <button class="remove-book">
//               <svg class="svg-remove-list">
//                 <use></use>
//               </svg>
//             </button>
//             <p class="basic-description-book">${book.description}</p>
//             <p class="autor-book">${book.author}</p>
//             <ul class="internet-marcets">
//               <li class="123">
//                 <a href="${book.buy_links[0].url}" class="amazon-shopping" target="_blank">
//                   <svg class="amazon">
//                     <use href="../img/shop-img/sprite.svg#amazon"></use>
//                   </svg>
//                 </a>
//               </li>
//               <li class="123">
//                 <a href="${book.buy_links[1].url}" class="book-shopping" target="_blank">
//                   <svg class="book">
//                     <use href="../img/shop-img/sprite.svg#amazon"></use>
//                   </svg>
//                 </a>
//               </li>
//               <li class="123">
//                 <a href="${book.buy_links[4].url}" class="books-shopping" target="_blank">
//                 <svg class="books">
//                     <use href="../img/shop-img/sprite.svg#amazon"></use>
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </li>`;
//     })
//     .join('');
  
// }


function addEventListenerOnRemoveBookBtn() {
  const removeBookBtn = document.querySelectorAll('.basket-button'); 
  for (let i = 0; i < removeBookBtn.length; i += 1) {
    removeBookBtn[i].addEventListener('click', removeBook);
  }

}

function removeBook(event) {
  const bookId = event.target.dataset.shoppingListBookId;
  // console.log(bookId);
  const index = books.findIndex(book => book._id === bookId);
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  createGalleryMarkup(books);
  if (books.length === 0) {
    shoppingListTitle.classList.remove('visually-hidden');
    shoppingListImg.classList.remove('visually-hidden');
  }
}



// if (jsGallery) {
//   jsGallery.innerHTML = createGalleryMarkup(books);
// } 


// function createGalleryMarkup(books) {
//   return books
//     .map(book => {
//       const genres = genresListFormat(movie.genre_ids);
//       const movieYear = movieReleaseYearFormat(movie);
//       const movieRate = movie.vote_average.toFixed(1);
//       const poster = movie.poster_path
//         ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//         : noPoster;

//       return `<li class="gallery__item" data-book="${book.id}">
//         <img
//           class="gallery__img"
//           src="${poster}"
//           alt="${book.title ?? book.name}"
//           width
//           loading="lazy"/>

//         <div class="gallery__wrap">
//           <h2 class="name-book">${book.title ?? book.name}</h2>
//           <div class="gallery__info">
//             <p class="category-book"></p>
//             <svg class="svg-remove-list">
//                   <use></use>
//                 </svg>
//                 <p class="basic-description-book"></p>
//                 <p class="autor-book"></p>
//                 <ul class="internet-marcets">
//                   <li class="123">
//                     <svg class="amazon">
//                       <use href="./img/shop-img/sprite.svg#amazon" ></use>
//                     </svg>
//                   </li>
//                   <li class="123">
//                     <svg>
//                       <use href=""></use>
//                     </svg>
//                   </li>
//                   <li class="123">
//                     <svg>
//                       <use href=""></use>
//                     </svg>
//                   </li>
//           </div>
//         </div>
//       </li>`;
//     })
//     .join('');
// }

// return '<ul class="shopping-carts">
// <li class="shopping-list">
//   <a href="#">
//     <img src="" alt="">
//     <h2 class="name-book"></h2>
//     <p class="category-book"></p>
//     <svg class="svg-remove-list">
//       <use></use>
//     </svg>
//     <p class="basic-description-book"></p>
//     <p class="autor-book"></p>
//     <ul class="internet-marcets">
//       <li class="123">
//         <svg>
//           <use></use>
//         </svg>
//       </li>
//     </ul>
//   </a>
// </li>
// </ul>'
