import React from 'react';
import Intention_Logo from '../img/Intention_Logo.png';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
  <nav class="nav-extended">

    <div class="nav-content">
      <ul class="tabs tabs-transparent">
      <Link to="/home" className="brand-logo center" ><img src={Intention_Logo} alt="Intention Logo" className="nav-logo"></img></Link>
        <li class="tab"><Link to="/instructions" className="item">HEALING CIRCLE</Link></li>
        <li class="tab"><Link to="/ask" className="item">HEALING REQUEST</Link></li>
        
      </ul>
    </div>
  </nav>
        </div>
    );
};

export default NavBar;