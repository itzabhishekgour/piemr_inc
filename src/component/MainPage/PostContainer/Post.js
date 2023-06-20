import { Avatar, Paper } from '@mui/material';
import React, { Component } from 'react';
import "./Postcontainer.css";
import Postimg from "../../../images/post.jpeg";
import commentbtn from "../../../images/comment.png";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    isImageAvailble=(data)=>{
        return data=="" ? false:true;
    }
    render() { 
        return ( 
            <div>
                <Paper className='post_contain'>
                {/* header */}
                <div className='post_header'>
                    <div className='post_header_img'>
                        <Avatar className='post_img'/>
                    </div>
                    <div className='post_header_text'>
                       {this.props.object.user_name}
                    </div>
                </div>
                
                {/* description */}
                <div className='post_describe'>
                    {this.props.object.discription}
                </div>

                {/* images */}
                <div className='post_img'>
                {
                    this.isImageAvailble(this.props.object.post_img) ?  <img src={this.props.object.post_img} width="700px"/> : <span></span>
                }
                    
                </div>

                {/* comment */}
                <div className='post_comment'>
                    <div className='post_tab'>
                    <img className='post_tabing' src={commentbtn}/>
                      <div className='post_tabtext' >
                        comment
                      </div>
                    </div>
                </div>

                {/* commentBox */}

                <div className='uploadcom'>
                    <div>
                        <Avatar className='up' src={Postimg}/>
                    </div>
                    <div >
                        <input className='uploadbox' placeholder='What on your mind? type' type='text'/>
                    </div>
                </div>

                </Paper>
            </div>
         );
    }
}
 
export default Post;