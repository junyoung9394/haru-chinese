import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 폴더에도 package-lock.json 이 있어 워크스페이스 루트를 명시합니다
  turbopack: {
    root: __dirname,
  },
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play.google.com",
        pathname: "/intl/**",
      },
    ],
    minimumCacheTTL: 86400,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/(.*)\\.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff2)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig;
