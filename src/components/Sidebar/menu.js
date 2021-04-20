
import React from 'react';
import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import product4 from '../../images/pizza-3.jpg';
import product5 from '../../images/pizza-4.jpg';
import { FaFileExcel } from 'react-icons/fa';


const menubox=()=>{
  return(
    <div classname="hii" style={{background:'black',color: 'red' ,height:1000}}>
    <h1 style={{display:"flex",justifyContent:"center" ,color:'white'}}>Menu</h1>
    <div classname="inside" style={{color: 'red' ,height:100,background:'black'}}>
    <div classname="row1" >
    
        <img src={product1} style={{marginRight:60,width:220,marginTop:100,height:200}} alt="pic1"/>
        <img src={product2} style={{marginRight:60,width:220,marginTop:100,height:200}}/>
      
       <img src={product3} style={{marginRight:60,width:220,marginTop:100,height:200}}/>
       <img src={product4} style={{marginRight:60,width:220,marginTop:100,height:200}}/>
       <img src={product5} style={{marginRight:60,width:220,marginTop:100,height:200}}/>
       </div>
       <text style={{marginRight:200,color:'white',marginTop:50}}><b>Supreme Pizza</b></text>
       <text style={{marginRight:150,color:'white',marginTop:50}}><b>Hawaiian Paradise</b></text>
       <text style={{marginRight:150,color:'white',marginTop:50}}><b>Veggie Overload</b></text>
       <text style={{marginRight:200,color:'white',marginTop:50}}><b>Margherita</b></text>
       <text style={{marginRight:30,color:'white',marginTop:50}}><b>Chiken Pizza</b></text>
      
        
     <div classname="row2" style={{marginTop:100,height:300}}>
      
      <img src={sweet1} style={{marginRight:60,width:220,height:200}}/>
      <img src={sweet2} style={{marginRight:60,width:220,height:200}}/>
      <img src={sweet3} style={{marginRight:60,width:220,height:200}}/>
      </div>
      <text style={{marginRight:200,color:'white',marginTop:50}}><b>Brownie Bunch</b></text>
       <text style={{marginRight:150,color:'white',marginTop:50}}><b>Doughlicious</b></text>
       <text style={{marginRight:30,color:'white',marginTop:50}}><b>Caramel Wonder</b></text>
      
   
    </div>
  </div>
  );
}
export default menubox;
