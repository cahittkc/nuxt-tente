<template>
  <!-- Hero/Banner -->
  <div class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(@/assests/images/pergola2.jpg)] bg-cover h-[800px] bg-center bg-no-repeat relative">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 max-w-4xl mx-auto">
      <span class="uppercase tracking-widest text-red-500 font-semibold mb-3 animate-fade-in-down">ÜRÜNLERİMİZ</span>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
        Geniş Ürün Yelpazesi<br>
        <span class="text-red-400">Her Mekâna Uygun Çözümler</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
        Pergola, tente, cam sistemleri ve daha fazlası... .... Tente olarak dış mekanlarınız için estetik ve fonksiyonel ürün gruplarımızı keşfedin. Her ihtiyaca uygun, kaliteli ve dayanıklı çözümlerimizle yaşam alanlarınızı güzelleştiriyoruz.
      </p>
      <NuxtLink
        to="/iletisim"
        class="px-8 py-4 bg-red-600 text-white rounded-lg font-bold shadow-lg hover:bg-red-700 transition-all duration-300 animate-bounce-in"
      >
        Ürün Danışmanlığı Al
      </NuxtLink>
    </div>
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
    </div>
  </div>

  <!-- Kategori + Ürünler Grid -->
  <div class="container mx-auto py-16 flex flex-col md:flex-row gap-10">
    <!-- Kategoriler -->
    <aside class="w-full md:w-64 bg-gray-50 rounded-xl shadow p-6 mb-8 md:mb-0 animate-slide-in-left">
      <h2 class="text-lg font-bold tracking-widest mb-6 text-gray-800 uppercase">Ürün Kategorilerimiz</h2>
      <ul class="space-y-2">
        <li v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
            :class="['flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition', selectedCategory === cat ? 'bg-white shadow text-red-600 font-bold' : 'hover:bg-gray-100 text-gray-700']">
          <span>{{ cat }}</span>
          <span v-if="selectedCategory === cat" class="text-red-500 text-lg">→</span>
        </li>
      </ul>
    </aside>

    <!-- Ürünler Grid -->
    <section class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(product, i) in filteredProducts"
        :key="product.id"
        class="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up"
        :style="{ animationDelay: `${i * 0.08 + 0.2}s` }"
      >
        <div class="bg-gray-100 flex items-center justify-center h-56 w-full overflow-hidden">
          <img
            :src="product.img"
            :alt="product.title"
            class="w-full h-full object-cover object-center rounded-t-xl transition-transform duration-300 hover:scale-105"
            style="min-height: 224px; max-height: 224px;"
          />
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <h3 class="font-extrabold text-lg text-gray-900 mb-4 uppercase tracking-wider">{{ product.title }}</h3>
          <NuxtLink
            to="/product-detail"
            class="inline-block px-6 py-2 bg-gray-900 text-white font-bold rounded hover:bg-red-600 transition-colors text-sm tracking-widest"
          >
            Detaylı İncele
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = [
  'Tümü',
  'Pergola',
  'Tente',
  'Cam Sistemleri',
  'Teknik Tekstil Perdeler',
  'Branda Uygulamaları',
  'Çadır'
]

const selectedCategory = ref('Tümü')

const products = [
  {
    id: 1,
    title: 'Standart Blockout Pergola',
    category: 'Pergola',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Rolling Roof Pergola',
    category: 'Pergola',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Bioklimatik Pergola',
    category: 'Pergola',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Dikey Zip Perde',
    category: 'Teknik Tekstil Perdeler',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Yatay Zip Perde',
    category: 'Teknik Tekstil Perdeler',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Kasetli Tente',
    category: 'Tente',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    title: 'Cam Balkon Sistemi',
    category: 'Cam Sistemleri',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    title: 'Branda Uygulaması',
    category: 'Branda Uygulamaları',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    title: 'Çadır',
    category: 'Çadır',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80'
  }
]

const filteredProducts = computed(() =>
  selectedCategory.value === 'Tümü'
    ? products
    : products.filter(p => p.category === selectedCategory.value)
)
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