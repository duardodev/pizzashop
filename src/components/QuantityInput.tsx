'use client';

import { useState } from 'react';
import { MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';

export function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity(quantity => quantity + 1);
  }

  function handleDecrease() {
    setQuantity(quantity => quantity - 1);
  }

  return (
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
  );
}
