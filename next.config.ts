import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [new URL("http://image.tmdb.org/**")],
  },
};

export default nextConfig;
