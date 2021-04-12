import React,{useState} from 'react'



 

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
        <form action="" onSubmit={handleSubmit}>
               <div>
              <label for="username">username</label>
            
              <input type="text"
                value={userRegistration.usename}
                onChange={handleInput} name="username" id="username" required/>
              </div>

              <div>
              <label for="email">email:</label>
             
            
              <input type="text"
               value={userRegistration.email}
               onChange={handleInput} name="email" id="email" required/>
              </div>
              <div>
              <label for="phone">phone:</label>
            
             
              <input type="text" 
                value={userRegistration.phone}
                onChange={handleInput} name="phone" id="phone" required/>
              </div>
              <div>
              <label for="password">password</label>
            
            
              <input type="password"
                value={userRegistration.password}
                onChange={handleInput} name="password" id="password" required/>
              </div>
          
              
              <button type="submit">Registration</button>
              
              
      </form>
      
    )

    
    }



  
   
  
export default Loginbox;
