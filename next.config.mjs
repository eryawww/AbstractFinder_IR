/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['via.placeholder.com', 'commons.wikimedia.org'], // Add the placeholder domain here
    },
  };

export default nextConfig;
