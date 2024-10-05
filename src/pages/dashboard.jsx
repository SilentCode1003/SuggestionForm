import React, { useState } from 'react';
import TopInfo from '../components/TopInfo';
import UserInformation from '../components/UserInformation';
import Questions from '../components/Questions';
import Suggestion from '../components/Suggestion';
import TextInfo from '../assets/TextInfo.json'; 
import Bottom from '../components/Bottom';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    areaOfCompany: '',
    q5: '', 
    q6: '',
    q7: '', 
    q8: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    if (!formData.areaOfCompany) {
      alert('Please select an area of the company for your suggestion.');
      return; 
    }
  
    console.log('Submitted Data:', formData);
    setFormData({
      areaOfCompany: '',
      q5: '', 
      q6: '',
      q7: '',
      q8: '',
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-blue-50 to-red-500 p-4">
      <div className="bg-white w-full max-w-lg p-5 rounded-lg shadow-xl space-y-10">
        <TopInfo />
        
        <UserInformation />
        <Questions formData={formData} handleChange={handleChange} />
        <Suggestion
          formData={formData}
          handleChange={handleChange}
          maxCharacters={500} 
          fields={TextInfo.fields} 
        />
        <button 
          onClick={handleSubmit} 
          className="mt-20 w-full bg-blue-500 text-white font-semibold text-lg px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-200"
        >
          {TextInfo.submitButton} 
        </button>

        <Bottom />
      </div>
    </div>
  );
};

export default Dashboard;
