/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'user-music-store.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '/blocks/marketing-ui/hero/*',
      },
      {
        protocol: 'https',
        hostname: 'toppng.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
      },
      {
        protocol: 'https',
        hostname: 'benmusic.ma',
      },
      {
        protocol: 'https',
        hostname: 'readymadeui.com',
      },
    ],
  },
};

export default nextConfig;
