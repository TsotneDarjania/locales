import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'it-IT',
  title: 'Italiano',
  bundles: [
    {
      namespace: 'structure',
      resources: () => import('./structure'),
    },

    {
      namespace: 'studio',
      resources: () => import('./studio'),
    },

    {
      namespace: 'validation',
      resources: () => import('./validation'),
    },

    {
      namespace: 'vision',
      resources: () => import('./vision'),
    },
  ],
  weekInfo: {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7],
  },
})

/**
 * Italiano locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const itITLocale = definePlugin({
  name: '@sanity/locale-it-it',
  i18n: {
    locales: [locale],
  },
})
