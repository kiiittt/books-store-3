import { formatBookName } from '../../utils/maxLength/maxLength';

export const generateBookMarkup = ({ book_image, title, author, _id }) => {
  return `<li class="category_books_items">
    <div class="test-wraper">
      <img src="${book_image}" alt="book-cover" class="bestsellers-book-cover" data-id="${_id}">
    </div>
    <p class="bestsellers-book-title book-text">${formatBookName(title, 15)}</p>
    <p class="bestsellers-book-author">${formatBookName(author, 30)}</p>
  </li>`;
};
