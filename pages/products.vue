<template>
  <!-- Hero/Banner -->
  <header class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(@/assets/images/products_banner_last.jpg)] bg-cover h-[800px] bg-center bg-no-repeat relative">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
        Geniş Ürün Yelpazesi<br>
        <span class="text-main-400">Her Mekâna Uygun Çözümler</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
        Pergola, tente, cam sistemleri ve daha fazlası DYLegendary Tente olarak dış mekanlarınız için estetik ve fonksiyonel ürün gruplarımızı keşfedin. Her ihtiyaca uygun, kaliteli ve dayanıklı çözümlerimizle yaşam alanlarınızı güzelleştiriyoruz.
      </p>
      <NuxtLink
        to="/contact"
        class="px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 animate-bounce-in"
        aria-label="Ürün danışmanlığı için iletişim sayfasına git"
      >
        Ürün Danışmanlığı Al
      </NuxtLink>
    </div>
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
    </div>
  </header>

  <!-- Kategori + Ürünler Grid -->
  <main class="container mx-auto py-16 flex flex-col md:flex-row gap-10">
    <!-- Kategoriler -->
    <aside class="w-full md:w-64 bg-gray-50 rounded-xl shadow p-6 mb-8 md:mb-0 animate-slide-in-left" aria-label="Ürün kategorileri">
      <h2 class="text-lg font-bold tracking-widest mb-6 text-gray-800 uppercase">Ürün Kategorilerimiz</h2>
      <nav>
        <ul class="space-y-2" role="list">
          <li v-for="cat in store.categories" :key="cat.key" @click="selectedCategory = cat.key"
              :class="['flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition', selectedCategory === cat.key ? 'bg-white shadow text-main-400 font-bold' : 'hover:bg-gray-100 text-gray-700']"
              role="listitem">
            <span>{{ cat.name }}</span>
            <span v-if="selectedCategory === cat.key" class="text-main-default text-lg" aria-hidden="true">→</span>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Ürünler Grid -->
    <section class="flex-1" aria-labelledby="products-heading">
      <h2 id="products-heading" class="sr-only">Ürünler</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(product, i) in filteredProducts"
          :key="product.id"
          class="bg-white max-md:p-2 rounded-xl shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up"
          :style="{ animationDelay: `${i * 0.08 + 0.2}s` }"
        >
          <div class="bg-gray-100 flex items-center justify-center h-56 w-full overflow-hidden">
            <img
              :src="product.img"
              :alt="`${product.title} ürünü`"
              class="w-full h-full object-cover object-center rounded-t-xl transition-transform duration-300 hover:scale-105"
              style="min-height: 224px; max-height: 224px;"
              loading="lazy"
            />
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <h3 class="font-extrabold text-lg text-gray-900 mb-4 uppercase tracking-wider">{{ product.title }}</h3>
            <NuxtLink
              :to="`/product-detail/${product.category}/${product.key}`"
              class="inline-block px-6 py-2 bg-gray-900 text-white font-bold rounded hover:bg-main-default transition-colors text-sm tracking-widest"
              :aria-label="`${product.title} ürününün detaylarını görüntüle`"
            >
              Detaylı İncele
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// SEO Meta Tags
useHead({
  title: 'Ürünlerimiz - DYLegendary Tente | Pergola, Tente, Cam Sistemleri İzmir',
  meta: [
    {
      name: 'description',
      content: 'DYLegendary Tente ürünleri: Pergola, tente, cam sistemleri ve dış mekan çözümleri. İzmir\'de kaliteli ve dayanıklı ürünler. Her mekâna uygun çözümler.'
    },
    {
      name: 'keywords',
      content: 'tente ürünleri izmir, pergola ürünleri, cam sistemleri ürünleri, dış mekan çözümleri, tente fiyatları, pergola fiyatları, cam balkon ürünleri, Dorse, Tente, Gölgelik, Jüt'
    },
    {
      property: 'og:title',
      content: 'Ürünlerimiz - DYLegendary Tente | Pergola, Tente, Cam Sistemleri İzmir'
    },
    {
      property: 'og:description',
      content: 'DYLegendary Tente ürünleri: Pergola, tente, cam sistemleri ve dış mekan çözümleri. İzmir\'de kaliteli ve dayanıklı ürünler.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://dylegendary.com/products'
    },
    {
      property: 'og:image',
      content: 'https://dylegendary.com/assets/images/products_banner_last.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Ürünlerimiz - DYLegendary Tente | Pergola, Tente, Cam Sistemleri İzmir'
    },
    {
      name: 'twitter:description',
      content: 'İzmir\'de pergola, tente, cam sistemleri ve dış mekan çözümleri. Kaliteli ürünler, uygun fiyatlar.'
    },
    {
      name: 'twitter:image',
      content: 'https://dylegendary.com/assets/images/products_banner_last.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://dylegendary.com/products'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "DYLegendary Tente Ürünleri",
        "description": "İzmir'de tente, pergola, cam sistemleri ve dış mekan çözümleri. Kaliteli ve dayanıklı ürünler.",
        "url": "https://dylegendary.com/products",
        "numberOfItems": 6,
        "itemListElement": [
          {
            "@type": "Product",
            "position": 1,
            "name": "Pergola Sistemleri",
            "description": "Modern pergola sistemleri ile dış mekanlarınızı güzelleştirin",
            "url": "https://dylegendary.com/products/pergola"
          },
          {
            "@type": "Product",
            "position": 2,
            "name": "Tente Sistemleri",
            "description": "Dayanıklı tente sistemleri ile güneş ve yağmurdan korunun",
            "url": "https://dylegendary.com/products/tente"
          },
          {
            "@type": "Product",
            "position": 3,
            "name": "Cam Sistemleri",
            "description": "Şık cam sistemleri ile mekanlarınızı genişletin",
            "url": "https://dylegendary.com/products/cam-sistemleri"
          }
        ]
      })
    }
  ]
})

const selectedCategory = ref('all')

// Store'u güvenli şekilde kullan
const store = useStore()

const filteredProducts = computed(() => {
  if (!store.products) return []
  
  return selectedCategory.value === 'all'
    ? store.products
    : store.products.filter(p => p.category === selectedCategory.value)
})
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
@keyframes bounce-in {
  0% { transform: scale(0.8);}
  60% { transform: scale(1.05);}
  100% { transform: scale(1);}
}
.animate-fade-in { animation: fade-in 1s ease; }
.animate-fade-in-down { animation: fade-in-down 1s ease; }
.animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-slide-in-left { animation: slide-in-left 1s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
</style>