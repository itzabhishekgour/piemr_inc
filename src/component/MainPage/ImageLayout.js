import { Avatar } from '@mui/material';
import React, { Component } from 'react';

import "./Layout.css";

class ImageLayout  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='imgLayout_contain'>
                <div className='imglay'>
                    <Avatar className='avt' src={this.props.image}/>
                </div>
                <div className='imgText'>
                        {this.props.text}
                </div>
            </div>
         );
    }
}
 
export default  ImageLayout;