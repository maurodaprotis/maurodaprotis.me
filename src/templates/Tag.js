import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Content from '../components/Content';
import SectionTitle from '../components/SectionTitle';
import Subline from '../components/Subline';
import ArticleList from '../components/ArticleList';

const TagTemplate = ({ data, pageContext, location }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node);
  return (
    <Layout>
      <Wrapper>
        <Helmet title={`${tag} | ${config.siteTitle}`} />
        <Content>
          <SectionTitle>{tag}</SectionTitle>
          <Subline sectionTitle>
            {posts.length} post tagged with {tag} (See{' '}
            <Link to="/tags">all tags</Link> )
          </Subline>
          <ArticleList posts={posts} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

TagTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const tagTemplateQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;

export default TagTemplate;
