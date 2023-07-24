import ProductCard from '../components/ProductCard';
import data from '../data.json';

const Products = () => {
  return (
    <div className="container">
      <h1 className="mb-1">Catálogo de Productos</h1>
      <div className="products-grid">
        {data.products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
