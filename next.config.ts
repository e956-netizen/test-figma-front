import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    // Permite que el build termine aunque no se ejecute ESLint en el proceso de build.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;