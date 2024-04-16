// PostLogin.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import { Explore } from './components/Explore';
import { Navbar2 } from './components/Navbar2';
import { About } from './components/About';
import  ResultPage from './components/ResultPage';
import OverallFaculty from './components/OverallFaculty';
import Teaching from './components/Teaching';
import NonTeaching from './components/NonTeaching';
import OfficeStaff from './components/OfficeStaff';
import Overall from './components/Overall';
import OverallStudents from './components/OverallStudents';
import BE from './components/BE';
import MTech from './components/MTech';
import BBA from './components/BBA';
import BCA from './components/BCA';
import MCA from './components/MCA';
import MyScores from './components/MyScores';
import Comparison from './components/Comparison';
import EditProfile from './components/EditProfile';
import Feedback from './components/Feedback';
import Graduate from './components/Graduate';
import Undergraduate from './components/Undergraduate';

// Import other post-login components here

function PostLogin() {
  return (
    <>
    <Navbar2 />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<About />} />
      <Route path="/quiz/resultpage" element={<ResultPage />} />
      <Route path="/overall" element={<Overall />}/>
      <Route path="/overallfaculty" element={<OverallFaculty />}/>
      <Route path="/teaching" element={<Teaching />}/>
      <Route path="/nonteaching" element={<NonTeaching />}/>
      <Route path="/officestaff" element={<OfficeStaff />}/>
      <Route path="/overallstudents" element={<OverallStudents />}/>
      <Route path="/graduate" element={<Graduate />} />
      <Route path="/undergraduate" element={<Undergraduate />} />
      {/* <Route path="/be" element={<BE />}/>
      <Route path="/mtech" element={<MTech />}/>
      <Route path="/bba" element={<BBA/>}/>
      <Route path="/bca" element={<BCA/>}/>
      <Route path="/mca" element={<MCA />}/> */}
      <Route path='/myscores' element={<MyScores/>}/>
      <Route path='/comparison' element={<Comparison />}/>
      <Route path='/editprofile' element={<EditProfile />}/>
      <Route path='/feedback' element={<Feedback />} />
    </Routes>
    </>
  );
}

export default PostLogin;
