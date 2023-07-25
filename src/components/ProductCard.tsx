import styled from 'styled-components';
import { memo } from 'react';

import { ProductCardProps } from '../types';
import { formatCurrency } from '../utils';
import { useContext } from 'react';
import { StoreDispatchContext } from '../utils/contexts';

const StyledArticle = styled.article`
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid #e4e4e4;
`;

const ProductCard = ({ name, price, amount, id }: ProductCardProps) => {
  const dispatch = useContext(StoreDispatchContext);

  const handleClick = () => {
    dispatch({ type: 'addToCart', payload: { name, price, amount, id } });
  };

  return (
    <StyledArticle>
      <h3>{name}</h3>
      <h4>{formatCurrency(price)}</h4>
      <small>
        {amount} disponible{amount > 1 ? 's' : ''}
      </small>
      <button className="btn" onClick={handleClick}>
        <small>Añadir al carrito</small>
      </button>
    </StyledArticle>
  );
};

export default memo(ProductCard);
