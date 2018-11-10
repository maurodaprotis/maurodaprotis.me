import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

const ArticleList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Article
        key={post.id}
        title={post.frontmatter.title}
        path={post.frontmatter.path}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
        tags={post.frontmatter.tags}
        excerpt={post.excerpt}
      />
    ))}
  </div>
);

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticleList;
