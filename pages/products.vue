<template>
  <!-- Hero/Banner -->
  <div class="flex flex-col items-center justify-center text-center px-4 py-20 animate-fade-in bg-[url(https://tent-bckt.s3.eu-north-1.amazonaws.com/products_banner.jpg)] bg-cover h-[800px] bg-center bg-no-repeat relative">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down leading-tight">
        Geniş Ürün Yelpazesi<br>
        <span class="text-red-400">Her Mekâna Uygun Çözümler</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up max-w-2xl mx-auto">
        Pergola, tente, cam sistemleri ve daha fazlası Legendary Tente olarak dış mekanlarınız için estetik ve fonksiyonel ürün gruplarımızı keşfedin. Her ihtiyaca uygun, kaliteli ve dayanıklı çözümlerimizle yaşam alanlarınızı güzelleştiriyoruz.
      </p>
      <NuxtLink
        to="/iletisim"
        class="px-8 py-4 bg-main-default text-white rounded-lg font-bold shadow-lg hover:bg-main-600 transition-all duration-300 animate-bounce-in"
      >
        Ürün Danışmanlığı Al
      </NuxtLink>
    </div>
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
    </div>
  </div>

  <!-- Kategori + Ürünler Grid -->
  <div class="container mx-auto py-16 flex flex-col md:flex-row gap-10">
    <!-- Kategoriler -->
    <aside class="w-full md:w-64 bg-gray-50 rounded-xl shadow p-6 mb-8 md:mb-0 animate-slide-in-left">
      <h2 class="text-lg font-bold tracking-widest mb-6 text-gray-800 uppercase">Ürün Kategorilerimiz</h2>
      <ul class="space-y-2">
        <li v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
            :class="['flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition', selectedCategory === cat ? 'bg-white shadow text-main-400 font-bold' : 'hover:bg-gray-100 text-gray-700']">
          <span>{{ cat }}</span>
          <span v-if="selectedCategory === cat" class="text-main-default text-lg">→</span>
        </li>
      </ul>
    </aside>

    <!-- Ürünler Grid -->
    <section class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(product, i) in filteredProducts"
        :key="product.id"
        class="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up"
        :style="{ animationDelay: `${i * 0.08 + 0.2}s` }"
      >
        <div class="bg-gray-100 flex items-center justify-center h-56 w-full overflow-hidden">
          <img
            :src="product.img"
            :alt="product.title"
            class="w-full h-full object-cover object-center rounded-t-xl transition-transform duration-300 hover:scale-105"
            style="min-height: 224px; max-height: 224px;"
          />
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <h3 class="font-extrabold text-lg text-gray-900 mb-4 uppercase tracking-wider">{{ product.title }}</h3>
          <NuxtLink
            to="/product-detail"
            class="inline-block px-6 py-2 bg-gray-900 text-white font-bold rounded hover:bg-main-default transition-colors text-sm tracking-widest"
          >
            Detaylı İncele
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = [
  // {
  //   id : 1,
  //   name: 'Tümü',
  //   value: 'all',
  // },
  'Tümü',
  'Pergola',
  'Tente',
  'Cam Sistemleri',
  'Teknik Tekstil Perdeler',
  'Branda Uygulamaları',
  'Çadır',
  'Karoser Uygulamaları'
]

const selectedCategory = ref('Tümü')

