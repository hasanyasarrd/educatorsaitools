// ToolGrid.tsx (güncellenmiş)
import React, { useEffect, useState } from 'react';
import { ToolCard } from './ToolCard';
import { tools as allTools } from '../data/tools';

interface Tool {
  id: number;
  slug: string;
  name: string;
  description: string;
  logo: string;
  price: 'free' | 'paid' | 'limited';
  rating: number;
  voteCount?: number;
  votes?: { up: number; down: number };
  category: string;
  website?: string;
}

interface ToolGridProps {
  priceFilter: string;
  categoryFilter: string;
}

export const ToolGrid: React.FC<ToolGridProps> = ({ priceFilter, categoryFilter }) => {
  const [userVotes, setUserVotes] = useState<Record<number, number>>({});
  const [tools, setTools] = useState<Tool[]>(() => allTools);

  useEffect(() => {
    try {
      const savedTools = localStorage.getItem('educatorsAiTools');
      if (savedTools) {
        setTools(JSON.parse(savedTools));
      }

      const savedVotes = localStorage.getItem('userVotes');
      if (savedVotes) {
        setUserVotes(JSON.parse(savedVotes));
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

  const filteredTools = tools.filter((tool) => {
    const priceMatch = priceFilter === 'all' || tool.price === priceFilter;
    const categoryMatch = categoryFilter === 'all' || tool.category === categoryFilter;
    return priceMatch && categoryMatch;
  });

  const updateToolRating = (toolId: number, newRating: number) => {
    if (userVotes[toolId]) {
      alert('Bu araç için zaten oy kullandınız!');
      return;
    }

    const updatedTools = tools.map((tool) => {
      if (tool.id === toolId) {
        const newVoteCount = (tool.voteCount ?? 0) + 1;
        const newAverageRating = (tool.rating * (tool.voteCount ?? 0) + newRating) / newVoteCount;
        return {
          ...tool,
          rating: Math.round(newAverageRating * 10) / 10,
          voteCount: newVoteCount,
        };
      }
      return tool;
    });

    const updatedUserVotes = {
      ...userVotes,
      [toolId]: newRating,
    };

    setTools(updatedTools);
    setUserVotes(updatedUserVotes);

    localStorage.setItem('educatorsAiTools', JSON.stringify(updatedTools));
    localStorage.setItem('userVotes', JSON.stringify(updatedUserVotes));
  };

  if (filteredTools.length === 0) {
    return (
        <div className="text-center py-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-2">Araç Bulunamadı</h3>
            <p className="text-white/80">Seçilen filtreler için herhangi bir araç bulunamadı.</p>
          </div>
        </div>
    );
  }

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredTools.map((tool) => (
            <div key={tool.id} className="block">
              <ToolCard
                  tool={tool}
                  onRatingUpdate={updateToolRating}
                  userVotes={userVotes}
              />
            </div>
        ))}
      </div>
  );
};
