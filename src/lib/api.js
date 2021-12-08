import { URL } from "../constants/Config";

export async function getAllBooks() {
  const response = await fetch(`${URL}/books`);
  const data = await response.json();
  if (!response.ok) {
    console.log(data);
    throw new Error(data.message || "Could not fetch books.");
  }
  const transformedBooks = [];
  for (const key in data) {
    const bookObj = {
      id: key,
      ...data[key],
    };
    transformedBooks.push(bookObj);
  }

  return transformedBooks;
}

export async function getSingleBook(bookId) {
  console.log(bookId);
  const response = await fetch(`${URL}/books/${bookId}`);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch book.");
  }

  const loadedBook = {
    id: bookId,
    ...data,
  };

  return loadedBook;
}
