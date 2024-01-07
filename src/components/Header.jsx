import Nav from "./Nav";

const style = {
  fontFamily: 'helvetica',
  backgroundColor: '#BBB5BD',
}


function Header() {
  return (
    <header className ="mb-20 h-50 d-flex flex-row align-center justify-content-around align-items-center" style={style}>
      <h1>Solange Indaco</h1>
      <Nav />
    </header>
  );
}

export default Header;