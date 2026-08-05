import { createPinia } from 'pinia'
import { useStore } from '~/stores/store'

export default defineSitemapEventHandler(() => {
  const store = useStore(createPinia())

  const categoryUrls = store.categories
    .filter(category => category.key !== 'all')
    .map(category => ({
      loc: `/products?category=${encodeURIComponent(category.key)}`,
      changefreq: 'weekly' as const,
      priority: 0.7 as const
    }))

  const productUrls = store.products.map(product => ({
    loc: `/product-detail/${product.category}/${product.key}`,
    changefreq: 'monthly' as const,
    priority: 0.8 as const,
    images: [{ loc: product.img, title: product.title }]
  }))

  return [...categoryUrls, ...productUrls]
})
