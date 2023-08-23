import { BsCash, BsCreditCard } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { RiMapPinLine } from 'react-icons/ri';
import { PiBankDuotone } from 'react-icons/pi';

import { PizzaSelected } from '@/components/PizzaSelected';

export default function Checkout() {
  return (
    <section className="max-w-[1120px] mx-auto mt-[60px]">
      <div className="flex justify-between gap-10">
        <div className="w-[600px] flex flex-col items-start gap-3">
          <h1 className="text-title text-lg font-bold">Complete seu pedido</h1>

          <div className="w-full bg-card rounded-lg p-8 flex flex-col gap-7">
            <div className="flex items-start gap-2">
              <RiMapPinLine size={22} className="text-orange" />

              <div>
                <h2 className="text-title text-lg font-alt leading-tight">Endereço</h2>
                <p className="text-text font-alt">
                  Informe o endereço onde deseja receber seu pedido.
                </p>
              </div>
            </div>

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
          </div>

          <div className="w-full bg-card rounded-lg p-8 flex flex-col gap-7">
            <div className="flex items-start gap-2">
              <MdOutlineAttachMoney size={22} className="text-green" />

              <div>
                <h2 className="text-title text-lg font-alt leading-tight">Pagamento</h2>
                <p className="text-text font-alt">
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar.
                </p>
              </div>
            </div>

            <div className="w-full flex gap-2.5">
              <button className="h-12 bg-button-dark text-text text-sm font-alt uppercase p-4 rounded border border-solid border-button-dark outline-none flex items-center justify-center gap-3 focus:border-green focus:bg-label/20 hover:bg-label/20 transition-colors duration-300">
                <BsCash size={17} className="text-green" />
                Dinheiro
              </button>

              <button className="h-12 bg-button-dark text-text text-sm font-alt uppercase p-4 rounded border border-solid border-button-dark outline-none flex items-center justify-center gap-3 focus:border-green focus:bg-label/20 hover:bg-label/20 transition-colors duration-300">
                <BsCreditCard size={17} className="text-green" />
                Cartão de débito
              </button>

              <button className="h-12 bg-button-dark text-text text-sm font-alt uppercase p-4 rounded border border-solid border-button-dark outline-none flex items-center justify-center gap-3 focus:border-green focus:bg-label/20 hover:bg-label/20 transition-colors duration-300">
                <PiBankDuotone size={19} className="text-green" />
                Cartão de crétido
              </button>
            </div>
          </div>
        </div>

        <div className="w-[480px] flex flex-col items-start gap-3">
          <h1 className="text-title text-lg font-bold">Pizzas selecionadas</h1>

          <div className="w-full bg-card rounded-lg p-8 flex flex-col gap-6">
            <PizzaSelected />

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-alt">Entrega</p>
                <p className="font-alt">R$ 8,00</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="font-alt">Total de itens</p>
                <p className="font-alt">R$ 19,90</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg font-alt font-bold">Total</p>
                <p className="text-lg font-alt font-bold">R$ 27,90</p>
              </div>
            </div>

            <button className="h-11 bg-red text-white text-sm font-alt font-bold uppercase rounded-md py-3 px-2 hover:bg-red-dark transition-colors duration-300">
              Confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
