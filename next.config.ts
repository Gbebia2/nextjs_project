import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {},

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push(
        /@mapbox\/node-pre-gyp/
      );
    }
    return config;
  },
};

export default nextConfig;