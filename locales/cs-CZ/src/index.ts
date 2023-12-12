import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'cs-CZ',
  title: 'Čeština',
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
 * Čeština locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const csCZLocale = definePlugin({
  name: '@sanity/locale-cs-cz',
  i18n: {
    locales: [locale],
  },
})
