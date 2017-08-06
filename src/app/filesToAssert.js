export const mustHaveFiles = [
  'main.scss',
  'vendor.scss',
  'main/1-abstracts/_config.scss',
  'main/1-abstracts/_functions.scss',
  'main/1-abstracts/_index.scss',
  'main/1-abstracts/_mixins.scss',
  'main/1-abstracts/_plugins.scss',
  'main/1-abstracts/_resets.scss',
  'main/2-base/_extends.scss',
  'main/2-base/_forms.scss',
  'main/2-base/_general.scss',
  'main/2-base/_index.scss',
  'main/2-base/_tables.scss',
  'main/2-base/_typography.scss',
  'main/3-layout/_index.scss',
  'main/4-components/_animations.scss',
  'main/4-components/_buttons.scss',
  'main/4-components/_footer.scss',
  'main/4-components/_index.scss',
  'main/4-components/_menu.scss',
  'main/5-pages/_index.scss',
  'main/6-themes/_index.scss',
  'vendor/_fonts.scss'
]

export const gridFiles = [
  'main/3-layout/_grid.scss',
  'main/3-layout/_container.scss',
  'main/3-layout/_row.scss'
]

export const atomicFiles = [
  'main/3-layout/_borders.scss',
  'main/3-layout/_display.scss',
  'main/3-layout/_flexbox.scss',
  'main/3-layout/_font-sizes.scss',
  'main/3-layout/_font-styles.scss',
  'main/3-layout/_margin.scss',
  'main/3-layout/_padding.scss',
  'main/3-layout/_position.scss'
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
