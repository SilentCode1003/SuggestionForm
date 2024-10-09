import React from "react";
import PropTypes from "prop-types";
import SpinnerComponent from "./Spinner";
import { VITE_API_KEY } from "../config";


const QuestionComponent = ({ formData, handleChange }) => {
  const [showOtherInput, setShowOtherInput] = React.useState(false);
  const [question, setQuestion] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("api/suggestionarea/active", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ APK: VITE_API_KEY }),
        });
        const data = await res.json();

        console.log(data);

        setQuestion(data.data);
      } catch (error) {
        console.log("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);
  const handleRadioChange = (event) => {
    const { value } = event.target;
    console.log(value);

    handleChange(event);
    setShowOtherInput(value === "Other");
  };

  return (
    <div className="flex flex-col space-y-3">
      <label
        htmlFor="suggestion"
        className="mb- text-left self-start text-gray-700 font-bold"
      >
        What area of the company does your suggestion relate to?
      </label>
      <div className="flex flex-col space-y-1">
        {loading ? (
          <SpinnerComponent loading={loading} />
        ) : (
          <>
            {question.map((area) => (
              <label
                key={area.name}
                className="flex items-center text-black text-[14px]"
              >
                <input
                  type="radio"
                  id={area.id}
                  name="suggestionareaname"
                  value={area.name}
                  checked={formData.suggestionareaname === area.name}
                  onChange={handleRadioChange}
                  className="mr-2"
                  required
                />
                {area.name}
              </label>
            ))}
          </>
        )}
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
            value={formData.other || ""}
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

QuestionComponent.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default QuestionComponent;
