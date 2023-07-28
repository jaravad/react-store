import { memo } from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../utils';
import { useContext } from 'react';
import { DarkModeContext, StoreDispatchContext } from '../utils/contexts';

const StyledArticle = styled.article<{ $darkMode: boolean }>`
  border-radius: 6px;
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.$darkMode ? '#6d6d6d' : '#e4e4e4')};
  margin-bottom: 0.8rem;
  h4 {
    text-align: right;
  }
  .total-container {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CartProductCard = ({ name, amount, price, id }) => {
  const dispatch = useContext(StoreDispatchContext);
  const { darkMode } = useContext(DarkModeContext);

  const handleDeleteClick = () => {
    dispatch({ type: 'deleteFromCart', payload: id });
  };

  return (
    <StyledArticle $darkMode={darkMode}>
      <h3>{name}</h3>
      <small>
        <p>Precio: {formatCurrency(price)}</p>
      </small>
      <small>
        <p>Cantidad: {amount}</p>
      </small>
      <div className="total-container">
        <button className="btn btn--sm btn--danger" onClick={handleDeleteClick}>
          Eliminar
        </button>
        <h3>{formatCurrency(price * amount)}</h3>
      </div>
    </StyledArticle>
  );
};

export default memo(CartProductCard);
