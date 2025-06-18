import React, { useState } from 'react';
import { X, Play, Send, Bot, User, ExternalLink, Star } from 'lucide-react';

interface Tool {
  id: number;
  name: string;
  description: string;
  logo: string;
  price: 'free' | 'paid' | 'limited';
  rating: number;
  voteCount: number;
  category: string;
  website?: string;
}

interface ToolModalProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ToolModal: React.FC<ToolModalProps> = ({ tool, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'videos' | 'chat'>('overview');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'bot' as const, text: 'Merhaba! Bu araç hakkında sorularınızı sorabilirsiniz.' }
  ]);
  const [chatInput, setChatInput] = useState('');

  if (!isOpen || !tool) return null;

  const getPriceConfig = (price: Tool['price']) => {
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
      text: `${tool.name} hakkında "${chatInput}" konusunda size yardımcı olabilirim. Bu araç eğitim alanında çok faydalıdır.` 
    };

    setChatMessages(prev => [...prev, userMessage, botResponse]);
    setChatInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSend();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center gap-4">
            <img 
              src={tool.logo} 
              alt={tool.name}
              className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{tool.name}</h2>
              <div className="flex items-center gap-3 mt-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${priceConfig.className}`}>
                  {priceConfig.text}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{tool.rating.toFixed(1)}</span>
                  <span className="text-sm text-gray-500">({tool.voteCount} oy)</span>
                </div>
                {tool.website && (
                  <button
                    onClick={() => window.open(tool.website, '_blank')}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    Website
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-white text-blue-600 border-b-2 border-blue-500'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            📋 Genel Bakış
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
              activeTab === 'videos'
                ? 'bg-white text-blue-600 border-b-2 border-blue-500'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            🎥 Videolar
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
              activeTab === 'chat'
                ? 'bg-white text-blue-600 border-b-2 border-blue-500'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            🤖 AI Asistan
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Araç Hakkında</h3>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">💰 Fiyat</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${priceConfig.className}`}>
                    {priceConfig.text}
                  </span>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">📂 Kategori</h4>
                  <span className="text-gray-600">{tool.category}</span>
                </div>

                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">⭐ Rating</h4>
                  <span className="text-lg font-bold">{tool.rating.toFixed(1)}/5</span>
                  <span className="text-sm text-gray-500 block">{tool.voteCount} oy</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📹 Kısa Video</h3>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto mb-2 text-gray-400" size={48} />
                    <p className="text-gray-600">Kısa video yakında</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🎬 Detaylı Video</h3>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto mb-2 text-gray-400" size={48} />
                    <p className="text-gray-600">Detaylı video yakında</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">🤖 {tool.name} AI Asistan</h3>
              
              <div className="bg-gray-50 rounded-xl p-4 h-64 overflow-y-auto">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 mb-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}>
                        {message.type === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                      </div>
                      <div className={`p-3 rounded-xl ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-800'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Soru sorun..."
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
  );
};
