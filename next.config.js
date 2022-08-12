module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },

  async redirects() {
    return [    
      {
        source: '/fr/about',
        destination: '/fr/a-propos',
        locale: false,
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/a-propos',
          destination: '/about',
        },
      ],
    }
  },
}
