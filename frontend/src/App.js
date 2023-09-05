import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter , Routes, Route} from "react-router-dom"
// import Axios from 'axios'
import Home from './Components/Home'
import Create from './Components/Create'
// import About from './Components/About'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Search from './Components/Search'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
      
      <Route exact path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />    
        {/* <Route path="/about" element={<About />} /> */}
      <Route path="/create" element={<Create />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}


export default App