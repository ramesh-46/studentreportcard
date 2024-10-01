// src/pages/Login.js

import React from 'react';
import { auth, googleProvider, facebookProvider, microsoftProvider } from '../firebase'; // Ensure firebase configuration is correct
import { signInWithPopup } from 'firebase/auth';
import './Login.css'; // Ensure Login.css is correctly linked

const Login = () => {
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            window.location.href = '/dashboard'; // Redirect after successful login
        } catch (error) {
            console.error("Error logging in with Google:", error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            window.location.href = '/dashboard'; // Redirect after successful login
        } catch (error) {
            console.error("Error logging in with Facebook:", error);
        }
    };

    const handleMicrosoftLogin = async () => {
        try {
            await signInWithPopup(auth, microsoftProvider);
            window.location.href = '/dashboard'; // Redirect after successful login
        } catch (error) {
            console.error("Error logging in with Microsoft:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Welcome to Student Report Card</h1>
                <p className="login-subtitle">Please log in to continue</p>
                <div className="login-button-container">
                    <button onClick={handleGoogleLogin} className="login-button google">
                        Login with Google
                    </button>
                    <button onClick={handleFacebookLogin} className="login-button facebook">
                        Login with Facebook
                    </button>
                    <button onClick={handleMicrosoftLogin} className="login-button microsoft">
                        Login with Microsoft
                    </button>
                </div>
                <p className="footer-text">
                    By logging in, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default Login;
