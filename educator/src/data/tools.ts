import type { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: 1,
    slug: 'scite-ai',
    name: 'SciteAi',
    description: 'Bilimsel referansları analiz eder.',
    logo: '/assets/logos/scite-ai.png',
    price: 'paid',
    rating: 4.0,
    voteCount: 4,
    category: 'research',
    website: 'https://scite.ai',
    shortVideo: 'https://www.youtube.com/embed/p6CCbemp0tY',
    longVideo: 'https://www.youtube.com/embed/v=4tjfIJg40MY',
    gptLink: 'https://chatgpt.com/g/g-6813795672f48191a637988681f78629-scite-ai-uzmani',
    howToUse: [
      'Scite.ai sitesine giriş yapın.',
      'Makale başlığını veya DOI numarasını girin.',
      'Analiz edilen atıfları (destekleyen, karşı çıkan) görüntüleyin.',
      'Kaynak güvenilirliğini değerlendirin.'
    ],
    useCases: [
      'Makale yazarken kaynak kontrolü',
      'Bilimsel veri incelemesi ve doğruluk analizi'
    ],
    gptPrompt: 'Bu makaledeki referansların güvenilirlik düzeyini analiz eder misin?'
  },

  {
    id: 2,
    slug: 'quiz-gecko',
    name: 'QuizGecko',
    description: 'Çoktan seçmeli sınav soruları oluşturur.',
    logo: '/assets/logos/quizgecko.png',
    price: 'paid',
    rating: 4.2,
    voteCount: 20,
    category: 'assessment',
    website: 'https://quizgecko.com',
    shortVideo: 'https://www.youtube.com/embed/e5izLTJeNeM',
    longVideo: 'https://www.youtube.com/embed/v=7cTFmsPXsk4',
    gptLink: 'https://chatgpt.com/g/g-5c0UyT7HR-quizgecko',
    howToUse: [
      'QuizGecko web sitesini açın.',
      'Metin veya ders notlarınızı yükleyin ya da yapıştırın.',
      'Sistem otomatik olarak sorular üretir.',
      'İstediğiniz soru formatını (çoktan seçmeli, doğru-yanlış vs.) seçin.'
    ],
    useCases: [
      'Öğretmenler için sınav hazırlığı',
      'Öğrenciler için hızlı test çözme materyalleri oluşturma'
    ],
    gptPrompt: 'Aşağıdaki içerikten 5 adet çoktan seçmeli soru üretir misin?'
  },
  {
    id: 3,
    slug: 'gamma',
    name: 'Gamma',
    description: 'AI destekli sunum aracı.',
    logo: '/assets/logos/gamma.png',
    price: 'free',
    rating: 4.7,
    voteCount: 46,
    category: 'presentation',
    website: 'https://gamma.app',
    shortVideo: 'https://www.youtube.com/embed/vtMIUtE9doQ',
    longVideo: 'https://www.youtube.com/embed/v=k5coa5_YDDg&list=PLBoVI-_8_fR7CPgBvEyoVjvex-v9KhQa4&index=5',
    gptLink: 'https://chatgpt.com/g/g-6803b92bcc508191ba91e8454df7ea7c-gamma-app-slides-powerpoints-presentations',
    howToUse: [
      'Gamma.app sitesine giriş yapın.',
      'Yeni bir sunum başlatın veya bir şablon seçin.',
      'İçeriği girin ve görsel stilinizi seçin.',
      'AI destekli düzenlemelerle sunumunuzu hazırlayın.'
    ],
    useCases: [
      'Sunum hazırlığı',
      'Eğitim içeriği sunumu',
      'Startup pitch deck oluşturma'
    ],
    gptPrompt: 'Aşağıdaki bilgileri temel alan bir sunum hazırlayabilir misin?'
  },
  {
    id: 4,
    slug: 'consensus',
    name: 'Consensus',
    description: 'Bilimsel içeriklerde görüş birliğini bulur.',
    logo: '/assets/logos/consensus.png',
    price: 'free',
    rating: 4.3,
    voteCount: 36,
    category: 'research',
    website: 'https://consensus.app',
    shortVideo: 'https://www.youtube.com/embed/ugyS8Pr0V2w',
    longVideo: 'https://www.youtube.com/embed/v=I8VC6R7-J6M',
    gptLink: 'https://chatgpt.com/g/g-bo0FiWLY7-consensus',
    howToUse: [
      'Consensus.app sitesine giriş yapın.',
      'Araştırmak istediğiniz konuyu yazın.',
      'Yapay zekâ, makaleler arasında genel görüşü çıkarır.',
      'Sonuçları filtreleyerek detaylı inceleyin.'
    ],
    useCases: [
      'Bilimsel araştırma özeti çıkarma',
      'Akademik çalışmalarda literatür analizi'
    ],
    gptPrompt: 'Şu konuyla ilgili bilimsel makalelerde genel görüş nedir?'
  },
  {
    id: 5,
    slug: 'grammarly',
    name: 'Grammarly',
    description: 'Yazım ve dilbilgisi düzeltir.',
    logo: '/assets/logos/grammarly.png',
    price: 'limited',
    rating: 4.6,
    voteCount: 70,
    category: 'writing',
    website: 'https://educatorsaitools.com/grammarly/',
    shortVideo: 'https://www.youtube.com/embed/doTMUdBBq7A',
    longVideo: 'https://www.youtube.com/embed/v=1oBQn1zX-1w&list=PLfPYYNRetSN9m2SAToe-mE5T9OrnPF_cJ&index=5',
    gptLink: 'https://chatgpt.com/g/g-OJsblSrDq-grammarlygo',
    howToUse: [
      'Grammarly hesabı oluşturun.',
      'Web veya uygulama üzerinden yazınızı girin.',
      'Önerilen düzeltmeleri uygulayın.',
      'Geliştirilmiş metni kopyalayın veya dışa aktarın.'
    ],
    useCases: [
      'Akademik yazım kontrolü',
      'İngilizce ödev ve makale geliştirme'
    ],
    gptPrompt: 'Bu metindeki yazım ve dilbilgisi hatalarını düzeltebilir misin?'
  },
  {
    id: 6,
    slug: 'pictory-ai',
    name: 'Pictory AI',
    description: 'Uzun metinlerden otomatik kısa videolar üretir.',
    logo: '/assets/logos/pictory-ai.png',
    price: 'paid',
    rating: 0,
    voteCount: 0,
    category: 'video',
    website: 'https://pictory.ai',
    shortVideo: 'https://www.youtube.com/embed/GxzJCYacnqI',
    longVideo: 'https://www.youtube.com/embed/v=heHnYt6XKTk&list=PLB8TfTqC4SQIFy10gJDQ1FZEYvJo88fQB',
    gptLink: 'https://chatgpt.com/g/g-n9GhKENCZ-pictory-gpt-for-videos',
    howToUse: [
      'Pictory.ai sitesine kaydolun ve giriş yapın.',
      '"Script to Video" ya da "Article to Video" seçeneklerinden birini seçin.',
      'Metni yapıştırın ve videoyu özelleştirin.',
      'Video oluşturmayı başlatın ve indirin.'
    ],
    useCases: [
      'Eğitim videoları hazırlama',
      'Blog yazılarını video içeriğe dönüştürme'
    ],
    gptPrompt: 'Bu metni videoya uygun senaryo formatına çevirir misin?'
  },
  {
    id: 7,
    slug: 'elicit-ai',
    name: 'Elicit AI',
    description: 'Akademik makaleleri özetler ve kritik bilgileri öne çıkarır.',
    logo: '/assets/logos/elicit-ai.png',
    price: 'free',
    rating: 0,
    voteCount: 0,
    category: 'research',
    website: 'https://elicit.org',
    shortVideo: 'https://www.youtube.com/embed/SRhEB2PCrG0',
    longVideo: 'https://www.youtube.com/embed/v=rJJPS-EvNfk',
    gptLink: 'https://chatgpt.com/g/g-PN1H2MlY8-academic-advisor',
    howToUse: [
      'Elicit.org sitesine giriş yapın.',
      'Araştırma sorusunu yazın veya makale yükleyin.',
      'Yapay zekâ destekli analiz ile özet alın.',
      'İlgili çalışmaları karşılaştırın.'
    ],
    useCases: [
      'Literatür tarama sürecini hızlandırma',
      'Akademik özet ve karşılaştırmalı analizler'
    ],
    gptPrompt: 'Bu araştırma sorusuna yönelik literatürde hangi bulgular öne çıkıyor?'
  },
  {
    id: 8,
    slug: 'deepl-write',
    name: 'DeepL Write',
    description: 'Dilbilgisi ve stil geliştiren yazma asistanı.',
    logo: '/assets/logos/deepl-write.png',
    price: 'limited',
    rating: 0,
    voteCount: 0,
    category: 'writing',
    website: 'https://www.deepl.com/write',
    shortVideo: 'https://www.youtube.com/embed/Xb8EN3N2HKw',
    longVideo: 'https://www.youtube.com/embed/v=OP7-cX2CmvU',
    gptLink: 'https://chatgpt.com/g/g-oCNwT3VcH-deepl-write',
    howToUse: [
      'DeepL Write sitesine gidin.',
      'Metni yapıştırın veya yazmaya başlayın.',
      'AI önerilerine göre stil ve dilbilgisi düzeltmelerini uygulayın.',
      'Daha iyi bir metin elde edin.'
    ],
    useCases: [
      'Akademik yazım düzenleme',
      'Profesyonel e-posta yazımı'
    ],
    gptPrompt: 'Bu metni daha resmi ve akıcı hale getirebilir misin?'
  },
  {
    id: 9,
    slug: 'teachermatic',
    name: 'Teachermatic AI',
    description: 'Ders planı ve etkinlik oluşturur.',
    logo: '/assets/logos/teachermatic.png',
    price: 'paid',
    rating: 0,
    voteCount: 0,
    category: 'education',
    website: 'https://educatorsaitools.com/teachermatic/',
    shortVideo: 'https://www.youtube.com/embed/3ys1zKXKQC4',
    longVideo: 'https://www.youtube.com/embed/v=y-YVbwJK9Iw&t=4s',
    gptLink: 'https://chatgpt.com/g/g-68137bbe69e08191a53677e463b22153-teachermatic-asistani',
    howToUse: [
      'Teachermatic sitesine kayıt olup giriş yapın.',
      'Sınıf düzeyini ve ders konusunu seçin.',
      'Plan ve etkinlik oluşturma modülünü başlatın.',
      'Oluşan materyalleri kopyalayın veya dışa aktarın.'
    ],
    useCases: [
      'Öğretmenler için hızlı ders planı hazırlığı',
      'Etkinlik tabanlı içerik oluşturma'
    ],
    gptPrompt: '6. sınıf öğrencileri için fen bilgisi konulu bir ders planı oluşturur musun?'
  },
  {
    id: 10,
    slug: 'scholar-ai',
    name: 'Scholar AI',
    description: 'Bilimsel yayınlarda arama yapar.',
    logo: '/assets/logos/scholar-ai.png',
    price: 'free',
    rating: 0,
    voteCount: 0,
    category: 'research',
    website: 'https://educatorsaitools.com/scholar/',
    shortVideo: 'https://www.youtube.com/embed/6QBjD7QOX7E',
    longVideo: 'https://www.youtube.com/embed/v=qPfm-80FqE8',
    gptLink: 'https://chatgpt.com/g/g-kZ0eYXlJe-scholar-gpt',
    howToUse: [
      'Scholar AI sayfasına giriş yapın.',
      'İlgili araştırma konusunu yazın.',
      'Arama sonuçlarını gözden geçirin.',
      'Detaylı makale bilgilerine ulaşın.'
    ],
    useCases: [
      'Araştırma sürecinde hızlı kaynak bulma',
      'Lisans ve yüksek lisans öğrencileri için literatür taraması'
    ],
    gptPrompt: 'Son 5 yılda yayınlanmış yapay zeka eğitimi konulu bilimsel makaleleri listeler misin?'
  },
  {
    id: 11,
    slug: 'quillbot',
    name: 'QuillBot',
    description: 'Parafraz ve yazı geliştirici.',
    logo: '/assets/logos/quillbot.png',
    price: 'paid',
    rating: 0,
    voteCount: 0,
    category: 'writing',
    website: 'https://educatorsaitools.com/quillbot/',
    shortVideo: 'https://www.youtube.com/embed/8_Xfp6liyoc',
    longVideo: 'https://www.youtube.com/embed/v=cZT9J8IygIA',
    gptLink: 'https://chatgpt.com/g/g-67c58c3e5b548191b1a8dd646f6cc1c6-quillbot-ai-ai-essay-article-humanizer',
    howToUse: [
      'QuillBot web sitesine giriş yapın.',
      'Metninizi yapıştırın.',
      'Parafraz modunu ve dil stilini seçin.',
      'Yeni yazımı kopyalayın veya düzenleyin.'
    ],
    useCases: [
      'Akademik metin yeniden yazımı',
      'Plagiarizm önleme için parafraz'
    ],
    gptPrompt: 'Aşağıdaki paragrafı farklı kelimelerle yeniden yazar mısın?'
  },
  {
    id: 12,
    slug: 'eduaide-ai',
    name: 'Eduaide AI',
    description: 'Ders planları, değerlendirme araçları oluşturur.',
    logo: '/assets/logos/eduaide-ai.png',
    price: 'free',
    rating: 0,
    voteCount: 0,
    category: 'education',
    website: 'https://educatorsaitools.com/eduaide/',
    shortVideo: 'https://www.youtube.com/embed/ZDuW-TbNOws',
    longVideo: 'https://www.youtube.com/embed/v=1Q2FY7YPeNw&list=PL5wdp6qzq3Rz9kHCt-MgqtMJD1aYK8iLw',
    gptLink: 'https://chatgpt.com/g/g-68138174663c8191862b5e89bede07ac-eduaide-ai-asistani',
    howToUse: [
      'Eduaide.ai platformuna giriş yapın.',
      'Öğretim araçları bölümünden ihtiyacınıza uygun olanı seçin.',
      'İstediğiniz konuyu girerek içerik üretimini başlatın.',
      'Oluşturulan çıktıyı düzenleyin veya dışa aktarın.'
    ],
    useCases: [
      'İlkokul–lise arası öğretmenler için içerik geliştirme',
      'Eğitimde farklılaştırma için içerik çeşitlendirme'
    ],
    gptPrompt: '6. sınıf seviyesinde matematik konusu için 3 farklı etkinlik üretir misin?'
  },
  {
    id: 13,
    slug: 'classpoint',
    name: 'ClassPoint',
    description: 'PowerPoint ile interaktif quiz/anket oluşturur.',
    logo: '/assets/logos/classpoint.png',
    price: 'free',
    rating: 0,
    voteCount: 0,
    category: 'presentation',
    website: 'https://educatorsaitools.com/classpoint/',
    shortVideo: 'https://www.youtube.com/embed/Vt2J6f-iYdU',
    longVideo: 'https://www.youtube.com/embed/v=RyMP7CdPA1k&list=PLlRTmfXu4-_d271CpzkQ-cjaD8rZWzN6d',
    gptLink: 'https://chatgpt.com/g/g-68136d2790f881918364863e34828b6d-classpoint-asistani',
    howToUse: [
      'ClassPoint eklentisini PowerPoint’e yükleyin.',
      'Sunum slaytlarınızı oluşturun.',
      'İnteraktif soru türlerinden birini ekleyin.',
      'Sunum sırasında öğrencilerden yanıt toplayın.'
    ],
    useCases: [
      'Yüz yüze sınıflarda anında geri bildirim alma',
      'Etkileşimli sunumlar ile dikkat artırma'
    ],
    gptPrompt: 'Bu sunum slaytına uygun 3 interaktif quiz önerisi üretir misin?'
  },
  {
    id: 14,
    slug: 'mindgrasp',
    name: 'MindGrasp AI',
    description: 'Karmaşık metinleri özetler.',
    logo: '/assets/logos/mindgrasp.png',
    price: 'free',
    rating: 0,
    voteCount: 0,
    category: 'research',
    website: 'https://educatorsaitools.com/mindgrasp/',
    shortVideo: 'https://www.youtube.com/embed/VPd0wEAVdPE',
    longVideo: 'https://www.youtube.com/embed/v=BGF8_s9OTik&t=18s',
    gptLink: 'https://chatgpt.com/g/g-67dac36f0a6c81919c8be003dfc05274-mindgrasp-ai',
    howToUse: [
      'MindGrasp platformuna giriş yapın.',
      'PDF veya metin dosyanızı yükleyin.',
      'Sistem tarafından oluşturulan özetlere göz atın.',
      'Gerekirse detaylı açıklamaları görüntüleyin.'
    ],
    useCases: [
      'Bilimsel makale okuma süresini azaltma',
      'Ders kitaplarını hızlı kavrama'
    ],
    gptPrompt: 'Bu makalenin kısa bir özetini oluşturur musun?'
  },
  {
    id: 15,
    slug: 'slides-ai',
    name: 'Slides AI',
    description: 'Sunumlardan özet görüntüler oluşturur.',
    logo: '/assets/logos/slides-ai.png',
    price: 'free',
    rating: 0,
    voteCount: 0,
    category: 'presentation',
    website: 'https://educatorsaitools.com/slidesai/',
    shortVideo: 'https://www.youtube.com/embed/oVcG1U4l514',
    longVideo: 'https://www.youtube.com/embed/v=wxNq_TMK930',
    gptLink: 'https://chatgpt.com/g/g-677bee83879c81918c9ce8406e2aa7a2-slidesai-slides-and-powerpoints-maker',
    howToUse: [
      'Slides AI sitesine gidin ve giriş yapın.',
      'Kısa bir başlık ve içerik girin.',
      'AI tarafından oluşturulan slaytları ön izleyin.',
      'Slaytları Google Slides’a aktarın.'
    ],
    useCases: [
      'Hızlı ve etkili sunum hazırlama',
      'Eğitim ve iş toplantılarında sunum kolaylığı'
    ],
    gptPrompt: 'Aşağıdaki konu başlığı için 5 slaytlık bir sunum yapısı üretir misin?'
  }
];
