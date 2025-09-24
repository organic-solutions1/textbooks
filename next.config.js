/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily ignore type errors during production builds
    ignoreBuildErrors: true,
  },
  eslint: {
    // Don’t fail the build on lint errors while you’re getting set up
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
