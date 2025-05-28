import mePhoto from '../assets/images/me-photo.jpg';

const photoStyle = {
  borderRadius: "65px 65px 65px 65px",
  /* Adds shadow effec to the photo*/
  boxShadow: "5px 5px 5px #BBB5BD",
  /* Set line style of the border of the photo*/
  borderStyle: "solid",
   /* Set the width of the border of the photo*/
  borderWidth: "1px",
  /* Set the color of the border of the photo*/
  borderColor: "#BBB5BD",
}

export default function AboutMe() {
    return (
      <div className='d-flex flex-row align-items-center justify-content-betweem'>
        <div className="d-flex flex-column align-items-start">
          <h1>About Me</h1>
          <img style={photoStyle} className="w-25 h-25 rounded-circle" src={mePhoto} alt="Solange Indaco" />
        </div>
        <p> 
            Excited to take the next step in my return to the tech industry after a career break to care for my children. 
            I recently completed the Microsoft Leap Apprenticeship Program, where I had the opportunity to contribute 
            remotely to a cloud-based project, enhancing my skills in modern software development practices.
            Prior to that, I completed an intensive Full Stack Web Development bootcamp through UC Berkeley Extension,
            further expanding my technical toolkit. I bring nearly four years of professional experience as a software 
            engineer, with a foundation in Java, web application development, and Android mobile app development. 
            I'm now actively looking for new opportunities where I can bring my skills, experience, and fresh perspective
            to a collaborative engineering team.
        </p>
      </div>
    );
  }