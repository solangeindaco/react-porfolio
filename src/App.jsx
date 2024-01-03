import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main className="mx-3">
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
