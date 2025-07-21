<template>
  <div>
    <appHeader />
    <main>
      <slot />
    </main>
    <appFooter />
  </div>
</template>

<script setup>
import appHeader from '@/components/appHeader.vue'
import appFooter from '@/components/appFooter.vue'
</script>