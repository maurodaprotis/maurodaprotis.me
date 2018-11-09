import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Seo postSEO post={post} postPath={post.frontmatter.path} />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.excerpt}</p>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`;

export default Post;
