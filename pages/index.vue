<template>
  <section class="min-h-screen flex flex-col">
    <!-- Hero -->
          <div class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in  bg-[url(@/assests/images/tente1.jpg)] bg-cover h-[800px] bg-center bg-no-repeat relative">
        <!-- Overlay for better text readability -->
        <div class="absolute inset-0 bg-black/60"></div>
        <!-- Content -->
        <div class="relative z-10 max-w-4xl mx-auto">
          <span class="uppercase tracking-widest text-red-500 font-semibold mb-3 animate-fade-in-down">Dış Mekanlarınız İçin</span>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
            Uzman Deneyimli<br>
            <span class="text-red-400">Garantili Çözümler</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
            ..... ile mekanlarınızı güneşten ve yağmurdan koruyun, dış mekanlarınızı daha kullanışlı ve şık hale getirin.
          </p>
          <NuxtLink
            to="/iletisim"
            class="px-8 py-4 bg-red-600 text-white rounded-lg font-bold shadow-lg hover:bg-red-700 transition-all duration-300 animate-bounce-in"
          >
            Ücretsiz Keşif Talep Et
          </NuxtLink>
        </div>
        <!-- Slider indicator -->
        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div class="w-3 h-3 border-2 border-white rounded-full"></div>
        </div>
    </div>

    <div class="container mx-auto pt-5">
      <div class="bg-gradient-to-br from-gray-50 to-white py-20 rounded-lg">
        <div class=" px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Sol Taraf - İçerik -->
            <div class="space-y-6 animate-fade-in-up">
              <div class="inline-block animate-fade-in-down">
                <span class="text-sm font-semibold text-red-600 uppercase tracking-widest">Hakkımızda</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-down">
                40 Yıllık <span class="text-red-600 animate-pulse">Deneyim</span> ile Güvenilir Çözümler
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed animate-fade-in-up">
                1984 yılından bu yana İzmir'de faaliyet gösteren ....., dış mekan gölgelendirme sistemlerinde Türkiye'nin önde gelen firmalarından biridir. Modern teknoloji ve geleneksel ustalığı birleştirerek, müşterilerimize en kaliteli tente çözümlerini sunuyoruz.
              </p>
              <div class="grid grid-cols-2 gap-6 pt-6">
                <div class="text-center animate-bounce-in">
                  <div class="text-3xl font-bold text-red-600 mb-2 counter-animation" data-target="1500">%98</div>
                  <div class="text-sm text-gray-600">Mutlu Müşteri</div>
                </div>
                <div class="text-center animate-bounce-in">
                  <div class="text-3xl font-bold text-red-600 mb-2 counter-animation" data-target="40">12</div>
                  <div class="text-sm text-gray-600">Yıllık Deneyim</div>
                </div>
              </div>
              <div class="pt-4 animate-fade-in-up">
                <NuxtLink
                  to="/hakkimizda"
                  class="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 group hover:scale-105"
                >
                  Daha Fazla Bilgi
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
            
            <!-- Sağ Taraf - Görsel Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left group">
                  <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4"></path>
                      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Kalite Garantisi</h3>
                  <p class="text-sm text-gray-600">Tüm ürünlerimiz 5 yıl garanti kapsamındadır.</p>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left group">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Hızlı Teslimat</h3>
                  <p class="text-sm text-gray-600">Siparişiniz 7-10 iş günü içinde teslim edilir.</p>
                </div>
              </div>
              <div class="space-y-4 pt-8">
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right group">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Uzman Ekip</h3>
                  <p class="text-sm text-gray-600">Deneyimli montaj ekibimizle profesyonel hizmet.</p>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right group">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Müşteri Memnuniyeti</h3>
                  <p class="text-sm text-gray-600">%98 müşteri memnuniyet oranı ile hizmet veriyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <!-- Avantajlar -->
       <div class="grid md:grid-cols-3 gap-8 py-16 animate-fade-in-up">
          <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <svg class="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"></path></svg>
            <h3 class="font-bold text-lg mb-2">Estetik Tasarım</h3>
            <p class="text-gray-500 text-center">Mekanınıza değer katan, modern ve şık tente modelleri.</p>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <svg class="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
            <h3 class="font-bold text-lg mb-2">Dayanıklı Malzeme</h3>
            <p class="text-gray-500 text-center">Yıllarca kullanabileceğiniz, hava koşullarına dayanıklı tente sistemleri.</p>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <svg class="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
            <h3 class="font-bold text-lg mb-2">Hızlı Montaj</h3>
            <p class="text-gray-500 text-center">Uzman ekibimizle kısa sürede kurulum ve sorunsuz teslimat.</p>
          </div>
      </div>


      <!-- Hakkımızda Bölümü -->
      



      <!-- Referanslar -->
      <div class="my-5">
        <Carousel v-bind="carouselReferenceConfig">
          <Slide>
            <div class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] hover: transition-shadow duration-300">
              <p class="text-gray-600 italic mb-2">"..... ile bahçemiz artık hem daha şık hem de yaz-kış kullanışlı!"</p>
              <span class="block text-right text-red-600 font-semibold">- Selin A.</span>
            </div>
          </Slide>
          <Slide>
            <div class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] hover: transition-shadow duration-300">
              <p class="text-gray-600 italic mb-2">"Hızlı montaj ve kaliteli malzeme, kesinlikle tavsiye ederim."</p>
              <span class="block text-right text-blue-600 font-semibold">- Murat K.</span>
            </div>
          </Slide>
          <Slide>
            <div class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] hover: transition-shadow duration-300">
              <p class="text-gray-600 italic mb-2">"..... ile bahçemiz artık hem daha şık hem de yaz-kış kullanışlı!"</p>
              <span class="block text-right text-red-600 font-semibold">- Selin A.</span>
            </div>
          </Slide>
          <Slide>
            <div class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] hover: transition-shadow duration-300">
              <p class="text-gray-600 italic mb-2">"Hızlı montaj ve kaliteli malzeme, kesinlikle tavsiye ederim."</p>
              <span class="block text-right text-blue-600 font-semibold">- Murat K.</span>
            </div>
          </Slide>
        </Carousel>
      </div>

     

      <!-- Firma Logoları Carousel -->
      <div class="rounded-lg mx-auto py-12 px-4 flex flex-col gap-y-10 max-w-full">
        <h3 class="text-center text-gray-700 font-semibold mb-6 tracking-widest">EN İYİ FİRMALAR İLE ÇALIŞIYORUZ</h3>
        <Carousel v-bind="sirketCarousel">
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-gray-800 drop-shadow">
                Lemon Squeezy
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-red-500 to-blue-500 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-yellow-600 drop-shadow">
                Payoneer
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-blue-500 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-red-500 drop-shadow">
                Wise
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-red-500 to-gray-800 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-gray-800 drop-shadow">
                Mercury
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-gray-800 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-gray-800 drop-shadow">
                Mercury
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-gray-800 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-yellow-600 drop-shadow">
                Paddle
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-blue-500 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-red-600 drop-shadow">
                WorldFirst
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-red-500 to-gray-800 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-gray-500 drop-shadow">
                Bizee
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-gray-500 to-blue-500 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
          <Slide>
            <div class="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-gray-200 p-6 w-72 min-w-[18rem] flex flex-col items-center justify-center">
              <span class="text-3xl font-extrabold text-yellow-600 drop-shadow">
                Paddle
              </span>
              <span class="mt-3 text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-blue-500 px-3 py-1 rounded-full shadow">
                Güvenilir Partner
              </span>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>



<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

definePageMeta({
  layout: 'default'
})

const carouselReferenceConfig = {
  itemsToShow: 'auto',
  wrapAround: true,
  gap: 10,
  autoplay: 4000,
  pauseAutoplayOnHover: true,
}

const sirketCarousel = {
  itemsToShow: 'auto',
  wrapAround: true,
  gap: 10,
  autoplay: 7000,
  pauseAutoplayOnHover: true,
}


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
@keyframes bounce-in {
  0% { transform: scale(0.8);}
  60% { transform: scale(1.05);}
  100% { transform: scale(1);}
}
@keyframes carousel {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes testimonial-carousel {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-fade-in { animation: fade-in 1s ease; }
.animate-fade-in-down { animation: fade-in-down 1s ease; }
.animate-fade-in-up { animation: fade-in-up 1s ease; }
.animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-carousel {
  min-width: 200%;
}
.animate-testimonial-carousel {
  min-width: 200%;
}


</style> 