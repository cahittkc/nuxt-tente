export default defineNuxtPlugin(() => {
  const router = useRouter()
  const store = useStore()

  // Route değişimi başladığında loading'i göster
  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      store.showLoading()
    }
  })

  // Route değişimi tamamlandığında loading'i gizle
  router.afterEach(() => {
    // Kısa bir gecikme ile loading'i gizle (animasyon için)
    setTimeout(() => {
      store.hideLoading()
    }, 300) // 300ms loading süresi
  })

  // Sayfa yüklenme hatası durumunda loading'i gizle
  router.onError(() => {
    store.hideLoading()
  })
})