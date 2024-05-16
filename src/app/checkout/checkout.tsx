'use client';

import { FormProvider } from 'react-hook-form';
import { AddressForm } from '@/components/AddressForm';
import { PaymentMethodOptions } from '@/components/PaymentMethodOptions';
import { useCart } from '@/hooks/useCart';
import { useCheckout } from '@/hooks/useCheckout';
import { RiMapPinLine } from 'react-icons/ri';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { ImSpinner8 } from 'react-icons/im';
import Modal from '@/components/Modal';

export default function Checkout() {
  const { cartQuantity } = useCart();
  const { confirmOrderForm, handleConfirmOrder, handleSubmit, isLoading, modalIsVisible } =
    useCheckout();

  return (
    <FormProvider {...confirmOrderForm}>
      <section className="h-[90px] max-w-[1120px] mx-auto pt-24 px-6">
        <form
          onSubmit={handleSubmit(handleConfirmOrder)}
          className="py-[60px] flex items-start flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-10"
        >
          <div className="w-[520px] bg-card rounded-lg p-[38px] flex flex-col gap-7">
            <div className="relative flex max-[530px]:flex-col items-start gap-2 max-[530px]:gap-3">
              <RiMapPinLine size={20} className="absolute top-px -left-2 text-orange" />

              <div className="pl-5 space-y-1">
                <h2 className="text-title text-lg leading-tight">Endereço</h2>
                <p>Forneça-nos o endereço desejado para a entrega do seu pedido.</p>
              </div>
            </div>

            <AddressForm />
          </div>

          <div className="max-w-[500px] space-y-8">
            <div className="w-full bg-card rounded-lg p-8 flex flex-col gap-7">
              <div className="relative flex max-[530px]:flex-col items-start gap-2 max-[530px]:gap-3">
                <MdOutlineAttachMoney size={22} className="absolute top-px -left-2 text-green" />

                <div className="pl-5 space-y-1">
                  <h2 className="text-title text-lg leading-tight">Pagamento</h2>
                  <p>
                    Selecione uma forma de pagamento. O pagamento também pode ser feito na entrega.
                  </p>
                </div>
              </div>

              <PaymentMethodOptions />
            </div>

            <button
              type="submit"
              disabled={cartQuantity <= 0}
              className="w-full h-11 bg-red text-white text-sm font-bold uppercase rounded-md py-3 px-2 flex items-center justify-center enabled:hover:bg-red-dark transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <ImSpinner8 size={18} className="animate-spin" />
              ) : (
                <span>Finalizar pedido</span>
              )}
            </button>
          </div>

          {modalIsVisible ? <Modal /> : ''}
        </form>
      </section>
    </FormProvider>
  );
}
