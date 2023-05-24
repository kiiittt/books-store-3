import Pagination from 'tui-pagination';


const addToListBtn = document.querySelector('button[data-value=""]');

// watchedArray();

if (addToListBtn) {
  addToListBtn.addEventListener('click', showAdd);
}

function showAdd() {
  if (!addToListBtn.classList.contains('js-active')) {
    addToListBtn.classList.add('js-active');
  }
  watchedArray();
}

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
const jsGallery = document.querySelector('.js-gallery');
const BOOKS_DATA_KEY = 'books-data-01';
let bookArray = JSON.parse(localStorage.getItem(BOOKS_DATA_KEY)) || [];

const storedBookData = localStorage.getItem(BOOKS_DATA_KEY);

if (storedBookData) {
  // Parse the saved data back into an array or object
  bookArray = JSON.parse(storedBookData);

  // console.log(bookArray);
} else {
  console.log('No book data found in local storage');
}



function createGalleryMarkup(books) {
  return books
    .map(book => {
      // const genres = genresListFormat(book.genre_ids);
      // const bookYear = bookReleaseYearFormat(book);
      // const poster = book.poster_path
      //   ? `https://image.tmdb.org/t/p/w500/${book.poster_path}`
      //   : noPoster;

      return `<li class="gallery__item" data-book="${book._id}">
        <img
          class="gallery__img"
          src="${book.book_image}"
          alt="${book.title}"
          width
          loading="lazy"/>

        <div class="gallery__wrap">
          <h2 class="name-book">${book.title}</h2>
          <div class="gallery__info">
            <p class="category-book">${book.description}</p>
            <svg class="svg-remove-list">
              <use></use>
            </svg>
            <p class="basic-description-book">${book.description}</p>
            <p class="autor-book">${book.author}</p>
            <ul class="internet-marcets">
              <li class="123">
                <svg class="amazon">
                  <use href="./img/shop-img/sprite.svg#amazon"></use>
                </svg>
              </li>
              <li class="123">
                <svg>
                  <use href=""></use>
                </svg>
              </li>
              <li class="123">
                <svg>
                  <use href=""></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </li>`;
    })
    .join('');
}

if (jsGallery) {
  jsGallery.innerHTML = createGalleryMarkup(bookArray);
} else {
  console.log('Element with class "js-gallery" not found');
}



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
