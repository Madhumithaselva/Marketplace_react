import React, { Component } from 'react'
import Header from "./Header";

 class App extends Component {
  render() {
    return (

        <div>
            <Header/>
            <div className='container-fluid bg-danger text-white text-left fs-4 p-5 py-5'>Marketplace UI!</div>
        </div>
        
    )
  }
}
export default App;
