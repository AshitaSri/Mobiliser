// App.js
import React from 'react';
import RegistrationForm from './cand_reg';
//import ViewCandidates from "./cand_view/cand_view";
const App = () => {
  return (
    <div>
      {/* <h1>Registration Form</h1> */}
      {<RegistrationForm /> } 
      {/* {<ViewCandidates/>} */}
      
    </div>
  );
};

export default App;
