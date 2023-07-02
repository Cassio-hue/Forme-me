/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'loremflickr.com', // api for random images (useful for testing and is used by faker on backend seeds)
          'www.pesquisar.unb.br',
          'cic.unb.br',
          'www.cic.unb.br',
          'servicosweb.cnpq.br',
          'nalon.org',
          'encrypted-tbn0.gstatic.com'
        ],

      },

}

module.exports = nextConfig
