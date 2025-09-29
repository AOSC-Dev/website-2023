export default defineI18nLocale(() =>
  Object.fromEntries(
    Object.entries(import.meta.glob('./zh-cn/*.json', { eager: true })).map(
      ([key, value]) => [key.split('/').at(-1)?.split('.')[0], value]
    )
  )
);
