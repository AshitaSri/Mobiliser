import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import Login from "./components/login";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import AdminHome from "./components/candidate_view";
import JustViewCandidate from "./components/just_view_cand";
import CandidateUpdate from "./components/update_cand";
import Mob_Home from "./Mobiliser/Mob_Home";



function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    
    <Router>
      <div className="App">
      
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route
            exact
            path="/sign-in"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/login-user" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path='/just-view-candidate' element={<JustViewCandidate/>} /> 
          <Route path ="/Home" element={<AdminHome/>}/>
          <Route path ="/candidate-update" element={<CandidateUpdate/>}/>
           
           <Route path ="/Mobiliser_Home" element={<Mob_Home/>}/> 

        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
