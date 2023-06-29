/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['media.graphassets.com'],
    dangerouslyAllowSVG: true
  }
};

module.exports = nextConfig;
