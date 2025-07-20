<template>
  <div class="bg-gray-100">
    <appHeader/>
    <main class="">
      <slot />
    </main>
  </div>
</template> 



<script setup lang="ts">
import appHeader from '~/components/appHeader.vue';
</script>