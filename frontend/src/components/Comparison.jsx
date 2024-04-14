import '../App.css'
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Comparison = () => {
    // Sample data for demonstration purposes
    const averageScores = [25, 30, 28, 35]; // Sample average scores for each domain
    const userScores = [30, 32, 26, 40]; // Sample user's recent scores for each domain
    const domains = ['Physical', 'Environmental', 'Psychological', 'Social'];

    // Data for the comparison graph
    const data = {
        labels: domains,
        datasets: [
            {
                label: 'Average Score',
                data: averageScores,
                backgroundColor: '#FF6384',
            },
            {
                label: "User's Recent Score",
                data: userScores,
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
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className='chart-container'>
                <Bar data={data} options={options} />
                </div>
            </div>
            <div className="mt-6 table-container">
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
            {domains.map((domain, index) => (
                <tr key={index}>
                    <td>{domain}</td>
                    <td>{averageScores[index]}</td>
                    <td>{userScores[index]}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

        </div>
    );
};

export default Comparison;
