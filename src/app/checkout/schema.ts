import * as zod from 'zod';

export const confirmOrderFormValidationSchema = zod
  .object({
    zipCode: zod.string().min(9, 'Informe um cep válido'),
    city: zod.string().min(1, 'Informe a cidade'),
    neighborhood: zod.string().min(1, 'Informe o bairro'),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.string().min(1, 'Informe o número do edifício'),
    name: zod.string().min(1, 'Informe seu nome'),
    telephone: zod.string().min(1, 'Informe o telefone para contato'),
    paymentMethod: zod.enum(['money', 'debit', 'credit'], {
      errorMap: () => {
        return { message: 'Informe o método de pagamento' };
      }
    })
  })
  .transform(field => ({
    zipCode: field.zipCode,
    city: field.city,
    neighborhood: field.neighborhood,
    street: field.street,
    number: field.number,
    name: field.name,
    telephone: field.telephone,
    paymentMethod: field.paymentMethod
  }));
