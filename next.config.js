/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        
        domains: ['beckypeltz-hdrinc.github.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'beckypeltz-hdrinc.github.io',
          port: '',
          pathname: '/nextjs-blog-starter/assets/blog/**',
        },
      ],
    },
  }