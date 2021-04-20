import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import styled from 'styled-components';

import {  NavLink } from '../Navbar/NavbarElements';


import {
  HeroContainer,
  HeroContent,
  HeroItems,
  //HeroH1,
  //HeroP,

  HeroBtn
}from './HeroElements';
import{
  BrowserRouter as Router
  
} from 'react-router-dom'

import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';


const Button = styled.button`
  background-color: black;
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
 
  color: #fff;
  transition: 0.2s ease-out;

  
`



const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
function sayHello() {
   
       
             
            
          
};
  

  return (
    
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
        <HeroBtn>Place Order</HeroBtn><br/>
       
        <Link to='loginform'>login</Link>
        </HeroItems>
      </HeroContent>
    
    </HeroContainer> 
    
  )
};

export default Hero;
