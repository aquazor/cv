import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
