import styled from 'styled-components';

import { ProductCardProps } from '../types';
import { formatCurrency } from '../utils';

const StyledArticle = styled.article`
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid #e4e4e4;
`;

const ProductCard = ({ name, price, amount }: ProductCardProps) => {
  return (
    <StyledArticle>
      <h3>{name}</h3>
      <h4>{formatCurrency(price)}</h4>
      <small>
        {amount} disponible{amount > 1 ? 's' : ''}
      </small>
    </StyledArticle>
  );
};

export default ProductCard;
