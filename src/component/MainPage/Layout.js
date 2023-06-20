import { Grid } from '@mui/material';
import React, { Component } from 'react';
import LeftSide from './LeftSide-Panal/LeftSide';
import Postcontainer from './PostContainer/Postcontainer';
import "./Layout.css";
import RightSide from './RightSide-Panal/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='MAIN'>
                <Grid container>


                    <Grid item xs={3}>
                         <LeftSide/>
                    </Grid>


                    <Grid className='mid-contain' item xs={6}>
                          <Postcontainer/>        
                    </Grid>


                    <Grid item xs={3}>
                          <RightSide/>
                    </Grid>


                </Grid>
            </div>
         );
    }
}
 
export default Layout;