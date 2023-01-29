module.exports = {
   distDir: 'build',
   images: {
      remotePatterns: [
         {
            protocol: 'http',
            hostname: 'placeimg.com',
            pathname: '/**',
         },
      ],
   },
}
