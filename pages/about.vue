<template>
  <!-- Hero Section -->
  <header class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(@/assets/images/about_banner_last.jpg)] bg-cover h-[600px] bg-center bg-no-repeat relative">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 max-w-4xl mx-auto">
      <span class="uppercase tracking-widest text-main-300 font-semibold mb-3 animate-fade-in-down">HAKKIMIZDA</span>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
        30 Yıllık <span class="text-main-300">Deneyim</span><br>
        Güvenilir Çözümler
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
        1994 yılından bu yana İzmir'de faaliyet gösteren DYLegendary Tente, dış mekan gölgelendirme sistemlerinde Türkiye'nin önde gelen firmalarından biridir.
      </p>
      <NuxtLink
        to="/contact"
        class="px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 animate-bounce-in"
        aria-label="İletişim sayfasına git"
      >
        Bizimle İletişime Geçin
      </NuxtLink>
    </div>
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
    </div>
  </header>

  <!-- Ana İçerik -->
  <main class="container mx-auto py-16 px-4">
    <!-- Misyon ve Vizyon -->
    <section class="grid lg:grid-cols-2 gap-12 mb-20" aria-labelledby="mission-vision-heading">
      <h2 id="mission-vision-heading" class="sr-only">Misyon ve Vizyon</h2>
      
      <!-- Misyon -->
      <article class="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 animate-slide-in-left">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-main-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 uppercase tracking-wider">Misyonumuz</h3>
        </div>
        <p class="text-gray-700 leading-relaxed text-lg">
          Tasarım ve kaliteyi bir araya getirerek, sahil, bahçe, teras ve ticari alanlar için estetik ve fonksiyonel gölgelendirme çözümleri sunmak. Her projede, özgün branda, tente, pergola ve şezlong uygulamalarıyla müşterilerimizin yaşam alanlarını daha konforlu ve şık hale getirmek. Usta işçilik ve müşteri memnuniyetini esas alan yaklaşımımızla uzun ömürlü, güvenli ve sorunsuz kurulumlar sağlamak.
        </p>
      </article>

      <!-- Vizyon -->
      <article class="bg-gradient-to-br from-main-50 to-white rounded-2xl shadow-lg p-8 animate-slide-in-right">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-main-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 uppercase tracking-wider">Vizyonumuz</h3>
        </div>
        <p class="text-gray-700 leading-relaxed text-lg">
          Gölgelendirme ve açık alan donanımları alanında Türkiye'nin en güvenilir ve yenilikçi markalarından biri olmak. Kaliteyi, estetiği ve kullanıcı deneyimini ön planda tutarak hem yurt içinde hem yurt dışında tercih edilen bir çözüm ortağı haline gelmek. Geleneksel el işçiliğini modern tekniklerle buluşturarak sektöre ilham veren işler ortaya koymak.
        </p>
      </article>
    </section>

    <!-- Değerlerimiz -->
    <section class="mb-20" aria-labelledby="values-heading">
      <div class="text-center mb-12 animate-fade-in-down">
        <span class="uppercase text-red-600 font-semibold tracking-widest">DEĞERLERİMİZ</span>
        <h2 id="values-heading" class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-2 tracking-wider">TEMEL PRENSİPLERİMİZ</h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style="animation-delay: 0.1s">
          <div class="w-16 h-16 bg-main-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Kalite</h3>
          <p class="text-gray-600">En yüksek kalite standartlarında üretim ve hizmet</p>
        </div>
        <div class="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="w-16 h-16 bg-main-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Müşteri Odaklılık</h3>
          <p class="text-gray-600">Müşteri memnuniyeti her şeyin önünde</p>
        </div>
        <div class="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style="animation-delay: 0.3s">
          <div class="w-16 h-16 bg-main-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">İnovasyon</h3>
          <p class="text-gray-600">Sürekli gelişim ve yenilikçi çözümler</p>
        </div>
        <div class="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style="animation-delay: 0.4s">
          <div class="w-16 h-16 bg-main-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-main-default" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Güvenilirlik</h3>
          <p class="text-gray-600">30 yıllık deneyim ve güvenilir hizmet</p>
        </div>
      </div>
    </section>

    <!-- İstatistikler -->
    <section class="bg-gradient-to-r from-main-default to-main-600 rounded-2xl p-12 text-white mb-20" aria-labelledby="stats-heading">
      <h2 id="stats-heading" class="sr-only">İstatistikler</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="animate-bounce-in" style="animation-delay: 0.1s">
          <div class="text-4xl font-bold mb-2">30+</div>
          <div class="text-main-100">Yıllık Deneyim</div>
        </div>
        <div class="animate-bounce-in" style="animation-delay: 0.2s">
          <div class="text-4xl font-bold mb-2">500+</div>
          <div class="text-main-100">Mutlu Müşteri</div>
        </div>
        <div class="animate-bounce-in" style="animation-delay: 0.3s">
          <div class="text-4xl font-bold mb-2">15</div>
          <div class="text-main-100">Ürün Kategorisi</div>
        </div>
        <div class="animate-bounce-in" style="animation-delay: 0.4s">
          <div class="text-4xl font-bold mb-2">%98</div>
          <div class="text-main-100">Müşteri Memnuniyeti</div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="text-center bg-gray-50 rounded-2xl p-12 animate-fade-in-up">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Projeleriniz İçin Bizimle İletişime Geçin</h2>
      <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        30 yıllık deneyimimiz ve uzman ekibimizle, dış mekan projeleriniz için en uygun çözümleri sunuyoruz. Ücretsiz keşif ve danışmanlık hizmeti için hemen iletişime geçin.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/contact"
          class="px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 hover:scale-105"
        >
          Ücretsiz Keşif Talep Et
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="px-8 py-4 border-2 border-main-default text-main-default rounded-lg font-bold hover:bg-main-default hover:text-white transition-all duration-300 hover:scale-105"
        >
          Ürünlerimizi İncele
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
// SEO Meta Tags
useHead({
  title: 'Hakkımızda -DYLegendary Tente | 30 Yıllık Deneyim',
  meta: [
    {
      name: 'description',
      content: '1994 yılından bu yana İzmir\'de faaliyet gösteren DYLegendary Tente, dış mekan gölgelendirme sistemlerinde 30 yıllık deneyimi ile Türkiye\'nin önde gelen firmalarından biridir. Misyon, vizyon ve değerlerimizi keşfedin.'
    },
    {
      name: 'keywords',
      content: 'DYLegendary tente hakkında, tente firması izmir, pergola uzmanı, dış mekan gölgelendirme, 30 yıllık deneyim, tente misyon vizyon'
    },
    {
      property: 'og:title',
      content: 'Hakkımızda - DYLegendary Tente | 30 Yıllık Deneyim'
    },
    {
      property: 'og:description',
      content: '1994 yılından bu yana İzmir\'de faaliyet gösteren DYLegendary Tente, dış mekan gölgelendirme sistemlerinde 30 yıllık deneyimi ile Türkiye\'nin önde gelen firmalarından biridir.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://DYLegendarytente.com/about'
    },
    {
      property: 'og:image',
      content: 'https://DYLegendarytente.com/assets/images/pergola33.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Hakkımızda - DYLegendary Tente | 30 Yıllık Deneyim'
    },
    {
      name: 'twitter:description',
      content: '1994 yılından bu yana İzmir\'de faaliyet gösteren DYLegendary Tente, dış mekan gölgelendirme sistemlerinde 30 yıllık deneyimi ile Türkiye\'nin önde gelen firmalarından biridir.'
    },
    {
      name: 'twitter:image',
      content: 'https://DYLegendarytente.com/assets/images/pergola33.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://DYLegendarytente.com/about'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DYLegendary Tente",
        "description": "1994 yılından bu yana İzmir'de faaliyet gösteren, dış mekan gölgelendirme sistemlerinde uzmanlaşmış firma. Pergola, tente, cam sistemleri ve daha fazlası.",
        "url": "https://DYLegendarytente.com",
        "logo": "https://DYLegendarytente.com/assets/images/logo3.png",
        "foundingDate": "1994",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "İzmir",
          "addressCountry": "TR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+90-541-928-54-87",
          "contactType": "customer service",
          "availableLanguage": "Turkish"
        },
        "sameAs": [
          "https://DYLegendarytente.com"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Turkey"
        },
        "serviceType": [
          "Pergola Sistemleri",
          "Tente Sistemleri",
          "Cam Sistemleri",
          "Teknik Tekstil Perdeler",
          "Dış Mekan Gölgelendirme"
        ],
        "yearEstablished": "1994",
        "numberOfEmployees": "10-50",
        "knowsAbout": [
          "Pergola",
          "Tente",
          "Cam Balkon",
          "Zip Perde",
          "Dış Mekan Gölgelendirme",
          "Branda Uygulamaları",
          "Karoser ve Dorse Hizmetleri"
        ]
      })
    }
  ]
})
</script>

<style scoped>
/* Animasyon stilleri */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out;
}

.animate-bounce-in {
  animation: bounce-in 0.8s ease-out;
}
</style>