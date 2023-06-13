export const modalBookTemplate =
  book => `<img class="img-modal" src="${book.book_image}" alt="Image cover" />
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
