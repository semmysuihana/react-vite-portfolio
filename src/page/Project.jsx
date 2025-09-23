import './../App.css'
import HeaderPage from './Header.jsx'


function CardProject({ item }) {
  return (
    <div className="container mb-4">
      <div className="header m-4">
        <h2 className="text-center">Project Information</h2>
      </div>
      <div className="row d-flex justify-content-center">
        {item.map((project, index) => (
          <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
            <div className="card shadow-sm card-project">
              <img src={project.img} className="card-img-top" alt="Project" />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
               <p
  className="card-text text-secondary"
  dangerouslySetInnerHTML={{
    __html:
      project.text.split(" ").length > 15
        ? project.text.split(" ").slice(0, 15).join(" ") + "..."
        : project.text
  }}
></p>

                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target={`#project${index}Modal`}
                >
                  Details
                </button>
              </div>
            </div>

            {/* Modal unique per project */}
            <div
              className="modal fade"
              id={`project${index}Modal`}
              tabIndex="-1"
              aria-labelledby={`project${index}ModalLabel`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id={`project${index}ModalLabel`}
                    >
                      {project.nameProject}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body" dangerouslySetInnerHTML={{
    __html:
      project.text
  }}>
                    
                    </div>
                  <div className="modal-footer">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit Project
                      </a>
                    )}
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// function CardData({ ServerName }) {
//   const [project, setProject] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch(`${ServerName}/project`);
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         setProject(data);
//       } catch (err) {
//         console.error("Error fetching project:", err);
        
//       } finally {
//       }
//     };

//     fetchProjects();
//   }, [ServerName]); // ✅ tambahin dependency

//   return <CardProject item={project} />;
// }



function Project({ObjectProject}) {
  return (
    <>
    <HeaderPage />
    <CardProject item={ObjectProject}/>
    </>
    
  )
}
export default Project