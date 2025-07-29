<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>



<style>

.carousel__viewport {
  padding: 8px 0px;
  background: transparent;
}
</style>



<script setup lang="ts">

const store = useStore()

onMounted(() => {
  console.log(store.products)
})

</script>