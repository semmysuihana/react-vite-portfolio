import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './page/Home.jsx'
import Skills from './page/Skills.jsx'
import Project from './page/Project.jsx'
import Contact from './page/Contact.jsx'
import { useState, useEffect } from 'react';
const ServerHost = "https://nodeapiportfolio-production.up.railway.app"

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
          
        } finally {
        }
      };
  
      fetchProjects();
    }, [ServerHost]); // ✅ tambahin dependency
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project ObjectProject={project} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
