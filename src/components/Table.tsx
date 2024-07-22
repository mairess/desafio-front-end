import TableHead from './TableHead';
import TableRow from './TableRow';

function Table() {
  return (
    <table className="w-full text-left rounded-tl rounded-tr table-fixed">
      <TableHead />
      <tbody>
        <TableRow />
      </tbody>
    </table>
  );
}

export default Table;
