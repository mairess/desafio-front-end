/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import iconChevronUp from '../assets/iconChevronUp.svg';
import iconChevronDown from '../assets/iconChevronDown.svg';
import { EmployeeType } from '../types';
import { formatDate, formatPhoneNumber } from '../utils/handleFormat';
import TableDetail from './RowDetail';

type TableRowProps = {
  employee: EmployeeType
};

function TableRow({ employee }: TableRowProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [colSpan, setColSpan] = useState(3);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    const updateColSpan = () => {
      if (window.innerWidth >= 1024) {
        setColSpan(6);
        setShowDetails(false);
      } else if (window.innerWidth >= 768) {
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
    <>

      <tr
        className={ !showDetails ? 'shadow-custom-05' : '' }
        aria-expanded={ showDetails }
        aria-controls={ `details-${employee.id}` }
      >

        <td className="pl-spacing-regular-20 py-spacing-little-12">
          <img className="rounded-full size-custom-size-08" src={ employee.image } alt="user avatar" />
        </td>
        <td className="text-center sm:text-left">{employee.name}</td>
        <td className="hidden sm:table-cell text-h3">{employee.job}</td>
        <td className="hidden md:table-cell text-h3">{formatDate(employee.admission_date)}</td>
        <td className="hidden lg:table-cell text-h3">{formatPhoneNumber(employee.phone)}</td>
        <td className="lg:hidden">

          <div className="flex justify-end cursor-pointer pr-spacing-regular-20 sm:justify-end">
            <button onClick={ toggleDetails }>
              <img className="size-8" src={ showDetails ? iconChevronUp : iconChevronDown } alt="pointing button to hide ro show row details" />
            </button>
          </div>

        </td>

      </tr>

      {showDetails && (

        <>

          <TableDetail
            colSpan={ colSpan }
            breakpoint="sm"
            employeeData={ employee.job }
            head="Cargo"
          />

          <TableDetail
            colSpan={ colSpan }
            breakpoint="md"
            employeeData={ formatDate(employee.admission_date) }
            head="Data de admissão"
          />

          <TableDetail
            colSpan={ colSpan }
            breakpoint="lg"
            employeeData={ formatPhoneNumber(employee.phone) }
            head="Telefone"
            shadow="shadow-custom-00"
            margin="mb-spacing-regular-28"
          />

        </>
      )}
    </>
  );
}

export default TableRow;
