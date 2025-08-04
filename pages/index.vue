<template>
  <section class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <header class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(@/assets/images/home_page_banner_last.jpg)] bg-cover h-[800px] bg-center bg-no-repeat relative">
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-black/40"></div>
      <!-- Content -->
      <div class="relative z-10 max-w-4xl mx-auto">
        <span class="uppercase tracking-widest text-main-300 font-semibold mb-3 animate-fade-in-down">Dış Mekanlarınız İçin</span>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
          Uzman Deneyimli<br>
          <span class="text-main-300">Garantili Çözümler</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
          DYLegendary Tente ile mekanlarınızı güneşten ve yağmurdan koruyun, dış mekanlarınızı daha kullanışlı ve şık hale getirin.
        </p>
        <NuxtLink
          to="/contact"
          class="px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 animate-bounce-in"
          aria-label="Ücretsiz keşif talebi için iletişim sayfasına git"
        >
          Ücretsiz Keşif Talep Et
        </NuxtLink>
      </div>
      <!-- Slider indicator -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div class="w-3 h-3 border-2 border-white rounded-full"></div>
      </div>
    </header>

    <!-- Ürün Gruplarımız Bölümü -->
    <main class="container mx-auto py-16">
      <div class="text-center mb-12 animate-fade-in-down">
        <span class="uppercase text-red-600 font-semibold tracking-widest">ÜRÜNLERİMİZ</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-2 tracking-wider">ÜRÜN GRUPLARIMIZ</h2>
      </div>
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-md:p-2 gap-8" aria-label="Ürün kategorileri">
        <article
          v-for="(item, i) in urunler"
          :key="i"
          class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer"
          :style="{ animationDelay: `${i * 0.08 + 0.2}s` }"
        >
          <NuxtLink to="/products" class="flex flex-col h-full">
            <div class="h-56 w-full bg-gray-200 flex items-center justify-center">
              <img :src="item.img" :alt="`${item.title} ürünleri`" class="object-cover w-full h-full" loading="lazy" />
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <h3 class="font-bold text-lg text-gray-900 mb-2 uppercase tracking-wider">{{ item.title }}</h3>
              <span class="text-xs text-gray-400 font-semibold tracking-widest">ÜRÜNLERİ İNCELE</span>
            </div>
          </NuxtLink>
        </article>
      </section>
    </main>

    <section class="container mx-auto pt-5" aria-labelledby="about-heading">
      <div class="bg-gradient-to-br from-gray-50 to-white py-20 rounded-lg">
        <div class="px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Sol Taraf - İçerik -->
            <article class="space-y-6 animate-fade-in-up">
              <div class="inline-block animate-fade-in-down">
                <span class="text-sm font-semibold text-red-600 uppercase tracking-widest">Hakkımızda</span>
              </div>
              <h2 id="about-heading" class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-down">
                30 Yıllık <span class="text-main-default animate-pulse">Deneyim</span> ile Güvenilir Çözümler
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed animate-fade-in-up">
                1994 yılından bu yana İzmir'de faaliyet gösteren DYLegendary Tente, dış mekan gölgelendirme sistemlerinde Türkiye'nin önde gelen firmalarından biridir. Modern teknoloji ve geleneksel ustalığı birleştirerek, müşterilerimize en kaliteli tente çözümlerini sunuyoruz.
              </p>
              <div class="grid grid-cols-2 gap-6 pt-6" role="group" aria-label="Şirket istatistikleri">
                <div class="text-center animate-bounce-in">
                  <div class="text-3xl font-bold text-main-default mb-2 counter-animation" data-target="1500">%98</div>
                  <div class="text-sm text-gray-600">Mutlu Müşteri</div>
                </div>
                <div class="text-center animate-bounce-in">
                  <div class="text-3xl font-bold text-main-default mb-2 counter-animation" data-target="40">30</div>
                  <div class="text-sm text-gray-600">Yıllık Deneyim</div>
                </div>
              </div>
              <div class="pt-4 animate-fade-in-up">
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center px-6 py-3 bg-main-default text-white font-semibold rounded-lg hover:bg-main-600 transition-all duration-300 group hover:scale-105"
                  aria-label="Hakkımızda sayfasına git"
                >
                  Daha Fazla Bilgi
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </NuxtLink>
              </div>
            </article>
            
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
                  <p class="text-sm text-gray-600">En yüksek kalite standartlarında üretim ve hizmet.</p>
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

      <!-- Referanslar -->
      <section class="my-5" aria-labelledby="testimonials-heading">
        <h3 id="testimonials-heading" class="text-center text-gray-700 font-semibold mb-6 tracking-widest">MÜŞTERİ MEMNUNİYETİ</h3>
        <Carousel v-bind="carouselReferenceConfig" aria-label="Müşteri yorumları">
          <Slide>
            <blockquote class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] min-h-[9rem] hover: transition-shadow duration-300 flex flex-col">
              <p class="text-gray-600 italic mb-2">"DYLegendary Tente ile bahçemiz artık hem daha şık hem de yaz-kış kullanışlı!"</p>
              <cite class="block text-right text-red-600 font-semibold mt-auto">- Selin A.</cite>
            </blockquote>
          </Slide>
          <Slide>
            <blockquote class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] min-h-[9rem] hover: transition-shadow duration-300 flex flex-col">
              <p class="text-gray-600 italic mb-2">"Hızlı montaj ve kaliteli malzeme, kesinlikle tavsiye ederim."</p>
              <cite class="block text-right text-blue-600 font-semibold mt-auto">- Murat K.</cite>
            </blockquote>
          </Slide>
          <Slide>
            <blockquote class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] min-h-[9rem] hover: transition-shadow duration-300 flex flex-col">
              <p class="text-gray-600 italic mb-2">"Restoranımızın terası için mükemmel çözüm, müşterilerimiz çok memnun."</p>
              <cite class="block text-right text-green-600 font-semibold mt-auto">- Ayşe D.</cite>
            </blockquote>
          </Slide>
          <Slide>
            <blockquote class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] min-h-[9rem] hover: transition-shadow duration-300 flex flex-col">
              <p class="text-gray-600 italic mb-2">"Profesyonel ekip ve kaliteli hizmet, çok teşekkürler."</p>
              <cite class="block text-right text-purple-600 font-semibold mt-auto">- Mehmet Ö.</cite>
            </blockquote>
          </Slide>
          <Slide>
            <blockquote class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] min-h-[9rem] hover: transition-shadow duration-300 flex flex-col">
              <p class="text-gray-600 italic mb-2">"Kafe terası için ideal çözüm, yağmurda bile keyifle oturabiliyoruz."</p>
              <cite class="block text-right text-orange-600 font-semibold mt-auto">- Can Y.</cite>
            </blockquote>
          </Slide>
          <Slide>
            <blockquote class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] min-h-[9rem] hover: transition-shadow duration-300 flex flex-col">
              <p class="text-gray-600 italic mb-2">"Villa havuz başı için harika bir seçim, çok memnunuz."</p>
              <cite class="block text-right text-teal-600 font-semibold mt-auto">- Zeynep S.</cite>
            </blockquote>
          </Slide>
          <Slide>
            <blockquote class="bg-white rounded-lg shadow p-4 w-72 min-w-[18rem] min-h-[9rem] hover: transition-shadow duration-300 flex flex-col">
              <p class="text-gray-600 italic mb-2">"Garantili hizmet ve uygun fiyat, herkese öneririm."</p>
              <cite class="block text-right text-indigo-600 font-semibold mt-auto">- Ali R.</cite>
            </blockquote>
          </Slide>
        </Carousel>
      </section>

      <!-- Çalıştığımız Firmalar -->  
      <section class="py-16 bg-gray-50" aria-labelledby="partners-heading">
        <div class="text-center mb-12 animate-fade-in-down">
          <span class="uppercase text-red-600 font-semibold tracking-widest">REFERANSLARIMIZ</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 tracking-wider">ÇALIŞTIĞIMIZ FİRMALAR</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">30 yıllık deneyimimizle birçok kurumsal firmaya hizmet verdik ve güvenlerini kazandık.</p>
        </div>
        
        <div class="overflow-hidden">
          <Carousel v-bind="sirketCarousel" aria-label="Çalıştığımız firmalar">
            <Slide v-for="(firma, index) in calistigimisFirmalar" :key="index">
              <div class="bg-white rounded-xl shadow-lg p-8 mx-2 hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[280px] h-32 flex items-center justify-center group">
                <div class="text-center">
                  <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:from-main-100 group-hover:to-main-200 transition-all duration-300">
                    <span class="text-2xl font-bold text-gray-700 group-hover:text-main-600 transition-colors duration-300">{{ firma.logo }}</span>
                  </div>
                  <h3 class="font-bold text-gray-900 text-sm group-hover:text-main-600 transition-colors duration-300">{{ firma.name }}</h3>
                  <p class="text-xs text-gray-500 mt-1">{{ firma.sector }}</p>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
        
        <!-- İstatistikler -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div class="text-center animate-fade-in-up">
            <div class="text-3xl md:text-4xl font-bold text-main-600 mb-2">500+</div>
            <p class="text-gray-600 font-medium">Tamamlanan Proje</p>
          </div>
          <div class="text-center animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="text-3xl md:text-4xl font-bold text-main-600 mb-2">30</div>
            <p class="text-gray-600 font-medium">Yıllık Deneyim</p>
          </div>
          <div class="text-center animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="text-3xl md:text-4xl font-bold text-main-600 mb-2">98%</div>
            <p class="text-gray-600 font-medium">Müşteri Memnuniyeti</p>
          </div>
          <div class="text-center animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="text-3xl md:text-4xl font-bold text-main-600 mb-2">24/7</div>
            <p class="text-gray-600 font-medium">Destek Hizmeti</p>
          </div>
        </div>
      </section>


    </section>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

