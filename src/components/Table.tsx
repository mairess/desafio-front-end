import { useContext, useEffect, useState } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { EmployeeType } from '../types';
import Loading from './Loading';
import Error from './Error';
import QueryContext from '../contexts/QueryContext';
import { removeSpecialChar } from '../utils/handleSpecialChar';

function Table() {
  const { toggleRefresh, setColSpan, colSpan, loading, error, employees, query } = useContext(QueryContext);
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeType[]>(employees);

  useEffect(() => {
    const updateColSpan = () => {
      if (window.innerWidth >= 1024) {
        setColSpan(5);
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

  const filtered = employees.filter((employee) => (
    removeSpecialChar(employee.job).includes(removeSpecialChar(query))
    || removeSpecialChar(employee.name).includes(removeSpecialChar(query))
    || removeSpecialChar(employee.phone).includes(removeSpecialChar(query))
  ));

  useEffect(() => {
    setFilteredEmployees(filteredEmployees);
  }, [query]);

  return (

    <table className="w-full text-left table-fixed shadow-custom-10">

      <TableHead />

      {loading && (<Loading colSpan={ colSpan } />)}
      {error && (<Error colSpan={ colSpan } onRefresh={ toggleRefresh } error={ error } />)}

      {!error && !loading && (
        <tbody>
          {filtered.map((employee: EmployeeType) => (<TableRow employee={ employee } key={ employee.id } />))}
        </tbody>
      )}

    </table>
  );
}

export default Table;
