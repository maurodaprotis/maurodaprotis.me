import styled from 'react-emotion';
import { media } from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  padding: 3rem 6rem;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

export default Content;
