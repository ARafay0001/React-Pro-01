
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.jsx" 
import Project from "./pages/Project.jsx" 
import Agence from "./pages/Agence.jsx" 
import NavBar from './components/NavBar.jsx'
import NavMenu from './components/NavMenu.jsx'

function App() {
  return (
    <>


      <div>
      
      <NavBar />
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
       </div>
    </>
  )
}

export default App
