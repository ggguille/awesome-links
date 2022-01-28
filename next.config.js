/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'nextjs.org', 
      'www.prisma.io',
      'tailwindcss.com',
      'www.apollographql.com'
    ],
  },
  env: {
    GRAPHQL_URI: process.env.GRAPHQL_URI
  }
}
