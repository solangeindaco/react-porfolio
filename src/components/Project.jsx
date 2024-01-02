function Project(props) {
  return (
     <div className="card">
     <a href={props.link}>
       <img className= "img-thumbnail" src={props.imagePath} alt={props.description} />
     </a>
     <div>
       <h3>{props.name}</h3>
       <p>{props.technologies} </p>
     </div>
   </div>
  );
}

export default Project;