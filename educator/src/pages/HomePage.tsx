import React, { useState } from 'react';
import { Header } from '../components/Header';
import { AIAssistant } from '../components/AIAssistant';
import { FilterBar } from '../components/FilterBar';
import { ToolGrid } from '../components/ToolGrid';

export const HomePage: React.FC = () => {
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <AIAssistant />
        <FilterBar
          priceFilter={priceFilter}
          categoryFilter={categoryFilter}
          setPriceFilter={setPriceFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <ToolGrid
          priceFilter={priceFilter}
          categoryFilter={categoryFilter}
        />
      </div>

      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-white/80">
          <p>&copy; 2024 Educators AI Tools. Eğitimciler için yapay zeka araçları rehberi.</p>
        </div>
      </footer>
    </div>
  );
};
