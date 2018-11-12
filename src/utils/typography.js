import Typography from 'typography';

const config = require('../../config/SiteConfig');

const typography = new Typography({
  title: 'Mauro Daprotis',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.15,
  scaleRatio: 3,
  headerFontFamily: [config.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'serif'],
  headerWeight: 600,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['600', '400'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
  overrideStyles: () => ({
    a: {
      fontFamily: [config.headerFontFamily, 'sans-serif'].join(','),
    },
    button: {
      fontFamily: [config.headerFontFamily, 'sans-serif'].join(','),
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
