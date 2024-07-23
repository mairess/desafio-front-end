import { useEffect, useState } from 'react';
import EmployeeContext from './EmployeeContext';
import { EmployeeType } from '../types';
import fetchData from '../services/fetchData';

type EmployeeProviderProps = {
  children: React.ReactNode,
};

function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [query, setQuery] = useState<string>('');
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
      } catch (err) {
        setError('Erro ao buscar os funcionários...');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [refresh]);

  return (
    <EmployeeContext.Provider
      value={ {
        employees,
        setQuery,
        query,
        error,
        loading,
        setColSpan,
        colSpan,
        refresh,
        setRefresh,
      } }
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
