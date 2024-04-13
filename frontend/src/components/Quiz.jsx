import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Data = [
  {
    domain: "Overall",
    id: "0",
    question: "Do you get the kind of support from others that you need?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],
    marks:0,
  },
  {
    domain: "Overall",
    id: "1",
    question:
      "How much do you need any medical treatment to function in your daily life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    domain: "Overall",
    id: "2",
    question: "How satisfied are you with your health?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    domain: "Physical",
    id: "3",
    question:
      "To what extent do you feel that physical pain prevents you from doing what you need to do?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    domain: "Physical",
    id: "4",
    question:
      "How much do you need any medical treatment to function in your daily life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    domain: "Psychological",
    id: "5",
    question: "How much do you enjoy life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    domain: "Psychological",
    id: "6",
    question: "To what extent do you feel your life to be meaningful?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    domain: "Psychological",
    id: "7",
    question: "How well are you able to concentrate?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    domain: "Environmental",
    id: "8",
    question: "How safe do you feel in your daily life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    domain: "Environmental",
    id: "9",
    question: "How healthy is your physical environment?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "10",
    question: "Do you have enough energy for everyday life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "11",
    question: "Are you able to accept your bodily appearance?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "12",
    question: "Have you enough money to meet your needs?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "13",
    question:
      "How available to you is the information that you need in your day-to-day life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "14",
    question:
      "To what extent do you have the opportunity for leisure activities?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "15",
    question: "How well are you able to get around?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "16",
    question: "How satisfied are you with your sleep?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "17",
    question:
      "How satisfied are you with your ability to perform your daily living activities?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "18",
    question: "How satisfied are you with your capacity for work?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "19",
    question: "How satisfied are you with yourself?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "20",
    question: "How satisfied are you with your personal relationships?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "21",
    question:
      "How satisfied are you with the support you get from your friends?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "22",
    question: "How satisfied are you with the conditions of your living place?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "23",
    question: "How satisfied are you with your access to health services?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "24",
    question: "How satisfied are you with your mode of transportation?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "25",
    question:
      "How often do you have negative feelings, such as blue mood, despair, anxiety, depression?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [checked, setChecked] = useState(undefined);
  const [score, setScore] = useState(0);
  const [prevSelectedIndex, setPrevSelectedIndex] = useState(undefined);
  const questions = [...Data];
  const question = questions[questionIndex];
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPrevSelectedIndex(undefined); // Reset prevSelectedIndex when question changes
  }, [questionIndex]);

  useEffect(() => {
    console.log(question);
  }, [question]);

  function handleSubmit() {
    let totalScore = 0;
    for (let i = 0; i < questions.length; i++) {
      totalScore += questions[i].marks;
    }
    setScore(totalScore);
    console.log("Total Score:", totalScore);
    // Navigate to result page
    navigate("/resultpage");
  }

  function onSelect(i) {
    setChecked(i);
    question.marks = question.options[i].score;
    console.log(question.marks);
  }

  function handleNext() {
    if (checked !== undefined) {
      setPrevSelectedIndex(checked);
      setChecked(undefined);
      setQuestionIndex((prevIndex) => Math.min(prevIndex + 1, Data.length - 1));
    } else {
      alert("Please select an option before moving to the next question.");
    }
  }

  function handlePrev() {
    setChecked(prevSelectedIndex);
    setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <div className="flex flex-col justify-center items-center gradientBg text-white py-10 px-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Quiz Title</h1>
        <p className="text-xl text-center mb-4">Question {questionIndex + 1} of {Data.length}</p>
        <div className="questions text-center text-black mb-8">
          <h4 className="text-2xl mb-4">{question.question}</h4>
          <ul key={question.id} className="list-unstyled">
            {question.options.map((q, i) => (
              <li key={i}>
                <button
                  className={`btn btn-light border border-white rounded-lg px-4 py-3 mb-3 w-64 ${
                    checked === i || prevSelectedIndex === i ? "bg-primary text-white" : ""
                  }`}
                  value={false}
                  name="options"
                  id={`q${i}-option`}
                  onClick={() => onSelect(i)}
                >
                  <label className="text-lg" htmlFor={`q${i}-option`}>
                    {q.text}
                  </label>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttons flex justify-between mt-3 w-full max-w-sm">
          <button
            className="btnPrimary btn rounded-lg px-4 py-2 mb-3"
            onClick={handlePrev}
            disabled={questionIndex === 0}
          >
            Previous
          </button>
          {questionIndex === Data.length - 1 ? (
            <button
              className="btnPrimary btn rounded-lg px-4 py-2 mb-3"
              onClick={handleSubmit}
              disabled={checked === undefined}
            >
              Submit
            </button>
          ) : (
            <button
              className="btnPrimary btn rounded-lg px-4 py-2 mb-3"
              onClick={handleNext}
              disabled={checked === undefined}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;