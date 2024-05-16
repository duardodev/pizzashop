import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '@/hooks/useCart';

import { confirmOrderFormValidationSchema, ConfirmOrderFormData } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Address } from '@/types/address';
import { zipCodeMask } from '@/utils/zip-code-mask';
import { phoneMask } from '@/utils/phone-mask';

export const useCheckout = () => {
  const { cleanCart } = useCart();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      zipCode: '',
      city: '',
      name: '',
      neighborhood: '',
      number: '',
      phone: '',
      paymentMethod: undefined,
    },
  });

  const { handleSubmit, watch, setValue, setError } = confirmOrderForm;

  const zipCode = watch('zipCode');
  const phone = watch('phone');

  function handleConfirmOrder() {
    try {
      setIsLoading(true);

      setTimeout(() => {
        setModalIsVisible(!modalIsVisible);
        cleanCart();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSetData = useCallback(
    (data: Address) => {
      setValue('city', data.localidade);
      setValue('neighborhood', data.bairro);
      setValue('street', data.logradouro);

      setError('city', { type: 'manual', message: '' });
      setError('neighborhood', { type: 'manual', message: '' });
      setError('street', { type: 'manual', message: '' });
    },
    [setValue, setError]
  );

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
        .then(res => res.json())
        .then(data => {
          handleSetData(data);
        });
    },
    [handleSetData]
  );

  useEffect(() => {
    const maskedZipCode = zipCodeMask(zipCode);
    const cleanedZipCode = maskedZipCode.replace(/[^0-9]/g, '');

    setValue('zipCode', maskedZipCode);

    if (cleanedZipCode.length === 8 && !/[a-zA-Z]/.test(cleanedZipCode)) {
      handleFetchAddress(cleanedZipCode);
    }
  }, [handleFetchAddress, setValue, zipCode]);

  useEffect(() => {
    setValue('phone', phoneMask(phone));
  }, [setValue, phone]);

  return {
    confirmOrderForm,
    handleSubmit,
    handleConfirmOrder,
    modalIsVisible,
    isLoading,
  };
};
