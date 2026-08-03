import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Temporary: pulls the real studio photos straight off the current
      // Squarespace CDN so the site looks right on first run.
      // Replace with local /public assets before launch - see README.
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
    ],
  },
};

export default nextConfig;
