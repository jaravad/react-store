import { useContext } from 'react';
import { StoreContext } from '../utils/contexts';
import { AppStateType } from '../types';
import CartProductCard from '../components/CartProductCard';
import { formatCurrency } from '../utils';
import { Link } from 'react-router-dom';

const Cart = () => {
  const state: AppStateType = useContext(StoreContext);
  const total = state.cart.total;
  const items = state.cart.items;
  return (
    <div className="container pt-1">
      <h1 className="mb-1">Carrito</h1>
      <div className="cart__container">
        {items.length > 0 ? (
          <>
            {items.map((item) => {
              return <CartProductCard key={item.id} {...item} />;
            })}
            {total > 0 ? (
              <div className="total-container mb-1">
                <h2>Total</h2>
                <h2>{formatCurrency(total)}</h2>
              </div>
            ) : null}
            <button className="btn btn--full">Comprar</button>
          </>
        ) : (
          <div className="cart__empty-group">
            <p className="mb-1">Aun no tienes productos en el carrito.</p>
            <Link to="/products" className="btn">
              Explorar productos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
