import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center px-spacing-regular-20"
      >
        <SearchBar />
      </div>
    </>
  );
}

export default App;
