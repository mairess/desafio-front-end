import { useEffect, useState } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import fetchData from '../services/fetchData';
import { EmployeeType } from '../types';
import Loading from './Loading';
import Error from './Error';

function Table() {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [colSpan, setColSpan] = useState<number>(3);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchData('http://localhost:3000/employees');
        setEmployees(data);
        console.log(data);
      } catch (err) {
        setError('Erro ao buscar os funcionários...');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [refresh]);

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

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

  return (

    <table className="w-full text-left table-fixed shadow-custom-10">

      <TableHead />

      {loading && (<Loading colSpan={ colSpan } />)}
      {error && (<Error colSpan={ colSpan } onRefresh={ toggleRefresh } error={ error } />)}

      {!error && !loading && (
        <tbody>
          {employees.map((employee: EmployeeType) => (<TableRow employee={ employee } key={ employee.id } />))}
        </tbody>
      )}

    </table>
  );
}

export default Table;
