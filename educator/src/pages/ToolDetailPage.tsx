import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Send, Bot, User, Star, ExternalLink } from 'lucide-react';

// Mock data
const tools = [
  {
    id: 1,
    slug: 'scite-ai',
    name: "SciteAi",
    description: "Makalelerde kullanılan referansların doğruluğunu analiz eder.",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    price: "paid" as const,
    rating: 4.0,
    voteCount: 4,
    category: "research",
    website: "https://scite.ai"
  },
  {
    id: 2,
    slug: 'quiz-gecko',
    name: "QuizGecko",
    description: "Ders notlarından çoktan seçmeli, doğru-yanlış sınav soruları üretir.",
    logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    price: "paid" as const,
    rating: 4.0,
    voteCount: 1,
    category: "assessment",
    website: "https://quizgecko.com"
  },
  {
    id: 3,
    slug: 'pictory',
    name: "Pictory",
    description: "Uzun metinlerden otomatik kısa videolar üretir.",
    logo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    price: "paid" as const,
    rating: 5.0,
    voteCount: 1,
    category: "video",
    website: "https://pictory.ai"
  },
  {
    id: 4,
    slug: 'gamma',
    name: "Gamma",
    description: "Ders slaytlarını hızlı ve etkileyici şekilde hazırlamaya yardımcı olur.",
    logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face",
    price: "free" as const,
    rating: 5.0,
    voteCount: 1,
    category: "presentation",
    website: "https://gamma.app"
  },
  {
    id: 5,
    slug: 'consensus',
    name: "Consensus",
    description: "Akademik makalelerdeki ortak görüşleri analiz eder.",
    logo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=60&h=60&fit=crop&crop=face",
    price: "free" as const,
    rating: 0,
    voteCount: 0,
    category: "research",
    website: "https://consensus.app"
  }
];

export const ToolDetailPage: React.FC = () => {
  const { toolSlug } = useParams<{ toolSlug: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'videos' | 'chat'>('overview');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'bot' as const, text: 'Merhaba! Bu araç hakkında detaylı sorularınızı sorabilirsiniz.' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const tool = tools.find(t => t.slug === toolSlug);

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Araç Bulunamadı</h1>
          <Link to="/" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  const getPriceConfig = (price: string) => {
    switch (price) {
      case 'free': return { text: 'Ücretsiz', className: 'bg-green-100 text-green-800' };
      case 'paid': return { text: 'Ücretli', className: 'bg-orange-100 text-orange-800' };
      case 'limited': return { text: 'Sınırlı Ücretsiz', className: 'bg-blue-100 text-blue-800' };
      default: return { text: 'Ücretsiz', className: 'bg-green-100 text-green-800' };
    }
  };

  const priceConfig = getPriceConfig(tool.price);

  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const userMessage = { id: Date.now(), type: 'user' as const, text: chatInput };
    const botResponse = { 
      id: Date.now() + 1, 
      type: 'bot' as const, 
      text: `${tool.name} hakkında "${chatInput}" konusunda size detaylı bilgi verebilirim. Bu araç eğitim alanında çok faydalıdır.` 
    };

    setChatMessages(prev => [...prev, userMessage, botResponse]);
    setChatInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Ana Sayfaya Dön
        </Link>

        {/* Tool Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
            <img 
              src={tool.logo} 
              alt={tool.name}
              className="w-24 h-24 rounded-xl object-cover border-2 border-gray-100 shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{tool.name}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${priceConfig.className}`}>
                  {priceConfig.text}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="text-gray-600 ml-2">{tool.rating.toFixed(1)} ({tool.voteCount} oy)</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{tool.description}</p>
            </div>
            
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
            >
              <ExternalLink size={16} />
              Resmi Website
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              📋 Genel Bakış
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
                activeTab === 'videos'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              🎥 Eğitim Videoları
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
                activeTab === 'chat'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              🤖 AI Asistan
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-800 mb-2">💰 Fiyatlandırma</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${priceConfig.className}`}>
                      {priceConfig.text}
                    </span>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-800 mb-2">📂 Kategori</h3>
                    <span className="text-gray-600 capitalize">{tool.category}</span>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-800 mb-2">⭐ Değerlendirme</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-800">{tool.rating.toFixed(1)}</span>
                      <span className="text-gray-600">/ 5.0</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-4">✨ Ana Özellikler</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Eğitim odaklı yapay zeka teknolojisi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Kullanıcı dostu arayüz
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Profesyonel sonuçlar
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Zaman tasarrufu sağlar
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">📹 Kısa Tanıtım Videosu (2-3 dakika)</h3>
                  <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="mx-auto mb-4 text-gray-400" size={64} />
                      <p className="text-gray-600">Kısa tanıtım videosu yakında eklenecek</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🎬 Detaylı Eğitim Videosu (10-15 dakika)</h3>
                  <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="mx-auto mb-4 text-gray-400" size={64} />
                      <p className="text-gray-600">Detaylı eğitim videosu yakında eklenecek</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'chat' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">🤖 {tool.name} Özel AI Asistan</h3>
                  <p className="text-gray-600">Bu araç hakkında detaylı sorularınızı sorun!</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 h-96 overflow-y-auto">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 mb-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          message.type === 'user' ? 'bg-blue-500' : 'bg-purple-500'
                        }`}>
                          {message.type === 'user' ? <User size={18} className="text-white" /> : <Bot size={18} className="text-white" />}
                        </div>
                        <div className={`p-4 rounded-xl ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-800 shadow-sm'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                    placeholder={`${tool.name} hakkında soru sorun...`}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleChatSend}
                    disabled={!chatInput.trim()}
                    className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2"
                  >
                    <Send size={16} />
                    Gönder
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
