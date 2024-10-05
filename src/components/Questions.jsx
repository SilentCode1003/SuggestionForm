import React, { useState } from 'react';
import Choices from '../assets/Choices.json'; 

const Questions = ({ formData, handleChange }) => {
  const [showOtherInput, setShowOtherInput] = useState(false); 

  const handleRadioChange = (event) => {
    const { value } = event.target;
    handleChange(event);
    setShowOtherInput(value === "Other"); 
  };

  return (
    <div className="flex flex-col space-y-3">
      <label htmlFor="suggestion" className="mb- text-left self-start text-gray-700 font-bold">
        What area of the company does your suggestion relate to?
      </label>
      <div className="flex flex-col space-y-1"> 
        {Choices.map((area) => (
          <label key={area.value} className="flex items-center text-black text-[14px]">
            <input
              type="radio"
              id={area.value.toLowerCase()}
              name="areaOfCompany"
              value={area.value}
              checked={formData.areaOfCompany === area.value}
              onChange={handleRadioChange} 
              className="mr-2"
              required 
            />
            {area.label}
          </label>
        ))}
      </div>

      {showOtherInput && (
        <div className="mt-2">
          {/* <label htmlFor="other" className="text-left block text-gray-700 font-bold mb-1">
            Please specify:
          </label> */}
          <input
            type="text"
            id="other"
            name="other"
            value={formData.other || ''} 
            onChange={handleChange} 
            className=" text-[14px] bg-gray-100 w-full text-black p-2 border border-gray-300 rounded-lg shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 resize-none"
            placeholder="Specify other area"
            required={showOtherInput} 
          />
        </div>
      )}
    </div>
  );
};

export default Questions;
