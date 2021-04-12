import React from 'react';


import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';





const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Welcome to Dominos</NavLink>
       
        
        <NavIcon onClick={toggle}>
         <p>Menu list</p>
         
          <Bars />
       
        </NavIcon>
      
      </Nav>
    
    </>
   
  );
};

export default Navbar;
