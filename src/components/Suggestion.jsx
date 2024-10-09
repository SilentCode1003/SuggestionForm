import React from "react";
import PropTypes from "prop-types";
import config from "../config/config";

const Suggestion = ({ formData, handleChange, maxCharacters }) => {
  const [suggestionquestion, setQuestions] = React.useState([]);



  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("api/suggestionquestion/active", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({APK: config.APK}),
        });
        const data = await res.json();

        console.log(data);

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
    <div className="space-y-8">
      <div className="flex flex-col space-y-1">
        {suggestionquestion.map((question) => (
          <>
            <label
              htmlFor="q5"
              className="text-left self-start text-gray-700 font-bold"
            >
              {question.question}
            </label>
            <textarea
              name={question.id}
              id={question.question}
              value={formData.details.aswere}
              onChangeCapture={handleChange}
              maxLength={maxCharacters}
              className="h-[180px] text-[14px] bg-gray-100 w-full text-black p-2 border border-gray-300 rounded-lg shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 resize-none"
              placeholder="Your Suggestion"
              rows="4"
              required
            />
          </>
        ))}
      </div>
    </div>
  );
};

Suggestion.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  maxCharacters: PropTypes.number.isRequired,
};

export default Suggestion;
