import "./../App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CardProject({ item, onDelete }) {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item && item.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td
                dangerouslySetInnerHTML={{
                  __html:
                    project.text.split(" ").length > 15
                      ? project.text.split(" ").slice(0, 15).join(" ") + "..."
                      : project.text,
                }}
              ></td>
              <td>
                <a href={project.link} target="_blank" rel="noreferrer">Link</a>
              </td>
              {console.log(project)}
              <td className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  
                  onClick={() => navigate(`/edit-project/${project.id}`, { state: {project} })}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  onClick={() => setSelectedProject(project.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Delete */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Delete Project
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this project?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => onDelete(selectedProject)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects({ ObjectProject, ServerHostName }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Fungsi delete
  async function handleDelete(id) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${ServerHostName}/project/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete project");
      console.log("Deleted project", id);

      // bisa trigger reload data parent (fetch ulang)
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Delete failed!");
    }
  }

  return (
    <div className="container mt-4">
      <div className="header mb-4">
        <h2 className="text-center">Projects</h2>
      </div>
      <div className='btn btn-primary m-3' onClick={() => navigate("/dashboard")}>Dashboard</div>
      <div
        className="btn btn-primary m  -3"
        onClick={() => navigate("/add-project")}
      >
        Tambah Project
      </div>
      <CardProject item={ObjectProject} onDelete={handleDelete} />
    </div>
  );
}

export default Projects;
