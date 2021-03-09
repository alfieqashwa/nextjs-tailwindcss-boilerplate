module.exports = {
    async redirects() {
      return [
        {
          source: '/dashboard',
          destination: '/admin/dashboard',
          permanent: true,
        },
      ]
    },
  }