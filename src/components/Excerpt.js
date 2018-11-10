import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledExcerpt = styled.p`
  margin: 1rem 0;
`;

const Excerpt = ({ excerpt }) => <StyledExcerpt>{excerpt}</StyledExcerpt>;

Excerpt.propTypes = {
  excerpt: PropTypes.string.isRequired,
};

export default Excerpt;
