import React from 'react'

function Header() {
    return (
      <nav className="navbar fixed-top navbar-light bg-dark">
        <div className="w-100 d-flex flex-row">
          <div className="container col-6 align-self-end">
            <h2 style={{color : 'white', fontSize : '2vw'}}>Real Estate in Russia</h2>
          </div>
          <div className="container col-6 d-flex flex-row justify-content-end ">
            <button className="px-3 py-0 mx-2 btn btn-light fw-bold">
              Button 1
            </button>
            <button className="px-3 py-0 mx-2 btn btn-light fw-bold">
              Button 2
            </button>
            <button className="px-3 py-0 mx-2 btn btn-light fw-bold"> 
              Button 3
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Header
