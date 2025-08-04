<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div class="flex flex-col items-center space-y-6 p-8 ">
        <!-- Logo -->
         <div class="relative">
           <img 
             src="~/assets/images/logo3.png" 
             alt="Logo" 
             class="w-[300px] h-[300px] max-md:w-[100px] max-md:h-[100px] object-contain animate-float"
           />
         </div>
        
        <!-- Minimal Loading Indicator -->
        <div class="flex items-center space-x-1">
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  isVisible: boolean
}

defineProps<Props>()
</script>

<style scoped>
/* Özel animasyonlar */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>