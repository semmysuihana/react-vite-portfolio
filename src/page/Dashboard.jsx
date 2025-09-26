import './../App.css'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function CardItem({item}) {
  const sumProject = item.length;
  const navigate = useNavigate();
  
  const ObjData = [
    {
      title: "Project",
      sum: sumProject,
      link: "/project"
    }
  ];

  return (
    <>
      {ObjData.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Jumlah Project : {item.sum}</p>
            <div className="btn btn-primary" onClick={() => navigate(item.link)}>Lihat</div>
          </div>
        </div>
      ))}
    </>
  );
}

function Template({ObjectProject}) {
    const navigate = useNavigate();
    function Logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
    return(    
    <div className="container mt-4">

      <div className="header mb-4">
        <h2 className="text-center">Dashboard</h2>
      </div>
      <div className="btn btn-danger mb-3" onClick={Logout}>Logout</div>

      <div className="card-container">
        <div className="row">
          <CardItem item={ObjectProject} />
        </div>
      </div>
    </div>)
}
function Dashboard({ ObjectProject }) {

  return (
    <>
        <Template ObjectProject={ObjectProject} />
    </>
  );
}

export default Dashboard;

