import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export (required for Azure Static Web Apps)
  eslint: {
    ignoreDuringBuilds: true, // Prevents ESLint from failing the build
  },
  // You can add more config options here if needed
};

module.exports = nextConfig;
