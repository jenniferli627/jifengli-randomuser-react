import React from "react";
import { Link } from "react-router-dom";
import '../pages/Dashboard.css'
import './Navbar.css'

//mb-0 means margin bottom 0
function Navbar(){
    return(
        <nav id="navbar" class="nav">
            <ul class="nav-list">
              <li>
              <Link to={'/'}>Landing</Link>
              </li>
              <li>
              <Link to={'/Dashboard'}>Dashboard</Link>
              </li>
              <li>
              <Link to={'/Profile'}>Profile</Link>
              </li>
            </ul>
          </nav>
    );
}

export default Navbar;