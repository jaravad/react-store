import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border-left-color: white;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ className }) => {
  return <StyledDiv className={className} />;
};

export default Spinner;
