import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import '../App.css';

const OverallStudents = () => {
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
                label: 'BE',
                data: [28, 30, 25, 45],
                backgroundColor: '#FF6384',
            },
            {
                label: 'BBA',
                data: [30, 32, 28, 30],
                backgroundColor: '#36A2EB',
            },
            {
                label: 'BCA',
                data: [25, 28, 30, 40],
                backgroundColor: '#FFCE56',
            },
            {
                label: 'MTech',
                data: [25, 38, 30, 50],
                backgroundColor: '#4BC0C0',
            },
            {
                label: 'MCA',
                data: [35, 18, 40, 35],
                backgroundColor: '#FF5733',
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
        labels: ['Sem-1', 'Sem-2', 'Sem-3', 'Sem-4', 'Sem-5', 'Sem-6', 'Sem-7', 'Sem-8'],
        datasets: [
            {
                label: 'Physical',
                data: [30, 35, 32, 28, 25,43,25,36],
                borderColor: '#FF6384',
                fill: false,
            },
            {
                label: 'Environmental',
                data: [25, 30, 28, 25, 20,26,43,38],
                borderColor: '#36A2EB',
                fill: false,
            },
            {
                label: 'Psychological',
                data: [28, 32, 30, 30, 28,60,30,40],
                borderColor: '#FFCE56',
                fill: false,
            },
            {
                label: 'Social',
                data: [32, 28, 25, 28, 30,40,50,60],
                borderColor: '#4BC0C0',
                fill: false,
            },
        ],
    };

    return (
        <div className="container mx-auto p-6" style={{ paddingTop: '100px' }}>
            <h1 className="text-3xl font-bold mb-6">Overall Health of University Students</h1>
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

            {/* Card for Employee Type chart */}
            <div className="card1 bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-bold mb-4">Domain Scores by Degree</h2>
                <div className="chart-container2">
                    <Bar data={employeeData} options={options} />
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

export default OverallStudents;
