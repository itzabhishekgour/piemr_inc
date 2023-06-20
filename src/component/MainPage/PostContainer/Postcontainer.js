import React, { Component } from 'react';
import "./Postcontainer.css";
import Post from "./Post";


class Postcontainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }
    getData=()=>{
        let json=[
            {
                "post_ID": 1,
                "user_id": 12345678,
                "user_img": "url...",
                "user_name": "Abhishek gour",
                "discription": "Share everyday moments with friends and family...",
                "post_img": "url of the image",

            },
            {
                "post_ID": 2,
                "user_id": 12345678,
                "user_img": "url...",
                "user_name": "Aastha tiwari",
                "discription": "Share everyday moments ..",
                "post_img": "",

            }
        ]
        this.setState({data:json});
    }
    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div>
            {
                this.state.data.map((item)=>(

               <Post object={item}/>
                ))
            }
              
            </div>
         );
    }
}
 
export default Postcontainer;