import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    loginClick(event){
        console.log(document.getElementById("inputLogin").value)
    }
    loginChange(event){
        console.log(event.target.value)
    }
    render() {
       
        return (
        
            <div className = "loginform">
             <p className = "welcomeText">Welcome</p>
              <input type = "text" placeholder = "Login" className = "loginform-login" id="inputLogin" onChange = {this.loginChange}/>
              <input type = "text" placeholder = "Password" className = "loginform-password"/>
              <div className = "loginform-buttons"> 
               <button className="loginform-buttonr" >Register</button>
               <button className="loginform-buttonl" onClick={this.loginClick}>Login</button>
              </div> 
             
            </div>
        );
    }
   }

export default LoginForm;