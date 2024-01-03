function Footer(props) {
  return (
    <footer>
      <a href={props.gitHubLink}>GitHub Repository</a>
      <a href={props.linkedinLink}>Linkedin</a>
    </footer>
  );
}

export default Footer;