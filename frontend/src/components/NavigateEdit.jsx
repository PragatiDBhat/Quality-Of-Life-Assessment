import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditprofileStudent from './EditprofileStudent';
import EditProfile from './EditProfile';

const NavigateEdit = () => {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const response = await axios.get('http://localhost:8080/gettype');
        setUserType(response.data);
      } catch (error) {
        console.error('Error fetching user type:', error);
      }
    };

    fetchUserType();
  }, []);

  return (
    <div>
      {userType === 'student' ? (
        <EditprofileStudent />
      ) : (
        <EditProfile />
      )}
    </div>
  );
};

export default NavigateEdit;
