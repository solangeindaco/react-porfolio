import GitHubLink from "./GitHubLink";

const aStyle = {
  color: "#3D2B3D",
  margin: "0.5em 2em 0.5em 2em",
};

const style = {
  backgroundColor: "#AA6DA3",
};

function Footer(props) {
  return (
    <footer style={style} className="d-flex flex-row align-center justify-content-center align-items-center fixed-bottom">
      <div className="w-50 d-flex flex-row align-center justify-content-center align-items-center">
        <a href={props.linkedinLink} style={aStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
        <GitHubLink href={props.gitHubLink}/>
        <a href={props.stackOverflowLink} style={aStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stack-overflow" viewBox="0 0 16 16">
              <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z"/>
              <path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;