import { createContext } from 'react';
import { EmployeeType } from '../types';

type ContextType = {
  employees: EmployeeType[];
  setQuery: (value: string) => void;
  query: string;
  error: string | null;
  loading: boolean;
  setColSpan: (value: number) => void;
  colSpan: number;
  refresh: boolean;
  setRefresh: (value: boolean) => void
};

const EmployeeContext = createContext({} as ContextType);

export default EmployeeContext;
