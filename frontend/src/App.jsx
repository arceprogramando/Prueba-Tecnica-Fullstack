import { BookListData } from './components/BookLIstData';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container max-w-2xl mx-auto">
        <BookListData />
      </div>
    </>
  );
}

export default App;
