'use client';

import { Fragment, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa6';

export default function Modal() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const cancelButtonRef = useRef(null);

  function handleBackToHomePage() {
    setOpen(false);
    router.push('/');
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-gray-500 bg-opacity-75 fixed inset-0 transition-opacity" />
        </Transition.Child>

        <div className="w-screen mx-auto px-6 fixed inset-0 z-10 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="max-w-sm rounded-lg bg-white text-left flex flex-col items-center justify-end relative transform overflow-hidden shadow-xl transition-all">
                <div className="bg-white p-6">
                  <div className="flex flex-col items-centern gap-5">
                    <div className="h-12 w-12 bg-green/20 rounded-full mx-auto flex flex-shrink-0 items-center justify-center">
                      <FaCheck className="h-6 w-6 text-[#16a34a]" aria-hidden="true" />
                    </div>

                    <div className="text-center space-y-2">
                      <Dialog.Title as="h3" className="text-title text-lg font-bold leading-6">
                        Pedido finalizado
                      </Dialog.Title>

                      <p className="text-text leading-tight">
                        Obrigado! Agora é só aguardar que em breve o seu pedido chegará até você.
                      </p>

                      <p className="text-text leading-tight">
                        Previsão de entrega: <span className="font-semibold">30 min - 45 min</span>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-orange text-white mt-5 px-3 py-2 font-semibold rounded-md justify-center hover:bg-orange/70"
                    onClick={handleBackToHomePage}
                    ref={cancelButtonRef}
                  >
                    Retornar à Home
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
