import { useContext } from 'react';
import { StoreContext, StoreDispatchContext } from '../utils/contexts';
import { AppStateType } from '../types';
import CartProductCard from '../components/CartProductCard';
import { formatCurrency } from '../utils';
import EmptyCallToAction from '../components/EmptyCallToAction';

const Cart = () => {
  const state: AppStateType = useContext(StoreContext);
  const dispatch = useContext(StoreDispatchContext);
  const total = state.cart.total;
  const items = state.cart.items;

  const handlePurchaseClick = () => {
    if (items.length > 0) {
      dispatch({ type: 'completePurchase', payload: items });
    }
  };

  return (
    <div className="container pt-1 pb-2">
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
            <button className="btn btn--full" onClick={handlePurchaseClick}>
              Comprar
            </button>
          </>
        ) : (
          <EmptyCallToAction
            message="Aun no tienes productos en el carrito."
            buttonText="Explorar productos"
            redirectPath="/products"
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
