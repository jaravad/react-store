import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyCallToAction = ({ message, buttonText, redirectPath }) => {
  return (
    <StyledDiv>
      <p className="mb-1">{message}</p>
      <Link to={redirectPath} className="btn">
        {buttonText}
      </Link>
    </StyledDiv>
  );
};

export default EmptyCallToAction;
