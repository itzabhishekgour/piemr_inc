import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import piemrlogo from "../../images/PIEMR-LOGO.png";
import Home from "../../images/home.svg";
import Direct from "../../images/messenger.svg";
import Market from "../../images/groups.svg";
import { Avatar } from '@mui/material';
import notice from "../../images/admanager.png";
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../firebase';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
     }
    SignOut=()=>{

 const auth = getAuth();
 signOut(auth).then(() => {
    localStorage.removeItem("users",JSON.stringify());
    window.location.reload();
}).catch((error) => {
  // An error happened.
  const errorCode = error.code;
    const errorMessage = error.message;
});
    }

    render() { 
        return ( 
            <div>
                <Grid container className='NAVBAR'>
                    <Grid item xs = {3} >
                        <div className="Navbar_left">
                            <img className="navbar_logo" src={piemrlogo} width="40px"/>
                            <input className="navbar_search" type="text" placeholder='Search Name'/>
                        </div>
                    </Grid>
                    <Grid item xs = {6}>
                       <div className="navbar_mid">
                          <div className='navbar-tab active'>
                                <img className="Home-btn" src={Home} height="35px" width="40px"/>
                          </div>
                          <div className='navbar-tab'>
                                <img className="direct-btn" src={Direct} height="35px" width="40px"/>
                          </div>
                          <div className='navbar-tab'>
                                <img className="market-btn" src={Market} height="35px" width="40px"/>
                          </div>
                       </div>
                    </Grid>
                    <Grid item xs = {3}>
                    <div className='navbar_right'>
                           <div>
                            <img className='notice' scr={notice} />
                           </div>
                            <div className='nav-r-tab'>
                                {/* <Avatar className='profile-pic5' src="../../images/dp9.png"  height="35px" width="40px"/> */}
                            </div>
                              <div className='profile_name' >Abhishek Gour</div>
                              <div className='lof' >
                              <button onClick={this.SignOut} className='signout'>Logout</button>
                               </div>
                    </div>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default NavBar;

