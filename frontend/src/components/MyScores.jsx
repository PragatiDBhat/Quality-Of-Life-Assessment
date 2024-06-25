import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const MyScores = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await axios.get('http://localhost:8080/scoredisplay');
                setScores(response.data);
            } catch (error) {
                console.error('Error fetching scores:', error);
            }
        };

        fetchScores();
    }, []);

    const chartData = {
        labels: scores.map(score => score.time),
        datasets: [
            {
                label: 'Physical',
                data: scores.map(score => score.ph),
                backgroundColor: '#FF6384',
            },
            {
                label: 'Environmental',
                data: scores.map(score => score.eh),
                backgroundColor: '#36A2EB',
            },
            {
                label: 'Psychological',
                data: scores.map(score => score.mh),
                backgroundColor: '#FFCE56',
            },
            {
                label: 'Social',
                data: scores.map(score => score.sh),
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
        <div className="container mx-auto p-6" style={{ paddingTop: '100px', minWidth: '600px' }}>
            <h1 className="text-3xl font-bold mb-6">Domain Scores Over Time</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                {scores.length > 0 ? (
                    <div style={{ height: '400px' }}>
                        <Bar data={chartData} options={options} />
                    </div>
                ) : (
                    <p>No scores found for the authenticated user</p>
                )}
            </div>
        </div>
    );
};

export default MyScores;
