<template>
  <footer class="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-6 mt-16" role="contentinfo">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Sol: Logo ve açıklama -->
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 bg-gradient-to-br  rounded-xl flex items-center justify-center shadow-lg">
            <img src="../assets/images/logo3.png" alt="Legendary Tente Logo" class="max-w-[150px] h-20 object-cover" loading="lazy">
          </div>
          <span class="text-2xl font-black tracking-tight text-white">DYLEGENDARY TENTE</span>
        </div>
        <p class="text-gray-300 text-sm max-w-xs">Dış mekanlarınız için estetik ve dayanıklı tente çözümleri. İzmir ve çevresinde 30+ yıllık tecrübe.</p>
      </div>
      <!-- Orta: Menü -->
      <nav class="flex flex-col gap-2" role="navigation" aria-label="Footer menü">
        <span class="text-lg font-bold text-white mb-2">Menü</span>
        <NuxtLink to="/" class="text-gray-300 hover:text-main-default transition-colors" aria-label="Ana sayfa">Ana Sayfa</NuxtLink>
        <NuxtLink to="/products" class="text-gray-300 hover:text-main-default transition-colors" aria-label="Ürünlerimiz sayfası">Ürünlerimiz</NuxtLink>
        <NuxtLink to="/about" class="text-gray-300 hover:text-main-default transition-colors" aria-label="İletişim sayfası">Hakkımızda</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-300 hover:text-main-default transition-colors" aria-label="İletişim sayfası">İletişim</NuxtLink>
      </nav>
      <!-- Sağ: İletişim -->
      <address class="flex flex-col gap-2 not-italic">
        <span class="text-lg font-bold text-white mb-2">İletişim</span>
        <a href="tel:+905551234567" class="text-gray-300 text-sm hover:text-main-default transition-colors">Telefon: +90 541 928 54 87 - +90 542 249 75 63 </a>
        <a href="mailto:info@legendarytente.com" class="text-gray-300 text-sm hover:text-main-default transition-colors">E-posta: info@legendary.com</a>
        <span class="text-gray-300 text-sm">Adres: İzmir, Türkiye</span>
      </address>
    </div>
    <div class="container mx-auto px-6 mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
      <span class="text-gray-400 text-xs">© 2024 Legendary Tente. Tüm hakları saklıdır.</span>
      <nav class="flex gap-4" role="navigation" aria-label="Sosyal medya linkleri">
        <a href="#" class="text-gray-400 hover:text-main-default transition-colors" aria-label="Instagram sayfamızı ziyaret et">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-main-default transition-colors" aria-label="Facebook sayfamızı ziyaret et">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a4 4 0 00-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-main-default transition-colors" aria-label="Twitter sayfamızı ziyaret et">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.64a9.09 9.1 0 01-2.88 1.1A4.48 4.48 0 0016.11 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.56 1.74 2.18 3.01 4.1 3.05A9.05 9.05 0 010 19.54a12.8 12.8 0 006.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0024 4.59a9.1 9.1 0 01-2.6.71z"/></svg>
        </a>
      </nav>
    </div>
  </footer>
</template> 