/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/nextjs-playground",
  assetPrefix: "/nextjs-playground"
}

module.exports = nextConfig
