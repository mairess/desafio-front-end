/* eslint-disable react/jsx-max-depth */
import elipse from '../assets/ellipse.svg';

function TableHead() {
  return (
    <div className="w-full">
      <table className="w-full h-12 rounded-tl rounded-tr bg-gradient-primary">
        <thead className="text-white text-h2">
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th className="hidden sm:table-cell">CARGO</th>
            <th className="hidden md:table-cell">DATA DE ADMISSÃO</th>
            <th className="hidden lg:table-cell">TELEFONE</th>
            <th className="lg:hidden "><img src={ elipse } alt="elipse to hide head column" /></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default TableHead;
