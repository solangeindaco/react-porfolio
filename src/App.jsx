import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer 
        linkedinLink="https://www.linkedin.com/in/solangeindaco"
        gitHubLink="https://github.com/solangeindaco" 
        stackOverflowLink="https://stackoverflow.com/users/23214335/solange-indaco"
      />
    </div>
  )
}

export default App
