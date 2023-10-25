export function AddressForm() {
  return (
    <div className="w-full space-y-3">
      <div className="grid grid-cols-[280px_252px] gap-3">
        <input
          type="number"
          className="max-w-[200px] h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none col-span-full focus:border-orange placeholder:text-label transition-colors"
          placeholder="CEP"
        />

        <input
          type="text"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Cidade"
        />

        <input
          type="text"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Rua"
        />
      </div>

      <div className="grid grid-cols-[200px_220px_100px] gap-3">
        <input
          type="text"
          className="col h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Bairro"
        />

        <input
          type="text"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Complemento"
        />

        <input
          type="number"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Número"
        />
      </div>

      <div className="grid grid-cols-[240px_220px_60px] gap-3">
        <input
          type="text"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="Nome"
        />

        <input
          type="number"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="N.º de telefone"
        />

        <input
          type="text"
          className="h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
          placeholder="UF"
        />
      </div>
    </div>
  );
}
