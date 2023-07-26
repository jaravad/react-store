import { CartItem } from '../types';

export const formatCurrency = (amount: number): string => {
  return Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getCartTotal = (items: Array<CartItem>): number => {
  const total = items.reduce((sum, current) => {
    return sum + current.price * current.amount;
  }, 0);
  return total;
};
