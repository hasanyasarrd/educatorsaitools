import React, { useState, useEffect } from 'react';
import { Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Tool {
  id: number;
  name: string;
  slug: string;
  description: string;
  logo: string;
  price: 'free' | 'paid' | 'limited';
  rating: number;
  voteCount?: number;
  votes?: { up: number; down: number };
  category: string;
}

interface ToolCardProps {
  tool: Tool;
  onRatingUpdate: (toolId: number, rating: number) => void;
  userVotes: Record<number, number>;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onRatingUpdate, userVotes }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    if (userVotes[tool.id]) {
      setHasVoted(true);
      setUserRating(userVotes[tool.id]);
    }
  }, [userVotes, tool.id]);

  const getPriceConfig = (price: Tool['price']) => {
    switch (price) {
      case 'free': return { text: 'Ücretsiz', className: 'bg-green-500 text-white' };
      case 'paid': return { text: 'Ücretli', className: 'bg-orange-500 text-white' };
      case 'limited': return { text: 'Sınırlı Ücretsiz', className: 'bg-blue-500 text-white' };
      default: return { text: 'Ücretsiz', className: 'bg-green-500 text-white' };
    }
  };

  const priceConfig = getPriceConfig(tool.price);

  const handleStarClick = (rating: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasVoted) {
      alert('Bu araç için zaten oy kullandınız!');
      return;
    }

    setUserRating(rating);
    setHasVoted(true);
    onRatingUpdate(tool.id, rating);

    setTimeout(() => {
      alert(`${tool.name} için ${rating} yıldız oyunuz kaydedildi! 🎉`);
    }, 500);
  };

  const handleStarHover = (rating: number) => {
    if (!hasVoted) setHoveredStar(rating);
  };

  const displayRating = hoveredStar || (hasVoted ? userRating : 0);
  const totalVotes = tool.voteCount ?? (tool.votes ? tool.votes.up + tool.votes.down : 0);

  return (
      <div className="h-full flex flex-col justify-between bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
        <div className="flex items-center gap-4 mb-4">
          <img src={tool.logo} alt={tool.name} className="w-16 h-16 rounded-xl object-cover border-2 border-gray-100 group-hover:border-blue-300 transition-colors" />
          <div>
            <Link
                to={`/tools/${tool.slug}`}
                className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors hover:underline"
            >
              {tool.name}
            </Link>
            <div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${priceConfig.className}`}>
              {priceConfig.text}
            </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
          {tool.description}
        </p>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              {hasVoted ? 'Oyunuz:' : 'Değerlendirin:'}
            </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={(e) => handleStarClick(star, e)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className={`transition-all duration-200 ${
                            hasVoted ? 'cursor-default' : 'cursor-pointer hover:scale-110'
                        }`}
                    >
                      <Star
                          size={20}
                          className={`${
                              hasVoted ? (star <= userRating ? 'text-blue-500 fill-current' : 'text-gray-300')
                                  : (star <= displayRating ? 'text-yellow-400 fill-current' : 'text-gray-300')
                          }`}
                      />
                    </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              <span>{totalVotes} oy</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Ortalama:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={14}
                        className={star <= Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                ))}
                <span className="ml-1 font-medium text-gray-700">{tool.rating.toFixed(1)} / 5</span>
              </div>
            </div>
            {hasVoted && <span className="text-green-600 font-medium">✓ Oylandı</span>}
          </div>
        </div>
      </div>
  );
};
