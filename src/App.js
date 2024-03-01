import Slidebar from "./Page_admin/Slidebar";
import FirstPage from "./Page_admin/FirstPage";
import MainPage from "./Page_admin/MainPage";
import Profile from "./Page_admin/Profile"
import SubjectTable from "./Page_admin/SubjectTable";
import EditSubject from "./Page_admin/EditSubject";
import ImportSubject from "./Page_admin/ImportSubject";
import ImportRoom from "./Page_admin/ImportRoom";
import UserAll from "./Page_admin/UserAll";
import AddUser from "./Page_admin/AddUser";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginWithGG/Login";
import SidebarTeacher from './Page_teacher/SidebarTeacher';
import FirstTeacher from './Page_teacher/FirstTeacher';
import MainTeacher from './Page_teacher/MainTeacher';
import FormTeacher from './Page_teacher/FormTeacher';
import EditTeacher from './Page_teacher/EditTeacher';
import ProfileTeacher from "./Page_teacher/ProfileTeacher";
import SubjectTableTeacher from './Page_teacher/SubjectTableTeacher';
import LogoutTeacher from './Page_teacher/LogoutTeacher';


function App() {
  const [email ,setEmail] = useState('')
  const [stage ,setStage] = useState(null)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setEmail={setEmail} setStage={setStage} />} />
        {stage === 1 && <Route path="/FirstPage" element={<FirstPage email={email} />} />} {/* แสดง Sidebar สำหรับ Admin */}
        {stage === 0 && <Route path="/FirstTeacher" element={<FirstTeacher email={email} />} />} {/* แสดง Sidebar สำหรับ Teacher */}
        
        <Route
          path="/*"
          element=
            {
              <div style={{ display: "flex" }}>
              {stage === 1 && <Slidebar />} {/* แสดง Sidebar สำหรับ Admin */}
              {stage === 0 && <SidebarTeacher />} {/* แสดง Sidebar สำหรับ Teacher */}
              <Routes>
                {/* Admin Pages */}
                <Route path="/Profile" element={<Profile />} />
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/SubjectTable" element={<SubjectTable />} />
                <Route path="/EditSubject" element={<EditSubject />} />
                <Route path="/ImportSubject" element={<ImportSubject />} />
                <Route path="/ImportRoom" element={<ImportRoom />} />
                <Route path="/UserAll" element={<UserAll />} />
                <Route path="/AddUser" element={<AddUser />} />
                {/* Admin Pages */}
                <Route path="/MainTeacher" element={<MainTeacher />} />
                <Route path="/FormTeacher" element={<FormTeacher />} />
                <Route path="/EditTeacher" element={<EditTeacher />} />
                <Route path="/SubjectTableTeacher" element={<SubjectTableTeacher />} />
                <Route path="/ProfileTeacher" element={<ProfileTeacher />} />
                <Route path="/LogoutTeacher" element={<LogoutTeacher />} />

              </Routes>
            </div>
            } 
        />
      </Routes>
    </Router>
  );
}

export default App;