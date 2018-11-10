import React from 'react';
import styled from 'react-emotion';
import { Link, graphql } from 'gatsby';
import { media } from '../utils/media';

import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Content from '../components/Content';
import SectionTitle from '../components/SectionTitle';
import ArticleList from '../components/ArticleList';

const Hero = styled.div`
  grid-column: 2;
  padding: 4rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};
  p {
    font-size: 1.68rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log(data);
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node);
  return (
    <Layout>
      <Wrapper>
        <Hero>
          <h1>Hi.</h1>
          <p>
            I&apos;m Mauro Daprotis, a freelance Web Developer with three years
            of industry experience, specializing in developing Javascript web
            apps.
          </p>
        </Hero>
        <Content>
          <SectionTitle>Latest posts</SectionTitle>
          <ArticleList posts={posts} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export const blogPostsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM D, YYYY")
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
