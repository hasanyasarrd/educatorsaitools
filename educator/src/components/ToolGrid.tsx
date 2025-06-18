import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToolCard } from './ToolCard';

interface Tool {
  id: number;
  slug: string;
  name: string;
  description: string;
  logo: string;
  price: 'free' | 'paid' | 'limited';
  rating: number;
  voteCount: number;
  category: string;
  website?: string;
}

interface ToolGridProps {
  priceFilter: string;
  categoryFilter: string;
}

const initialTools = [
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
  // Tüm 15 aracı da ekleyeceğiz...
];

export const ToolGrid: React.FC<ToolGridProps> = ({ priceFilter, categoryFilter }) => {
  const [tools, setTools] = useState(initialTools);
  const [userVotes, setUserVotes] = useState<Record<number, number>>({});

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

  const filteredTools = tools.filter(tool => {
    const priceMatch = priceFilter === 'all' || tool.price === priceFilter;
    const categoryMatch = categoryFilter === 'all' || tool.category === categoryFilter;
    return priceMatch && categoryMatch;
  });

  const updateToolRating = (toolId: number, newRating: number) => {
    if (userVotes[toolId]) {
      alert('Bu araç için zaten oy kullandınız!');
      return;
    }

    const updatedTools = tools.map(tool => {
      if (tool.id === toolId) {
        const newVoteCount = tool.voteCount + 1;
        const newAverageRating = tool.voteCount === 0 
          ? newRating 
          : ((tool.rating * tool.voteCount) + newRating) / newVoteCount;
        
        return {
          ...tool,
          rating: Math.round(newAverageRating * 10) / 10,
          voteCount: newVoteCount
        };
      }
      return tool;
    });
    
    const updatedUserVotes = {
      ...userVotes,
      [toolId]: newRating
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
          <p className="text-white/80">
            Seçilen filtreler için herhangi bir araç bulunamadı.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {filteredTools.map((tool) => (
        <Link key={tool.id} to={`/tools/${tool.slug}`}>
          <ToolCard 
            tool={tool} 
            onRatingUpdate={updateToolRating}
            userVotes={userVotes}
          />
        </Link>
      ))}
    </div>
  );
};
