import Nav from "./Nav";

const style = {
  fontFamily: 'helvetica',
  backgroundColor: '#E5FCF5',
}


function Header() {
  return (
    <header className ="h-50 d-flex flex-row align-center justify-content-around align-items-center" style={style}>
      <h1>Solange Indaco</h1>
      <Nav />
    </header>
  );
}

export default Header;