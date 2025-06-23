import React from 'react';
import { Header } from '../components/Header';
import { FeedbackForm } from '../components/FeedbackForm';

export const FeedbackPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="container mx-auto px-4 py-8">
                <Header />
                <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
                    <FeedbackForm />
                </section>
            </div>

            <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-12">
                <div className="container mx-auto px-4 py-8 text-center text-white/80 text-sm">
                    &copy; 2024 Educators AI Tools. Eğitimciler için yapay zeka araçları rehberi.
                </div>
            </footer>
        </div>
    );
};
