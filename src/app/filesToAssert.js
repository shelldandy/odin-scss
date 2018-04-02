export const mustHaveFiles = [
  'vendor/vendor.scss',
  'main/abstracts/_config.scss',
  'main/abstracts/_functions.scss',
  'main/abstracts/_breakpoints.scss',
  'main/abstracts/_colors.scss',
  'main/abstracts/_index.scss',
  'main/abstracts/_mixins.scss',
  'main/abstracts/_resets.scss',
  'main/base/general.scss',
  'main/base/typography.scss',
  'main/components/animations.scss',
  'main/components/buttons.scss',
  'vendor/_fonts.scss'
]

export const gridFiles = [
  'main/layout/grid.scss',
  'main/layout/container.scss'
]

export const atomicFiles = [
  'main/layout/borders.scss',
  'main/layout/display.scss',
  'main/layout/flexbox.scss',
  'main/layout/font-sizes.scss',
  'main/layout/font-styles.scss',
  'main/layout/margin.scss',
  'main/layout/padding.scss',
  'main/layout/position.scss'
]

export const vendorReset = [
  'vendor/_reset.scss'
]

export const allTheFiles = [
  ...mustHaveFiles,
  ...gridFiles,
  ...atomicFiles,
  ...vendorReset
]
