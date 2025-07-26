import type {
  CollectionQueryBuilder,
  EnCollectionItem,
  ZhCollectionItem
} from '@nuxt/content';

export const queryCollectionCategory = (
  category?: string,
  limit: number = 0,
  filters?: Array<{ key: string; value: string }>
) => {
  const { locale } = useI18n();

  let q = (
    queryCollection(locale.value) as CollectionQueryBuilder<
      ZhCollectionItem | EnCollectionItem
    >
  )
    .select('path', 'title', 'date')
    .where('path', 'LIKE', `/${category}%`)
    .order('date', 'DESC')
    .limit(limit);

  if (filters) {
    for (const filter of filters) {
      q = q.where(filter.key, 'LIKE', `%"${filter.value}"%`);
    }
  }

  return () => q.all();
};
