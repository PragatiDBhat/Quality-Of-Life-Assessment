import React, {useState, useEffect} from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import '../App.css';
import axios from "axios";
const Teaching = () => {
    // Sample data for demonstration purposes
    const [overallData, setOverallData] = useState(null);
    const [genderWise, setGenderWise] = useState(null);
    const [typeWise,setTypeWise]=useState(null);
    useEffect(() => {
        const fetchOverallData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/average-scores-teaching');
                setOverallData(response.data);
            } catch (error) {
                console.error('Error fetching overall average scores:', error);
            }
        };

        fetchOverallData();
    }, []);

    useEffect(() => {
        const fetchGenderData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/average-scores-teaching-gender-wise');
                setGenderWise(response.data);
            } catch (error) {
                console.error('Error fetching gender-wise average scores:', error);
            }
        };

        fetchGenderData();
    }, []);
    useEffect(() => {
        const fetchTypeData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/average-scores-teaching-designation-wise');
                setTypeWise(response.data);
            } catch (error) {
                console.error('Error fetching gender-wise average scores:', error);
            }
        };

        fetchTypeData();
    }, []);
    const genderData = {
        labels: ['Physical', 'Environmental', 'Psychological', 'Social'],
        datasets: [
            {
                label: 'Male',
                data: genderWise && genderWise.male
                    ? [genderWise.male.averagePh, genderWise.male.averageEh, genderWise.male.averageMh, genderWise.male.averageSh]
                    : [0, 0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Female',
                data: genderWise && genderWise.female
                    ? [genderWise.female.averagePh, genderWise.female.averageEh, genderWise.female.averageMh, genderWise.female.averageSh]
                    : [0, 0, 0, 0],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };


    const employeeData = {
        labels: ['Physical', 'Psychological', 'Environmental', 'Social'],
        datasets: [
            {
                label: 'Professor',
                data: [
                    typeWise && typeWise.professor ? typeWise.professor.averagePh : 0,
                    typeWise && typeWise.professor ? typeWise.professor.averageEh : 0,
                    typeWise && typeWise.professor ? typeWise.professor.averageMh : 0,
                    typeWise && typeWise.professor ? typeWise.professor.averageSh : 0
                ],
                backgroundColor: '#FF6384',
            },
            {
                label: 'Professor and Head',
                data: [
                    typeWise && typeWise.professorandhead ? typeWise.professorandhead.averagePh : 0,
                    typeWise && typeWise.professorandhead ? typeWise.professorandhead.averageEh : 0,
                    typeWise && typeWise.professorandhead ? typeWise.professorandhead.averageMh : 0,
                    typeWise && typeWise.professorandhead ? typeWise.professorandhead.averageSh : 0
                ],
                backgroundColor: '#36A2EB',
            },
            {
                label: 'Assistant Professor',
                data: [
                    typeWise && typeWise.assistantprofessor ? typeWise.assistantprofessor.averagePh : 0,
                    typeWise && typeWise.assistantprofessor ? typeWise.assistantprofessor.averageEh : 0,
                    typeWise && typeWise.assistantprofessor ? typeWise.assistantprofessor.averageMh : 0,
                    typeWise && typeWise.assistantprofessor ? typeWise.assistantprofessor.averageSh : 0
                ],
                backgroundColor: '#FFCE56',
            },
            {
                label: 'Associate Professor',
                data: [
                    typeWise && typeWise.associateprofessor ? typeWise.associateprofessor.averagePh : 0,
                    typeWise && typeWise.associateprofessor ? typeWise.associateprofessor.averageEh : 0,
                    typeWise && typeWise.associateprofessor ? typeWise.associateprofessor.averageMh : 0,
                    typeWise && typeWise.associateprofessor ? typeWise.associateprofessor.averageSh : 0
                ],
                backgroundColor: '#4BC0C0',
            },
            {
                label: 'Teaching Assistant',
                data: [
                    typeWise && typeWise.teachingassistant ? typeWise.teachingassistant.averagePh : 0,
                    typeWise && typeWise.teachingassistant ? typeWise.teachingassistant.averageEh : 0,
                    typeWise && typeWise.teachingassistant ? typeWise.teachingassistant.averageMh : 0,
                    typeWise && typeWise.teachingassistant ? typeWise.teachingassistant.averageSh : 0
                ],
                backgroundColor: '#FF8C00',
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

    const [ageGroupData, setAgeGroupData] = useState(null);

    useEffect(() => {
        const fetchAgeGroupData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/average-scores-teaching-age-group');
                // Assuming the response data structure matches the given example
                // Sort the age groups by converting keys to an array, sorting them, and then reconstructing the object
                const sortedAgeGroups = Object.keys(response.data)
                    .sort((a, b) => {
                        // Define custom sorting logic based on age group strings
                        if (a === '<20') return -1;
                        if (b === '<20') return 1;
                        if (a === '>=60') return 1;
                        if (b === '>=60') return -1;
                        // For numeric ranges, parse the strings and compare
                        const rangeA = a.split('-');
                        const rangeB = b.split('-');
                        const numA = parseInt(rangeA[0], 10);
                        const numB = parseInt(rangeB[0], 10);
                        return numA - numB;
                    })
                    .reduce((sortedObj, key) => {
                        sortedObj[key] = response.data[key];
                        return sortedObj;
                    }, {});
                setAgeGroupData(sortedAgeGroups);
            } catch (error) {
                console.error('Error fetching age group-wise average scores:', error);
            }
        };

        fetchAgeGroupData();
    }, []);

    const ageData = {
        labels: Object.keys(ageGroupData || {}),
        datasets: [
            {
                label: 'Physical',
                data: Object.values(ageGroupData || {}).map(data => data.averagePh),
                borderColor: '#FF6384',
                fill: false,
            },
            {
                label: 'Environmental',
                data: Object.values(ageGroupData || {}).map(data => data.averageEh),
                borderColor: '#36A2EB',
                fill: false,
            },
            {
                label: 'Psychological',
                data: Object.values(ageGroupData || {}).map(data => data.averageMh),
                borderColor: '#FFCE56',
                fill: false,
            },
            {
                label: 'Social',
                data: Object.values(ageGroupData || {}).map(data => data.averageSh),
                borderColor: '#4BC0C0',
                fill: false,
            },
        ],
    };


    return (
        <div className="container mx-auto p-6" style={{ paddingTop: '100px' }}>
            <h1 className="text-3xl font-bold mb-6">Overall Health of Teaching Staff</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card for Pie chart */}
                <div className="card1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Overall Health Pie Chart</h2>
                    <div className="chart-container">
                    {overallData ? (
                            <Pie
                                data={{
                                    labels: ['Physical', 'Environmental', 'Psychological', 'Social'],
                                    datasets: [
                                        {
                                            data: [
                                                overallData['averagePh'], 
                                                overallData['averageEh'], 
                                                overallData['averageMh'], 
                                                overallData['averageSh'], 
                                            ],
                                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                                        },
                                    ],
                                }}
                            />
                        ) : (
                            <p>Loading...</p>
                        )}
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
                <h2 className="text-xl font-bold mb-4">Domain Scores by Teaching Role</h2>
                <div className="chart-container2">
                    <Bar data={employeeData} options={options} />
                </div>
            </div>

            {/* Card for Age Group chart */}
            <div className="card1 bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-bold mb-4">Domain Scores by Age Group</h2>
                <div className="chart-container2">
                    <Line data={ageData}  />
                </div>
            </div>
        </div>
    );
};

export default Teaching;
