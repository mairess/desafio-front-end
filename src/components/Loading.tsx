import { useContext, useEffect } from 'react';
import EmployeeContext from '../context/EmployeeContext';

function Loading() {
  const { setColSpan, colSpan } = useContext(EmployeeContext);

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
            <div className="border-4 border-t-4 rounded-full border-gray-neutral-20 border-t-secondary size-8 animate-spin" />
            Carregando...
          </div>
        </td>
      </tr>
    </tbody>

  );
}

export default Loading;
