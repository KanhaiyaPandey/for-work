/* eslint-disable react/prop-types */

import { useState } from "react";

const Options = ({ options, correctAnswer, handleAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      handleAnswer(option === correctAnswer);
    };
  
    return (
        <div className="options mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${
              selectedOption === option
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-blue-300'
            } p-2 rounded-md mr-2 mb-2 focus:outline-none`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
  
    );
  };
  
  export default Options;