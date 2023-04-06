import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login  from "./components/login";
import Signup  from "./components/signup";
import Navbar from "./components/navbar";
import Newnav  from './components/newnav';

function App() {

  if (!localStorage.getItem('token')){
    return (
      <>
        <Router>
          <Navbar/>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Login key="login" />}/>
                <Route exact path="/signup" element={<Signup key="signup" />}/>
              </Routes>
            </div>
        </Router>
      </>
    );
  }else{
    //think of the routes and the features to add
    return(
      <>
      <Router>
        <Newnav/>
          <div className="App">
            <Routes>
            </Routes>
          </div>
      </Router>
      </>
    );
  }
}

export default App;
