/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["image.tmdb.org","image.tmdb.org/t/p/original"],
  }
}

module.exports = nextConfig
