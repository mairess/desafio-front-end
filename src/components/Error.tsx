/* eslint-disable react/jsx-max-depth */
import iconErro from '../assets/iconError.svg';

type ColSpanType = {
  colSpan: number;
  onRefresh: () => void;
  error: string
};

function Error({ colSpan, onRefresh, error }: ColSpanType) {
  return (
    <tbody>
      <tr>
        <td colSpan={ colSpan }>
          <div className="flex flex-col items-center justify-center p-spacing-regular-28">
            <p className="flex flex-col items-center justify-center mb-4">
              <img className="size-8" src={ iconErro } alt="error" />
              {' '}
              {error}
            </p>
            <button
              onClick={ onRefresh }
              className="text-white rounded-lg py-spacing-little-08 px-spacing-regular-16 shadow-custom-10 bg-secondary hover:bg-primary"
            >
              Recarregar
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default Error;
