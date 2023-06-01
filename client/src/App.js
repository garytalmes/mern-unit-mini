import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { Header, Wrapper } from "./components"
import { HomePage, LoginPage, SignupPage } from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'


function App() {
  const [ currUser, setCurrUser ] = useState(null)

  const verifyUser = async() => {
    if( Cookies.get("auth-cookie") ){

      try {
        /* TODO: Write a fetch query to verify the user's cookie */
        
        const result = await query.json()
        if( result && result.status === "success" ){
          setCurrUser(result.payload)
        }
      } catch(err){
        if( !window.location.href.includes("/login") ){
          window.location.href = "/login"
        }
      }
    }
  }

  // TO DO: Complete the logout method. It should remove the current cookie and redirect the user to the login page
  const logout = () => {

  }

  useEffect(() => {
    verifyUser()
  }, [window.location.href])


  /* TODO:
    Implement React Routing for the necessary pages.
    Pass the currUser (see above) through as a prop to all pages except Signup.
    Pass the currUser and the logout method to the Header component
  */
  return (
    <BrowserRouter>
      <Wrapper>
        <Header  />
        <div className="pt-3 px-4">
          <Routes>
            
          </Routes>
        </div>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
