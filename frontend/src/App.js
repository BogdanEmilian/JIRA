import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import WelcomeDashboard from './components/WelcomeDashboard';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/dashboard" element={<WelcomeDashboard username="John Doe" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
