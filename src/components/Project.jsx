import GitHubLink from "./GitHubLink";

function Project(props) {
  return (
    <div className="col-5 card m-1">
      <a href={props.link}>
        <img className= "img-thumbnail" src={props.imagePath} alt={props.description} />
      </a>
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.technologies} </p>
        { (props.gitHubLink) ? <GitHubLink gitHubLink={props.gitHubLink} /> : null }
        
      </div>
   </div>
  );
}

export default Project;