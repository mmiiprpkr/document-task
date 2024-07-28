/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["lh3.googleusercontent.com"]
  },
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
  }),
};

export default nextConfig;
