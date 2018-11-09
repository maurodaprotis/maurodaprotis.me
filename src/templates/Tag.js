import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const TagTemplate = ({ data, pageContext, location }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node);
  return (
    <div>
      <h2>{tag}</h2>
      <p>{`Have ${posts.length} posts`}</p>
      <p>{location.href}</p>
    </div>
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
          excerpt
        }
      }
    }
  }
`;

export default TagTemplate;
