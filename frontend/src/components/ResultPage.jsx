import React, { useEffect, useState , useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import '../App.css'; // Import your CSS file

const ResultPage = () => {
  const location = useLocation();
  const { domainScores, totalScore } = location.state || {};
  const [chartData, setChartData] = useState(null);
  const [activeTab, setActiveTab] = useState("social"); // Active tab state
  const chartRef = useRef(null); // Reference to the chart instance
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
    }
  }, [domainScores]);
  useEffect(() => {
    // Ensure proper cleanup of chart instance
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" style={{ paddingTop: '100px' }}>
      <div className="flex flex-col justify-center items-center gradientBg text-white py-10 px-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Quiz Result</h1>
        <p className="text-xl text-center mb-4">Total Score: {totalScore}</p>
        <div className="domain-scores text-center text-black mb-8">
          <h3 className="text-2xl mb-4">Domain-wise Scores</h3>
          <ul className="list-unstyled">
            {Object.entries(domainScores || {}).map(([domain, score]) => (
              <li key={domain}>
                <p>
                  <strong>{domain}:</strong> {score}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {chartData && (
          <div className="chart-container" style={{ width: "80%", height: "200px" ,backgroundColor: '#ffffff', borderRadius: '10px', color: '#000000' }}>
            <Bar
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
         <div style={{ marginBottom: '20px' }}></div> 
        <div className="w-full bg-secondary border border-gray-200 rounded-lg shadow">
          <ul className="flex flex-wrap text-lg font-semibold text-center text-gray-900 border-b border-white rounded-t-lg bg-white" id="defaultTab" role="tablist">
            <li className="me-2">
              <button onClick={() => handleTabClick("social")} className={`inline-block p-4 hover:text-white hover:bg-secondary  ${activeTab === "social" ? "bg-secondary dark:white dark:text-primary" : ""} md:w-full`} role="tab" aria-selected={activeTab === "social"}>Social Health</button>
            </li>
            <li className="me-2">
              <button onClick={() => handleTabClick("environment")} className={`inline-block p-4 hover:text-white hover:bg-secondary ${activeTab === "environment" ? "bg-secondary dark:white dark:text-primary" : ""} md:w-full`} role="tab" aria-selected={activeTab === "environment"}>Environmental Health</button>
            </li>
            <li className="me-2">
              <button onClick={() => handleTabClick("physical")} className={`inline-block p-4 hover:text-white hover:bg-secondary ${activeTab === "physical" ? "bg-secondary dark:white dark:text-primary" : ""} md:w-full`} role="tab" aria-selected={activeTab === "physical"}>Physical Health</button>
            </li>
            <li className="me-2">
              <button onClick={() => handleTabClick("mental")} className={`inline-block p-4 hover:text-white hover:bg-secondary ${activeTab === "mental" ? "bg-secondary dark:white dark:text-primary" : ""} md:w-full`} role="tab" aria-selected={activeTab === "mental"}>Psychological Health</button>
            </li>
          </ul>
          <div className="p-4 bg-white rounded-lg md:p-8" id="defaultTabContent">
            <div className={`${activeTab === "social" ? "" : "hidden"}`} role="tabpanel">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Ways to Improve Social Health</h2>
              <p className="mb-3 text-gray-500">Fostering meaningful connections, engaging in community activities, actively listening, empathizing, and communicating openly with friends and family can improve social health.</p>
            </div>
            <div className={`${activeTab === "environment" ? "" : "hidden"}`} role="tabpanel">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Ways to Improve Environmental Health</h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">Reducing pollution, conserving natural resources, recycling, and adopting sustainable practices can contribute to improving environmental health.</p>
            </div>
            <div className={`${activeTab === "physical" ? "" : "hidden"}`} role="tabpanel">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Ways to Improve Physical Health</h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">Engaging in regular physical activity, maintaining a balanced diet, getting enough sleep, and avoiding harmful substances can help improve physical health.</p>
            </div>
            <div className={`${activeTab === "mental" ? "" : "hidden"}`} role="tabpanel">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Ways to Improve Psychological Health</h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">Practicing mindfulness, seeking therapy or counseling, maintaining a healthy work-life balance, and engaging in activities that bring joy and fulfillment can improve psychological health.</p>
            </div>
          </div>
        </div>
        <div className="exit-button">
          <Link to="/postlogin" className="btnPrimary btn rounded-lg px-6 py-3 mb-3 mt-15 gap-8">Exit</Link>
          <span style={{ marginRight: '10px' }}></span>
          <Link to="/postlogin/quiz" className="btnPrimary btn rounded-lg px-6 py-3 mb-3 mt-15 gap-8">Restart</Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;