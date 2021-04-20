import React,{useState} from 'react'
import styled from 'styled-components';
import background from '../../images/pizza-3.jpg';




const Loginbox= () => {
    const[userRegistration,setUserRegistration]= useState(
        {
            username:"",
            email:"",
            phone:"",
            password:"",
    
        }
    );
    const[records,setRecords]=useState([]);

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUserRegistration({...userRegistration,[name]:value});
    }
    const handleSubmit=(e)=>{
    
    
    e.preventDefault();
const newRecord={...userRegistration, id :new Date().getTime().toString()}
console.log(records);
setRecords([...records,newRecord]);

setUserRegistration({username:"",email:"",phone:"",password:""})
    }
    return(
      <div class="logg" style={{height:10000,display:"flex",justifyContent:"center",backgroundImage:'url(${background})'}}>
        <form action="" onSubmit={handleSubmit} style={{background:'white',width:500,height:300,marginTop:100}}>
               <div>
              <label for="username">username:</label>&nbsp;&nbsp;
            
              <input type="text"
                value={userRegistration.usename}
                onChange={handleInput} name="username" id="username" required /><br /><br />
              </div>

              <div>
              <label for="email">email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
            
              <input type="text"
               value={userRegistration.email}
               onChange={handleInput} name="email" id="email" required/><br /><br />
              </div>
              <div>
              <label for="phone">phone:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
             
              <input type="text" 
                value={userRegistration.phone}
                onChange={handleInput} name="phone" id="phone" required/><br /><br />
              </div>
              <div>
              <label for="password">password</label>&nbsp;&nbsp;&nbsp;&nbsp;
            
            
              <input type="password" 
                value={userRegistration.password}
                onChange={handleInput} name="password" id="password" required/><br /><br />
              </div>
          
              
              <button type="submit">Registration</button>
              
              
      </form>
      </div>
      
    )

    
    }



  
   
  
export default Loginbox;
