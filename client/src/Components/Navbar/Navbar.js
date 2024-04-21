import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-4">
        <div className="container-fluid">
          {/* <a className="navbar-brand" to="#">Navbar</a> */}
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5" aria-current="page" to="/" style={{color:"#FFFFFF"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" aria-current="page" to="/about" style={{color:"#FFFFFF"}}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" aria-current="page" to="/report" style={{color:"#FFFFFF"}}>Report</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" aria-current="page" to="/contact" style={{color:"#FFFFFF"}}>Contact</Link>
              </li>
            </ul>
            <div>
              <Link className="nav-link fs-4 text-danger" aria-current="page" to={props.users ? "/logout":"/login"} style={{color:"#FFFFFF"}}>{props.users ? "Logout" : "Login"}</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}