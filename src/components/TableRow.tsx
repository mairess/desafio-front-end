/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import iconChevronUp from '../assets/iconChevronUp.svg';
import iconChevronDown from '../assets/iconChevronDown.svg';
import { EmployeeType } from '../types';
import { formatDate, formatPhoneNumber } from '../utils/handleFormat';

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

        <td className="pl-spacing-regular-20">
          <img className="rounded-full size-custom-size-08" src={ employee.image } alt="user avatar" />
        </td>
        <td className="text-center sm:text-left">{employee.name}</td>
        <td className="hidden sm:table-cell text-h3">{employee.job}</td>
        <td className="hidden md:table-cell text-h3">{formatDate(employee.admission_date)}</td>
        <td className="hidden lg:table-cell text-h3">{formatPhoneNumber(employee.phone)}</td>
        <td className="lg:hidden">

          <div className="flex justify-end cursor-pointer pr-spacing-regular-20 sm:justify-end">
            <button onClick={ toggleDetails }>
              <img className="size-8" src={ showDetails ? iconChevronUp : iconChevronDown } alt="elipse to hide row details" />
            </button>
          </div>

        </td>

      </tr>

      {showDetails && (
        <>
          <tr className="text-black-neutral">

            <td colSpan={ colSpan } className="px-spacing-regular-20 sm:hidden">

              <div className="flex justify-between border-b border-dashed border-b-gray-neutral-10">
                <h2 className="text-h2 text-black-neutral">Cargo</h2>
                <h3 className="text-h3 text-black-neutral">{employee.job}</h3>
              </div>

            </td>

          </tr>

          <tr className="text-black-neutral">

            <td colSpan={ colSpan } className="px-spacing-regular-20 md:hidden">

              <div className="flex justify-between border-b border-dashed border-b-gray-neutral-10">
                <h2 className="text-h2 text-black-neutral">Data de admissão</h2>
                <h3 className="text-h3 text-black-neutral">{formatDate(employee.admission_date)}</h3>
              </div>

            </td>

          </tr>

          <tr className="text-black-neutral shadow-custom-00">

            <td colSpan={ colSpan } className="px-spacing-regular-20 lg:hidden">

              <div className="flex justify-between border-b border-dashed border-b-gray-neutral-10 mb-spacing-regular-28">
                <h2 className="text-h2 text-black-neutral">Telefone</h2>
                <h3 className="text-h3 text-black-neutral">{formatPhoneNumber(employee.phone)}</h3>
              </div>

            </td>

          </tr>
        </>
      )}
    </>
  );
}

export default TableRow;
