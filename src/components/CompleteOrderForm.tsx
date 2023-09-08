import { MdOutlineAttachMoney } from 'react-icons/md';
import { RiMapPinLine } from 'react-icons/ri';
import { AddressForm } from './AddressForm';
import { PaymentMethodOptions } from './PaymentMethodOptions';

export function CompleteOrderForm() {
  return (
    <div className="w-[600px] flex flex-col items-start gap-3">
      <h1 className="text-title text-lg font-bold">Complete seu pedido</h1>

      <div className="w-full bg-card rounded-lg p-8 flex flex-col gap-7">
        <div className="flex items-start gap-2">
          <RiMapPinLine size={22} className="text-orange" />

          <div>
            <h2 className="text-title text-lg font-alt leading-tight">Endereço</h2>
            <p className="text-text font-alt">Informe o endereço onde deseja receber seu pedido.</p>
          </div>
        </div>

        <AddressForm />
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

        <PaymentMethodOptions />
      </div>
    </div>
  );
}
