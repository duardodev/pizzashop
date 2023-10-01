import Image from 'next/image';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { RiMapPinLine } from 'react-icons/ri';
import { RxLapTimer } from 'react-icons/rx';

import DeliveryIllustration from '../../../public/delivery-illustration-2.svg';

export default function Success() {
  return (
    <section className="max-w-[1120px] mx-auto mt-[60px]">
      <div className="flex justify-between">
        <div className="space-y-7">
          <div>
            <h1 className="text-red text-3xl font-extrabold">Seu pedido foi confirmado!</h1>
            <p className="mt-1 text-lg">
              Agora, basta aguardar e em breve seu pedido chegará até você.
            </p>
          </div>

          <div className="w-[524px] bg-card p-10 rounded-t-[48px] rounded-br-[48px] flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="h-[34px] w-[34px] p-2 bg-orange rounded-full flex items-center justify-center">
                <RiMapPinLine size={18} className="text-white" />
              </div>

              <p className="max-w-[310px] text-title leading-tight">
                Entrega em{' '}
                <span className="font-bold">
                  Rua João Daniel Martinelli, 102 Farrapos - Salvador, BA
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-[34px] w-[34px] p-2 bg-red rounded-full flex items-center justify-center">
                <RxLapTimer size={16} className="text-white" />
              </div>

              <div>
                <p className="text-title leading-tight">Previsão de entrega</p>
                <p className="text-title font-bold leading-tight">20 min - 30 min</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-[34px] w-[34px] p-2 bg-green rounded-full flex items-center justify-center">
                <MdOutlineAttachMoney size={18} className="text-white" />
              </div>

              <div>
                <p className="text-title leading-tight">Pagamento na entrega</p>
                <p className="text-title font-bold leading-tight">Cartão de Crédito</p>
              </div>
            </div>
          </div>
        </div>

        <Image src={DeliveryIllustration} height={372} width={372} alt="Ilustração de entrega" />
      </div>
    </section>
  );
}
