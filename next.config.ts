import type { NextConfig } from "next";

const jpegHeaders = [{ key: "Content-Type", value: "image/jpeg" }];
const webpHeaders = [{ key: "Content-Type", value: "image/webp" }];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/office/:file", headers: jpegHeaders },
      { source: "/hall/:file", headers: webpHeaders },
      { source: "/kitchen/:file", headers: jpegHeaders },
      { source: "/sales/:file", headers: webpHeaders },
    ];
  },
};

export default nextConfig;
