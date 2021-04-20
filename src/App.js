import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import{Route,Switch}from 'react-router-dom';
import  Loginbox from './components/Hero/loginform';
import  menubox from './components/Sidebar/menu';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
      <Route exact path="/loginform" component={Loginbox}/>
      <Route exact path="/menu" component={menubox} />
             
      </Switch>
      <Hero />
      <Products heading='Veg Pizzza' data={productData} />
      <Feature />
      <Products heading='Sweets' data={productDataTwo} />
      <Footer />
      </
      Router>
       
       
      
    
  );
}

export default App;
