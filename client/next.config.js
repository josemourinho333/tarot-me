/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseURL: 'https://tarot-card-backend.onrender.com',
    REACT_APP_LOCAL_URL: 'http://localhost:8080',
  },
  images: {
        domains: ['placeimg.com'],
  },
}

module.exports = nextConfig;
