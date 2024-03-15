import { BookList } from './BookList';

export const BookListData = ({ books }) => {
  if (!books || books.length === 0) {
    return <p>No hay elementos agregados</p>;
  }

  return <BookList books={books} />;
};
