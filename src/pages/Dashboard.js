import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Ensure Dashboard.css is correctly linked

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <h2>Student Dashboard</h2>
                <button 
                    className="dashboard-button report-card-button" 
                    onClick={() => navigate('/report-card')}>
                    Student Report Card
                </button>
                <button 
                    className="dashboard-button gallery-button" 
                    onClick={() => navigate('/gallery')}>
                    College Gallery
                </button>
                <button 
                    className="dashboard-button events-button" 
                    onClick={() => navigate('/events')}>
                    Events & Circulars
                </button>
                <button 
                    className="dashboard-button quiz-button" 
                    onClick={() => navigate('/quiz')}>
                    Quiz Section
                </button>
                <button 
                    className="dashboard-button logout-button" 
                    onClick={() => navigate('/')}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