// JSON-LD Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DYLegendary Tente",
        "description": "İzmir'de 30 yıllık deneyimle tente, pergola, branda, lojistik, dorse ve cam sistemleri hizmeti veren firma",
        "url": "https://DYLegendarytente.com",
        "telephone": "+90-232-XXX-XXXX",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "İzmir",
          "addressRegion": "İzmir",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 38.4192,
          "longitude": 27.1287
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "priceRange": "$$",
        "serviceArea": {
          "@type": "City",
          "name": "İzmir"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Tente Sistemleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pergola Sistemleri"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tente Sistemleri"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cam Sistemleri"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lojistik Hizmetleri"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dorse Hizmetleri"  
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gölgelik Sistemleri"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jüt Kumaş Uygulamaları"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "30 Yıllık Sektör Deneyimi"
          }
        ],
        "knowsAbout": [
          "Tente Sistemleri",
          "Pergola Sistemleri", 
          "Cam Sistemleri",
          "Branda Uygulamaları",
          "Teknik Tekstil Perdeler",
          "Çadır Sistemleri",
          "Dorse Sistemleri",
          "Gölgelik Sistemleri",
          "Jüt Kumaş Uygulamaları"
        ],
        "clientele": [
          "Mega Üniversite",
          "City Belediyesi",
          "Tech Üniversitesi",
          "Grand Hotel",
          "Royal Hotel",
          "Plaza AVM",
          "Central Mall",
          "Business Center"
        ]
      })
    }
  ]
})

