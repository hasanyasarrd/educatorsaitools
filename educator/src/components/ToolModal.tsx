import React, { useState } from 'react';
import { X, Play, Send, Bot, User, ExternalLink, Star } from 'lucide-react';
import type { Tool } from '../types';

interface ToolModalProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

type MessageType = 'bot' | 'user';

interface ChatMessage {
  id: number;
  type: MessageType;
  text: string;
}

export const ToolModal: React.FC<ToolModalProps> = ({ tool, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'videos' | 'chat'>('overview');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'bot',
      text: 'Merhaba! Bu araç hakkında sorularınızı sorabilirsiniz.'
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  if (!isOpen || !tool) return null;

  const getPriceConfig = (price: Tool['price']) => {
    switch (price) {
      case 'free':
        return { text: 'Ücretsiz', className: 'bg-green-100 text-green-800' };
      case 'paid':
        return { text: 'Ücretli', className: 'bg-orange-100 text-orange-800' };
      case 'limited':
        return { text: 'Sınırlı Ücretsiz', className: 'bg-blue-100 text-blue-800' };
      default:
        return { text: 'Ücretsiz', className: 'bg-green-100 text-green-800' };
    }
  };

  const priceConfig = getPriceConfig(tool.price);

  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      type: 'user',
      text: chatInput
    };

    const botResponse: ChatMessage = {
      id: Date.now() + 1,
      type: 'bot',
      text: `${tool.name} hakkında "${chatInput}" konusunda size yardımcı olabilirim.`
    };

    setChatMessages((prev: ChatMessage[]) => [...prev, userMessage, botResponse]);
    setChatInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSend();
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
        <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
        />
    ));
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
                    {renderStars(tool.rating)}
                    <span className="text-sm text-gray-600 ml-1">{tool.rating.toFixed(1)}</span>
                    <span className="text-sm text-gray-500">({tool.voteCount ?? tool.votes?.up ?? 0} oy)</span>
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

            <button onClick={onClose} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            {['overview', 'videos', 'chat'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as 'overview' | 'videos' | 'chat')}
                    className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
                        activeTab === tab
                            ? 'bg-white text-blue-600 border-b-2 border-blue-500'
                            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                >
                  {tab === 'overview' && '📋 Genel Bakış'}
                  {tab === 'videos' && '🎥 Videolar'}
                  {tab === 'chat' && '🤖 AI Asistan'}
                </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-96">
            {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Araç Hakkında</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
            )}

            {activeTab === 'videos' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📹 Kısa Video</h3>
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100">
                    {tool.shortVideo ? (
                        <iframe
                            src={tool.shortVideo}
                            title="Short Video"
                            className="w-full h-full"
                            allowFullScreen
                        />
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500">
                          <Play className="mr-2" /> Kısa video yakında
                        </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🎬 Detaylı Video</h3>
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100">
                    {tool.longVideo ? (
                        <iframe
                            src={tool.longVideo}
                            title="Long Video"
                            className="w-full h-full"
                            allowFullScreen
                        />
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500">
                          <Play className="mr-2" /> Detaylı video yakında
                        </div>
                    )}
                  </div>
                </div>
            )}

            {activeTab === 'chat' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">🤖 {tool.name} AI Asistan</h3>
                  <div className="bg-gray-50 rounded-xl p-4 h-64 overflow-y-auto">
                    {chatMessages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex gap-3 mb-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex gap-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    msg.type === 'user' ? 'bg-blue-500' : 'bg-purple-500'
                                }`}
                            >
                              {msg.type === 'user' ? (
                                  <User size={16} className="text-white" />
                              ) : (
                                  <Bot size={16} className="text-white" />
                              )}
                            </div>
                            <div
                                className={`p-3 rounded-xl ${
                                    msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
                                }`}
                            >
                              <p className="text-sm">{msg.text}</p>
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
