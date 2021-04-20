import React ,{useState}from 'react';
import styled from 'styled-components';
import menubox from './menu';
import{
  BrowserRouter as Router,Route
  
} from 'react-router-dom';
import{
 useHistory
  
} from 'react-router-dom';

import { Link } from 'react-router-dom';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
import { render } from 'react-dom';
const Button = styled.button`
 
background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 60px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
  
`;

const Sidebar = ({ isOpen, toggle }) => {
  

  return (
  
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='https://www.dominos.co.in/menu'>Pizzas</SidebarLink>
        <SidebarLink to='./'>Desserts</SidebarLink>
       
             <Link to={{pathname:'/menu'}}>menu</Link>
             
      
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
