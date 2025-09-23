import './../App.css'
import HeaderPage from './Header.jsx'

function FormContact() {
  return (
    <div className="container m-4">
      <h2>Contact</h2>
      <form
        action="https://formspree.io/f/xldraykv"
        method="POST"
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="_replyto" 
            placeholder="Enter your email" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            name="message" 
            rows="4" 
            placeholder="Your message" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  )
}

function Contact() {
  return (
    <>
      <HeaderPage />
        <FormContact />
    </>
  )
}

export default Contact
