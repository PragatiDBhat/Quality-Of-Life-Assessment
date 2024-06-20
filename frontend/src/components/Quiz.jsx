import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Data = [
  {
    domain: "Overall",
    id: "0",
    question: "How would you rate your quality of life?",
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
    domain: "Physical",
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
    domain: "Social",
    id: "4",
    question:
      "How comfortable do you feel when interacting with others??",
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
    domain: "Physical",
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
    domain: "Psychological",
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
    domain: "Environmental",
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
    domain: "Environmental",
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
    domain: "Environmental",
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
    domain: "Physical",
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
    domain: "Physical",
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
    domain: "Physical",
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
    domain: "Physical",
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
    domain: "Psychological",
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
    domain: "Social",
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
    domain: "Social",
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
    domain: "Environmental",
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
    domain: "Environmental",
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
    domain: "Environmental",
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
    domain: "Psychological",
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
  const [quizStarted, setQuizStarted] = useState(false); 
  useEffect(() => {
    setPrevSelectedIndex(undefined); // Reset prevSelectedIndex when question changes
  }, [questionIndex]);

  useEffect(() => {
    console.log(question);
  }, [question]);

  // function handleSubmit() {
  //   let domainScores = {};
  //   // Iterate through each question
  //   for (let i = 0; i < questions.length; i++) {
  //     const question = questions[i];
  //     // Add the marks to the corresponding domain
  //     if (!domainScores[question.domain]) {
  //       domainScores[question.domain] = 0;
  //     }
  //     domainScores[question.domain] += question.marks;
  //   }
    
  //   // Calculate total score
  //   let totalScore = 0;
  //   for (let i = 0; i < questions.length; i++) {
  //     totalScore += questions[i].marks;
  //   }
  
  //   // Navigate to result page and pass domain-wise scores and total score as props
  //   navigate("resultpage", { state: { domainScores, totalScore } });
  // }

//   function handleSubmit() {
//     const domainMinScores = {
//         Overall: 2,
//         Physical: 7,
//         Psychological: 6,
//         Social: 3,
//         Environmental: 8
//     };

//     const domainMaxScores = {
//       Overall:10,
//         Physical: 35,
//         Psychological: 30,
//         Social: 15,
//         Environmental: 40
//     };

//     let domainScores = {};
//     let domainCounts = {};
//     let totalScore = 0;

//     // Iterate through each question
//     for (let i = 0; i < questions.length; i++) {
//         const question = questions[i];
//         const domain = question.domain;

//         // Add the marks to the corresponding domain
//         if (!domainScores[domain]) {
//             domainScores[domain] = 0;
//             domainCounts[domain] = 0;
//         }
//         domainScores[domain] += question.marks;
//         domainCounts[domain]++;
//         totalScore += question.marks;
//     }

//     // Calculate percentage scores for each domain
//    // Calculate percentage scores for each domain
//    let domainPercentageScores = {};
//    for (const domain in domainScores) {
//        const domainScore = domainScores[domain];
//        const minScore = domainMinScores[domain];
//        const maxScore = domainMaxScores[domain];
//        const domainCount = domainCounts[domain];
   
//        // Convert score to percentage with two digits after the decimal point
//        const percentageScore = ((domainScore - minScore) / (maxScore - minScore)) * 100;
//        const formattedPercentage = parseFloat(percentageScore.toFixed(2)); // Limit to two digits after decimal
//        console.log(domainScore, domain);
//        console.log(formattedPercentage, domain);
//        domainScores[domain] = formattedPercentage; // Store formatted percentage score back to domainScores
   
//        domainPercentageScores[domain] = formattedPercentage; // Store formatted percentage score separately if needed
//    }
//    totalScore=((totalScore-26)/(104))*100;
//    const formatted=parseFloat(totalScore.toFixed(2));
//    totalScore=formatted;
//    const scoreData = {
//     eh: domainScores["Environmental"],
//     ph: domainScores["Physical"],
//     sh: domainScores["Social"],
//     mh: domainScores["Psychological"],
//     total: totalScore,
//   };

//   // Send the data to the backend
//   fetch("http://localhost:8080/score", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(scoreData),
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Navigate to result page and pass domain-wise scores and total score as props
//         navigate("resultpage", { state: { domainScores, totalScore} });
//       } else {
//         return response.text().then((text) => {
//           throw new Error(text);
//         });
//       }
//     })
//     .catch((error) => {
//       console.error("Error saving score:", error);
//       alert("There was an error saving your score. Please try again.");
//     });
// }

function handleSubmit() {
  const domainMinScores = {
    Overall: 2,
    Physical: 7,
    Psychological: 6,
    Social: 3,
    Environmental: 8
  };

  const domainMaxScores = {
    Overall: 10,
    Physical: 35,
    Psychological: 30,
    Social: 15,
    Environmental: 40
  };

  let domainScores = {};
  let totalScore = 0;

  // Iterate through each question
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const domain = question.domain;

    // Add the marks to the corresponding domain
    if (!domainScores[domain]) {
      domainScores[domain] = 0;
    }
    domainScores[domain] += question.marks;
    totalScore += question.marks;
  }

  // Calculate percentage scores for each domain
  let domainPercentageScores = {};
  for (const domain in domainScores) {
    const domainScore = domainScores[domain];
    const minScore = domainMinScores[domain];
    const maxScore = domainMaxScores[domain];
    
    // Ensure domainScore is at least minScore
    const adjustedScore = Math.max(domainScore, minScore);
    
    // Convert score to percentage
    const percentageScore = ((adjustedScore - minScore) / (maxScore - minScore)) * 100;
    const formattedPercentage = parseFloat(percentageScore.toFixed(2)); // Limit to two digits after decimal
    console.log(domainScore, domain);
    console.log(formattedPercentage, domain);
    domainScores[domain] = formattedPercentage; // Store formatted percentage score back to domainScores
  }
  
  // Calculate total score percentage
  totalScore = ((totalScore - 26) / 104) * 100;
  const formattedTotal = parseFloat(totalScore.toFixed(2));
  totalScore = formattedTotal;

  const scoreData = {
    eh: domainScores["Environmental"],
    ph: domainScores["Physical"],
    sh: domainScores["Social"],
    mh: domainScores["Psychological"],
    total: totalScore,
  };

  // Send the data to the backend
  fetch("http://localhost:8080/score", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scoreData),
  })
    .then((response) => {
      if (response.ok) {
        // Navigate to result page and pass domain-wise scores and total score as props
        navigate("resultpage", { state: { domainScores, totalScore } });
      } else {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }
    })
    .catch((error) => {
      console.error("Error saving score:", error);
      alert("There was an error saving your score. Please try again.");
    });
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
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" style={{ paddingTop: '100px' }}>
      {quizStarted ? ( // Conditionally render based on quiz start state
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
      ) : (
        <div className="flex flex-col justify-center items-center gradientBg text-white py-10 px-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Guidelines</h1>
          <ul className="text-xl text-center mb-4">
            <li>All questions are compulsory</li>
            <li>Select an option and click on next to go to the next question</li>
            <li>Click on previous to see the previous question</li>
          </ul>
          <button
            className="btnPrimary btn rounded-lg px-4 py-2 mb-3"
            onClick={() => setQuizStarted(true)} // Set quiz start state to true when clicked
          >
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;