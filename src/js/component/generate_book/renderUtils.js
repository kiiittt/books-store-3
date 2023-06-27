import { formatBookName } from '../maxLength/maxLength';

function renderBooks(bestsellersList, bestsellers, booksNumber, titleLength) {
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

export { renderBooks };
