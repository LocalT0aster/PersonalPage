/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'imgs.xkcd.com',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
