import React from "react";
import TopInfo from "../components/TopInfo";
import UserInformation from "../components/UserInformation";
import QuestionComponent from "../components/Questions";
import Suggestion from "../components/Suggestion";
import TextInfo from "../assets/TextInfo.json";
import Bottom from "../components/Bottom";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

const DashboardPage = ({ employeeid, department, date, token }) => {
  // Destructure sessionData from props
  const [formData, setFormData] = React.useState({
    employeeid: "", // Use sessionData correctly
    suggestionareaname: "",
    suggestionareaid: "",
    details: [],
    APK: "",
  });

  const handleChange = (event) => {
    const { id, name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      suggestionareaid: id,
    }));
  };

  const addDetails = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => {
      const existingDetailIndex = prevData.details.findIndex(
        (detail) => detail.question === id
      );

      if (existingDetailIndex !== -1) {
        const updatedDetails = [...prevData.details];
        updatedDetails[existingDetailIndex] = {
          ...updatedDetails[existingDetailIndex],
          answer: value,
        };

        return {
          ...prevData,
          details: updatedDetails,
        };
      }

      return {
        ...prevData,
        details: [...prevData.details, { question: id, answer: value }],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.suggestionareaname) {
      toast.error("Please select an area of the company for your suggestion.");
      return;
    }

    if (formData.details.length === 0) {
      toast.error("Please add some details about your suggestion.");
      return;
    }

    formData.employeeid = employeeid;
    formData.APK = token;

    submitSuggestion(formData);
  };

  const submitSuggestion = async (data) => {
    try {
      const res = await fetch("api/suggestion/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();

      if (responseData.msg === "success") {
        toast.success("Thank you for sharing your suggestion!");
      } else {
        toast.warning(responseData.status);
      }
    } catch (error) {
      toast.error("An error occurred while submitting your suggestion.");
      console.log("Error fetching questions:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-blue-50 to-red-500 p-4">
      <div className="bg-white w-full max-w-lg p-5 rounded-lg shadow-xl space-y-10">
        <ToastContainer />
        <TopInfo />
        <UserInformation
          employeeid={employeeid}
          department={department}
          date={date}
        />
        <QuestionComponent formData={formData} handleChange={handleChange} />
        <Suggestion
          formData={formData}
          handleChange={addDetails}
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

DashboardPage.propTypes = {
  employeeid: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default DashboardPage;
