import "./../App.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'
function Banner() {
  return (
    <section className="text-center bg-light py-5 hero">
  <div className="container">
    <h1 className="display-4 fw-bold">Portfolio</h1>
    <p className="lead">Explore my projects and skills</p>
  </div>
</section>

  )
}
function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActiveTab] = useState();
    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab("home");
        } else if (location.pathname === "/skills") {
            setActiveTab("skills"); 
        } else if (location.pathname === "/projects") {
            setActiveTab("projects");
        } else if (location.pathname === "/contact") {
            setActiveTab("contact");
        }
    }, [location.pathname]);
    const handleTabClick = (tab, path) => {
        setActiveTab(tab);
        navigate(path);
    }
    return (
        <>
        <Banner />
       <br />
      <ul className="nav nav-tabs justify-content-center sticky-tabs" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${active === "home" ? "active" : ""}`}
            onClick={() => handleTabClick("home", "/")}
          >
            <i className="fas fa-user"></i> Biodata
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${active === "skills" ? "active" : ""}`}
            onClick={() => handleTabClick("skills", "/skills")}
          >
            <i className="fas fa-cogs"></i> Skills
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${active === "projects" ? "active" : ""}`}
            onClick={() => handleTabClick("projects", "/projects")}
          >
            <i className="fas fa-project-diagram"></i> Project
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${active === "contact" ? "active" : ""}`}
            onClick={() => handleTabClick("contact", "/contact")}
          >
            <i className="fas fa-envelope"></i> Contact
          </a>
        </li>
      </ul>
        </>
    )
}
export default Header