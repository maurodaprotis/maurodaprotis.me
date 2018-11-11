import React from 'react';
import styled from 'react-emotion';

const StyledFourOhFour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  h1 {
    transform: skew(-7deg);
    font-size: 4rem;
  }
  p {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const FourOhFour = () => (
  <StyledFourOhFour>
    <h1>404</h1>
    <p>Page not found</p>
  </StyledFourOhFour>
);

export default FourOhFour;
