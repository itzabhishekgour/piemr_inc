import React, { Component } from 'react';
import "./LeftSide.css";
import { Avatar } from '@mui/material';
import Pic from "../../../images/268013286_3055247758037799_676271078749313041_n.jpg";

class LeftSide extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='LeftBar'>
                <div className="profile-img">
                    <img className='profile-pic3' src={Pic}/> 
                    <input type="file" id='uploadpic'/>
                    {/* <img className='profile-pic3' src="../../images/dp9.png" height="150px" width="150px" /> */}
                   
                
                </div>
                

                <div className='profil-info'>
                        <div className='pro-name'  >
                            Abhishek Gour
                        </div>

                        <div className='clg-name'  >
                            Prestige Institute Of Engineering & Managment Indore
                        </div>

                        <div className='clg_ID'>
                             <span>College ID :- </span>
                             51110103630
                        </div>

                        <div className='enroll_no'>
                            <span>Erollment No. :- </span>
                             0869CS201006
                        </div>
                </div>
          
          <div className='numbers'>
          
       
            
  
  
          </div>
        </div>
            
         );
    }
}
 
export default LeftSide;