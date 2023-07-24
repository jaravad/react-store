export const formatCurrency = (amount: number) => {
  return Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(amount);
};
