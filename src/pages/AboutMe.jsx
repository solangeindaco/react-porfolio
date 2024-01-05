const photoStyle = {
    float: 'left',
    minHeight: '200px',
    minWidth: '200px',
    margin: '25px',
  };
export default function AboutMe() {
    return (
      <div>
        <h1>About Page</h1>
        <img style={photoStyle} src="./src/assets/images/me-photo.jpg" alt="Solange Indaco" />
        <p>Software engineer with almost 4 years of professional experience on Android, Java, PostgreSQL, Groovy and Grails. 
           I also launched a full mobile android game as a personal project with thousands of downloads.
           After a career break where I focused on being a full time mom, I'm ready to resume my career.
           I'm looking for an environment where I can learn, be challenged, grow, build meaningful things and have fun.
        </p>
      </div>
    );
  }