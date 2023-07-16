/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${process.env.BACKEND}/api/:path*`, // Proxy to Backend
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
