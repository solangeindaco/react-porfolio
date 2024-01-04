import Nav from "./Nav";

function Header() {
  return (
    <header style={{
      display: 'flex',
      fontFamily: 'helvetica',
      flexDirection: 'row',
      alignItems: 'flex-center',
      justifyContent: 'space-between',
      backgroundColor: '#697b7e',
    }}
    >
      <h1>Solange Indaco</h1>
      <Nav />
    </header>
  );
}

export default Header;