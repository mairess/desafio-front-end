/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import iconChevronUp from '../assets/iconChevronUp.svg';
import iconChevronDown from '../assets/iconChevronDown.svg';

function TableRow() {
  const [showDetails, setShowDetails] = useState(false);
  const [colSpan, setColSpan] = useState(3);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    const updateColSpan = () => {
      if (window.innerWidth >= 1024) {
        setColSpan(6);
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

      <tr className="border-b">

        <td className="text-h3 pl-spacing-regular-20">Photo</td>
        <td className="text-center sm:text-left">Maria</td>
        <td className="hidden sm:table-cell text-h3">Lawyer</td>
        <td className="hidden md:table-cell text-h3">10-08-2022</td>
        <td className="hidden lg:table-cell text-h3">555555555555</td>
        <td className="lg:hidden">

          <div className="flex justify-end cursor-pointer pr-spacing-regular-20 sm:justify-end">
            <button onClick={ toggleDetails }>
              <img src={ showDetails ? iconChevronUp : iconChevronDown } alt="elipse to hide row details" />
            </button>
          </div>

        </td>

      </tr>

      {showDetails && (
        <>
          <tr className="border-b border-dashed border-b-gray-neutral-10 text-black-neutral">

            <td colSpan={ colSpan } className="px-spacing-regular-20 sm:hidden">

              <div className="flex justify-between">
                <h2 className="text-h2 text-black-neutral">Cargo</h2>
                <h3 className="text-h3 text-black-neutral">Front-end</h3>
              </div>

            </td>

          </tr>

          <tr className="border-b border-dashed border-b-gray-neutral-10 text-black-neutral">

            <td colSpan={ colSpan } className="px-spacing-regular-20 md:hidden">

              <div className="flex justify-between">
                <h2 className="text-h2 text-black-neutral">Data de admissão</h2>
                <h3 className="text-h3 text-black-neutral">01/01/0001</h3>
              </div>

            </td>

          </tr>

          <tr className="border-b border-dashed border-b-gray-neutral-10 text-black-neutral">

            <td colSpan={ colSpan } className="px-spacing-regular-20 lg:hidden">

              <div className="flex justify-between">
                <h2 className="text-h2 text-black-neutral">Telefone</h2>
                <h3 className="text-h3 text-black-neutral">+55 (00) 00000-000</h3>
              </div>

            </td>

          </tr>
        </>
      )}
    </>
  );
}

export default TableRow;
