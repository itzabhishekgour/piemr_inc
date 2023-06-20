import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import Avt from "../../../images/post.jpeg";
import "./RightSide.css";

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
         }
    }
    getData=()=>{
        let jsondata = [
            {
                "image": Avt,
                "text": "Akash Sharma"
            },
            {
                "image": Avt,
                "text": "Abhay Sharma"
            },
            {
                "image": Avt,
                "text": "Anand Gour"
            },
            {
                "image": Avt,
                "text": "Akash Sharma"
            },
            {
                "image": Avt,
                "text": "Abhay Sharma"
            },
            {
                "image": Avt,
                "text": "Akash Sharma"
            },
            {
                "image": Avt,
                "text": "Akash Sharma"
            },
            {
                "image": Avt,
                "text": "Abhay Sharma"
            }
        
        ]
        this.setState({data : jsondata});
    }
    componentDidMount(){
        this.getData();
    }

    render() { 
        return ( 
            <div className='Right_contain'>
                <div className='Right_header'>
                        Messages
                </div>
                <div className='Right_footer'>

                {
                    this.state.data.map( (item)=>(
                        <ImageLayout className="txts" image={item.image} text={item.text} />
                    ))
                }
                       
                </div>
            </div>
         );
    }
}
 
export default RightSide;