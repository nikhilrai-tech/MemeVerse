// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.imgflip.com'], // Add the hostname here
  },
};

module.exports = nextConfig;