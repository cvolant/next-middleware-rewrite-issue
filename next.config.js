module.exports = {
  async rewrites() {
    return [
      {
        source: '/team',
        destination: '/about',
      },
      {
        source: '/about-us',
        destination: '/about',
      },
      // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
      {
        source: '/blog/:slug*',
        destination: '/news/:slug*',
      },
      // Rewriting to an external URL
      {
        source: '/docs/:slug',
        destination: 'http://example.com/docs/:slug',
      },
    ]
  },
}
