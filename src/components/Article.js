import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import PostMeta from './PostMeta';
import PostTitle from './PostTitle';
import Excerpt from './Excerpt';

const StyledArticle = styled.article`
  margin: 3.5rem 0;
`;

const Article = ({ title, path, date, timeToRead, tags, excerpt }) => (
  <StyledArticle>
    <PostTitle title={title} path={path} />
    <PostMeta date={date} timeToRead={timeToRead} tags={tags} />
    <Excerpt excerpt={excerpt} />
  </StyledArticle>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Article;
