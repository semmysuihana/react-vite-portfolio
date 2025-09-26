import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./page/Home.jsx";
import Skills from "./page/Skills.jsx";
import Project from "./page/Project.jsx";
import Contact from "./page/Contact.jsx";
import Login from "./page/Login.jsx";
import Dashboard from "./page/Dashboard.jsx";
import Projects from "./page/Projects.jsx";
import AddProject from "./page/AddProject.jsx";
import EditProject from "./page/EditProject.jsx";

const ServerHost = "https://nodeapiportfolio-production.up.railway.app";

// Wrapper buat proteksi
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${ServerHost}/project`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error("Error fetching project:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project ObjectProject={project} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login ServerHostName={ServerHost} />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard ObjectProject={project} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project"
          element={
            <ProtectedRoute>
              <Projects ObjectProject={project} ServerHostName={ServerHost} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-project/:id"
          element={
            <ProtectedRoute>
              <EditProject ServerHostName={ServerHost} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-project"
          element={
            <ProtectedRoute>
              <AddProject ServerHostName={ServerHost}/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
