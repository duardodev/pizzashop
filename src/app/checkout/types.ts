import { confirmOrderFormValidationSchema } from './schema';

import * as zod from 'zod';

type OrderFormData = zod.infer<typeof confirmOrderFormValidationSchema>;
export type ConfirmOrderFormData = OrderFormData;

export type AddressProps = {
  localidade: string;
  bairro: string;
  logradouro: string;
};
