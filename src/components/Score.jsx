/* eslint-disable react/prop-types */
const Score = ({ score, totalQuestions }) => {
    return (
      <div className="score-container mt-8 p-4 bg-gray-100 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Your Score</h2>
        <p className="text-xl mb-6">
          You scored {score} out of {totalQuestions}!
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  };
  
  export default Score;