export const phoneMask = (phone: string) => {
  const noMask = phone.replace(/\D/g, '');
  const { length } = noMask;

  if (length <= 11) {
    return noMask.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
  }
  return phone;
};