const products = [
  {
    id: 1,
    title: 'Standart Blockout Pergola',
    category: 'Pergola',
    key : 'standart_blockout_pergola',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    images : [],
    properties : [
      'Alüminyum lamellerin tamamen kapanmasıyla %100 ışık ve su yalıtımı sağlar.',
      'Uzaktan kumanda veya akıllı sistemlerle kontrol edilen, motorlu lamel sistemiyle çalışır.',
      'Yağmur suyu özel kanallar aracılığıyla gizli bir şekilde tahliye edilir.',
      'Tam kapalıyken güneş ışığını içeri almaz; yazın serin, kışın korunaklı ortam sağlar.',
      'Elektrostatik boyalı alüminyum gövde, paslanmaz bağlantı elemanları ve UV dayanımlı parçalarla üretilir.',
      'Farklı boyut ve alanlara uygun olarak modüler yapıda üretilebilir.',
      'Lamel aralarına veya gövdeye entegre LED ışıklar eklenebilir.',
      'Genellikle RF kumanda ile aç/kapa işlemleri yapılabilir. Akıllı ev sistemlerine entegre edilebilir.',
      'Sessiz çalışan motor sistemiyle rahatsız etmeden kullanım sağlar.',
      'Mimari yapıya uygun, estetik ve sade bir tasarıma sahiptir.',
      'Uzun ömürlüdür ve düzenli bakım gerektirmez; kolay temizlenebilir.',
      'Bahçe, teras, restoran, kafe, otel ve havuz kenarları gibi alanlar için idealdir.'
    ]
  },
  {
    id: 2,
    title: 'Rolling Roof Pergola',
    category: 'Pergola',
    key : 'rolling_roof_pergola',
    properties : [
      'Alüminyum paneller raylar üzerinde geriye doğru toplanır; açık tavan hissi verir.',
      'İstenildiğinde tavan tamamen açılır, iç mekana maksimum hava ve ışık girişi sağlar.',
      'Sessiz motor sistemiyle uzaktan kontrol imkanı sunar.',
      'Kapalıyken su sızdırmazlık sağlayan özel kanal ve contalarla donatılmıştır.',
      'Minimalist çizgilere sahip, mimari yapıya uyumlu bir görünüm sunar.',
      'Tavan altına veya raylara entegre LED sistemleriyle gece kullanımı desteklenebilir.'
    ],
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolin_rool1.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolin_roof2.png'
    ],
  },
  {
    id: 3,
    title: 'Bioklimatik Pergola',
    category: 'Pergola',
    key : 'bio_klimatik_pergola',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik1.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik2.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik3.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik4.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik5.webp'
    ],
    properties : [
      'Tavan lamelleri kendi ekseninde dönebilir; güneş, rüzgar ve yağmura karşı ayarlanabilir koruma sağlar.',
      'Lamellerin açısı ayarlanarak doğal hava sirkülasyonu ve ışık geçirgenliği sağlanır.',
      'Kapalı konumda suyu entegre kanallardan tahliye eder, sızdırmazlık sağlar.',
      'Uzaktan kumanda veya akıllı ev sistemleriyle kontrol edilebilir.',
      'Paslanmaz, UV dayanımlı alüminyum malzeme ile uzun ömürlüdür.',
      'Lameller arası LED ışık ve cam/perde sistemleriyle entegre çalışabilir.'
    ]
  },
  {
    id: 4,
    title: 'Çatı Zip Perde',
    category: 'Teknik Tekstil Perdeler',
    key : 'cati_zip_perde',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/catipzipperde4.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/catizipperde1.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/catizipperde3.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/catizipperdemain.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/catipzipperde2.png'
    ],
    properties : [
      'Özel kılavuz raylar içinde gergin duran kumaş, sarkma yapmadan düz bir görünüm sunar.',
      'Uzaktan kumanda veya sensörle kontrol edilebilen motorlu sistemdir.',
      'UV filtreli kumaş sayesinde güneş ışığını keser, iç mekanı serin tutar.',
      'Zip ray sistemi sayesinde güçlü rüzgarlarda bile dayanıklıdır.',
      'Modern yapılara uygun sade, entegre edilebilir görünüm sunar.',
      'Farklı opaklık ve renk seçenekleriyle her mekana uyum sağlar.'
    ]
      
  },
  {
    id: 5,
    title: 'Dikey Zip Perde',
    category: 'Teknik Tekstil Perdeler',
    key : 'dikey_zip_perde',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikeyzipperde3.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikeyzipperde1.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikeyzipperde2.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikeyzipperde4.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikeyzipperdemain.png'
    ],
    properties : [
      'Kumaş, özel fermuarlı (zip) raylar içinde kayar; rüzgara karşı yüksek dayanım sağlar.',
      'Uzaktan kumanda, buton veya akıllı sistemlerle kolayca kontrol edilir.',
      'UV korumalı kumaşlar sayesinde iç mekana giren güneş ışığı ve ısıyı engeller.',
      'Zip sistemi sayesinde rüzgarda savrulmaz, dış etkenlere karşı koruma sağlar.',
      'Kapalıyken kumaş kasaya sarılır, estetik ve düzenli bir görünüm sunar.',
      'Şeffaf, yarı geçirgen veya tam karartmalı kumaş seçenekleriyle özelleştirilebilir.',
      'Dış mekan pergolalar, balkonlar ve büyük cam cephelerde yaygın olarak kullanılır.',
    ]
  },
  {
    id: 6,
    title: 'Yatay Zip Perde',
    category: 'Teknik Tekstil Perdeler',
    key : 'yatay_zip_perde',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    images : [],
    properties : [
      'Kumaş, özel zip raylar içinde yatay (sağa veya sola) şekilde hareket eder.',
      'Uzaktan kumanda ile motorlu kullanım veya manuel opsiyonları mevcuttur.',
      'Fermuarlı ray sistemi sayesinde rüzgarda dahi gergin ve sabit kalır.',
      'UV filtreli kumaşlar sayesinde güneş ışığını keser ve dış görünürlüğü azaltır.',
      'Teras, balkon, pergola yan yüzeyleri gibi alanlarda yatay geçişli koruma sağlar.',
      'Karartmalı, geçirgen veya şeffaf kumaşlarla ihtiyaca göre özelleştirilebilir.',
      'Gizli ray ve kompakt kasa yapısıyla mimariye uyumlu şık bir tasarıma sahiptir.',
    ]
  },
  {
    id: 7,
    title: 'Kasetli Tente',
    category: 'Tente',
    key : 'kasetli_tente',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetlitente3.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetlitente1.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetlitente2.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetlitente4.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetlitentemain.png'
    ],
    properties : [
      'Kumaş ve mekanizma kapandığında alüminyum kasanın içine girer; dış etkenlerden tamamen korunur.',
      'Uzaktan kumandalı motorlu sistem veya isteğe bağlı manuel kol ile kontrol edilebilir.',
      'UV dayanımlı kumaşı sayesinde güneşe karşı koruma sağlar, hafif yağmurda kullanılabilir.',
      'Kapandığında modern, şık ve kompakt bir görünüm sunar.',
      'Elektrostatik boyalı alüminyum gövde ve solmaz akrilik kumaşlar kullanılır.',
      'Tentenin eğimi ayarlanarak güneş ışığına karşı daha etkili koruma sağlanabilir.',
      'Farklı renk ve desenlerde kumaş seçenekleri ile kişiselleştirilebilir.'
    ]
  },
  {
    id: 8,
    title: 'Cam Balkon Sistemi',
    category: 'Cam Sistemleri',
    key : 'cam_balkon_sistemi',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    images : [],
    properties : [
      'Cam paneller yana kayarak ya da katlanarak açılabilir; tamamen açıldığında açık balkon hissi verir.',
      'Balkonunuzu dört mevsim kullanmanıza olanak tanır; rüzgar, toz ve yağmurdan korur.',
      'Genellikle 8-10 mm kalınlığında kırıldığında dağılmayan, dayanıklı camlar tercih edilir.',
      'Çerçevesiz veya ince profilli yapısı sayesinde manzara engellenmeden görünür.',
      'Yapının mimarisine uyum sağlayan, şık ve sade bir görünüm sunar.',
      'Katlanabilir sistemlerde camların iç yüzeylerine erişim kolaydır; temizlik pratik yapılabilir.',
      'Isı kaybını azaltır, dışarıdan gelen sesleri önemli ölçüde izole eder.'
    ]
  },
  {
    id: 9,
    title: 'Giyotin Sistemi',
    category: 'Cam Sistemleri',
    key : 'giyotin_sistemi',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_Cam2.png',
    images : [
        'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam1.png'
    ],
    properties : [
      'Camlar motorlu mekanizma ile yukarı-aşağı hareket eder; istenilen seviyede durdurulabilir.',
      'Genellikle uzaktan kumanda ile kontrol edilen sessiz ve güçlü motor sistemine sahiptir.',
      'Kapalı konumda tam yalıtım sağlar, dış etkenlerden korur.',
      'Dikey açılır yapısıyla manzaranızı engellemeden şeffaf bir koruma sunar.',
      'Yüksek dayanıklılığa sahip 8-10 mm kalınlığında camlar kullanılır.',
      'Alt cam sabitken üst camlar hareket ettiği için aynı anda hem korkuluk hem cam duvar görevi görür.',
      'Dış mekan kullanımına çok uygundur; yıl boyunca konforlu kullanım sunar.'
    ]
  },
  {
    id: 10,
    title: 'Branda Uygulaması',
    category: 'Branda Uygulamaları',
    key : 'branda_uygulamalari',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    images : [],
    properties : [
      'Güneş, yağmur ve dış etkenlere karşı koruma sağlayan özel PVC veya akrilik brandalar kullanılır.',
      'Sabit, kayar, açılır-kapanır ya da sarılır şekilde farklı yapılarla uygulanabilir.',
      'Kullanım alanına uygun dekoratif renk ve desen seçenekleri mevcuttur.',
      'Özellikle açık alanlarda güneşten, rüzgardan ve hafif yağmurdan koruma amaçlı kullanılır.',
      'Diğer sistemlere göre daha uygun maliyetlidir, hızlı uygulanabilir.',
      'Raylı sistemler, makaslı tenteler ya da pergola sistemleri ile birlikte kullanılabilir.',
      'Ticari ve bireysel pek çok alanda rahatlıkla uygulanabilir.'
    ]
  },
  {
    id: 11,
    title: 'Çadır',
    category: 'Çadır',
    key : 'cadir',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_Cam2.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam1.png',
    ],
    properties : []
  },
  {
    id: 12,
    title: 'Karoser Uygulamaları',
    category: 'Karoser Uygulamaları',
    key : 'karoser_uygulamalari',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda10.jpg',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda1.jpg',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda2.jpg',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda3.jpg',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda4.jpg',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda5.jpg',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda6.jpg',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda7.jpg',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda8.jpg',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda9.jpg',
    ],
    properties : [
      'Araç veya yapıların belirli bölümlerine özel ölçülerde gerilmiş, koruyucu branda uygulamalarıdır.',
      'PVC veya benzeri suya, rüzgara ve dış etkenlere dayanıklı brandalar kullanılır.',
      'Görsel olarak düzenli, temiz ve şık bir görünüm sunarken dış etkenlerden korur.',
      'Farklı boyutlarda ve şekillerde uygulanabilir, kolay söküp takılabilir yapıda olabilir.',
      'Hafif yapısıyla kolayca monte edilir; temizlik ve bakım işlemleri basittir.',
      'Depo, araç kasası, fabrika ve benzeri alanlarda yaygın olarak tercih edilir.',
      'Branda, özel kasnak ve gergi aparatları ile düzgün ve sıkı bir şekilde gerilir.'
    ]
  },
  {
    id: 13,
    title: 'Mafsallı Tente',
    category: 'Tente',
    key : 'mafsalli_tente',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsallitentemain.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsallitente1.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsallitente2.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsallitente3.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsallitente4.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsallitente5.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsallitente6.png'
    ],
    properties : [
      'Tentenin açılıp kapanmasını sağlayan özel mafsallı kollar, kolay kullanım sunar.',
      'Uzaktan kumanda ile motorlu açma-kapama veya manuel kol ile kontrol edilebilir.',
      'UV dayanımlı kumaşı ile güneşten korur, hafif yağmurda da kullanım imkanı verir.',
      'Mimari yapılara uyum sağlayan çeşitli renk ve desen seçenekleri vardır.',
      'Mafsallı kollar sayesinde tente açısının ayarlanabilmesi mümkündür.',
      'Elektrostatik boyalı alüminyum gövde ve kaliteli mekanizmalar kullanılır.',
      'Hızlı monte edilir, temizliği ve bakımı pratiktir.'
    ]
  },
  {
    id: 14,
    title: 'Wintent Tente',
    category: 'Tente',
    key : 'wintent_tente',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent2.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent1.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent3.png',
    ],
    properties : [
      'Soğuk havalarda dış mekan kullanımını mümkün kılan dayanıklı tente sistemidir.',
      'Özel kumaş ve yapı sayesinde yoğun kar ve yağmura karşı koruma sağlar.',
      'Uzaktan kumanda ile kolayca açılıp kapanabilir.',
      'Büyük teras ve balkonlarda kullanılmaya uygundur.',
      'İç mekan sıcaklığını koruyarak enerji verimliliği sağlar.',
      'Modern tasarım ve uzun ömürlü kumaş ile estetik görünüm sunar.',
      'Pratik kurulum ve temizlik özelliklerine sahiptir.'
    ]
  },
  {
    id: 15,
    title: 'Perde Cam Sistemi',
    category: 'Cam Sistemleri',
    key : 'perde_cam',
    img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam_main.png',
    images : [
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam1.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam2.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam3.png',
      'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_Cam4.png'
    ],
    properties : [
      'Paneller birbirine bağlıdır ve katlanarak yana doğru açılır, tamamen açılabilir.',
      'Camların ince profilleri sayesinde geniş ve kesintisiz manzara sunar.',
      'Yüksek kalitede temperli camlar ile ısı ve dış ses yalıtımı sağlar.',
      'Isı kaybını azaltır, dışarıdan gelen sesleri önemli ölçüde izole eder.',
      'Balkon, teras ve kış bahçelerinde her mevsim konfor sağlar.',
      'Minimalist çerçeve seçenekleri ile mimari yapıya uyumlu görünüm sunar.',
      'Temperli ve lamine camlar kullanılarak güvenlik artırılır.'
    ]
  },

]

const filteredProducts = computed(() =>
  selectedCategory.value === 'Tümü'
    ? products
    : products.filter(p => p.category === selectedCategory.value)
)
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-30px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-50px);}
  to { opacity: 1; transform: translateX(0);}
}
@keyframes bounce-in {
  0% { transform: scale(0.8);}
  60% { transform: scale(1.05);}
  100% { transform: scale(1);}
}
.animate-fade-in { animation: fade-in 1s ease; }
.animate-fade-in-down { animation: fade-in-down 1s ease; }
.animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-slide-in-left { animation: slide-in-left 1s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
</style>