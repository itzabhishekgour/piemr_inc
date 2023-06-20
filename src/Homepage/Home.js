import React,{Component} from "react";
import Layout from "../component/MainPage/Layout";
import NavBar from "../component/NavBar/NavBar";
import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <Layout/>
            </div>
         );
    }
}
 
export default Home;