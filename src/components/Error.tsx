/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import iconErro from '../assets/iconError.svg';
import EmployeeContext from '../context/EmployeeContext';

function Error() {
  const { setRefresh, refresh, colSpan, error } = useContext(EmployeeContext);

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <tbody>
      <tr>
        <td colSpan={ colSpan }>
          <div className="flex flex-col items-center justify-center p-spacing-regular-28">
            <p className="flex flex-col items-center justify-center mb-4">
              <img className="size-8" src={ iconErro } alt="error" />
              {' '}
              {error}
            </p>
            <button
              onClick={ toggleRefresh }
              className="text-white rounded-lg py-spacing-little-08 px-spacing-regular-16 shadow-custom-10 bg-secondary hover:bg-primary"
            >
              Recarregar
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default Error;
