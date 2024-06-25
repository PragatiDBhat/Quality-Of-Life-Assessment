import React,{useState, useEffect} from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import '../App.css';
import axios from 'axios';

const NonTeaching = () => {
    // Sample data for demonstration purposes
    const [overallData, setOverallData] = useState(null);
    const [genderWise, setGenderWise] = useState(null);
    const [typeWise,setTypeWise]=useState(null);
    useEffect(() => {
        const fetchOverallData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/average-scores-non-teaching');
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
                const response = await axios.get('http://localhost:8080/average-scores-non-teaching-gender-wise');
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
                const response = await axios.get('http://localhost:8080/average-scores-non-teaching-designation-wise');
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
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
                label: 'Female',
                data: genderWise && genderWise.female
                    ? [genderWise.female.averagePh, genderWise.female.averageEh, genderWise.female.averageMh, genderWise.female.averageSh]
                    : [0, 0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };


    const employeeData = {
        labels: ['Physical', 'Psychological', 'Environmental', 'Social'],
        datasets: [
            {
                label: 'Instructor',
                data: [
                    typeWise && typeWise.instructor ? typeWise.instructor.averagePh : 0,
                    typeWise && typeWise.instructor ? typeWise.instructor.averageEh : 0,
                    typeWise && typeWise.instructor ? typeWise.instructor.averageMh : 0,
                    typeWise && typeWise.instructor ? typeWise.instructor.averageSh : 0
                ],
                backgroundColor: '#FF6384',
            },
            {
                label: 'Foreman',
                data: [
                    typeWise && typeWise.foreman ? typeWise.foreman.averagePh : 0,
                    typeWise && typeWise.foreman ? typeWise.foreman.averageEh : 0,
                    typeWise && typeWise.foreman ? typeWise.foreman.averageMh : 0,
                    typeWise && typeWise.foreman ? typeWise.foreman.averageSh : 0
                ],
                backgroundColor: '#36A2EB',
            },
            {
                label: 'Assistant Instructor',
                data: [
                    typeWise && typeWise.asstinstructor ? typeWise.asstinstructor.averagePh : 0,
                    typeWise && typeWise.asstinstructor ? typeWise.asstinstructor.averageEh : 0,
                    typeWise && typeWise.asstinstructor ? typeWise.asstinstructor.averageMh : 0,
                    typeWise && typeWise.asstinstructor ? typeWise.asstinstructor.averageSh : 0
                ],
                backgroundColor: '#FFCE56',
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
                const response = await axios.get('http://localhost:8080/average-scores-non-teaching-designation-wise');
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
            <h1 className="text-3xl font-bold mb-6">Overall Health of Non-Teaching Staff</h1>
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
                <h2 className="text-xl font-bold mb-4">Domain Scores by Non-Teaching Role</h2>
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

export default NonTeaching;
