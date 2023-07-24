import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import data from '../data.json';

const Products = () => {
  const [products] = useState(data.products);
  return (
    <div className="container pt-1">
      <h1 className="mb-1">Productos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
