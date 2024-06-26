import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import '../App.css';

const MCA = () => {
    // Sample data for demonstration purposes
    const overallData = {
        labels: ['Physical', 'Environmental', 'Psychological', 'Social'],
        datasets: [
            {
                data: [30, 20, 25, 25],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    const genderData = {
        labels: ['Physical', 'Environmental', 'Psychological', 'Social'],
        datasets: [
            {
                label: 'Male',
                data: [40, 25, 30, 35],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Female',
                data: [35, 30, 28, 32],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    const employeeData = {
        labels: ['Physical', 'Psychological', 'Environmental', 'Social'],
        datasets: [
            {
                label: 'Computer Science',
                data: [28, 30, 25, 45],
                backgroundColor: '#FF6384',
            },
            {
                label: 'Electronics and Communication',
                data: [30, 32, 28, 30],
                backgroundColor: '#36A2EB',
            },
            {
                label: 'Electrical and Electronics',
                data: [25, 28, 30, 40],
                backgroundColor: '#FFCE56',
            },
            {
                label: 'Computer Science-AI',
                data: [25, 38, 30, 50],
                backgroundColor: '#4BC0C0',
            },
            {
                label: 'Mechanical',
                data: [35, 18, 40, 35],
                backgroundColor: '#FF5733',
            },
            {
                label: 'Bio-Technology',
                data: [22, 40, 30, 35],
                backgroundColor: '#FFD700',
            },
            {
                label: 'Automation and Robotics',
                data: [20, 35, 45, 25],
                backgroundColor: '#7FFF00',
            },
        ],
    };
    

    const options = {
        scales: {
            x: {
                stacked: false,
            },
            y: {
                stacked: false,
            },
        },
    };

    const ageData = {
        labels: ['Sem-1', 'Sem-2', 'Sem-3', 'Sem-4'],
        datasets: [
            {
                label: 'Physical',
                data: [30, 35, 32, 28],
                borderColor: '#FF6384',
                fill: false,
            },
            {
                label: 'Environmental',
                data: [25, 30, 28, 25],
                borderColor: '#36A2EB',
                fill: false,
            },
            {
                label: 'Psychological',
                data: [28, 32, 30, 30],
                borderColor: '#FFCE56',
                fill: false,
            },
            {
                label: 'Social',
                data: [32, 28, 25, 28],
                borderColor: '#4BC0C0',
                fill: false,
            },
        ],
    };

    return (
        <div className="container mx-auto p-6" style={{ paddingTop: '100px' }}>
            <h1 className="text-3xl font-bold mb-6">Overall Health of MCA Students</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card for Pie chart */}
                <div className="card1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Overall Health Pie Chart</h2>
                    <div className="chart-container">
                        <Pie data={overallData} />
                    </div>
                </div>
                
                {/* Card for Gender chart */}
                <div className="card1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Domain Scores by Gender</h2>
                    <div className="chart-container">
                        <Bar data={genderData} />
                    </div>
                </div>
            </div>

            {/* Card for Age Group chart */}
            <div className="card1 bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-bold mb-4">Domain Scores by Semester</h2>
                <div className="chart-container2">
                    <Line data={ageData}  />
                </div>
            </div>
        </div>
    );
};

export default MCA;
