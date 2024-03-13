import { BookItem } from './BookItem';

export const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {books?.length ? (
        books.map((book) => (
          <div key={book._id}>
            <BookItem data={book} />
          </div>
        ))
      ) : (
        <p>No hay libros disponibles</p>
      )}
    </div>
  );
};
