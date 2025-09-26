import './../App.css'
import {useLocation, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Editor} from "@tinymce/tinymce-react";

function FormProject({ HostName, projectEdit }) {
  const [title, setTitle] = useState(projectEdit.name || '');
  const [link, setLink] = useState(projectEdit.link || '');
  const [content, setContent] = useState(projectEdit.text || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log(content)
    try {
      const res = await fetch(`${HostName}/project/${projectEdit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title,
          content,
          link
        })
      });
      if (!res.ok) throw new Error('Gagal mengupdate project');
      alert('Project berhasil diupdate!');
    } catch (err) {
      console.error(err);
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="link" className="form-label">Link</label>
        <input type="text" className="form-control" id="link" value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">Content</label>
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
            tinycomments_author: 'Author name here',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant'))
          }}
          value={content}
          onEditorChange={(content) => setContent(content)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  );
}

function EditProject({ServerHostName}) {
    const location = useLocation();
    const navigate = useNavigate();
    const projectEdit = location.state.project || {};
    return (
        <div className='container mt-4'>
            <div className='header mb-4'>
                <h2 className='text-center'>Edit Project</h2>
            </div>
             <div className='btn btn-primary m-3' onClick={() => navigate("/project")}> {"<"} Projects</div>
     
            <FormProject HostName={ServerHostName} projectEdit={projectEdit} />
        </div>
    )
}

export default EditProject