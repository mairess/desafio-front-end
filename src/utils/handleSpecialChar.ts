export const removeSpecialChar = (data: string) => {
  return data.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
};
