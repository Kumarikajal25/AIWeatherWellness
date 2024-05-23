// next.config.mjs

import bundleAnalyzer from '@next/bundle-analyzer';
import webpack from 'webpack'; // Import webpack module

const nextConfig = {
  // Adjust webpack options
  webpack: (config) => {
    // Remove files matching /__tests__/ from the bundle
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /\/__tests__\//,
    }));
    return config;
  },

  // Bundle Analyzer configuration
  ...bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  }),

  // Image optimization
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;
