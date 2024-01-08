export const zipCodeMask = (zipCode: string) => {
  return zipCode?.replace(/(\d{5})(\d)/, '$1-$2');
};
