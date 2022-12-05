/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseURL: process.env.baseURL,
    REACT_APP_LOCAL_URL: process.env.REACT_APP_LOCAL_UR,
  },
  images: {
        domains: ['placeimg.com'],
  },
}

module.exports = nextConfig;
