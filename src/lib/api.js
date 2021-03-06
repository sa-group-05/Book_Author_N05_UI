import { URL } from "../constants/Config";

export async function getAllBooks() {
  const response = await fetch(`${URL}/books`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
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
  const response = await fetch(`${URL}/books/${bookId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch book.");
  }

  const loadedBook = {
    id: bookId,
    ...data,
  };

  return loadedBook;
}

export async function addBook(bookData) {
  const response = await fetch(`${URL}/books`, {
    method: "POST",
    body: JSON.stringify(bookData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not create book.");
  }

  return null;
}

export async function getAllAuthors() {
  const response = await fetch(`${URL}/authors`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  if (!response.ok) {
    console.log(data);
    throw new Error(data.message || "Could not fetch books.");
  }
  const transformedAuthors = [];
  for (const key in data) {
    const authorObj = {
      id: key,
      ...data[key],
    };
    transformedAuthors.push(authorObj);
  }
  return transformedAuthors;
}
export async function getSingleAuthor(authorId) {
  const response = await fetch(`${URL}/authors/${authorId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch author.");
  }

  const loadedAuthor = {
    id: authorId,
    ...data,
  };

  return loadedAuthor;
}

export async function addAuthor(authorData) {
  const response = await fetch(`${URL}/authors`, {
    method: "POST",
    body: JSON.stringify(authorData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Could not create author.");
  }

  return null;
}
