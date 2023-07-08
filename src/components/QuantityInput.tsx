import { CgSize } from 'react-icons/cg';
import { MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';

interface QuantityInput {
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

export function QuantityInput({ quantity, handleIncrease, handleDecrease }: QuantityInput) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-button-dark p-2 rounded-md flex flex-row justify-between items-center gap-1">
        <button onClick={handleDecrease} disabled={quantity <= 1}>
          <MdOutlineRemove size={18} className="text-red" />
        </button>

        <input
          type="number"
          value={quantity}
          readOnly
          className="w-6 bg-transparent text-title text-center font-alt leading-tight border-none focus:outline-none"
        />

        <button onClick={handleIncrease}>
          <MdOutlineAdd size={18} className="text-red" />
        </button>
      </div>

      <button
        aria-label="Select Size"
        className="bg-orange p-2 rounded-md flex justify-center items-center"
      >
        <CgSize size={20} className="text-white" />
      </button>
    </div>
  );
}
