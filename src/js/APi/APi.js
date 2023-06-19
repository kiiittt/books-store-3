import axios from 'axios';
class BooksAPI {
  async fetchCategorys() {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    return response.data;
  }

  async fetchBestsellers() {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    return response.data;
  }

  async fetchBooksByCategory(category) {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    return response.data;
  }

  async fetchBookDetails(bookId) {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${bookId}`
    );
    return response.data;
  }
}


export const booksApi = new BooksAPI();