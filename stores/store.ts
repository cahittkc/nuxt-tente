import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state : () => ({
        categories : [
            
            {
                id : 1,
                name : 'Tümü',
                key : 'all'
            },
            {
                id : 0,
                name : 'Karoser Uygulamaları & Dorse Kayar Perde Sistemleri',
                key : 'karoser_uygulamalari'
            },
            {
                id : 2,
                name : 'Pergola',
                key : 'pergola'
            },
            {
                id : 3,
                name : 'Tente',
                key : 'tente'
            },
            {
                id : 4,
                name : 'Cam Sistemleri',
                key : 'cam_sistemleri'
            },
            {
                id : 5,
                name : 'Teknik Tekstil Perdeler',
                key : 'teknik_tekstil_perdeler'
            },
            {
                id : 6,
                name : 'Branda Uygulamaları',
                key : 'branda_uygulamalari'
            },
            {
                id : 7,
                name : 'Çadır',
                key : 'cadir'
            },
            
        ],
        products : [
            {
                id: 1,
                title: 'Standart Blockout Pergola',
                category: 'pergola',
                key : 'standart_blockout_pergola',
                description : 'Standart Blockout pergola sistemleri, güçlü alüminyum konstrüksiyonu ve %100 su geçirmez blackout kumaşı ile dış mekanlarda dört mevsim konfor sağlar. Gölgelendirme, yağmur ve güneş korumasını bir arada sunan bu sistem, modern tasarımıyla bahçe, teras, kafe ve restoran alanlarına estetik bir görünüm kazandırır. Motorlu kontrol seçeneğiyle kolay kullanım imkanı sunar.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola4.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola5.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola6.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/standart_blackout_pergola7.png',
                ],
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
                category: 'pergola',
                key : 'rolling_roof_pergola',
                description : 'Rolling Roof pergola sistemleri, alüminyum panellerin hareketli yapısıyla dış mekanlarda tam açılır-kapanır tavan konforu sunar. Güneş, yağmur ve kar gibi hava koşullarına karşı maksimum dayanıklılık sağlar. Modern tasarımı, uzaktan kumanda ile kontrol edilebilen sistemi ve entegre aydınlatma seçenekleriyle teras, bahçe, kafe ve restoran alanları için ideal çözümdür.',
                properties : [
                  'Alüminyum paneller raylar üzerinde geriye doğru toplanır; açık tavan hissi verir.',
                  'İstenildiğinde tavan tamamen açılır, iç mekana maksimum hava ve ışık girişi sağlar.',
                  'Sessiz motor sistemiyle uzaktan kontrol imkanı sunar.',
                  'Kapalıyken su sızdırmazlık sağlayan özel kanal ve contalarla donatılmıştır.',
                  'Minimalist çizgilere sahip, mimari yapıya uyumlu bir görünüm sunar.',
                  'Tavan altına veya raylara entegre LED sistemleriyle gece kullanımı desteklenebilir.'
                ],
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolling_roof_pergola1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolling_roof_pergola1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolling_roof_pergola2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolling_roof_pergola3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolling_roof_pergola4.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolling_roof_pergola5.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/rolling_roof_pergola6.png',
                ],
              },
              {
                id: 3,
                title: 'Bioklimatik Pergola',
                category: 'pergola',
                key : 'bio_klimatik_pergola',
                description : 'Bioklimatik pergola sistemleri, alüminyum döner panelleri sayesinde güneş ışığını, hava akışını ve yağmur suyunu kontrollü şekilde yöneterek dört mevsim konforlu bir yaşam alanı sunar. Motorlu mekanizması, entegre LED aydınlatma seçenekleri ve modern tasarımıyla teras, bahçe, otel, restoran ve kafe alanlarında estetik ve fonksiyonelliği bir araya getirir.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik_pergola1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik_pergola1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik_pergola2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik_pergola3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/bioklimatik_pergola4.png',
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
                category: 'teknik_tekstil_perdeler',
                key : 'cati_zip_perde',
                description : 'Çatı zip perde sistemleri, yatay ve eğimli alanlarda güneş ışığını ve ısıyı kontrol altına alarak ideal gölgelendirme sağlar. Rüzgar, yağmur ve UV ışınlarına karşı dayanıklı özel kumaşı ve fermuarlı ray sistemiyle uzun ömürlü ve güvenli kullanım sunar. Otomatik kontrol özelliği sayesinde pergola, veranda ve cam tavan uygulamaları için mükemmel bir çözümdür.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/cati_zip_perde.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cati_zip_perde.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cati_zip_perde1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cati_zip_perde2.png',
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
                category: 'teknik_tekstil_perdeler',
                key : 'dikey_zip_perde',
                description : 'Dikey zip perde sistemleri, dikey düzlemde çalışan özel fermuarlı yapısıyla rüzgar, güneş ve yağmur gibi dış etkenlere karşı etkili koruma sağlar. Dayanıklı kumaşı ve raylı sistemi sayesinde dış mekanlarda maksimum konfor sunar. Otomasyon desteğiyle balkon, pergola, veranda ve kafe gibi alanlarda estetik ve işlevsel bir gölgelendirme çözümüdür.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikey_zip1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikey_zip1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikey_zip2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikey_zip3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikey_zip4.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/dikey_zip5.png',
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
                title: 'Şemsiye Ve Şezlong',
                category: 'teknik_tekstil_perdeler',
                key : 'semsiye_ve_sezlong',
                description : 'Dayanıklı ve estetik şemsiye ile konforlu şezlong modellerimiz, bahçe, plaj, havuz ve teras alanlarınızda rahatlığı ve şıklığı bir araya getirir. UV korumalı kumaşlar ve sağlam yapısıyla uzun ömürlü kullanım sağlar. Farklı boyut ve tasarımlarıyla her alana uyum sunar.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/7.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/1.jpeg',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/2.jpeg',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/5.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/6.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/7.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/8.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/9.jpeg',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/10.png',
                ],
                properties : [
                  'UV Koruma güneşin zararlı ışınlarına karşı yüksek koruma sağlar.',
                  'Alüminyum veya ahşap iskelet, paslanmaya ve hava koşullarına dirençlidir.',
                  'Gölgeyi istediğiniz yöne yönlendirme kolaylığı.',
                  'Konforlu oturma ve uzanma pozisyonları için ayarlanabilir sırt desteği.',
                  'Kolay taşınabilir yapısıyla kullanım pratikliği sağlar.',
                  'Estetik zevkinize ve alanınıza uygun çeşitli tasarımlar.',
                ]
              },
              {
                id: 7,
                title: 'Kasetli Tente',
                category: 'tente',
                key : 'kasetli_tente',
                description : 'Kasetli tente sistemleri, kapalı kaset yapısıyla tente kumaşını dış etkenlerden koruyarak uzun ömürlü kullanım sağlar. Estetik tasarımı, motorlu veya manuel seçenekleri ve güneşe karşı yüksek koruma sağlaması sayesinde balkon, teras, kafe ve mağaza önleri için ideal bir gölgelendirme çözümüdür. Açıldığında tam gölge, kapandığında ise şık bir görünüm sunar.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetli_tente1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetli_tente1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetli_tente2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetli_tente3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/kasetli_tente4.png',
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
                id: 9,
                title: 'Giyotin Sistemi',
                category: 'cam_sistemleri',
                key : 'giyotin_sistemi',
                description : 'Giyotin sistemleri, yüksek performanslı cam veya alüminyum panellerin dikey olarak yukarı ve aşağı hareket etmesini sağlayan modern mimari çözümlerdir. Balkon, teras ve ofis cephelerinde şeffaflık, konfor ve estetik sunar. Isı ve ses yalıtımı sağlar, alanı dış hava koşullarından korur. Dayanıklı malzeme yapısı ve kolay kullanım özellikleriyle dört mevsim kullanım için idealdir.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam1.png',
                images : [
                    'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam1.png',
                    'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam2.png',
                    'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam3.png',
                    'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam4.png',
                    'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam5.png',
                    'https://tent-bckt.s3.eu-north-1.amazonaws.com/giyotin_cam6.png',
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
                category: 'branda_uygulamalari',
                key : 'branda_uygulamalari',
                description : 'Branda uygulamaları, çeşitli ebat ve renk seçenekleriyle dış mekanlarda güneş, yağmur ve rüzgara karşı koruma sağlar. Dayanıklı ve su geçirmez materyaller kullanılarak yapılan branda çözümleri, pergola, tente, araç üstü ve endüstriyel alanlarda uzun ömürlü kullanım sunar. Kolay montaj ve bakım avantajlarıyla pratik bir koruma sistemidir.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/branda_uygulamasi1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/branda_uygulamasi1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/branda_uygulamasi2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/branda_uygulamasi3.png',
                ],
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
                category: 'cadir',
                key : 'cadir',
                description : 'Büyük çadır sistemleri, çeşitli kullanım alanlarına uygun dayanıklı ve geniş kapasiteli yapılar sunar. Endüstriyel, tarım, hayvancılık veya etkinlik amaçlı kullanılabilen bu çadırlar, sağlam malzeme ve esnek tasarımıyla uzun ömürlü ve pratik çözümler sağlar. Hava koşullarına dayanıklı yapısı sayesinde her mevsim güvenle kullanılabilir.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir2.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir4.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir5.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir6.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cadir7.png',
                ],
                properties : []
              },
              {
                id: 12,
                title: 'Karoser Uygulamaları',
                category: 'karoser_uygulamalari',
                key : 'karoser_uygulamalari',
                description : 'Karoser uygulamaları, araçların taşıma kapasitesini ve fonksiyonelliğini artırmak için özel tasarlanmış dayanıklı ve estetik çözümler sunar. Kamyon, dorse ve hafif ticari araçlar için hazırlanan karoser sistemleri; yük güvenliği, kullanım kolaylığı ve uzun ömürlü malzeme kalitesi ile ön plana çıkar. İhtiyaca göre özelleştirilebilen karoserler, iş verimliliğinizi artırır.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_uygulama1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_uygulama1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_uygulama2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_uygulama3.png',
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
                category: 'tente',
                key : 'mafsalli_tente',
                description : 'Mafsallı tente sistemleri, katlanabilir ve geniş açılır yapısıyla balkon, teras ve kafe gibi alanlarda kolay ve şık gölgelendirme sağlar. Dayanıklı kumaş seçenekleri ve sağlam mafsallı mekanizması sayesinde kullanımı pratiktir. Motorlu veya manuel kontrol seçenekleriyle kullanıcıya konforlu bir deneyim sunar.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsalli_tente1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsalli_tente1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsalli_tente2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsalli_tente3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsalli_tente4.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/mafsalli_tente5.png',
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
                category: 'tente',
                key : 'wintent_tente',
                description : 'Wintent tente sistemleri, modern tasarımı ve dayanıklı malzemeleriyle balkon, teras ve bahçeler için ideal gölgelendirme çözümleri sunar. Su ve UV korumalı kumaşları sayesinde uzun ömürlü kullanım sağlar, motorlu veya manuel seçeneklerle kolay kontrol imkanı verir.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent_tente1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent_tente1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent_tente2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent_tente3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent_tente4.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/wintent_tente5.png',
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
                category: 'cam_sistemleri',
                key : 'perde_cam',
                description : 'Perde cam sistemleri, estetik tasarımı ve tam açılır yapısıyla balkon, kafe, restoran ve teras alanlarında maksimum şeffaflık ve kullanım konforu sunar. Isı ve ses yalıtımı sağlayan yapısıyla dört mevsim konforlu bir yaşam alanı oluşturur. Dayanıklı alüminyum profiller ve temperli cam kullanımı sayesinde uzun ömürlü ve güvenli çözümler sağlar.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam1.png',
                images : [
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam3.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam4.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/perde_cam5.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cam_balkon1.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cam_balkon2.png',
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/cam_balkon1.png'
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
              {
                id: 16,
                title: 'Dorse Kayar Perde Hizmetleri',
                category: 'karoser_uygulamalari',
                key : 'dorse_hizmetleri',
                description : 'Kayar perde dorse sistemleri, hızlı yükleme-boşaltma imkanı, her iki yandan erişim, hava koşullarına karşı tam koruma ve uzun ömürlü malzeme yapısıyla lojistik sektöründe maksimum verimlilik sunar. CE belgeli sistemlerimiz, güvenli taşımacılık ve estetik görünümü bir arada sağlar.',
                img: 'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda1.jpg',
                properties :[
                  'Kayar perde sistemi sayesinde yükleme ve boşaltma işlemleri çok daha hızlı ve kolay gerçekleşir. Zaman kazandırır.',
                  'Perde sistemi her iki yandan açılabilir yapıdadır, bu da yüklemeyi her açıdan esnek hale getirir.',
                  'Sağlam ray ve kilit sistemleri sayesinde yüklerin taşınma sırasında savrulması engellenir, maksimum güvenlik sağlar.',
                  'UV ışınlarına, yağmura ve rüzgara karşı dayanıklı branda kumaşlarla üretilir. Yükünüzü korur.',
                  'Marka baskısı yapılabilen yüzeyler ile araçlarınız kurumsal kimliğinizi yansıtır, reklam alanı olarak da kullanılır.',
                  'Paslanmaz metal aksamlar ve yüksek mukavemetli brandalar ile uzun ömürlü kullanım sunar.',
                  'CE standartlarına uygun olarak üretilir, yasal gereklilikleri karşılayan güvenli sistemlerdir.'
                ],
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
                  'https://tent-bckt.s3.eu-north-1.amazonaws.com/karoser_branda10.jpg',
                ]  
              }
        ]
    }),
})