import './../App.css'
import HeaderPage from './Header.jsx'


function CardItem({ item }){
  const { img, head, title, text } = item;
  return (
    <div className="container mt-4">
      <div className="header mb-4">
        <h2 className="text-center">{head}</h2>
      </div>
       <div class="card mb-3">
            <div class="row no-gutters">
       <div class="col-md-4">
                <img src={img} class="img-fluid rounded-start" alt="Profile Picture"/>
              </div>
        <div class="col-md-8">
        <div className="card-body">
          <h5 className="card-title h2">{title}</h5>
          <p className="card-text">
                {text.map((list) => (
                  <p class="card-text">{list}</p>
                ))}
          </p>  
        </div>
        </div>
    </div>
      </div>
    </div>
  )
}

function CardAbout() {
  const aboutInfo = {
    img: "./../about.jpg",
    head: "About Me",
    title: "Introduction",
    text: ["I am a graduate of SMKN 1 Tarumajaya, Bekasi, where I specialized in Computer and Network Engineering.", "I pride myself on being diligent, honest, and meticulous in my work. Currently, I am pursuing a Bachelor's degree in Informatics Engineering at the Institut Teknologi dan Bisnis Swadharma in West Jakarta,","which I began in 2021 and continue to this day. I am passionate about technology and continuously seek to improve my skills and knowledge in the field.","My educational journey, coupled with my hands-on experience, has equipped me with a strong foundation in both hardware and software development. I am always eager to take on new challenges, learn from every opportunity, and contribute to meaningful projects."]
}
return (
    <>
    <CardItem item={aboutInfo} />
    </>
  )
}
function CardPersonal() {
  const personalInfo = {
    img: "./../biodata.jpeg",
    head: "Personal",
    title: "Personal Information",
    text: ["Name: Semmy Andrianto Suihana", "Date of Birth: 31 March 2004", "Email: sammysui372@gmail.com", "Phone: +6288976060088", "Location: Jakarta, Indonesian"],
  }
  return (
    <>
    <CardItem item={personalInfo} />
    </>
  )
}

function CardEducation() {
  const educationInfo = {
    img: "./../education.jpg",
    head: "Education",
    title: "Educational Background",
    text: [
      "Vocational High School", "Major: Computer and Network Engineering","School: SMKN 1 TARUMAJAYA","Graduation Year: 2020"
      ,"------------------------------------------------------------","Bachelor's Degree", "Major: Informatics Engineering","University: ITBS SWADHARMA","Graduation Year: 2025"
    ],
}
  return (
    <>
    
    <CardItem item={educationInfo} />
    </>
  )
}
function Home() {
  return (
    <>
    <HeaderPage />
    <CardPersonal />
    <CardAbout />
    <CardEducation />
    </>
    
  )
}
export default Home