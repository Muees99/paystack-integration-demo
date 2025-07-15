/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
export default nextConfig