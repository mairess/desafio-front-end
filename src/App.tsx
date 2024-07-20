import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TableHead from './components/TableHead';

function App() {
  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center px-spacing-regular-20"
      >
        <SearchBar />
        <TableHead />
      </div>
    </>
  );
}

export default App;
