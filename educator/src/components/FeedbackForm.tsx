import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, User } from 'lucide-react';

export const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setErrorMsg('Lütfen e-posta adresinizi girin.');
            setStatus('error');
            return;
        }

        try {
            await axios.post('http://localhost:3000/api/feedback/submit', {
                name,
                email,
                message,
            });
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            setStatus('error');
            setErrorMsg('Şu anda sistemde bakım olabilir. Lütfen daha sonra tekrar deneyin.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4 py-16 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10">
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="bg-white rounded-2xl p-8 shadow-md"
                >
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                        <MessageSquare className="text-blue-500" />
                        Geri Bildirim
                    </h2>

                    <div className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Adınız"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="E-posta"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                            <textarea
                                placeholder="Mesajınız"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none min-h-[120px]"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-blue-700"
                        >
                            Gönder
                        </motion.button>

                        {status === 'success' && (
                            <motion.div
                                className="text-green-600 text-sm mt-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                ✅ Geri bildiriminiz başarıyla gönderildi.
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                className="text-red-500 text-sm mt-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                ❌ {errorMsg}
                            </motion.div>
                        )}
                    </div>
                </motion.form>
            </div>
        </div>
    );
};
