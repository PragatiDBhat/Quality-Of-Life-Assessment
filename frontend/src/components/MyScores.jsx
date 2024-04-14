import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../App.css';
const MyScores = () => {
    // Sample data for demonstration purposes
    const data = {
        labels: ['2022-04-10 08:00', '2022-04-10 12:00', '2022-04-11 08:00', '2022-04-11 12:00'],
        datasets: [
            {
                label: 'Physical',
                data: [30, 20, 25, 25],
                backgroundColor: '#FF6384',
            },
            {
                label: 'Environmental',
                data: [15, 25, 20, 18],
                backgroundColor: '#36A2EB',
            },
            {
                label: 'Psychological',
                data: [25, 22, 28, 30],
                backgroundColor: '#FFCE56',
            },
            {
                label: 'Social',
                data: [20, 28, 22, 25],
                backgroundColor: '#4BC0C0',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Date and Time',
                    color: '#333',
                    font: {
                        weight: 'bold',
                    },
                },
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Domain Score',
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
            <h1 className="text-3xl font-bold mb-6">Domain Scores Over Time</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default MyScores;
