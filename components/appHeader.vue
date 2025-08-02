<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300" :class="isScrolled ? 'bg-white/55 backdrop-blur-sm ' : 'bg-transparent'" role="banner">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6" role="navigation" aria-label="Ana navigasyon">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group" aria-label="Ana sayfaya git">
        
        <div class="relative">
          <div class="w-10 h-10 bg-gradient-to-br  rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105">
            <img src="../assets/images/logo3.png" alt="Legendary Tente Logo" class="max-w-[150px] h-20 object-cover" loading="lazy">
          </div>
        </div>
        <div class="flex flex-col ml-3">
          <span class="text-2xl font-black tracking-tight  transition-colors duration-200" :class="isScrolled ? 'text-main-default' : 'text-white'">Legendary</span>
          <span class="text-xs font-medium tracking-widest transition-colors duration-200" :class="isScrolled ? 'text-gray-500' : 'text-gray-200'">ESTETİK ÇÖZÜMLER</span>
        </div>
      </NuxtLink>

      <!-- Desktop Menü -->
      <div class="hidden md:flex items-center gap-1" role="menubar">
        <NuxtLink
          to="/"
          class="relative px-4 py-2 font-semibold rounded-lg transition-all duration-200 hover:text-main-default hover:bg-red-50 group"
          :class="isScrolled ? 'text-gray-700' : 'text-white'"
          active-class="!text-main-default bg-red-50"
          exact
          role="menuitem"
          aria-label="Ana sayfa"
        >
          <span class="relative z-10">ANA SAYFA</span>
          <div class="absolute inset-0 bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="relative px-4 py-2 font-semibold rounded-lg transition-all duration-200 hover:text-main-default hover:bg-red-50 group"
          :class="isScrolled ? 'text-gray-700' : 'text-white'"
          active-class="!text-main-default bg-red-50"
          role="menuitem"
          aria-label="Ürünlerimiz sayfası"
        >
          <span class="relative z-10">ÜRÜNLERİMİZ</span>
          <div class="absolute inset-0 bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </NuxtLink>
        <div class="w-px h-6 mx-2 transition-colors duration-200" :class="isScrolled ? 'bg-gray-300' : 'bg-gray-400'" aria-hidden="true"></div>
        <NuxtLink
          to="/contact"
          class="relative px-6 py-2 bg-gradient-to-r from-main-default to-main-600  text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
          role="menuitem"
          aria-label="İletişim sayfası"
        >
          <span class="relative z-10">TEKLİF AL</span>
          <div class="absolute inset-0 bg-main-default opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden flex flex-col gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        :class="{ '!bg-main-default': isMobileMenuOpen }"
        aria-label="Mobil menüyü aç/kapat"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <span class="w-6 h-0.5 transition-all duration-200" :class="isScrolled ? 'bg-gray-700' : 'bg-white'" aria-hidden="true"></span>
        <span class="w-6 h-0.5 transition-all duration-200" :class="isScrolled ? 'bg-gray-700' : 'bg-white'" aria-hidden="true"></span>
        <span class="w-6 h-0.5 transition-all duration-200" :class="isScrolled ? 'bg-gray-700' : 'bg-white'" aria-hidden="true"></span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div 
      id="mobile-menu"
      class="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200/30 transition-all duration-200 overflow-hidden"
      :class="{ 'max-h-64 opacity-100': isMobileMenuOpen, 'max-h-0 opacity-0': !isMobileMenuOpen }"
      role="navigation"
      aria-label="Mobil menü"
      :aria-hidden="!isMobileMenuOpen"
    >
      <div class="container mx-auto px-6 py-4 space-y-2">
        <NuxtLink
          to="/"
          class="block px-4 py-3 font-semibold rounded-lg text-black transition-all duration-200"
          active-class="!text-main-default"
          exact
          @click="closeMobileMenu"
          role="menuitem"
          aria-label="Ana sayfa"
        >
          ANA SAYFA
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="block px-4 py-3 font-semibold rounded-lg text-black transition-all duration-200"
          active-class="!text-main-default"
          @click="closeMobileMenu"
          role="menuitem"
          aria-label="Ürünlerimiz sayfası"
        >
          ÜRÜNLERİMİZ
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="block px-4 py-3 bg-gradient-to-r from-main-600 to-main-default text-white font-bold rounded-lg text-center shadow-md"
          @click="closeMobileMenu"
          role="menuitem"
          aria-label="İletişim sayfası"
        >
          TEKLİF AL
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Scroll event listener
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 200
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
