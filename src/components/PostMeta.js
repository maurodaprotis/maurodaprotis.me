import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';

const StyledPostMeta = styled.div`
  p {
    margin: 0;
    color: ${props => props.theme.colors.grey.light};
  }
  a {
    margin-right: 0.5rem;
  }
`;

const PostMeta = ({ date, tags }) => (
  <StyledPostMeta>
    <p>
      <span>{date}</span>
      <span> — </span>
      <span>2 Min read</span>
      <span> — </span>
      {tags.map(tag => (
        <Link key={tag} to={`/tags/${tag}`}>
          {tag}
        </Link>
      ))}
    </p>
  </StyledPostMeta>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default PostMeta;
