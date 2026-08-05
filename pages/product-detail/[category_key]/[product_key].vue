<template>
    <!-- Hero/Banner -->
    <header class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(@/assets/images/pergola33.jpg)] bg-cover h-[600px] bg-center bg-no-repeat relative">
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold text-main-400 mb-6 animate-fade-in-down leading-tight">
          {{ product?.title || 'Ürün Detayı' }}
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
          {{ product?.description || 'Bu ürün hakkında detaylı bilgi edinmek için lütfen iletişime geçin.' }}
        </p>
        <NuxtLink
          to="/contact"
          class="px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 animate-bounce-in"
          aria-label="Bu ürün için teklif al"
        >
          Hemen Teklif Al
        </NuxtLink>
      </div>
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div class="w-3 h-3 border-2 border-white rounded-full"></div>
      </div>
    </header>
  
    <!-- Ürün Detayı -->
    <main class="container mx-auto py-12 px-4" aria-labelledby="product-details-heading">
      <nav class="mb-8 text-sm text-gray-600" aria-label="Sayfa yolu">
        <NuxtLink to="/" class="hover:text-main-default">Ana Sayfa</NuxtLink>
        <span class="mx-2" aria-hidden="true">/</span>
        <NuxtLink :to="categoryUrl" class="hover:text-main-default">{{ categoryName }}</NuxtLink>
        <span class="mx-2" aria-hidden="true">/</span>
        <span aria-current="page">{{ product?.title }}</span>
      </nav>
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Sol: Büyük görsel ve galeri -->
        <section aria-label="Ürün görselleri">
          <div class="flex flex-1 flex-col gap-4 h-full">
              <div class="flex-1 h-full">
                <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
                  <Slide v-for="(image, index) in product?.images || []" :key="index">
                    <img 
                      :src="image" 
                      :alt="`${product?.title || 'Ürün'} görseli ${index + 1}`" 
                      class="gallery-image h-full w-full object-cover" 
                      loading="lazy"
                    />
                  </Slide>
                  <template #addons>
                    <Navigation />
                  </template>
                </Carousel>
              </div>
              <div class="mt-auto">
                <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
                  <Slide v-for="(image, index) in product?.images || []" :key="index">
                    <template #default="{ currentIndex, isActive }">
                      <div
                        :class="['thumbnail', { 'is-active': isActive }]"
                        @click="slideTo(currentIndex)"
                        :aria-label="`${product?.title || 'Ürün'} görseli ${index + 1}`"
                        role="button"
                        tabindex="0"
                      >
                        <img 
                          :src="image" 
                          :alt="`${product?.title || 'Ürün'} küçük görsel ${index + 1}`" 
                          class="thumbnail-image" 
                          loading="lazy"
                        />
                      </div>
                    </template>
                  </Slide>

                  <template #addons>
                    <Navigation />
                  </template>
                </Carousel>
              </div>
          </div>
        </section>
        <!-- Sağ: Başlık, öne çıkanlar, garanti, buton -->
        <article class="animate-slide-in-right flex flex-col">
          <h2 id="product-details-heading" class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            {{ product?.title }} Özellikleri
          </h2>
          <ul class="text-gray-700 space-y-2 mb-6 list-disc list-inside animate-fade-in-up" role="list">
            <li v-for="property in product?.properties || []" :key="property" role="listitem">{{ property }}</li>
          </ul>
          <NuxtLink
            to="/contact"
            class="block mt-auto w-full text-center px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 hover:scale-105"
            aria-label="Bu ürün için teklif al"
          >
            Teklif Al
          </NuxtLink>
        </article>
      </div>

      <section v-if="relatedProducts.length" class="mt-14" aria-labelledby="related-products-heading">
        <h2 id="related-products-heading" class="text-2xl font-extrabold text-gray-900 mb-6">
          Benzer {{ categoryName }} Ürünleri
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <NuxtLink
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :to="`/product-detail/${relatedProduct.category}/${relatedProduct.key}`"
            class="rounded-xl border border-gray-200 bg-white p-5 font-bold text-gray-900 shadow-sm transition hover:border-main-default hover:text-main-default"
          >
            {{ relatedProduct.title }}
          </NuxtLink>
        </div>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  import { Carousel, Slide, Navigation } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  const currentSlide = ref(0)
  const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

  const galleryConfig = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: 'fade' as const,
    mouseDrag: false,
    touchDrag: false,
    height: 417,
  }
  
  const thumbnailsConfig = {
    height: 80,
    itemsToShow: 6,
    wrapAround: true,
    touchDrag: true,
    gap: 10,
  }

  const store = useStore()
  const route = useRoute()

  const getRouteParam = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] ?? '' : value ?? ''

  const categoryKey = computed(() => getRouteParam(route.params.category_key))
  const productKey = computed(() => getRouteParam(route.params.product_key))

  const product = computed(() => {
    return store.products.find(item =>
      item.key === productKey.value && item.category === categoryKey.value
    ) ?? null
  })

  if (!product.value) {
    throw createError({
      statusCode: 404,
      message: 'Ürün bulunamadı'
    })
  }

  const category = computed(() =>
    store.categories.find(item => item.key === categoryKey.value)
  )
  const categoryName = computed(() => category.value?.name ?? 'Ürünler')
  const categoryUrl = computed(() =>
    `/products?category=${encodeURIComponent(categoryKey.value)}`
  )
  const canonicalUrl = computed(() =>
    `https://dylegendary.com/product-detail/${encodeURIComponent(categoryKey.value)}/${encodeURIComponent(productKey.value)}`
  )
  const seoTitle = computed(() =>
    `${product.value?.title} | ${categoryName.value} - DYLegendary Tente`
  )
  const seoDescription = computed(() => {
    const description = product.value?.description ?? ''
    if (description.length <= 160) return description

    return `${description.slice(0, 156).replace(/\s+\S*$/, '')}...`
  })
  const relatedProducts = computed(() =>
    store.products
      .filter(item => item.category === categoryKey.value && item.key !== productKey.value)
      .slice(0, 3)
  )

  definePageMeta({
    layout: 'default'
  })

  useSeoMeta({
    title: () => seoTitle.value,
    description: () => seoDescription.value,
    robots: 'index, follow',
    ogTitle: () => seoTitle.value,
    ogDescription: () => seoDescription.value,
    ogType: 'website',
    ogUrl: () => canonicalUrl.value,
    ogImage: () => product.value?.img ?? '',
    ogImageAlt: () => `${product.value?.title} ürün görseli`,
    twitterCard: 'summary_large_image',
    twitterTitle: () => seoTitle.value,
    twitterDescription: () => seoDescription.value,
    twitterImage: () => product.value?.img ?? '',
    twitterImageAlt: () => `${product.value?.title} ürün görseli`
  })

  useHead(() => ({
    link: [
      { key: 'canonical', rel: 'canonical', href: canonicalUrl.value }
    ],
    script: [
      {
        key: 'product-structured-data',
        type: 'application/ld+json',
        textContent: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Product',
              name: product.value?.title,
              description: product.value?.description,
              image: product.value?.images ?? [product.value?.img],
              category: categoryName.value,
              url: canonicalUrl.value,
              additionalProperty: product.value?.properties.map(property => ({
                '@type': 'PropertyValue',
                name: 'Özellik',
                value: property
              }))
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Ana Sayfa',
                  item: 'https://dylegendary.com/'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: categoryName.value,
                  item: `https://dylegendary.com${categoryUrl.value}`
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: product.value?.title,
                  item: canonicalUrl.value
                }
              ]
            }
          ]
        })
      }
    ]
  }))
  </script>
  
  <style scoped>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fade-in-down {
    from { opacity: 0; transform: translateY(-30px);}
    to { opacity: 1; transform: translateY(0);}
  }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(30px);}
    to { opacity: 1; transform: translateY(0);}
  }
  @keyframes slide-in-left {
    from { opacity: 0; transform: translateX(-50px);}
    to { opacity: 1; transform: translateX(0);}
  }
  @keyframes slide-in-right {
    from { opacity: 0; transform: translateX(50px);}
    to { opacity: 1; transform: translateX(0);}
  }
  @keyframes bounce-in {
    0% { transform: scale(0.8);}
    60% { transform: scale(1.05);}
    100% { transform: scale(1);}
  }
  .animate-fade-in { animation: fade-in 1s ease; }
  .animate-fade-in-down { animation: fade-in-down 1s ease; }
  .animate-fade-in-up { animation: fade-in-up 1s ease; }
  .animate-slide-in-left { animation: slide-in-left 1s cubic-bezier(.68,-0.55,.27,1.55); }
  .animate-slide-in-right { animation: slide-in-right 1s cubic-bezier(.68,-0.55,.27,1.55); }
  .animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }

  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gallery-image {
    border-radius: 16px;
  }

  #thumbnails {
    margin-top: 10px;
  }

  .thumbnail {
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
  }

  .thumbnail.is-active,
  .thumbnail:hover {
    opacity: 1;
  }
  </style>
