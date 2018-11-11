const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  imagesFolder: 'img',
  optimizeImagesInDev: true,

  /* config for general next.js */
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/m/': { page: '/', query: { showMenu: 'true' } },
      '/about': { page: '/about' },
      '/m/about': { page: '/about', query: { showMenu: 'true' } },
      '/contact': { page: '/contact' },
      '/m/contact': { page: '/contact', query: { showMenu: 'true' } },
      '/work': { page: '/work' },
      '/m/work': { page: '/work', query: { showMenu: 'true' } },
      '/typography': { page: '/typography' },
      '/m/typography': { page: '/typography', query: { showMenu: 'true' } },
      '/govuk-digital-marketplace': { page: '/govuk-digital-marketplace' },
      '/m/govuk-digital-marketplace': {
        page: '/govuk-digital-marketplace',
        query: { showMenu: 'true' },
      },
    }
  },
})
