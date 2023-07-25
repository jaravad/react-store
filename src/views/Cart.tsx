import { useContext } from 'react';
import { StoreContext } from '../utils/contexts';
import { AppStateType } from '../types';

const Cart = () => {
  const state: AppStateType = useContext(StoreContext);
  return (
    <div className="container pt-1">
      <h1 className="mb-1">Carrito</h1>
      <div className="cart__container">
        <ul>
          {state.cart.items.map((item) => {
            return (
              <li key={item.id}>
                {item.name} {item.amount}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
