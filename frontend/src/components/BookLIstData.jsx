import { useEffect, useState } from 'react';
import { BookList } from './BookList';
import { Loading } from '../UI/Loading';
import { getBookRequest } from '../../api/tasks.api';

export const BookListData = () => {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getBooksData = await getBookRequest();
        setBookData(getBooksData);
      } catch (error) {
        setError('Error al traer la data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <div>{bookData?.length > 0 ? <BookList books={bookData} /> : <p>No hay elementos agregados</p>}</div>;
};
