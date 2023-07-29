import { render, screen } from '@testing-library/react';
import CartProductCard from '../../components/CartProductCard';
import TestProviders from '../../components/TestProviders';

test('renders product card with correct props', () => {
  const product = {
    name: 'Test Product',
    price: 10,
    amount: 5,
    id: 123,
  };

  const initialStore = { products: [], cart: { items: [], total: 0 } };

  render(
    <TestProviders initialStore={initialStore} initialDarkMode={false}>
      <CartProductCard {...product} />
    </TestProviders>
  );

  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('Precio: $ 10')).toBeInTheDocument();
  expect(screen.getByText('$ 50')).toBeInTheDocument();
});