definePageMeta({
  layout: 'default',
  title: 'DYLegendary Tente - İzmir Tente Sistemleri | Pergola, Branda, Cam Sistemleri',
  meta: [
    {
      name: 'description',
      content: 'DYLegendary Tente ile İzmir\'de Pergola, Branda, Cam Sistemleri gibi dış mekan çözümlerinde profesyonel hizmet. 30 yıllık deneyim, ücretsiz keşif ve garantili hizmet. İzmir tente firması.'
    },
    {
      name: 'keywords',
      content: 'tente izmir, pergola izmir, branda izmir, cam balkon izmir, gölgelendirme sistemleri, tente firması izmir, pergola firması, branda firması, cam sistemleri, dış mekan çözümleri, tente montaj, pergola montaj, dorse, tente, gölgelik, jüt, dorse sistemleri, jüt kumaş, gölgelik sistemleri'
    },
    {
      name: 'author',
      content: 'DYLegendary Tente'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'DYLegendary Tente - İzmir Tente Sistemleri | Pergola, Branda, Cam Sistemleri'
    },
    {
      property: 'og:description',
      content: 'DYLegendary Tente ile İzmir\'de Pergola, Branda, Cam Sistemleri gibi dış mekan çözümlerinde profesyonel hizmet. 30 yıllık deneyim, ücretsiz keşif ve garantili hizmet.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://DYLegendarytente.com'
    },
    {
      property: 'og:image',
      content: 'https://DYLegendarytente.com/og-image.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'DYLegendary Tente - İzmir Tente Sistemleri'
    },
    {
      name: 'twitter:description',
      content: 'İzmir\'de 30 yıllık deneyimle tente, pergola, branda ve cam sistemleri. Profesyonel hizmet, garantili çözümler.'
    },
    {
      name: 'twitter:image',
      content: 'https://DYLegendarytente.com/twitter-image.jpg'
    },
    {
      name: 'canonical',
      content: 'https://DYLegendarytente.com'
    },
    {
      name: 'geo.region',
      content: 'TR-35'
    },
    {
      name: 'geo.placename',
      content: 'İzmir'
    },
    {
      name: 'geo.position',
      content: '38.4192;27.1287'
    },
    {
      name: 'ICBM',
      content: '38.4192, 27.1287'
    }
  ]
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

const urunler = [
  {
    title: 'PERGOLA',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola2.png',
  },
  {
    title: 'TENTE',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent_tente3.png',
  },
  {
    title: 'CAM SİSTEMLERİ',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam1.png',
  },
  {
    title: 'TEKNİK TEKSTİL PERDELER',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam1.png',
  },
  {
    title: 'BRANDA UYGULAMALARI',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/branda_uygulamasi1.png',
  },
  {
    title: 'ÇADIR',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir2.png',
  },
]

const calistigimisFirmalar = [
  {
    name: 'Mega Üniversite',
    logo: 'MÜ',
    sector: 'Eğitim'
  },
  {
    name: 'City Belediyesi',
    logo: 'CB',
    sector: 'Kamu'
  },
  {
    name: 'Metro Belediyesi',
    logo: 'MB',
    sector: 'Kamu'
  },
  {
    name: 'Grand Hotel',
    logo: 'GH',
    sector: 'Turizm'
  },
  {
    name: 'Plaza AVM',
    logo: 'PA',
    sector: 'Perakende'
  },
  {
    name: 'Elite Restoran',
    logo: 'ER',
    sector: 'Gastronomi'
  },
  {
    name: 'Business Center',
    logo: 'BC',
    sector: 'İş Merkezi'
  },
  {
    name: 'Tech Üniversitesi',
    logo: 'TÜ',
    sector: 'Eğitim'
  },
  {
    name: 'Royal Hotel',
    logo: 'RH',
    sector: 'Turizm'
  },
  {
    name: 'Central Mall',
    logo: 'CM',
    sector: 'Perakende'
  },
  {
    name: 'Premium Cafe',
    logo: 'PC',
    sector: 'Gastronomi'
  },
  {
    name: 'Modern Okul',
    logo: 'MO',
    sector: 'Eğitim'
  },
  {
    name: 'Luxury Resort',
    logo: 'LR',
    sector: 'Turizm'
  },
  {
    name: 'Garden Restaurant',
    logo: 'GR',
    sector: 'Gastronomi'
  },
  {
    name: 'Smart Office',
    logo: 'SO',
    sector: 'İş Merkezi'
  },
  {
    name: 'Urban Mall',
    logo: 'UM',
    sector: 'Perakende'
  },
  {
    name: 'Seaside Hotel',
    logo: 'SH',
    sector: 'Turizm'
  },
  {
    name: 'Green Campus',
    logo: 'GC',
    sector: 'Eğitim'
  }
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
.animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-carousel {
  min-width: 200%;
}
.animate-testimonial-carousel {
  min-width: 200%;
}
</style>