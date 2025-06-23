// src/components/Header.tsx
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
    const location = useLocation();

    return (
        <div className="flex justify-between items-center px-6 py-4 bg-white/10 rounded-2xl text-white backdrop-blur-lg shadow-md mb-8">
            <h1 className="text-2xl font-bold">Educators AI Tools</h1>
            <nav className="flex space-x-4 text-lg font-medium">
                <Link
                    to="/"
                    className={`px-4 py-2 rounded-full transition ${
                        location.pathname === '/' ? 'bg-white/30 text-white' : 'hover:text-white/80'
                    }`}
                >
                    Ana Sayfa
                </Link>
                <Link
                    to="/feedback"
                    className={`px-4 py-2 rounded-full transition ${
                        location.pathname === '/feedback' ? 'bg-white/30 text-white' : 'hover:text-white/80'
                    }`}
                >
                    Geri Bildirim
                </Link>
            </nav>
        </div>
    );
};
