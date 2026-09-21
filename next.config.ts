import type { NextConfig } from "next";

const cacheControl = {
  key: "Cache-Control",
  value: "public, max-age=31536000, immutable",
};
const jpegHeaders = [
  { key: "Content-Type", value: "image/jpeg" },
  cacheControl,
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/office/:file", headers: jpegHeaders },
      { source: "/hall/:file", headers: jpegHeaders },
      { source: "/kitchen/:file", headers: jpegHeaders },
      { source: "/sales/:file", headers: jpegHeaders },
    ];
  },
};

export default nextConfig;
