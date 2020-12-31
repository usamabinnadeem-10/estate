import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
      <nav className="navbar fixed-top navbar-light bg-dark">
        <div className="w-100 d-flex flex-row">
          <div className="container col-6 align-self-end">
            <h2 style={{color : 'white', fontSize : '2vw'}}>Real Estate in Russia</h2>
          </div>
          <div className="container col-6 d-flex flex-row justify-content-end ">
            <button className="px-3 py-0 mx-2 btn btn-light fw-bold">
              <Link class="nav-link px-4" to="/">Home<span class="sr-only"></span></Link>
            </button>
            <button className="px-3 py-0 mx-2 btn btn-light fw-bold">
              <Link class="nav-link px-4" to="/post-ad">Post Ad<span class="sr-only"></span></Link>
            </button>
            <button className="px-3 py-0 mx-2 btn btn-light fw-bold"> 
              <Link class="nav-link px-4" to="/login">Login<span class="sr-only"></span></Link>
            </button>
            <button className="px-3 py-0 mx-2 btn btn-light fw-bold"> 
              <Link class="nav-link px-4" to="/signup">Sign Up<span class="sr-only"></span></Link>
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Header
