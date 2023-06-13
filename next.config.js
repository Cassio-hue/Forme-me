/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'loremflickr.com', // api for random images (useful for testing and is used by faker on backend seeds)
        ],

      },

}

module.exports = nextConfig
