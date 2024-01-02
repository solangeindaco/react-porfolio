import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  )
}

export default App
