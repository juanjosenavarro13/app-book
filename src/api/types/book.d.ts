export type Book = {
  book: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: author;
  };
};

type author = { name: string; otherBooks: string[] };
type genre = 'Fantasía' | 'Ciencia ficción' | 'Zombies' | 'Terror';

export type Library = { library: Book[] };
