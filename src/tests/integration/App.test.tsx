import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import EmployeeProvider from '../../context/EmployeeProvider';
import { employees } from '../mocks/employees';
import { employee } from '../mocks/employee';
import { twoEmployees } from '../mocks/twoEmployees';

describe('Table tests', () => {
  beforeEach(() => {
    const employeesMock = { json: async () => employees } as Response;
    global.fetch = vi.fn().mockResolvedValueOnce(employeesMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Should render a Header component with Be logo.', async () => {
    renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    await waitFor(() => {
      const header = screen.getByRole('banner');
      const headerLogo = screen.getByAltText(/be mobile logo/i);

      expect(header).toBeInTheDocument();
      expect(header).toContainElement(headerLogo);
      expect(headerLogo).toBeVisible();
    });
  });

  it('Should render SearchBar component.', async () => {
    const employeesMock = { json: async () => twoEmployees } as Response;
    global.fetch = vi.fn().mockResolvedValueOnce(employeesMock);

    const { user } = renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    await waitFor(async () => {
      const headingTagEmployees = screen.getByRole('heading', { level: 1 });
      const searchBar = screen.getByRole('textbox');
      const searchIcon = screen.getByAltText(/search icon magnifying glass/i);

      expect(headingTagEmployees).toBeInTheDocument();
      expect(headingTagEmployees).toHaveTextContent(/funcionários/i);
      expect(searchBar).toBeInTheDocument();
      expect(searchIcon).toBeInTheDocument();
      expect(searchBar).toHaveAttribute('placeholder', 'Pesquisar');

      const maria = screen.getByText(/maria/i);
      const roberto = screen.getByText(/roberto/i);

      expect(maria).toBeInTheDocument();
      expect(roberto).toBeInTheDocument();

      await user.type(searchBar, 'Maria');
      expect(roberto).not.toBeInTheDocument();
    });
  });

  it('Should render Table component.', async () => {
    renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    const columnheaderNames = ['foto', 'nome', 'cargo', 'data de admissão', 'telefone'];
    const table = screen.getByRole('table');
    const tableHeads = screen.getAllByRole('columnheader');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(table).toBeInTheDocument();
    expect(tableHeads).toHaveLength(6);

    tableHeads.forEach((columnheader) => {
      expect(table).toContainElement(columnheader);
    });

    tableHeads.forEach((columnheader, index) => {
      expect(columnheader).toHaveTextContent(new RegExp(columnheaderNames[index], 'i'));
    });

    await waitFor(() => {
      const tableRows = screen.getAllByRole('row');
      expect(tableRows).toHaveLength(6);
    });
  });

  it('Should render Error component when fail to fetch.', async () => {
    global.fetch = vi.fn().mockRejectedValueOnce(new Error('Failed to fetch'));

    const { user } = renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    await waitFor(async () => {
      const erroIcon = screen.getByAltText(/error/i);
      const erroMessage = screen.getByText(/erro ao buscar os funcionários.../i);

      expect(erroMessage).toBeInTheDocument();
      expect(erroIcon).toBeInTheDocument();
    });
  });

  it('Should render Loading component.', async () => {
    renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    await waitFor(() => {
      const loading = screen.getByText(/carregando/i);
      expect(loading).toBeInTheDocument();
    });
  });

  it('Should render RowDetail component.', async () => {
    const employeeMock = { json: async () => employee } as Response;

    global.fetch = vi.fn().mockResolvedValueOnce(employeeMock);

    const { user } = renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    await waitFor(async () => {
      const showDetailBtn = screen.getByRole('img', { name: /pointing button to hide ro show row details/i });
      const jobTitle = screen.getAllByText(/back-end/i);

      expect(jobTitle).toHaveLength(1);

      await user.click(showDetailBtn);
      const jobTitleAfterClick = screen.getAllByText(/back-end/i);
      expect(jobTitleAfterClick).toHaveLength(2);
    });
  });
});
