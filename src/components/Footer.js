import React from 'react';
import styled from 'react-emotion';

import Twitter from './styles/icons/Twitter';
import Instagram from './styles/icons/Instagram';
import DevTo from './styles/icons/DevTo';
import Medium from './styles/icons/Medium';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;
  padding: 1.25rem 0rem;

  & > * {
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <a
      title="Twitter"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/maurodaprotis"
    >
      <Twitter height={36} width={36} />
    </a>
    <a
      title="Instagram"
      target="_blank"
      rel="noopener noreferrer"
      href="https://instagram.com/maurodaprotis"
    >
      <Instagram height={34} width={34} />
    </a>
    <a
      title="Dev.to"
      target="_blank"
      rel="noopener noreferrer"
      href="https://dev.to/maurodaprotis"
    >
      <DevTo height={36} width={36} />
    </a>
    <a
      title="Medium"
      target="_blank"
      rel="noopener noreferrer"
      href="https://medium.com/@maurodaprotis"
    >
      <Medium height={32} width={32} />
    </a>
  </StyledFooter>
);

export default Footer;
