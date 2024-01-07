import Nav from "./Nav";

const style = {
  fontFamily: 'helvetica',
  backgroundColor: '#BBB5BD',
}

const nameStyle = {
  fontFamily: 'Marck Script',
  fontSize: '2.5em',
  color: '#3D2B3D',
} 


function Header() {
  return (
    <header className ="mb-20 p-2 d-flex flex-row align-center justify-content-around align-items-center" style={style}>
      <p style={nameStyle} >Solange Indaco</p>
      <Nav />
    </header>
  );
}

export default Header;