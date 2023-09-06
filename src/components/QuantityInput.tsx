import { MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';

interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({ quantity, onIncrease, onDecrease }: QuantityInputProps) {
  return (
    <div className="bg-button-dark p-2 rounded-md flex flex-row justify-between items-center gap-1">
      <button onClick={onDecrease} disabled={quantity <= 1}>
        <MdOutlineRemove size={18} className="text-red" />
      </button>

      <input
        type="number"
        value={quantity}
        readOnly
        className="w-6 bg-transparent text-title text-center font-alt leading-tight border-none focus:outline-none"
      />

      <button onClick={onIncrease}>
        <MdOutlineAdd size={18} className="text-red" />
      </button>
    </div>
  );
}
