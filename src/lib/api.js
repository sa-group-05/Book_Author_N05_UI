import { URL } from "../constants/Config";

export async function getAllBooks() {
  console.log(`${URL}/books`);

  const response = await fetch(`${URL}/books`);

  console.log(`${URL}/books`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    console.log(data);
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}
