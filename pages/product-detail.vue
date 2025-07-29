<template>
  <!-- Hero/Banner -->
  <div class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(@/assets/images/pergola33.jpg)] bg-cover h-[600px] bg-center bg-no-repeat relative">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 max-w-3xl mx-auto">
      <span class="uppercase tracking-widest text-white text-2xl font-semibold mb-3 animate-fade-in-down">STANDART BLOCKOUT PERGOLA</span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
        Dört Mevsim Konfor, <span class="text-red-400">Maksimum Dayanıklılık</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
        Su geçirmez özel kumaşı, modern tasarımı ve uzun ömürlü yapısıyla Standart Blockout Pergola, dış mekanlarınız için en iyi gölgelendirme çözümüdür. Şık görünümü ve fonksiyonel özellikleriyle her mevsim keyifli alanlar yaratın.
      </p>
      <NuxtLink
        to="/contact"
        class="px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 animate-bounce-in"
      >
        Hemen Teklif Al
      </NuxtLink>
    </div>
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
    </div>
  </div>

  <!-- Ürün Det....ı -->
  <div class="container mx-auto py-12 px-4">
    <div class="grid md:grid-cols-2 gap-10">
      <!-- Sol: Büyük görsel ve galeri -->
      <div>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
             alt="Standart Blockout Pergola"
             class="rounded-xl shadow-lg w-full object-cover mb-4 h-80 animate-slide-in-left" />
        <div class="flex gap-3">
          <img
            v-for="(img, i) in galleryImages"
            :key="i"
            :src="img"
            class="rounded-lg object-cover w-32 h-20 border border-gray-200 hover:border-red-500 transition animate-fade-in-up"
            :style="{ animationDelay: `${i * 0.1 + 0.2}s` }"
            :alt="`Standart Blockout Pergola galeri ${i+1}`"
          />
        </div>
      </div>
      <!-- Sağ: Başlık, öne çıkanlar, garanti, buton -->
      <div class="animate-slide-in-right">
        <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Standart Blockout Pergola</h2>
        <ul class="text-gray-700 space-y-2 mb-6 list-disc list-inside animate-fade-in-up">
          <li>Su geçirmez özel Blockout kumaş, dört mevsim kullanım.</li>
          <li>Bakım gerektirmeyen, uzun ömürlü alüminyum gövde.</li>
          <li>LED aydınlatma ve uzaktan kumanda opsiyonu.</li>
          <li>Elektrostatik toz boya ile sınırsız renk seçeneği.</li>
          <li>ISO 9001 ve CE sertifikalı üretim.</li>
        </ul>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center animate-bounce-in">
            <span class="text-main-default font-bold text-lg mb-1">5 Yıl</span>
            <span class="text-xs text-gray-700 font-semibold mb-2">Motor Garantisi</span>
            <svg class="w-8 h-8 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
          </div>
          <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center animate-bounce-in" style="animation-delay:0.1s">
            <span class="text-main-default font-bold text-lg mb-1">2 Yıl</span>
            <span class="text-xs text-gray-700 font-semibold mb-2">Sistem Garantisi</span>
            <svg class="w-8 h-8 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2"></path><rect width="20" height="14" x="2" y="9" rx="2"></rect></svg>
          </div>
          <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center animate-bounce-in" style="animation-delay:0.2s">
            <span class="text-main-default font-bold text-lg mb-1">5 Yıl</span>
            <span class="text-xs text-gray-700 font-semibold mb-2">Blockout Kumaş Garantisi</span>
            <svg class="w-8 h-8 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </div>
        <NuxtLink
          to="/contact"
          class="block w-full text-center px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 hover:scale-105"
        >
          Teklif Al
        </NuxtLink>
      </div>
    </div>

    <!-- Özellikler ve Teknik Det.... -->
    <div class="mt-12 bg-white rounded-xl shadow p-6 animate-fade-in-up">
      <div class="flex gap-4 border-b border-gray-200 mb-6">
        <button class="px-4 py-2 font-bold text-main-default border-b-2 border-main-default focus:outline-none">Özellikler</button>
        <button class="px-4 py-2 font-bold text-gray-400 cursor-not-allowed" disabled>Teknik Detaylar</button>
      </div>
      <ul class="text-gray-700 space-y-2 list-disc list-inside">
        <li>Su geçirmez özel Blockout kumaş ile dört mevsim kullanım.</li>
        <li>Bakım gerektirmeyen, uzun ömürlü alüminyum gövde.</li>
        <li>LED aydınlatma ve uzaktan kumanda opsiyonu.</li>
        <li>Elektrostatik toz boya ile sınırsız renk seçeneği.</li>
        <li>ISO 9001 ve CE sertifikalı üretim.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const galleryImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
]
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
</style>