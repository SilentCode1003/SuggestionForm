// import React from 'react';
import PropTypes from "prop-types";

const UserInformation = ({ employeeid, department, date }) => {
  // Destructure sessionData from props
  return (
    <div className="space-y-4">
      {" "}
      {/* Fixed the className, it was incomplete */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <label htmlFor="name" className="text-gray-700 font-bold">
            Employee ID:
          </label>
          <h2 className="text-black">{employeeid}</h2>{" "}
          {/* Fixed the property name */}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <label htmlFor="department" className="text-gray-700 font-bold">
            Department:
          </label>
          <h2 className="text-black">{department}</h2>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <label htmlFor="date" className="text-gray-700 font-bold">
            Date:
          </label>
          <h2 className="text-black">{date}</h2>
        </div>
      </div>
    </div>
  );
};

UserInformation.propTypes = {
  employeeid: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default UserInformation;
