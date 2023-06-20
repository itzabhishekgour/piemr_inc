import React, { Component } from 'react';
import "./SignUp.css";
import {storage,auth} from "../../firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Grid, Paper, setRef } from '@mui/material';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			signIN : true,

            signin_email: null,
            signin_password :null,
			
            emailId : null,
            name: null,
            // enroll: null,
            password: null

         }
    }

	switchPanel=()=>{
		if(this.state.signIN)
			this.setState({signIN: false});
			else
			this.setState({signIN: true});
	};

    newSignUp=()=>{
        const auth= getAuth();
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            // Signed in 
           const user = userCredential.user;
            
            let payload = {
                "userID": user.uid,
                "userName": this.state.name,
                "userImage": "www.dummyurl.com"
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            }

            fetch("http://localhost:8080/api/userService/save",requestOptions)
            .then(response => response.json())
            .then(data => {
                const user = userCredential.user;
                localStorage.setItem("users",JSON.stringify(user));
                window.location.reload();
            })
            .catch(error =>{

            })

          
        })

        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }


    SigninMethod=async()=>{
       const auth= getAuth();
    signInWithEmailAndPassword(auth, this.state.signin_email, this.state.signin_password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
        localStorage.setItem("users",JSON.stringify(user));
        window.location.reload();
    
     })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     });
    }

    render() { 
        return ( 
            
			
     <Grid>
                {
                    this.state.signIN == true ?
                    <div className='ful'>
                <div className='box'>

                <Paper  id="loginform"  autoComplete="off"> 

                <h2>Sign in</h2>

                <div className="inputBox">
                    <input onChange={(event)=>{this.state.signin_email =event.currentTarget.value;}} type="text" required="required" />
                    <span>Username</span>
                    <i></i>
                </div>

                <div className="inputBox">
                    <input onChange={(event)=>{this.state.signin_password=event.currentTarget.value;}} type="password"   required="required"/>
                    <span>Password</span>
                    <i></i>
                </div>

                <div className="links">
                    {/* <a href="#">Forgot Password ?</a> */}
                  
                    <button className='login_createnew' onClick={this.switchPanel} >Signup</button>

                </div>

                <center><button className='singin2'  onClick={this.SigninMethod}>Signin
                </button></center>
                



                </Paper> 
                </div>
                </div>



:




			<div className='newAccContainer'>

    <div className='Wrapper'>
  
  
	<Paper id="loginform" >
    <div className='newAccForm'>
	  <h1>Register</h1>
                
				<div className='inputBox'><input className="logipage__text" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} type="text" placeholder="Email" />
				<span>Email</span>
				<i></i>
				</div>
				<div className='inputBox'><input className="logipage__text" onChange={(event)=>{this.state.name=event.currentTarget.value;}} type="text" placeholder="Full Name" />
				<span>Name</span>
				<i></i>
				</div>
				{/* <div className='inputBox'><input className="logipage__text" onChange={(event)=>{this.state.enroll=event.currentTarget.value;}} type="text" placeholder="Enrollment" />
				<span>Enrollment</span>
				<i></i>
				</div> */}
				<div className='inputBox'><input className="logipage__text" onChange={(event)=>{this.state.password=event.currentTarget.value;}} type="password"  />
                <span>Password</span>
				<i></i>
				</div>
				<button onClick={this.switchPanel}className='Xmark'>X</button>
				<button className="login__button" onClick={this.newSignUp} >Sign up</button>
            </div>
            </Paper>
			</div>
			</div>

}


</Grid>
         );
    }
}
 
export default SignUp;