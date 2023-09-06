import React from 'react'
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container-fluid">
        <img src="https://th.bing.com/th/id/R.319df9aeee5e58edb0ef55c3df025a2e?rik=E631pAjlTVN5uA&riu=http%3a%2f%2fwww.barbecuechef.co.uk%2fimages%2fcook.png&ehk=gjhQ%2buR3ME4aUkUJWYlnxNimkG6QersaI5gF4xxo%2frU%3d&risl=&pid=ImgRaw&r=0"
            alt="loading"
            height="50px"
            />
            <Link className="navbar-brand" to="/">
                Simmero
            </Link>
            
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li classNmae="nav-item">
                        <Link className="nav-link" to="/Receipes">
                            Receipes
                        </Link>
                    </li>
                    <li classNmae="nav-item">
                        <Link className="nav-link" to="/Create">
                            Create
                        </Link>
                    </li>
                    <li classNmae="nav-item">
                        <Link className="nav-link" to="/Search">
                            Search
                        </Link>
                    </li>
                    {/* <li classNmae="nav-item">
                        <Link className="nav-link" to="/About">
                            About
                        </Link>
                    </li> */}
                </ul>
                <Link className="btn btn-warning mx-1"to="/login">
                    Login
                </Link>
                <Link className="btn btn-warning mx-1" to="/signup">
                    Signup
                </Link>
            </div>
        </div>

    </nav>
    </>
  )
}

export default Navbar