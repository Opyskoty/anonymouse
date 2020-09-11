import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';


function Navigation(){
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/main">Posts</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;