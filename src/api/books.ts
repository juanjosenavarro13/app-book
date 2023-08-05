import books from './data/books.json';
import { Library } from './types/book';

// exportar una funcion asincrona
export async function getBooks(): Promise<Library> {
  return books;
}
