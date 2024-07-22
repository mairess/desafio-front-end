import { useEffect, useState } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import fetchData from '../services/fetchData';
import { EmployeeType } from '../types';

function Table() {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchData('http://localhost:3000/employees');
        setEmployees(data);
        console.log(data);
      } catch (err) {
        setError('Failed to fetch employees...');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (

    <table className="w-full text-left table-fixed shadow-custom-10">

      <TableHead />

      {(loading || error) ? (<div className="ml-spacing-regular-20">{loading ? 'Loading...' : error}</div>) : (
        <tbody>
          {employees.map((employee: EmployeeType) => (<TableRow employee={ employee } key={ employee.id } />))}
        </tbody>
      )}

    </table>
  );
}

export default Table;
