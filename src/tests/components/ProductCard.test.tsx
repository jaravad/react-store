import { render, screen } from '@testing-library/react';
import ProductCard from '../../components/ProductCard';
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
      <ProductCard {...product} />
    </TestProviders>
  );

  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$ 10')).toBeInTheDocument();
  expect(screen.getByText('5 disponibles')).toBeInTheDocument();
});
