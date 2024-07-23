import { useContext, useEffect } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { EmployeeType } from '../types';
import Loading from './Loading';
import Error from './Error';
import EmployeeContext from '../context/EmployeeContext';
import { removeSpecialChar } from '../utils/handleSpecialChar';

function Table() {
  const { loading, error, employees, query } = useContext(EmployeeContext);

  const filteredEmployees = employees.filter((employee) => (
    removeSpecialChar(employee.job).includes(removeSpecialChar(query))
    || removeSpecialChar(employee.name).includes(removeSpecialChar(query))
    || removeSpecialChar(employee.phone).includes(removeSpecialChar(query))
  ));

  return (

    <table className="w-full text-left table-fixed shadow-custom-10">

      <TableHead />

      {loading && (<Loading />)}
      {error && (<Error />)}

      {!error && !loading && (
        <tbody>
          {filteredEmployees.map((employee: EmployeeType) => (<TableRow employee={ employee } key={ employee.id } />))}
        </tbody>
      )}

    </table>
  );
}

export default Table;
