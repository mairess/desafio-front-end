/* eslint-disable react/jsx-max-depth */
import elipse from '../assets/ellipse.svg';

function TableHead() {
  return (
    <table className="w-full h-12 rounded-tl rounded-tr table-fixed sm:text-left bg-gradient-primary">
      <thead className="text-white text-h2">
        <tr>
          <th>
            <div className="flex pl-spacing-regular-20">
              FOTO
            </div>
          </th>
          <th>NOME</th>
          <th className="hidden sm:table-cell">CARGO</th>
          <th className="hidden md:table-cell">DATA DE ADMISSÃO</th>
          <th className="hidden lg:table-cell">TELEFONE</th>
          <th className="lg:hidden">
            <div className="flex justify-end pr-spacing-regular-28">
              <img src={ elipse } alt="elipse icon to hide head column" />
            </div>
          </th>
        </tr>
      </thead>
    </table>
  );
}

export default TableHead;
