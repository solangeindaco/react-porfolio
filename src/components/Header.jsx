import Nav from "./Nav";

const style = {
  fontFamily: 'helvetica',
  backgroundColor: '#E5FCF5',
}


function Header() {
  return (
    <header className ="d-flex flex-row align-center justify-content-around" style={style}>
      <h1>Solange Indaco</h1>
      <Nav />
    </header>
  );
}

export default Header;