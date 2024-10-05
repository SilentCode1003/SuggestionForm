import React from 'react';

const Suggestion = ({ formData, handleChange, maxCharacters, fields }) => {
  return (
    <div className='space-y-8'>
      <div className="flex flex-col space-y-1">
        <label htmlFor="q5" className="text-left self-start text-gray-700 font-bold">
          {fields.q5}
        </label>
        <textarea
          name="q5" 
          id="suggestion"
          value={formData.q5} 
          onChange={handleChange} 
          maxLength={maxCharacters} 
          className="h-[180px] text-[14px] bg-gray-100 w-full text-black p-2 border border-gray-300 rounded-lg shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 resize-none"
          placeholder="Your Suggestion" 
          rows="4"
          required
        />
        <div className="text-gray-400 text-[11px] text-right">
          {formData.q5.length}/{maxCharacters} characters 
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="q5" className="text-left self-start text-gray-700 font-bold">
          {fields.q6} 
        </label>
        <textarea
          name="q5" 
          id="suggestion"
          value={formData.q6}
          onChange={handleChange} 
          maxLength={maxCharacters}
          className="h-[180px] text-[14px] bg-gray-100 w-full text-black p-2 border border-gray-300 rounded-lg shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 resize-none"
          placeholder="Your Suggestion" 
          rows="4"
          required
        />
        <div className="text-gray-400 text-[11px] text-right">
        {formData.q5.length}/{maxCharacters} characters 
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="q5" className="text-left self-start text-gray-700 font-bold">
          {fields.q7} 
        </label>
        <textarea
          name="q5" 
          id="suggestion"
          value={formData.q7}
          onChange={handleChange} 
          maxLength={maxCharacters}
          className="h-[180px] text-[14px] bg-gray-100 w-full text-black p-2 border border-gray-300 rounded-lg shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 resize-none"
          placeholder="Your Suggestion" 
          rows="4"
          required
        />
        <div className="text-gray-400 text-[11px] text-right">
        {formData.q5.length}/{maxCharacters} characters 
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="q5" className="text-left self-start text-gray-700 font-bold">
          {fields.q8} 
        </label>
        <textarea
          name="q5" 
          id="suggestion"
          value={formData.q8}
          onChange={handleChange} 
          maxLength={maxCharacters}
          className="h-[180px] text-[14px] bg-gray-100 w-full text-black p-2 border border-gray-300 rounded-lg shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 resize-none"
          placeholder="Your Suggestion" 
          rows="4"
          required
        />
        <div className="text-gray-400 text-[11px] text-right">
        {formData.q5.length}/{maxCharacters} characters 
        </div>
      </div>

    </div>
  );
};

export default Suggestion;
