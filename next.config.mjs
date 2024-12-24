/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://34.143.174.117:8000/api/:path*'
      }
    ]
  },
  experimental: {
    allowMiddlewareResponseBody: true
  }
 };
 
 export default nextConfig;