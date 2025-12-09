import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.jsx"
import Home from "./pages/Home.jsx"
import Project1 from "./pages/Project 1.jsx"
import Project2 from "./pages/Project 2.jsx"
import Project3 from "./pages/Project 3.jsx"
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import '../src/assets/fonts/Arimo/static/Arimo-Regular.ttf'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
      </Routes>
    </Router>
  )
}

export default App
