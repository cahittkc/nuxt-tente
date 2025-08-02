<template>
  <!-- Hero/Banner -->
  <header class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(@/assets/images/pergola3.jpg)] bg-cover h-[500px] bg-center bg-no-repeat relative">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 max-w-3xl mx-auto">
      <span class="uppercase tracking-widest text-main-300 font-semibold mb-3 animate-fade-in-down">İLETİŞİM</span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
        Bize Ulaşın<br>
        <span class="text-main-300">Sorularınız ve Talepleriniz İçin</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
        Tüm sorularınız, teklif talepleriniz ve işbirliği fırsatları için bizimle iletişime geçebilirsiniz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
      </p>
    </div>
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
    </div>
  </header>

  <!-- İletişim Bilgileri ve Form -->
  <main class="container mx-auto py-16 px-4" aria-labelledby="contact-heading">
    <h2 id="contact-heading" class="sr-only">İletişim Bilgileri</h2>
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Sol: Bilgiler -->
      <section class="space-y-8 animate-slide-in-left" aria-labelledby="contact-info-heading">
        <h3 id="contact-info-heading" class="text-2xl font-bold text-gray-900 mb-2">İletişim Bilgilerimiz</h3>
        <address class="text-gray-700 space-y-2 not-italic">
          <p><span class="font-semibold">Adres:</span> İzmir, Türkiye</p>
          <p><span class="font-semibold">Telefon:</span> <a href="tel:+905551234567" class="hover:text-main-default transition-colors">+90 541 928 54 87</a></p>
          <p><span class="font-semibold">E-posta:</span> <a href="mailto:info@legendarytente.com" class="hover:text-main-default transition-colors">info@legendarytente.com</a></p>
        </address>
        <div>
          <h4 class="font-bold text-gray-900 mb-2">Çalışma Saatleri</h4>
          <p class="text-gray-700">Pazartesi - Cumartesi: 08:30 - 18:30</p>
        </div>
      </section>
      <!-- Sağ: Form -->
      <section aria-labelledby="contact-form-heading">
        <h3 id="contact-form-heading" class="text-2xl font-bold text-gray-900 mb-4">İletişim Formu</h3>
        <form class="bg-white rounded-xl shadow-lg p-8 space-y-6 animate-slide-in-right max-w-2xl w-full mx-auto" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="sr-only">Adınız Soyadınız</label>
              <input 
                id="name"
                name="name"
                type="text" 
                placeholder="Adınız Soyadınız" 
                class="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition" 
                required 
                aria-required="true"
              />
            </div>
            <div>
              <label for="email" class="sr-only">E-posta Adresiniz</label>
              <input 
                id="email"
                name="email"
                type="email" 
                placeholder="E-posta Adresiniz" 
                class="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition" 
                required 
                aria-required="true"
              />
            </div>
          </div>
          <div>
            <label for="phone" class="sr-only">Telefon Numaranız</label>
            <input 
              id="phone"
              name="phone"
              type="tel" 
              placeholder="Telefon Numaranız" 
              class="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition" 
            />
          </div>
          <div>
            <label for="message" class="sr-only">Mesajınız</label>
            <textarea 
              id="message"
              name="message"
              placeholder="Mesajınız" 
              rows="5" 
              class="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition" 
              required 
              aria-required="true"
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="w-full py-3 bg-main-default text-white font-bold rounded-lg shadow hover:bg-main-600 transition-all duration-300 hover:scale-105"
            aria-label="İletişim formunu gönder"
          >
            Gönder
          </button>
        </form>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
// JSON-LD Structured Data for Contact Page
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Legendary Tente İletişim",
        "description": "İzmir'de tente, pergola ve cam sistemleri için iletişim. Teklif alın, sorularınızı sorun.",
        "url": "https://legendarytente.com/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "Legendary Tente",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "İzmir",
            "addressRegion": "İzmir",
            "addressCountry": "TR"
          },
          "telephone": "+905551234567",
          "email": "info@legendarytente.com",
          "openingHours": "Mo-Sa 08:30-18:30",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.4192,
            "longitude": 27.1287
          }
        }
      })
    }
  ]
})

definePageMeta({
  layout: 'default',
  title: 'İletişim - Legendary Tente | İzmir Tente Firması',
  meta: [
    {
      name: 'description',
      content: 'Legendary Tente ile iletişime geçin. İzmir\'de tente, pergola, cam sistemleri için teklif alın. Telefon: 0 555 123 45 67, E-posta: info@legendarytente.com'
    },
    {
      name: 'keywords',
      content: 'tente firması izmir, pergola firması izmir, cam sistemleri izmir, tente teklif, pergola teklif, izmir tente iletişim, tente fiyatları izmir'
    },
    {
      name: 'author',
      content: 'Legendary Tente'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'İletişim - Legendary Tente | İzmir Tente Firması'
    },
    {
      property: 'og:description',
      content: 'Legendary Tente ile iletişime geçin. İzmir\'de tente, pergola, cam sistemleri için teklif alın.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://legendarytente.com/contact'
    },
    {
      property: 'og:image',
      content: 'https://legendarytente.com/contact-og-image.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'İletişim - Legendary Tente'
    },
    {
      name: 'twitter:description',
      content: 'İzmir\'de tente, pergola, cam sistemleri için iletişim. Teklif alın, sorularınızı sorun.'
    },
    {
      name: 'twitter:image',
      content: 'https://legendarytente.com/contact-twitter-image.jpg'
    },
    {
      name: 'canonical',
      content: 'https://legendarytente.com/contact'
    }
  ]
})

// Form submission handler
const handleSubmit = (event: Event) => {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', Object.fromEntries(formData))
  
  // Show success message (you can implement this)
  alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
  
  // Reset form
  form.reset()
}
</script>

<style scoped>
@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-50px);}
  to { opacity: 1; transform: translateX(0);}
}
@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(50px);}
  to { opacity: 1; transform: translateX(0);}
}
.animate-slide-in-left { animation: slide-in-left 1s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-slide-in-right { animation: slide-in-right 1s cubic-bezier(.68,-0.55,.27,1.55); }
</style> 