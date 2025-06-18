import { Tool } from '../types';

export const mockTools: Tool[] = [
  {
    id: 1,
    name: "SciteAi",
    description: "Makalelerde kullanılan referansların doğruluğunu analiz eder ve akademik yazılarda güvenilir kaynaklar kullanmanızı sağlar.",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    price: "paid",
    rating: 4.5,
    votes: { up: 23, down: 3 },
    category: "research",
    shortVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    longVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gptPrompt: "Sen SciteAi konusunda uzman bir asistansın. Kullanıcılara bu aracın özelliklerini, nasıl kullanılacağını ve akademik yazımda nasıl fayda sağlayacağını açıklarsın.",
    website: "https://scite.ai"
  },
  {
    id: 2,
    name: "QuizGecko",
    description: "Ders notlarından otomatik olarak çoktan seçmeli, doğru-yanlış ve açık uçlu sınav soruları üretir.",
    logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    price: "paid",
    rating: 4.2,
    votes: { up: 18, down: 2 },
    category: "assessment",
    shortVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    longVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gptPrompt: "Sen QuizGecko konusunda uzman bir asistansın. Öğretmenlere bu aracı kullanarak nasıl etkili sınavlar hazırlayabileceklerini öğretirsin.",
    website: "https://quizgecko.com"
  },
  {
    id: 3,
    name: "Gamma",
    description: "AI destekli sunum oluşturma aracı. Ders slaytlarını hızlı ve etkileyici şekilde hazırlamanıza yardımcı olur.",
    logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face",
    price: "free",
    rating: 4.7,
    votes: { up: 45, down: 1 },
    category: "presentation",
    shortVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    longVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gptPrompt: "Sen Gamma konusunda uzman bir asistansın. Eğitimcilere bu araçla nasıl profesyonel sunumlar hazırlayabileceklerini gösterirsin.",
    website: "https://gamma.app"
  },
  {
    id: 4,
    name: "Consensus",
    description: "200M+ bilimsel makalede arama yaparak akademik konulardaki genel görüş birliğini bulur.",
    logo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=60&h=60&fit=crop&crop=face",
    price: "free",
    rating: 4.3,
    votes: { up: 32, down: 4 },
    category: "research",
    shortVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    longVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gptPrompt: "Sen Consensus konusunda uzman bir asistansın. Araştırmacılara bu araçla nasıl akademik literatür taraması yapabileceklerini öğretirsin.",
    website: "https://consensus.app"
  },
  {
    id: 5,
    name: "Grammarly",
    description: "Yazım, dilbilgisi ve üslup hatalarını otomatik tespit eder. Akademik yazılarda dil kalitesini artırır.",
    logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    price: "limited",
    rating: 4.6,
    votes: { up: 67, down: 3 },
    category: "writing",
    shortVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    longVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gptPrompt: "Sen Grammarly konusunda uzman bir asistansın. Yazarların bu araçla nasıl daha kaliteli metinler yazabileceklerini açıklarsın.",
    website: "https://grammarly.com"
  },
  {
    id: 6,
    name: "Pictory",
    description: "Uzun metinlerden, blog yazılarından ve makalelerden otomatik olarak kısa videolar üretir.",
    logo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    price: "paid",
    rating: 4.4,
    votes: { up: 28, down: 5 },
    category: "video",
    shortVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    longVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gptPrompt: "Sen Pictory konusunda uzman bir asistansın. İçerik üreticilerine bu araçla nasıl metinlerini videoya dönüştürebileceklerini gösterirsin.",
    website: "https://pictory.ai"
  }
];
