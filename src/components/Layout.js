import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';

import theme from '../../config/Theme';
import { media } from '../utils/media';

import Header from './Header';
import Seo from './Seo';
import Footer from './Footer';

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.fast};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }
  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
  >
    {data => (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Seo />
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </Fragment>
      </ThemeProvider>
    )}
  </StaticQuery>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
