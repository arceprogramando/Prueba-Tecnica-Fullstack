import { BookListData } from '../BookLIstData';
import { CreateBookForm } from '../CreateBookForm';

export const Main = () => {
  return (
    <>
      <main className="container max-w-2xl mx-auto">
        <div className="flex">
          <CreateBookForm />
          <BookListData />
        </div>
      </main>
    </>
  );
};
