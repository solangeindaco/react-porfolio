import GitHubLink from "./GitHubLink";

function Project(props) {
  return (
    <div className="col-5 card m-1">
      <a href={props.link}>
        <img className= "img-thumbnail" src={props.imagePath} alt={props.description} />
      </a>
      <div>
        <h3>{props.name}</h3>
        <p>{props.technologies} </p>
        <GitHubLink gitHubLink={props.gitHubLink} />
      </div>
   </div>
  );
}

export default Project;