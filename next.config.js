const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig
