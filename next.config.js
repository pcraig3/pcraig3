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
  /* only true on server */
  /* https://github.com/zeit/next.js/tree/0d77dda28c8b0eaed38bb203de737ffc1235d42a#exposing-configuration-to-the-server--client-side */
  serverRuntimeConfig: {
    onServer: true,
  },
})
