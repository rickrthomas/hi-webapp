import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
  <nav class="nav-extended">

    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><Link to="/" className="item">Projects</Link></li>
        <li class="tab"><Link to="/about" className="item">About</Link></li>
        <li class="tab"><Link to="/services" className="item">Services</Link></li>
        <li class="tab"><Link to="/store" className="item">Store</Link></li>
      </ul>
    </div>
  </nav>
        </div>
    );
};

export default NavBar;