import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';


function Header() {

    const [hide, setHide] = useState(true)
    const [showMenu, setShowMenu] = useState(true)


    useEffect(()=>{
      if(window.innerWidth < 768 ){
        setHide(false)
      }
    })

    const toggleMenu = () => {
      if(showMenu){
        setShowMenu(false)
        var buttons = document.getElementsByClassName('menu-item')
        for (let button of buttons) {
          button.style.display = 'none'
       }
      }else{
        setShowMenu(true)
        var buttons = document.getElementsByClassName('menu-item')
        for (let button of buttons) {
          button.style.display = 'block'
       }
      }
    }

    return (
      <nav className="navbar fixed-top navbar-light bg-dark" style={{marginBottom : '300px'}}>
        <div className="w-100 d-flex flex-column flex-wrap">

          <div className="col-12 align-self-end text-center py-3">
            <h2 style={{color : 'white', fontSize : '1.5rem'}}>Real Estate in Russia</h2>
          </div>

          <div className="col-12 d-flex flex-row justify-content-center flex-wrap py-3">
            {
              !hide && (
              <button onClick={()=>toggleMenu()} className="col-md-2 col-8 px-3 py-0 mx-2 my-1 btn btn-light fw-bold">
                {
                  showMenu ? '=' : '+'
                }
              </button>
              )
            }
            
            <button id="menu-item" className="menu-item col-md-2 col-8 px-3 py-0 mx-2 my-1 btn btn-light fw-bold">
              <Link class="nav-link" to="/">Home<span class="sr-only"></span></Link>
            </button>
            <button id="menu-item" className="menu-item col-md-2 col-8 px-3 py-0 mx-2 my-1 btn btn-light fw-bold">
              <Link class="nav-link" to="/post-ad">Post Ad<span class="sr-only"></span></Link>
            </button>
            <button id="menu-item" className="menu-item col-md-2 col-8 px-3 py-0 mx-2 my-1 btn btn-light fw-bold"> 
              <Link class="nav-link" to="/login">Login<span class="sr-only"></span></Link>
            </button>
            <button id="menu-item" className="menu-item col-md-2 col-8 px-3 py-0 mx-2 my-1 btn btn-light fw-bold"> 
              <Link class="nav-link" to="/signup">Sign Up<span class="sr-only"></span></Link>
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Header
