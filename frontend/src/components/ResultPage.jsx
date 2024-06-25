import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../App.css"; // Import your CSS file

const ResultPage = () => {
  const location = useLocation();
  const { domainScores, totalScore } = location.state || {};
  const [chartData, setChartData] = useState(null);
  const [activeTab, setActiveTab] = useState("social"); // Active tab state
  const [scoresDomain, setScoresDomain] = useState([]); // Array to hold domain scores
  const chartRef = useRef(null); // Reference to the chart instance

  // Generate structured data for chart and scoresDomain
  useEffect(() => {
    if (domainScores) {
      const domainLabels = Object.keys(domainScores);
      const domainValues = Object.values(domainScores);

      const data = {
        labels: domainLabels,
        datasets: [
          {
            label: "Scores",
            backgroundColor: "rgba(255, 99, 132, 0.7)", // Lighter color with opacity
            borderColor: "rgba(255, 99, 132, 1)", // Border color for the bars
            borderWidth: 1,
            data: domainValues,
          },
        ],
      };

      setChartData(data);

      // Create scoresDomain array with domain names and scores
      const scoresDomainArray = domainLabels.map((domain, index) => ({
        domain,
        score: domainValues[index],
      }));

      setScoresDomain(scoresDomainArray);
    }
  }, [domainScores]);

  // Clean up chart instance on component unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  // Function to get quality of life message based on total score
  const getQualityOfLifeMessage = (score) => {
    if (score < 35) {
      return "Your Quality of Life needs to improve.";
    } else if (score >= 35 && score <= 70) {
      return "Your Quality of Life is good.";
    } else {
      return "Your Quality of Life is very good.";
    }
  };

  // Function to render suggestions based on domain and score
  const renderSuggestions = (domain) => {
    const domainScore = scoresDomain.find((item) => item.domain.toLowerCase() === domain.toLowerCase());

    if (domainScore) {
      const { score } = domainScore;

      switch (domain.toLowerCase()) {
        case "social":
          if (score < 35) {
            return [
              "Join local social clubs or groups to meet new people and build connections.",
              "Volunteer for community service to give back and engage with your community.",
              "Attend social events and gatherings to expand your social network.",
            ];
          } else if (score >= 35 && score <= 70) {
            return [
              "Maintain and nurture existing relationships by regularly connecting with friends and family.",
              "Participate in group activities and hobbies that interest you to foster new friendships.",
              "Practice open and honest communication to strengthen your social bonds.",
            ];
          } else {
            return [
              "Take leadership roles in social groups to develop your leadership skills.",
              "Mentor others to build their social skills and create a supportive community.",
              "Organize social events to connect more people and create a sense of community.",
            ];
          }
        case "environmental":
          if (score < 35) {
            return [
              "Start recycling at home to reduce waste and promote sustainability.",
              "Reduce single-use plastics by opting for reusable alternatives.",
              "Use public transportation more often to lower your carbon footprint.",
            ];
          } else if (score >= 35 && score <= 70) {
            return [
              "Use energy-efficient appliances to conserve energy and reduce your utility bills.",
              "Participate in local environmental clean-ups to keep your community clean and green.",
              "Educate others about environmental conservation and encourage them to adopt eco-friendly habits.",
            ];
          } else {
            return [
              "Advocate for environmental policies that promote sustainability and protect natural resources.",
              "Invest in renewable energy sources such as solar or wind power to reduce reliance on fossil fuels.",
              "Lead or join environmental organizations to take an active role in environmental protection.",
            ];
          }
        case "physical":
          if (score < 35) {
            return [
              "Start with light exercise routines such as walking or stretching to build your fitness gradually.",
              "Consult a nutritionist to create a healthy diet plan tailored to your needs.",
              "Ensure you get 7-8 hours of sleep each night to support your overall health.",
            ];
          } else if (score >= 35 && score <= 70) {
            return [
              "Engage in regular physical activity such as jogging, cycling, or swimming to stay fit.",
              "Maintain a balanced diet rich in fruits, vegetables, and lean proteins to fuel your body.",
              "Avoid harmful substances like tobacco and alcohol to protect your physical health.",
            ];
          } else {
            return [
              "Set new fitness goals to challenge yourself and improve your physical capabilities.",
              "Explore advanced exercise techniques or new sports to keep your workouts interesting.",
              "Consider professional athletic training to optimize your performance and prevent injuries.",
            ];
          }
        case "psychological":
          if (score < 35) {
            return [
              "Seek therapy or counseling to address any mental health concerns and get professional support.",
              "Practice mindfulness and meditation to reduce stress and improve your mental well-being.",
              "Engage in stress-relieving activities such as yoga, reading, or spending time in nature.",
            ];
          } else if (score >= 35 && score <= 70) {
            return [
              "Maintain a healthy work-life balance to ensure you have time for relaxation and leisure.",
              "Continue practicing mindfulness techniques to stay centered and calm.",
              "Stay connected with supportive friends and family who can offer emotional support.",
            ];
          } else {
            return [
              "Take up new hobbies and interests to keep your mind engaged and active.",
              "Mentor others in mental health practices to promote well-being in your community.",
              "Participate in mental health advocacy to raise awareness and support others.",
            ];
          }
        default:
          return [];
      }
    } else {
      return []; // Handle case where domain score is not found
    }
  };

  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" style={{ paddingTop: "100px" }}>
      <div className="flex flex-col justify-center items-center gradientBg text-white py-10 px-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Quiz Result</h1>
        <p className="text-xl text-center mb-4">{getQualityOfLifeMessage(totalScore)}</p>
        <p className="text-xl text-center mb-4">Total Score: {totalScore}</p>
        <div className="domain-scores text-center text-black mb-8">
          <h3 className="text-2xl mb-4">Domain-wise Scores</h3>
          <ul className="list-unstyled">
            {scoresDomain.map((item, index) => (
              <li key={index}>
                <p>
                  <strong>{item.domain}:</strong> {item.score}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {chartData && (
          <div className="chart-container" style={{ width: "80%", height: "200px", backgroundColor: "#ffffff", borderRadius: "10px", color: "#000000" }}>
            <Bar
              ref={chartRef}
              data={chartData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        )}
        <div style={{ marginBottom: "20px" }}></div>
        <div className="w-full bg-secondary border border-gray-200 rounded-lg shadow">
          <ul className="flex flex-wrap text-lg font-semibold text-center text-gray-900 border-b border-white rounded-t-lg bg-white" id="defaultTab" role="tablist">
            <li className="me-2">
              <button onClick={() => setActiveTab("social")} className={`inline-block p-4 hover:text-white hover:bg-secondary ${activeTab === "social" ? "bg-secondary dark:white dark:text-primary" : ""} md:w-full`} role="tab" aria-selected={activeTab === "social"}>
                Social Health
              </button>
            </li>
            <li className="me-2">
              <button onClick={() => setActiveTab("environment")} className={`inline-block p-4 hover:text-white hover:bg-secondary ${activeTab === "environment" ? "bg-secondary dark:white dark:text-primary" : ""} md:w-full`} role="tab" aria-selected={activeTab === "environment"}>
                Environmental Health
              </button>
            </li>
            <li className="me-2">
              <button onClick={() => setActiveTab("physical")} className={`inline-block p-4 hover:text-white hover:bg-secondary ${activeTab === "physical" ? "bg-secondary dark:white dark:text-primary" : ""} md:w-full`} role="tab" aria-selected={activeTab === "physical"}>
                Physical Health
              </button>
            </li>
            <li className="me-2">
              <button onClick={() => setActiveTab("mental")} className={`inline-block p-4 hover:text-white hover:bg-secondary ${activeTab === "mental" ? "bg-secondary dark:white dark:text-primary" : ""} md:w-full`} role="tab" aria-selected={activeTab === "mental"}>
                Psychological Health
              </button>
            </li>
          </ul>
          <div className="p-4 bg-white rounded-lg md:p-8" id="defaultTabContent">
            <div className={`${activeTab === "social" ? "" : "hidden"}`} role="tabpanel">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Ways to Improve Social Health</h2>
              {renderSuggestions("social").map((suggestion, index) => (
                <p key={index} style={{ color: "black" }}>
                  {suggestion}
                </p>
              ))}
            </div>
            <div className={`${activeTab === "environment" ? "" : "hidden"}`} role="tabpanel">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Ways to Improve Environmental Health</h2>
              {renderSuggestions("environmental").map((suggestion, index) => (
                <p key={index} style={{ color: "black" }}>
                  {suggestion}
                </p>
              ))}
            </div>
            <div className={`${activeTab === "physical" ? "" : "hidden"}`} role="tabpanel">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Ways to Improve Physical Health</h2>
              {renderSuggestions("physical").map((suggestion, index) => (
                <p key={index} style={{ color: "black" }}>
                  {suggestion}
                </p>
              ))}
            </div>
            <div className={`${activeTab === "mental" ? "" : "hidden"}`} role="tabpanel">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Ways to Improve Psychological Health</h2>
              {renderSuggestions("psychological").map((suggestion, index) => (
                <p key={index} style={{ color: "black" }}>
                  {suggestion}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="exit-button">
          <Link to="/postlogin" className="btnPrimary btn rounded-lg px-6 py-3 mb-3 mt-15 gap-8">
            Exit
          </Link>
          <span style={{ marginRight: "10px" }}></span>
          <Link to="/postlogin/quiz" className="btnPrimary btn rounded-lg px-6 py-3 mb-3 mt-15 gap-8">
            Restart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
