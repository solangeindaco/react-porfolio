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
        <p> After completing an intensive Full Stack Web Development bootcamp at UC Berkeley Extension, 
            I'm eager to reenter the workforce and reignite my passion for coding. With nearly four years of prior experience as a software engineer, 
            my expertise lies in Java development, web application development, and Android mobile app development.
            During the bootcamp, I updated my skills by developing various web applications using JavaScript, React, Bootstrap, and Node.js, 
            and seamlessly deploying them on platforms like Heroku, Render, and Netlify. 
            I thrive in collaborative environments and effectively engage in online teamwork using GitHub and Slack. 
            Ready to contribute my expertise to innovative projects and teams.
        </p>
      </div>
    );
  }