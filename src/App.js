
import './App.css';
// import LoginIndex from './component/Login/Login';
//  import LoginHome from './component/Login/Login';
// import LoginPage from './component/LoginPage/LoginPage';
import Layout from "./component/MainPage/Layout";
 import NavBar from "./component/NavBar/NavBar";
import SignUp from './component/SignUp/SignUp';
import Home from './Homepage/Home';

function App() {
  return (
    <div className="App">
       {/* <NavBar />
       <Layout />  */}
       
          {/* <LoginIndex />  */}
          {/* < SignUp /> */}

          {
          (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
          <SignUp/> : <Home/>
      }

      {/* {
        (localStorage.getItem("user")==undefined  ||  localStorage.getItem("users")== null)?
          <SignUp/> : <span><NavBar/><Layout/></span>
      } */}
      {/* <Home/> */}
      
    </div>
  );
}

export default App;
