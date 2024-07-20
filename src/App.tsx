import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Header /> } />
      <Route path="/search" element={ <SearchBar /> } />
    </Routes>
  );
}

export default App;
