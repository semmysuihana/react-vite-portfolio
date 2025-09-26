import "./../App.css";
import { useState, useEffect } from "react";
import { Form, useNavigate, useSubmit } from "react-router-dom";
import {Editor} from "@tinymce/tinymce-react";

function FormProject({HostName}) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [content, setContent] = useState(""); // dari TinyMCE

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${HostName}/project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // kirim token JWT
        },
        body: JSON.stringify({
          title,
          content,
          link
        }),
      });

      if (!res.ok) throw new Error("Gagal menambah project");

      alert("Project berhasil ditambahkan!");
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input 
          type="text" 
          className="form-control" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <Editor
      apiKey='02s37h3ozvtpntgv3qvd5ke2bko18rcrmmm2tf9ed6dm4ab8'
      init={{
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Oct 9, 2025:
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'ai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        uploadcare_public_key: 'ea73fb07de9960cf3f68',
      }}
      onChange={(e) => setContent(e.target.getContent())}
      initialValue=""
    />
  
      </div>
      <div className="mb-3">
        <label className="form-label">Link</label>
        <input 
          type="text" 
          className="form-control" 
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

function AddProject({ServerHostName}) {
  const navigate = useNavigate(); 
    return (
        <>
            <div className="container mt-4">
                <div className="header mb-4">
                    <h2 className="text-center">Add Project</h2>
                    <div className='btn btn-primary m-3' onClick={() => navigate("/project")}> {"<"} Projects</div>
     
                    <FormProject HostName={ServerHostName} />
                </div>
            </div>
        </>
    );
}

export default AddProject;