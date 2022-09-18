import React from "react";
import "./header.css";

import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
const Header = () => {
  return (
    
    <Nav fill variant="tabs" defaultActiveKey="/homePage">
   <Nav.Link>
        <NavLink to="/homePage" activeClassName="text-danger">MOVIES</NavLink>
      </Nav.Link>
      <Nav.Link>
        <NavLink to="/favourite" activeClassName="text-danger">Favourite</NavLink>
      </Nav.Link>
      <Nav.Link>
        <NavLink to="/exp" activeClassName="text-danger">Active</NavLink>
      </Nav.Link>
  </Nav>


  );
};

export default Header;
