import React from 'react';

const UserInformation = () => {
  return (
    <div className='space-y-'>
      <div className="flex flex-col ">
        <div className="flex items-center space-x-2">
          <label htmlFor="name" className="text-gray-700 font-bold">Name:</label>
          <h2 className="text-black">Juan B. Dela Cruz</h2>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex items-center space-x-2">
          <label htmlFor="department" className="text-gray-700 font-bold">Department:</label>
          <h2 className="text-black">admin</h2>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex items-center space-x-2">
          <label htmlFor="date" className="text-gray-700 font-bold">Date:</label>
          <h2 className="text-black">
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
