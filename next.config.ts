import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/office/:file",
        headers: [{ key: "Content-Type", value: "image/jpeg" }],
      },
      {
        source: "/hall/:file",
        headers: [{ key: "Content-Type", value: "image/jpeg" }],
      },
      {
        source: "/kitchen/:file",
        headers: [{ key: "Content-Type", value: "image/jpeg" }],
      },
      {
        source: "/sales/:file",
        headers: [{ key: "Content-Type", value: "image/jpeg" }],
      },
    ];
  },
};

export default nextConfig;
