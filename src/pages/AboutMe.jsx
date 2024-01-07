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
        <p>Software engineer with almost 4 years of professional experience on Android, Java, PostgreSQL, Groovy and Grails. 
           I also launched a full mobile android game as a personal project with thousands of downloads.
           After a career break where I focused on being a full time mom, I'm ready to resume my career.
           I'm looking for an environment where I can learn, be challenged, grow, build meaningful things and have fun.
        </p>
      </div>
    );
  }