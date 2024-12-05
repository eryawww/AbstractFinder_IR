/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'commons.wikimedia.org',
          pathname: '**',
        },
      ], 
    },
  };

export default nextConfig;
