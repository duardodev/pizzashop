export function AddressForm() {
  return (
    <div className="w-full grid grid-cols-[302px_222px] gap-x-3 gap-y-4">
      <input
        type="text"
        className="h-[42px] bg-button-dark text-text font-alt p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
        placeholder="Cidade"
      />

      <input
        type="text"
        className="h-[42px] bg-button-dark text-text font-alt p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
        placeholder="Bairro"
      />

      <input
        type="text"
        className="h-[42px] bg-button-dark text-text font-alt p-3 rounded border border-solid border-button-dark outline-none col-span-2 focus:border-orange placeholder:text-label transition-colors"
        placeholder="Rua"
      />

      <input
        type="number"
        className="h-[42px] bg-button-dark text-text font-alt p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
        placeholder="Número"
      />

      <input
        type="text"
        className="h-[42px] bg-button-dark text-text font-alt p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
        placeholder="Complemento"
      />
    </div>
  );
}
