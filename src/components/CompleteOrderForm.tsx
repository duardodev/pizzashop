import { MdOutlineAttachMoney } from 'react-icons/md';
import { RiMapPinLine } from 'react-icons/ri';
import { AddressForm } from './AddressForm';
import { PaymentMethodOptions } from './PaymentMethodOptions';

export function CompleteOrderForm() {
  return (
    <div className="w-[620px] flex flex-col items-start gap-3">
      <h1 className="text-title text-xl font-extrabold">Detalhes da entrega</h1>

      <div className="w-full bg-card rounded-lg p-[38px] flex flex-col gap-7">
        <div className="flex max-[530px]:flex-col items-start gap-2 max-[530px]:gap-3">
          <RiMapPinLine size={22} className="text-orange" />

          <div>
            <h2 className="text-title text-lg leading-tight">Endereço</h2>
            <p className="text-text">Informe o endereço onde deseja receber seu pedido.</p>
          </div>
        </div>

        <AddressForm />
      </div>

      <div className="w-full bg-card rounded-lg p-8 flex flex-col gap-7">
        <div className="flex max-[530px]:flex-col items-start gap-2 max-[530px]:gap-3">
          <MdOutlineAttachMoney size={22} className="text-green" />

          <div>
            <h2 className="text-title text-lg leading-tight">Pagamento</h2>
            <p className="text-text">Escolha a forma que deseja pagar.</p>
          </div>
        </div>

        <PaymentMethodOptions />
      </div>
    </div>
  );
}
