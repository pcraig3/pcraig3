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
      '/work-govuk-performance-platform': {
        page: '/work-govuk-performance-platform',
      },
      '/m/work-govuk-performance-platform': {
        page: '/work-govuk-performance-platform',
        query: { showMenu: 'true' },
      },
      '/work-govuk-digital-marketplace': {
        page: '/work-govuk-digital-marketplace',
      },
      '/m/work-govuk-digital-marketplace': {
        page: '/work-govuk-digital-marketplace',
        query: { showMenu: 'true' },
      },
      '/work-pcraig3ca-deprecated': { page: '/work-pcraig3ca-deprecated' },
      '/m/work-pcraig3ca-deprecated': {
        page: '/work-pcraig3ca-deprecated',
        query: { showMenu: 'true' },
      },
      '/work-westernuscca': { page: '/work-westernuscca' },
      '/m/work-westernuscca': {
        page: '/work-westernuscca',
        query: { showMenu: 'true' },
      },
      '/work-westernuscca-event-calendar': {
        page: '/work-westernuscca-event-calendar',
      },
      '/m/work-westernuscca-event-calendar': {
        page: '/work-westernuscca-event-calendar',
        query: { showMenu: 'true' },
      },
      '/work-involvement-compass': {
        page: '/work-involvement-compass',
      },
      '/m/work-involvement-compass': {
        page: '/work-involvement-compass',
        query: { showMenu: 'true' },
      },
    }
  },
})
