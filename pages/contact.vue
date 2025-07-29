<template>
  <!-- Hero/Banner -->
  <div class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(https://tent-bckt.s3.eu-north-1.amazonaws.com/products_banner.jpg)] bg-cover h-[500px] bg-center bg-no-repeat relative">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 max-w-3xl mx-auto">
      <span class="uppercase tracking-widest text-red-500 font-semibold mb-3 animate-fade-in-down">İLETİŞİM</span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
        Bize Ulaşın<br>
        <span class="text-main-400">Sorularınız ve Talepleriniz İçin</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
        Tüm sorularınız, teklif talepleriniz ve işbirliği fırsatları için bizimle iletişime geçebilirsiniz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
      </p>
    </div>
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
    </div>
  </div>

  <!-- İletişim Bilgileri ve Form -->
  <div class="container mx-auto py-16 px-4">
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Sol: Bilgiler -->
      <div class="space-y-8 animate-slide-in-left">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">İletişim Bilgilerimiz</h2>
          <ul class="text-gray-700 space-y-2">
            <li><span class="font-semibold">Adres:</span> İzmir, Türkiye</li>
            <li><span class="font-semibold">Telefon:</span> 0 555 123 45 67</li>
            <li><span class="font-semibold">E-posta:</span> info@legendarytente.com</li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 mb-2">Çalışma Saatleri</h3>
          <p class="text-gray-700">Pazartesi - Cumartesi: 08:30 - 18:30</p>
        </div>
      </div>
      <!-- Sağ: Form -->
      <form class="bg-white rounded-xl shadow-lg p-8 space-y-6 animate-slide-in-right max-w-7xl w-full mx-auto">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">İletişim Formu</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Adınız Soyadınız" class="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition" required />
          <input type="email" placeholder="E-posta Adresiniz" class="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition" required />
        </div>
        <input type="tel" placeholder="Telefon Numaranız" class="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition" />
        <textarea placeholder="Mesajınız" rows="5" class="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition" required></textarea>
        <button type="submit" class="w-full py-3 bg-main-default text-white font-bold rounded-lg shadow hover:bg-main-600 transition-all duration-300 hover:scale-105">
          Gönder
        </button>
      </form>
    </div>
  </div>
</template>

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