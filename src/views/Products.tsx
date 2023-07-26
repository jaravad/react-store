import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { StoreContext } from '../utils/contexts';
import { ProductType } from '../types';
import EmptyCallToAction from '../components/EmptyCallToAction';

const Products = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="container pt-1">
      <h1 className="mb-1">Productos</h1>
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((product: ProductType) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      ) : (
        <EmptyCallToAction
          message="Aun no has agregado productos."
          buttonText="Agregar productos"
          redirectPath="/add-product"
        />
      )}
    </div>
  );
};

export default Products;
