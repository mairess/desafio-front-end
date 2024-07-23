type ColSpanType = {
  colSpan: number;
};

function Loading({ colSpan }: ColSpanType) {
  return (

    <tbody>
      <tr>
        <td colSpan={ colSpan }>
          <div className="flex flex-col items-center justify-center p-spacing-regular-28">
            <div className="border-4 border-t-4 rounded-full border-gray-neutral-20 border-t-secondary size-8 animate-spin" />
            Loading...
          </div>
        </td>
      </tr>
    </tbody>

  );
}

export default Loading;
