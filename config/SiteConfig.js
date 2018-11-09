module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Mauro Daprotis | Blog', // Navigation and Site Title
  siteTitleAlt: 'MD', // Alternative Site title for SEO
  siteUrl: 'https://maurodaprotis.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/social/banner.png', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/images/gatsby-icon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'My personal blog 👨‍💻', // Your site description
  author: 'Mauro Daproits', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@maurodaprotis', // Twitter Username - Optional
  ogSiteName: 'maurodaprotis', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#FF0000',
  backgroundColor: '#FFFFFF',

  // Settings for typography.js
  headerFontFamily: 'Montserrat',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '16px',
};
