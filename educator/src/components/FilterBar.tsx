import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  priceFilter: string;
  categoryFilter: string;
  setPriceFilter: (filter: string) => void;
  setCategoryFilter: (filter: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ 
  priceFilter, 
  categoryFilter, 
  setPriceFilter, 
  setCategoryFilter 
}) => {
  const priceOptions = [
    { value: 'all', label: 'Tümü' },
    { value: 'free', label: 'Ücretsiz' },
    { value: 'limited', label: 'Sınırlı Ücretsiz' },
    { value: 'paid', label: 'Ücretli' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'Tümü' },
    { value: 'research', label: '🔬 Araştırma' },
    { value: 'presentation', label: '📊 Sunum' },
    { value: 'assessment', label: '📝 Değerlendirme' },
    { value: 'writing', label: '✍️ Yazım' },
    { value: 'video', label: '🎥 Video' },
    { value: 'education', label: '🎓 Eğitim' },
    { value: 'analysis', label: '📈 Analiz' }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="text-white" size={20} />
        <h3 className="text-lg font-semibold text-white">Filtreler</h3>
      </div>
      
      {/* Fiyat Filtreleri */}
      <div className="mb-4">
        <h4 className="text-white font-medium mb-3">💰 Fiyatlandırma</h4>
        <div className="flex flex-wrap gap-2">
          {priceOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setPriceFilter(option.value)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                priceFilter === option.value
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Kategori Filtreleri */}
      <div>
        <h4 className="text-white font-medium mb-3">📂 Kategoriler</h4>
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setCategoryFilter(option.value)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                categoryFilter === option.value
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
