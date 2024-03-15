import { useState, useEffect } from 'react';
import { BookListData } from '../BookLIstData';
import { CreateBookForm } from '../CreateBookForm';
import { getBookRequest } from '../../../api/tasks.api';
import { Loading } from '../../UI/Loading';
import { Toaster, toast } from 'sonner';

export const Main = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getBookRequest();
        setBookList(booksData);
        toast.success('Data Traida');
      } catch (error) {
        toast.error('Error al hacer fetching a la data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddBook = (newBook) => {
    setBookList([...bookList, newBook]);
  };

  return (
    <>
      <Toaster />
      <main className="container max-w-2xl mx-auto">
        <div className="flex">
          <CreateBookForm onAddBook={handleAddBook} />
          {loading ? <Loading /> : <BookListData books={bookList} />}
        </div>
      </main>
    </>
  );
};
