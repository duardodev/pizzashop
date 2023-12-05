import { BsCash, BsCreditCard } from 'react-icons/bs';
import { PiBankDuotone } from 'react-icons/pi';

export function PaymentMethodOptions() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      <button
        type="button"
        className="h-12 bg-button-dark text-text text-sm uppercase p-4 rounded border border-solid border-button-dark outline-none flex items-center justify-center gap-3 focus:border-green focus:bg-label/20 hover:bg-label/20 transition-colors duration-300"
      >
        <BsCash size={17} className="text-green" />
        Dinheiro
      </button>

      <button
        type="button"
        className="w-full md:w-[202px] h-12 bg-button-dark text-text text-sm uppercase p-4 rounded border border-solid border-button-dark outline-none flex items-center justify-center gap-3 focus:border-green focus:bg-label/20 hover:bg-label/20 transition-colors duration-300"
      >
        <BsCreditCard size={17} className="text-green" />
        Cartão de débito
      </button>

      <button
        type="button"
        className="w-full md:w-[202px] h-12 bg-button-dark text-text text-sm uppercase p-4 rounded border border-solid border-button-dark outline-none flex items-center justify-center gap-3 focus:border-green focus:bg-label/20 hover:bg-label/20 transition-colors duration-300"
      >
        <PiBankDuotone size={19} className="text-green" />
        Cartão de crétido
      </button>
    </div>
  );
}
