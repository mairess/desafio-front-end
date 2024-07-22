/* eslint-disable react/jsx-max-depth */
import elipse from '../assets/ellipse.svg';

function TableHead() {
  return (
    <thead className="h-12 text-white text-h2 bg-gradient-primary shadow-custom-00">
      <tr>
        <th className="rounded-tl-lg pl-spacing-regular-20 ">FOTO</th>
        <th className="text-center sm:text-left">NOME</th>
        <th className="hidden sm:table-cell">CARGO</th>
        <th className="hidden md:table-cell">DATA DE ADMISSÃO</th>
        <th className="hidden rounded-tr-lg lg:table-cell">TELEFONE</th>
        <th className="rounded-tr-lg lg:hidden">
          <div className="flex justify-end pr-spacing-regular-28">
            <img src={ elipse } alt="elipse icon to hide head column" />
          </div>
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
