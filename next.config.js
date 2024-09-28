/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
