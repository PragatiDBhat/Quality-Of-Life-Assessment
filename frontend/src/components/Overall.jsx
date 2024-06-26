import React,{useState, useEffect} from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import '../App.css';
import axios from "axios";
const Overall = () => {
    // Sample data for demonstration purposes
    const [overallData, setOverallData] = useState(null);
    const [genderWise, setGenderWise] = useState(null);
    const [typeWise,setTypeWise]=useState(null);
    useEffect(() => {
        const fetchOverallData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/average-scores');
                setOverallData(response.data);
            } catch (error) {
                console.error('Error fetching overall average scores:', error);
            }
        };

        fetchOverallData();
    }, []);

    useEffect(() => {
        const fetchTypeData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/type-wise-average-scores');
                setTypeWise(response.data);
            } catch (error) {
                console.error('Error fetching gender-wise average scores:', error);
            }
        };

        fetchTypeData();
    }, []);
    useEffect(() => {
        const fetchGenderData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/gender-wise-average-scores');
                setGenderWise(response.data);
            } catch (error) {
                console.error('Error fetching gender-wise average scores:', error);
            }
        };

        fetchGenderData();
    }, []);

    // Check if genderWise data has loaded, and debug if necessary
    console.log('genderWise:', genderWise);

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
                data: genderWise && genderWise.Female // Correct case for 'Female'
                    ? [genderWise.Female.averagePh, genderWise.Female.averageEh, genderWise.Female.averageMh, genderWise.Female.averageSh]
                    : [0, 0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };


    const employeeData = {
        labels: ['Physical', 'Environmental', 'Psychological', 'Social'],
        datasets: [
            {
                label: 'Teacher',
                data: typeWise && typeWise.teacher
                    ? [typeWise.teacher.averagePh, typeWise.teacher.averageEh, typeWise.teacher.averageMh, typeWise.teacher.averageSh]
                    : [0, 0, 0, 0],
                backgroundColor: '#FF6384',
            },
            {
                label: 'Student',
                data: typeWise && typeWise.student
                    ? [typeWise.student.averagePh, typeWise.student.averageEh, typeWise.student.averageMh, typeWise.student.averageSh]
                    : [0, 0, 0, 0],
                backgroundColor: '#36A2EB',
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
                const response = await axios.get('http://localhost:8080/age-group-wise-average-scores');
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
            <h1 className="text-3xl font-bold mb-6">Overall Health</h1>
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
                                                overallData['ph'], 
                                                overallData['eh'], 
                                                overallData['mh'], 
                                                overallData['sh'], 
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
                <h2 className="text-xl font-bold mb-4">Domain Scores of Faculty and Students</h2>
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

export default Overall;
