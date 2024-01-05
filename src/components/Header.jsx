import Nav from "./Nav";

function Header() {
  return (
    <header style={{
      display: 'flex',
      fontFamily: 'helvetica',
      flexDirection: 'row',
      alignItems: 'flex-center',
      justifyContent: 'space-between',
      backgroundColor: '#E5FCF5',
    }}
    >
      <h1>Solange Indaco</h1>
      <Nav />
    </header>
  );
}

export default Header;