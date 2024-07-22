import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

function Home() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center pb-spacing-medium-80 px-spacing-regular-20">

        <SearchBar />
        <Table />

      </div>

    </div>
  );
}

export default Home;
