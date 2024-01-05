import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const style = {
  backgroundColor: "#FEFFFE",
};

function App() {

  return (
    <>
      <Header />
      <main style={style} className="container">
        <Outlet />
      </main>
      <Footer 
        linkedinLink="https://www.linkedin.com/in/solangeindaco"
        gitHubLink="https://github.com/solangeindaco" 
      />
    </>
  )
}

export default App
