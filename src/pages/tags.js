import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Content from '../components/Content';
import SectionTitle from '../components/SectionTitle';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <Wrapper>
      <Helmet title={`Tags | ${config.siteTitle}`} />
      <Content>
        <SectionTitle>Tags</SectionTitle>
        {group.map(tag => (
          <h3 key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Link> (
            {tag.totalCount})
          </h3>
        ))}
      </Content>
    </Wrapper>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const TAGS_PAGE_QUERY = graphql`
  query TAGS_PAGE_QUERY {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
