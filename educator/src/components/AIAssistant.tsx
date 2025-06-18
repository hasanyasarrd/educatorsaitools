import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="text-white" size={24} />
        <h3 className="text-xl font-semibold text-white">AI Asistan</h3>
      </div>
      
      <div className="bg-white/5 rounded-xl p-4 h-32 mb-4">
        <p className="text-white text-sm">Merhaba! Size nasıl yardımcı olabilirim?</p>
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Soru sorun..."
          className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300"
        />
        <button className="px-6 py-3 bg-blue-500 text-white rounded-xl flex items-center gap-2">
          <Send size={16} />
          Gönder
        </button>
      </div>
    </div>
  );
};
