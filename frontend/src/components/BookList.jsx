import { BookItem } from './BookItem';

export const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
      {books.map((book) => (
        <div key={book._id}>
          <BookItem data={book} />
        </div>
      ))}
    </div>
  );
};
