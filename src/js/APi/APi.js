export async function fetchBestsellers() {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/top-books`
  );
  if (response.ok) {
    const bestsellers = await response.json();
    return bestsellers;
  } else {
    throw new Error('Error fetching books:', response.status);
  }
}

export async function fetchCategorys() {
  const response = await fetch(
    'https://books-backend.p.goit.global/books/category-list'
  );
  return await response.json();
}

export async function fetchCategoryBooks(category) {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/category?category=${category}`
  );
  if (response.ok) {
    const books = await response.json();
    return books;
  } else {
    throw new Error('Error fetching category books:', response.status);
  }
}

export async function fetchBookDetails(bookId) {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/${bookId}`
  );
  if (response.ok) {
    const book = await response.json();
    return book;
  } else {
    throw new Error('Error fetching book details:', response.status);
  }
}

export async function fetchBooksByCategory(category) {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/category?category=${category}`
  );
  return await response.json();
}
