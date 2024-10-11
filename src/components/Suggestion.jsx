import React from "react";
import PropTypes from "prop-types";
import { VITE_API_KEY } from "../config";
// import config from "../config";

const Suggestion = ({ formData, handleChange, maxCharacters }) => {
  const [suggestionquestion, setQuestions] = React.useState([]);
  const [textLengths, setTextLengths] = React.useState({});
  const handleTextChange = (e, id) => {
    const inputText = e.target.value;

    // Update formData for the corresponding question
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [id]: inputText,
    // }));

    // Update textLengths for the corresponding question
    setTextLengths((prevLengths) => ({
      ...prevLengths,
      [id]: inputText.length,
    }));
  };

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("api/suggestionquestion/active", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ APK: VITE_API_KEY }),
        });
        const data = await res.json();

        setQuestions(data.data);
      } catch (error) {
        console.log("Error fetching questions:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      {suggestionquestion.map((question) => (
        <div key={question.id} className="space-y-8">
          <div className="flex flex-col space-y-1">
            <>
              <label
                htmlFor={question.id}
                className="text-left self-start text-gray-700 font-bold"
              >
                {question.question}
              </label>
              <textarea
                id={question.id}
                name={question.question}
                value={formData.details.aswere}
                onChangeCapture={handleChange}
                onChange={(e) => {
                  handleTextChange(e, question.id);
                }}
                maxLength={maxCharacters}
                className="h-[180px] text-[14px] bg-gray-100 w-full text-black p-2 border border-gray-300 rounded-lg shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 resize-none"
                placeholder="Your Suggestion"
                rows="4"
                required
              />

              <div className="text-gray-400 text-[11px] text-right">
                {textLengths[question.id]}/{maxCharacters} characters
              </div>
            </>
          </div>
        </div>
      ))}
    </>
  );
};

Suggestion.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  maxCharacters: PropTypes.number.isRequired,
};

export default Suggestion;
