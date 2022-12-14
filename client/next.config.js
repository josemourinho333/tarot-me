/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseURL: process.env.baseURL,
    REACT_APP_LOCAL_URL: process.env.REACT_APP_LOCAL_URL,
  },
  images: {
        domains: ['placeimg.com', 'cdn.shopify.com'],
  },
}

module.exports = nextConfig;
