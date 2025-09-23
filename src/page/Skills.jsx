import './../App.css'
import HeaderPage from './Header.jsx'

function CardSkills() {
  return(
    <div className="card mb-3">
      <div className='header m-4'>
        <h3 className="text-left">Skills</h3>
        <p className="text-left">Here are some of my technical skills and proficiencies:</p>
      </div>
      <div className='row no-gutters m-1'>
        <SkillsItem />
      </div>
    </div>
  )
}

function SkillsItem() {
  const Skills = [
  { name: "HTML", icon: "fab fa-html5 fa-3x mr-2" },
  { name: "CSS", icon: "fab fa-css3-alt fa-3x mr-2" },
  { name: "JavaScript", icon: "fab fa-js fa-3x mr-2" },
  { name: "React", icon: "fab fa-react fa-3x mr-2" },
  { name: "Node.js", icon: "fab fa-node fa-3x mr-2" },
  { name: "SQL", icon: "fas fa-database fa-3x mr-2" },
  { name: "PostgreSQL", icon: "fas fa-database fa-3x mr-2" },
  { name: "Flutter", icon: "fas fa-mobile-alt fa-3x mr-2" },
  { name: "Python", icon: "fab fa-python fa-3x mr-2" },
  { name: "Git", icon: "fab fa-git-alt fa-3x mr-2" },
  { name: "PHP", icon: "fab fa-php fa-3x mr-2" },
  { name: "Laravel", icon: "fab fa-laravel fa-3x mr-2" },
  { name: "API", icon: "fas fa-plug fa-3x mr-2" }
];


  return (
    <>
    <CardSkillsItem item={Skills} /> 
    </>
  )
}

function CardSkillsItem({item}) {

  return (
    <>
    <div className="row mb-3">
    {item.map((key) => (
    <div key={key} className="col-md-4">
      <div className="card card-skills p-3 mb-2 text-dark align-items-center">
        <i className={key.icon}></i>
        <h5>{key.name}</h5>
      </div>
    </div>
  ))}
    </div>
    </>

  )
}

function Skills() {
  return (
    <>
    <HeaderPage />
    <div className="container mt-4">
    <div className="header mb-4">
        <h2 className="text-center">Skills Information</h2>
      </div>
    <CardSkills />
    </div>
    </>
    
  )
}
export default Skills