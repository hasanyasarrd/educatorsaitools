import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { FeedbackForm } from './components/FeedbackForm';
import { FeedbackPage } from './pages/FeedbackPage';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tools/:toolSlug" element={<ToolDetailPage />} />

                <Route path="/feedback" element={<FeedbackPage />} />


            </Routes>
        </BrowserRouter>
    );
};
