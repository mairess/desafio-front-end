import { useContext } from 'react';
import iconSearch from '../assets/iconSearch.svg';
import EmployeeContext from '../context/EmployeeContext';

function SearchBar() {
  const { query, setQuery } = useContext(EmployeeContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:flex-row my-spacing-regular-20">

      <h1 className="w-full mb-spacing-regular-20 text-h1 text-black-neutral">Funcionários</h1>

      <div className="relative w-full md:w-5/12">

        <input
          className="relative w-full py-3 pl-4 pr-10 border rounded-lg custom-placeholder border-gray-neutral-10 shadow-custom-10"
          placeholder="Pesquisar"
          type="text"
          name="search"
          value={ query }
          onChange={ handleInputChange }
        />

        <div className="absolute top-0 flex items-center justify-center h-full right-4">
          <img src={ iconSearch } alt="search icon magnifying glass" />
        </div>

      </div>

    </div>
  );
}

export default SearchBar;
