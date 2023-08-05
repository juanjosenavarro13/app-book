import { useEffect, useState } from 'react';
import { getBooks } from '../books';
import { Library } from '../types/book';

export function useFetchBooks() {
  const [data, setData] = useState<Library>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBooks()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
