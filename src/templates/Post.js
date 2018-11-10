import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Seo from '../components/Seo';
import Content from '../components/Content';
import Subline from '../components/Subline';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Wrapper>
        <Seo postPath={post.frontmatter.path} post={post} postSeo />
        <Content>
          <Title>{post.frontmatter.title}</Title>
          <Subline>
            {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash;
            In{' '}
            {post.frontmatter.tags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </Subline>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
      </Wrapper>
    </Layout>
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
