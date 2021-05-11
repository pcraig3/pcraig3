const withOptimizedImages = require('next-optimized-images')

const paths = [
  '/',
  '/404',
  '/about',
  '/contact',
  '/cv',
  '/typography',
  '/lists',
  '/lists-places-ive-lived',
  '/lists-things-i-like',
  '/lists-things-i-dont-like',
  '/work',
  '/work-canada-vaccine-tracker',
  '/work-canada-holidays',
  '/work-cds-claim-tax-benefits',
  '/work-cds-covid-alert-portal',
  '/work-cds-rescheduler',
  '/work-govuk-performance-platform',
  '/work-govuk-digital-marketplace',
  '/work-westernuscca',
  '/work-westernuscca-event-calendar',
  '/work-involvement-compass',
]

const getPathExportMap = () => {
  /*
    So
    '/': { page: '/' },
    '/about': { page: '/about' },
   */
  let normalPages = paths.reduce((o, key) => ({ ...o, [key]: { page: key } }), {})

  return { ...normalPages }
}

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  imagesFolder: 'img',
  optimizeImagesInDev: true,

  /* config for general next.js */
  exportPathMap: getPathExportMap,
})
