export function AddressForm() {
  return (
    <div className="w-full space-y-3">
      <div className="grid grid-cols-1 gap-3">
        <input
          type="number"
          className="h-[42px] max-w-full sm:max-w-[210px] col-span-full bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="CEP"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Cidade"
        />

        <input
          type="text"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Bairro"
        />
      </div>

      <div className="grid grid-cols-12 gap-3">
        <input
          type="text"
          className="h-[42px] col-span-7 sm:col-span-8 bg-button-dark  text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Rua"
        />

        <input
          type="text"
          className="h-[42px] col-span-5 sm:col-span-4 bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Número"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          className="h-[42px] col-span-full bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Complemento"
        />

        <input
          type="text"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Nome"
        />

        <input
          type="number"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Telefone"
        />
      </div>
    </div>
  );
}
