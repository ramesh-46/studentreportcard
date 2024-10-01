import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ReportCard from './pages/ReportCard';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import QuizSection from './pages/QuizSection'; // Ensure this path is correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/report-card" element={<ReportCard />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/events" element={<Events />} />
                <Route path="/quiz" element={<QuizSection />} />
            </Routes>
        </Router>
    );
};

export default App;
