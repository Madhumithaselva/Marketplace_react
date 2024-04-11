import React, { Component } from 'react'
import Header,{Nav} from "./Header";

 function App() {

    const logo="logo.jpg";
    const links=["Login","Sign Up","About"];

    return (

        <div>
          <Nav links={links} logo={logo}/>
            <div className='container-fluid bg-danger text-white text-left fs-4 p-5 py-5'>Marketplace UI!</div>
        </div>
        
    );
  }
export default App;
