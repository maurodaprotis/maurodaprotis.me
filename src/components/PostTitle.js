import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';

const PostTitle = ({ title, path }) => (
  <h2>
    <Link to={path}>{title}</Link>
  </h2>
);

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default PostTitle;
