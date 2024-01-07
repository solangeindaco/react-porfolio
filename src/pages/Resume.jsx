import resumeFile from '../assets/files/solange_indaco_resume.pdf';

export default function Resume() {
    return (
      <div className="d-flex flex-column justify-content-start text-start">
        <h1>Resume</h1>
        <p>Download my &nbsp;
          <a href={resumeFile} download>
                resume
          </a> 
        </p>
        <h6>Front-end Proficiencies</h6>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        <h6>Back-end Proficiencies</h6>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>    
          </ul>
      </div>
    );
  }