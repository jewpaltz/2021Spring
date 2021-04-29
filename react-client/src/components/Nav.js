//import LoginBadge from "./LoginBadge";
import { useState } from 'react';
import logo from '../logo.svg';
import {
    Link
  } from "react-router-dom";
function Nav() {

    const [isActive, setActive] = useState(false);

    return (
        <nav class="navbar container is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src={logo} className="App-logo" alt="logo" />            
            Ista-Gratitude
          </a>
      
          <a role="button" class={"navbar-burger " + (isActive ? 'is-active' : '')} aria-label="menu" aria-expanded="false" onClick={()=>  setActive( !isActive ) } >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div class={`navbar-menu ${isActive ? 'is-active' : ''}`} >
          <div class="navbar-start">

          <Link to="/feed" class="navbar-item" >Feed</Link>
          <Link to="/mywall" class="navbar-item" >My Wall</Link>
          <Link to="/Documentation"  class="navbar-item">Documentation</Link>
            
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <Link to="/about" class="navbar-item">
                  About
                </Link>

                <a class="navbar-item" href="jobs.html">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
          <Link to="/Shop"  class="navbar-item">Shop</Link>
            <div class="navbar-item">
              <login-badge />
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
