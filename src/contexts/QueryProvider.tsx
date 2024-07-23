import { useEffect, useState } from 'react';
import QueryContext from './QueryContext';
import { EmployeeType } from '../types';
import fetchData from '../services/fetchData';

type QueryProviderProps = {
  children: React.ReactNode,
};

function QueryProvider({ children }: QueryProviderProps) {
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

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <QueryContext.Provider
      value={ {
        employees,
        query,
        error,
        loading,
        setColSpan,
        colSpan,
        refresh,
        toggleRefresh,
        handleInputChange,
      } }
    >
      {children}
    </QueryContext.Provider>
  );
}

export default QueryProvider;
