import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import EmployeeProvider from './context/EmployeeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </BrowserRouter>,
);
