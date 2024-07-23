type TableRowProps = {
  head: string,
  employeeData: string,
  colSpan: number,
  breakpoint: string,
  shadow?: string,
  margin?: string,
};

function TableDetail({ head, employeeData, colSpan, breakpoint, shadow = '', margin = '' }: TableRowProps) {
  return (
    <tr className={ `text-black-neutral ${shadow}` }>

      <td colSpan={ colSpan } className={ `px-spacing-regular-20 ${breakpoint}:hidden` }>

        <div className={ `flex justify-between border-b border-dashed border-b-gray-neutral-10 ${margin}` }>
          <h2 className="text-h2 text-black-neutral">{head}</h2>
          <h3 className="text-h3 text-black-neutral">{employeeData}</h3>
        </div>

      </td>

    </tr>
  );
}

export default TableDetail;
