module.exports = {
  trailingSlash: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/:path((?!coming-soon).*)', // Exclude "/coming-soon" from being redirected
        destination: '/coming-soon',
        permanent: false, // Temporary redirect (302)
      },
    ];
  },

};
