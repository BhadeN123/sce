import React, { Component } from 'react'


const loginn=()=>
{
        return (
            <div>
                <input placeholder="enter email "type="text"></input><br/><br/>
                <input placeholder="enter password"type="password"></input><br/><br/>
                <button onclick={()=>this.loginn}>Login</button>
            </div>
        )
    
}
export default loginn;
