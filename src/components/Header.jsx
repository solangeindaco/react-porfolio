import Nav from "./Nav";

const style = {
  fontFamily: 'helvetica',
  backgroundColor: '#BBB5BD',
}

const nameStyle = {
  fontSize: '2em',
  color: '#3D2B3D',
} 


function Header() {
  return (
    <header className ="mb-20 p-2 d-flex flex-row align-center justify-content-around align-items-center" style={style}>
      <h1 style={nameStyle} >Solange Indaco</h1>
      <Nav />
    </header>
  );
}

export default Header;