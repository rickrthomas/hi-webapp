import React from 'react';
import Intention_Logo from '../img/Intention_Logo.png';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
  <nav className="nav-extended">

    <div className="nav-content">
      <ul className="tabs tabs-transparent">
      <Link to="/" className="brand-logo center" ><img src={Intention_Logo} alt="Intention Logo" className="nav-logo"></img></Link>
        <li className="tab"><Link to="/instructions" className="item">SEND</Link></li>
        <li className="tab"><Link to="/disclaimer" className="item">REQUEST</Link></li>
        
      </ul>
    </div>
  </nav>
        </div>
    );
};

export default NavBar;