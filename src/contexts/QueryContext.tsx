import { createContext } from 'react';
import { EmployeeType } from '../types';

type ContextType = {
  employees: EmployeeType[];
  query: string;
  error: string | null;
  loading: boolean;
  setColSpan: (value: number) => void;
  colSpan: number;
  refresh: boolean;
  toggleRefresh: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const QueryContext = createContext({} as ContextType);

export default QueryContext;
