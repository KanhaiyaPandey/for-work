/* eslint-disable react/prop-types */


const Questions = ({ question }) => {
  return (
    <div className="question  bg-blue-500 p-4 text-white">
      <h2 className="text-xl">{question}</h2>
    </div>
  );
};

export default Questions;