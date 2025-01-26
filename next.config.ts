import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
