/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect } from 'react';
import iconErro from '../assets/iconError.svg';
import EmployeeContext from '../context/EmployeeContext';

function Error() {
  const { setRefresh, refresh, setColSpan, colSpan, error } = useContext(EmployeeContext);

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const updateColSpan = () => {
      if (window.innerWidth >= 768) {
        setColSpan(5);
      } else if (window.innerWidth >= 640) {
        setColSpan(4);
      } else {
        setColSpan(3);
      }
    };

    updateColSpan();

    window.addEventListener('resize', updateColSpan);

    return () => {
      window.removeEventListener('resize', updateColSpan);
    };
  }, []);

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
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default Error;
