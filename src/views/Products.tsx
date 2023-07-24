import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { StoreContext } from '../utils/contexts';
import { ProductType } from '../types';

const Products = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="container pt-1">
      <h1 className="mb-1">Productos</h1>
      <div className="products-grid">
        {products.map((product: ProductType) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
