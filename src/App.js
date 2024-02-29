import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slidebar from "./Page_admin/Slidebar";
import FirstPage from "./Page_admin/FirstPage";
import MainPage from "./Page_admin/MainPage";
import Login from "./LoginWithGG/Login";
import Profile from "./Page_admin/Profile"
import SubjectTable from "./Page_admin/SubjectTable";
import EditSubject from "./Page_admin/EditSubject";
import ImportSubject from "./Page_admin/ImportSubject";
import ImportRoom from "./Page_admin/ImportRoom";
import UserAll from "./Page_admin/UserAll";
import AddUser from "./Page_admin/AddUser";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route
          path="/*"
          element={
            <div style={{ display: "flex" }}>
              <Slidebar /> {/* แสดง Sidebar ทุกๆ หน้า */}
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
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
