/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://34.143.174.117:8000/api/:path*'
        }
      ]
    }
    return []
  },
  experimental: {
    allowMiddlewareResponseBody: true
  }
};

export default nextConfig;