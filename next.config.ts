import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Strict mode helps catch issues before production
  reactStrictMode: true,
  // Optimise images served from local /public
  images: {
    unoptimized: false,
  },
  // Suppress harmless hydration warnings from browser extensions in prod
  // (suppressHydrationWarning is already on <body> in layout.tsx)
};

export default nextConfig;