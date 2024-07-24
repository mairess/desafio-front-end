import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import EmployeeProvider from '../../context/EmployeeProvider';

describe('Table tests', () => {
  it('Should render a header with Be logo.', () => {
    renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    const header = screen.getByRole('banner');
    const headerLogo = screen.getByAltText(/be mobile logo/i);

    expect(header).toBeInTheDocument();
    expect(header).toContainElement(headerLogo);
    expect(headerLogo).toBeVisible();
  });

  it('Should render SearchBar component.', () => {
    renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    const headingTagEmployees = screen.getByRole('heading', { level: 1 });
    const searchBar = screen.getByRole('textbox');
    const searchIcon = screen.getByAltText(/'search icon magnifying glass'/i);

    expect(headingTagEmployees).toBeInTheDocument();
    expect(headingTagEmployees).toHaveTextContent(/funcionários/i);
    expect(searchBar).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(searchBar).toHaveAttribute('placeholder', 'Pesquisar');
  });

  it.only('Should render Table component.', async () => {
    renderWithRouter(
      <EmployeeProvider>
        <App />
      </EmployeeProvider>,
    );

    const columnheaderNames = ['foto', 'nome', 'cargo', 'data de admissão', 'telefone'];

    const table = screen.getByRole('table');
    const tableHeads = screen.getAllByRole('columnheader');

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
      expect(tableRows).toHaveLength(10);
    });
    screen.debug();
  });
});
