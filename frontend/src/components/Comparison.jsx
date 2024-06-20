import '../App.css';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Comparison = () => {
    const [averageScores, setAverageScores] = useState({});
    const [recentScore, setRecentScore] = useState({});
    const [loading, setLoading] = useState(true);

    const formatScores = (scores) => {
        const formattedScores = {};
        for (const [key, value] of Object.entries(scores)) {
            formattedScores[key] = parseFloat(value).toFixed(2);
        }
        return formattedScores;
    };

    useEffect(() => {
        const fetchAverageScores = async () => {
            try {
                const response = await axios.get('http://localhost:8080/average-scores');
                setAverageScores(formatScores(response.data));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching average scores:', error);
                setLoading(false);
            }
        };

        const fetchRecentScore = async () => {
            try {
                const response = await axios.get('http://localhost:8080/recent-score');
                setRecentScore(formatScores(response.data));
            } catch (error) {
                console.error('Error fetching recent score:', error);
            }
        };

        fetchAverageScores();
        fetchRecentScore();
    }, []);

    // Mapping abbreviations to full names for labels
    const domainLabels = {
        eh: 'Environmental Health Score',
        ph: 'Physical Health Score',
        mh: 'Psychological Health Score',
        sh: 'Social Health Score',
        total: "Total Health Score"
    };

    // Data for the comparison graph
    const data = {
        labels: Object.keys(averageScores).map(abbr => domainLabels[abbr] || abbr),
        datasets: [
            {
                label: 'Average Score',
                data: Object.values(averageScores),
                backgroundColor: '#FF6384',
            },
            {
                label: "User's Recent Score",
                data: Object.values(recentScore),
                backgroundColor: '#36A2EB',
            },
        ],
    };

    // Options for the comparison graph
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                stacked: false,
                max: 100,
                title: {
                    display: true,
                    text: 'Score',
                    color: '#333',
                    font: {
                        weight: 'bold',
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Domain',
                    color: '#333',
                    font: {
                        weight: 'bold',
                    },
                },
            },
        },
    };

    return (
        <div className="container mx-auto p-6" style={{ paddingTop: '100px' }}>
            <h1 className="text-3xl font-bold mb-6">Comparison of Average Score and User's Recent Score</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className='chart-container'>
                        <Bar data={data} options={options} />
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-bold mb-2">Scores Table</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Domain</th>
                                    <th>Average Score</th>
                                    <th>User's Recent Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(averageScores).map(([domain, avgScore]) => (
                                    <tr key={domain}>
                                        <td>{domainLabels[domain] || domain}</td>
                                        <td>{avgScore}</td>
                                        <td>{recentScore[domain]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Comparison;
