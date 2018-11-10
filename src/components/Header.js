import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  text-align: center;
  padding: 1.25rem 0rem;

  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
  }

  a {
    transform: skew(-7deg);
    text-decoration: none;
    font-style: italic;
    display: inline-block;
    padding: 0.25rem 0.5rem;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    &:hover {
      color: ${props => props.theme.colors.white};
      box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <h1>
      <Link to="/">Maurodaprotis</Link>
    </h1>
  </StyledHeader>
);

export default Header;
