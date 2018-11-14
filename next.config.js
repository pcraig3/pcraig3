const withOptimizedImages = require('next-optimized-images')

const paths = [
  '/',
  '/about',
  '/contact',
  '/work',
  '/typography',
  '/work-govuk-performance-platform',
  '/work-govuk-digital-marketplace',
  '/work-pcraig3ca-deprecated',
  '/work-westernuscca',
  '/work-westernuscca-event-calendar',
  '/work-involvement-compass',
]

const getPathExportMap = () => {
  /*
    So
    '/': { page: '/' },
    '/m/': { page: '/', query: { showMenu: 'true' } },
    '/about': { page: '/about' },
    '/m/about': { page: '/about', query: { showMenu: 'true' } },
   */
  let normalPages = paths.reduce(
    (o, key) => ({ ...o, [key]: { page: key } }),
    {},
  )
  let menuPages = paths.reduce(
    (o, key) => ({
      ...o,
      [`/m${key}`]: { page: key, query: { showMenu: 'true' } },
    }),
    {},
  )

  return { ...normalPages, ...menuPages }
}

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  imagesFolder: 'img',
  optimizeImagesInDev: true,

  /* config for general next.js */
  exportPathMap: getPathExportMap,
})
