import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import '../App.css'; // Import your CSS file

const ResultPage = () => {
  const location = useLocation();
  const { domainScores, totalScore } = location.state || {};
  const [chartData, setChartData] = useState(null);

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

  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
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
          <div className="chart-container" style={{ width: "80%", height: "300px" }}>
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
      </div>
    </div>
  );
};

export default ResultPage;
