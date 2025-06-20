import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink } from 'lucide-react';
import { tools } from '../data/tools';

export const ToolDetailPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toolSlug } = useParams();
  const tool = tools.find(t => t.slug === toolSlug);

  if (!tool) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Araç Bulunamadı</h1>
            <p className="mb-4 text-sm">Slug: {toolSlug}</p>
            <Link to="/" className="underline hover:text-gray-200">Ana sayfaya dön</Link>
          </div>
        </div>
    );
  }

  const voteCount = tool.voteCount ?? (tool.votes ? tool.votes.up + tool.votes.down : 0);

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto bg-white text-gray-800 rounded-2xl p-8 shadow-2xl space-y-10">

          {/* Üst Bilgiler */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img src={tool.logo} alt={tool.name} className="w-24 h-24 rounded-xl object-cover border border-gray-300" />
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-primary-600 mb-2">{tool.name}</h1>
              <p className="text-gray-700">{tool.description}</p>
              <div className="flex items-center gap-2 mt-2">
                {[1, 2, 3, 4, 5].map(i => (
                    <Star
                        key={i}
                        size={18}
                        className={i <= Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                ))}
                <span className="text-sm text-gray-600">{tool.rating.toFixed(1)} ({voteCount} oy)</span>
              </div>
            </div>

            {tool.website && (
                <a href={tool.website} target="_blank" rel="noopener noreferrer"
                   className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 font-medium transition">
                  <ExternalLink size={16} className="inline mr-2" />
                  Siteye Git
                </a>
            )}
          </div>

          {/* Videolar */}
          {(tool.shortVideo || tool.longVideo) && (
              <div className="grid md:grid-cols-2 gap-6">
                {tool.shortVideo && (
                    <div>
                      <h2 className="text-lg font-semibold mb-2 text-primary-600">🎬 Kısa Video</h2>
                      <div className="aspect-video rounded-xl overflow-hidden border border-gray-300 shadow-sm">
                        <iframe src={tool.shortVideo} className="w-full h-full" allowFullScreen />
                      </div>
                    </div>
                )}
                {tool.longVideo && (
                    <div>
                      <h2 className="text-lg font-semibold mb-2 text-primary-600">📘 Detaylı Video</h2>
                      <div className="aspect-video rounded-xl overflow-hidden border border-gray-300 shadow-sm">
                        <iframe src={tool.longVideo} className="w-full h-full" allowFullScreen />
                      </div>
                    </div>
                )}
              </div>
          )}

          {/* ✅ Nasıl Kullanılır? */}
          {tool.howToUse?.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-secondary-600">✅ Nasıl Kullanılır?</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {tool.howToUse.map((step, i) => (
                      <div
                          key={i}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 shadow-sm flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                          {i + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                  ))}
                </div>
              </div>
          )}

          {/* 💡 Kullanım Alanları */}
          {tool.useCases?.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-secondary-600">💡 Kullanım Alanları</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {tool.useCases.map((use, i) => (
                      <div
                          key={i}
                          className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-gray-700 flex gap-3"
                      >
                        <div className="w-2.5 h-2.5 mt-2 bg-blue-500 rounded-full" />
                        <p>{use}</p>
                      </div>
                  ))}
                </div>
              </div>
          )}

          {/* Ana Sayfa Butonu - En Altta */}
          <div className="text-center mt-10">
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition"
            >
              <ArrowLeft size={18} />
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
  );
};
