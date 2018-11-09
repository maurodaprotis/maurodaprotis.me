const colors = {
  base: '#222',
  primary: '#FF0000',
  secondary: '#7300FF',
  bg: '#FFFFFF', // Background color
  white: '#FFFFFF',
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
};

const breakpoints = {
  sm: '685px',
  md: '900px',
  lg: '1100px',
};

const layout = {
  maxWidth: '1200px',
};

const transitions = {
  normal: '0.5s',
};

const fontSize = {
  small: '0.9rem',
};

const theme = {
  colors,
  breakpoints,
  layout,
  transitions,
  fontSize,
};

export default theme;
