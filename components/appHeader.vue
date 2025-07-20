<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300" :class="isScrolled ? 'bg-white/55 backdrop-blur-sm ' : 'bg-transparent'">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative">
          <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"></path>
            </svg>
          </div>
          <div class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </div>
        <div class="flex flex-col">
          <span class="text-2xl font-black tracking-tight group-hover:text-red-600 transition-colors duration-200" :class="isScrolled ? 'text-gray-900' : 'text-white'">Logo</span>
          <span class="text-xs font-medium tracking-widest transition-colors duration-200" :class="isScrolled ? 'text-gray-500' : 'text-gray-200'">ESTETİK ÇÖZÜMLER</span>
        </div>
      </NuxtLink>

      <!-- Desktop Menü -->
      <div class="hidden md:flex items-center gap-1">
        <NuxtLink
          to="/"
          class="relative px-4 py-2 font-semibold rounded-lg transition-all duration-200 hover:text-red-600 hover:bg-red-50 group"
          :class="isScrolled ? 'text-gray-700' : 'text-white'"
          active-class="!text-red-600 bg-red-50"
          exact
        >
          <span class="relative z-10">ANA SAYFA</span>
          <div class="absolute inset-0 bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </NuxtLink>
        <NuxtLink
          to="/urunlerimiz"
          class="relative px-4 py-2 font-semibold rounded-lg transition-all duration-200 hover:text-red-600 hover:bg-red-50 group"
          :class="isScrolled ? 'text-gray-700' : 'text-white'"
          active-class="text-red-600 bg-red-50"
        >
          <span class="relative z-10">ÜRÜNLERİMİZ</span>
          <div class="absolute inset-0 bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </NuxtLink>
        <div class="w-px h-6 mx-2 transition-colors duration-200" :class="isScrolled ? 'bg-gray-300' : 'bg-gray-400'"></div>
        <NuxtLink
          to="/iletisim"
          class="relative px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
        >
          <span class="relative z-10">TEKLİF AL</span>
          <div class="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden flex flex-col gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        :class="{ 'bg-gray-100': isMobileMenuOpen }"
      >
        <span class="w-6 h-0.5 transition-all duration-200" :class="isScrolled ? 'bg-gray-700' : 'bg-white'"></span>
        <span class="w-6 h-0.5 transition-all duration-200" :class="isScrolled ? 'bg-gray-700' : 'bg-white'"></span>
        <span class="w-6 h-0.5 transition-all duration-200" :class="isScrolled ? 'bg-gray-700' : 'bg-white'"></span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div 
      class="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200/30 transition-all duration-200 overflow-hidden"
      :class="{ 'max-h-64 opacity-100': isMobileMenuOpen, 'max-h-0 opacity-0': !isMobileMenuOpen }"
    >
      <div class="container mx-auto px-6 py-4 space-y-2">
        <NuxtLink
          to="/"
          class="block px-4 py-3 text-gray-700 font-semibold rounded-lg hover:text-red-600 hover:bg-red-50 transition-all duration-200"
          active-class="text-red-600 bg-red-50"
          exact
          @click="closeMobileMenu"
        >
          ANA SAYFA
        </NuxtLink>
        <NuxtLink
          to="/urunlerimiz"
          class="block px-4 py-3 text-gray-700 font-semibold rounded-lg hover:text-red-600 hover:bg-red-50 transition-all duration-200"
          active-class="text-red-600 bg-red-50"
          @click="closeMobileMenu"
        >
          ÜRÜNLERİMİZ
        </NuxtLink>
        <NuxtLink
          to="/iletisim"
          class="block px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg text-center shadow-md"
          @click="closeMobileMenu"
        >
          TEKLİF AL
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
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
