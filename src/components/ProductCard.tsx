import styled from 'styled-components';
import { memo, useState } from 'react';

import { AppStateType, ProductCardProps } from '../types';
import { formatCurrency } from '../utils';
import { useContext } from 'react';
import { StoreContext, StoreDispatchContext } from '../utils/contexts';
import Spinner from './Spinner';

const StyledArticle = styled.article`
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid #e4e4e4;
  button {
    margin-top: 0.3rem;
  }
`;

const ProductCard = ({ name, price, amount, id }: ProductCardProps) => {
  const dispatch = useContext(StoreDispatchContext);
  const state: AppStateType = useContext(StoreContext);

  const [loading, setLoading] = useState(false);

  let outOfStock = false;
  const cartItems = state.cart.items;

  const productInCart = cartItems.find((item) => item.id === id);
  if (productInCart && productInCart.amount >= amount) {
    outOfStock = true;
  }

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'addToCart', payload: { name, price, amount, id } });
      setLoading(false);
    }, 1500);
  };

  return (
    <StyledArticle>
      <h3>{name}</h3>
      <h4>{formatCurrency(price)}</h4>
      <p>
        <small>
          {amount} disponible{amount > 1 ? 's' : ''}
        </small>
      </p>
      <button
        className="btn"
        onClick={handleClick}
        disabled={outOfStock || loading}
      >
        {loading && <Spinner className="absolute-center" />}
        <small style={{ visibility: loading ? 'hidden' : 'visible' }}>
          Añadir al carrito
        </small>
      </button>
    </StyledArticle>
  );
};

export default memo(ProductCard);
