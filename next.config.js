module.exports = {
  images: {
    domains: ['unicorn-staging.eu.saleor.cloud'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unicorn-staging.eu.saleor.cloud',
        port: '',
        pathname: '/media/thumbnails/products/**',
      },
      {
        protocol: 'https',
        hostname: 'unicorn-staging.eu.saleor.cloud',
        port: '',
        pathname: '/media/category-backgrounds/**',
      },
    ],
  },
};
