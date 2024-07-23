import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import QueryProvider from './contexts/QueryProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryProvider>
      <App />
    </QueryProvider>
  </BrowserRouter>,
);
