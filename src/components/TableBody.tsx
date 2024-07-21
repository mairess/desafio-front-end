/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import iconChevronUp from '../assets/iconChevronUp.svg';
import iconChevronDown from '../assets/iconChevronDown.svg';

function TableBody() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <table className="w-full text-center table-fixed sm:text-left">

        <tbody>

          <tr className="border-b">

            <td className="text-h3">
              <div className="flex pl-spacing-regular-20">
                Photo
              </div>
            </td>
            <td>Maria</td>
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

        </tbody>

      </table>
      {showDetails && (
        <>
          <tr className="border-b border-dashed border-b-gray-neutral-10 text-black-neutral">
            <td colSpan={ 6 } className="flex justify-between pl-spacing-regular-20">
              <h2 className="text-h2 text-black-neutral">Cargo</h2>
              <h3 className="text-h3 text-black-neutral">Front-end</h3>
            </td>
          </tr>
          <tr className="border-b border-dashed border-b-gray-neutral-10 text-black-neutral">
            <td colSpan={ 6 } className="flex justify-between pl-spacing-regular-20">
              <h2 className="text-h2 text-black-neutral">Data de admissão</h2>
              <h3 className="text-h3 text-black-neutral">01/01/0001</h3>
            </td>
          </tr>
          <tr className="border-b border-dashed border-b-gray-neutral-10 text-black-neutral">
            <td colSpan={ 6 } className="flex justify-between pl-spacing-regular-20">
              <h2 className="text-h2 text-black-neutral">Telefone</h2>
              <h3 className="text-h3 text-black-neutral">+55 (00) 00000-000</h3>
            </td>
          </tr>
        </>
      )}
    </>
  );
}

export default TableBody;
