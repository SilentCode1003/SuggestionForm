import logo from '../assets/5Llogo.png';
import MockLogo from '../assets/react.svg';
import React, { useState } from 'react';
import suggestionsData from '../assets/TextInfo.json'; 

const TopInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        suggestion: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Suggestion Submitted:', formData);
        setFormData({ name: '', email: '', suggestion: '' });
    };

    return (
        <div >
            <div className="mb-4 text-center">
                <img src={logo} alt="Logo" className="w-[150px] mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">{suggestionsData.title}</h2>
            <p className="text-gray-600 mb-8 text-[12px] text-center">{suggestionsData.welcomeMessage}</p>
            <form onSubmit={handleSubmit} className="space-y-">
            </form>
        </div>

    );
};

export default TopInfo;
