/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // allow for the linkedin image to pass in
    domains: ['media.licdn.com']
  }
}

module.exports = nextConfig
