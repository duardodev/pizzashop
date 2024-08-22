import { MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';

interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({ quantity, onIncrease, onDecrease }: QuantityInputProps) {
  return (
    <div className="bg-orange-light/90 border border-orange/20 p-2 rounded-md flex flex-row justify-between items-center gap-1">
      <button type="button" onClick={onDecrease} disabled={quantity <= 1}>
        <MdOutlineRemove size={18} className="text-red" />
      </button>

      <input
        type="number"
        value={quantity}
        readOnly
        className="w-6 bg-transparent text-title text-center leading-tight border-none focus:outline-none"
      />

      <button type="button" onClick={onIncrease}>
        <MdOutlineAdd size={18} className="text-red" />
      </button>
    </div>
  );
}
