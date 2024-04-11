import React from 'react'
import Header,{Nav} from "./Header";
import AdList from './Adlist';

 function App() {

    const logo="logo.jpg";
    const links=["Login","Sign Up","About"];

    const advertisementsData = [
      {
        title: "Ad 1",
        description: "This is the first advertisement.",
        image: "https://via.placeholder.com/150",
        contact: "contact1@example.com",
      },
      {
        title: "Ad 2",
        description: "This is the second advertisement.",
        image: "https://via.placeholder.com/150",
        contact: "contact2@example.com",
      },
      {
        title: "Ad 3",
        description: "This is the third advertisement.",
        image: "https://via.placeholder.com/150",
        contact: "contact3@example.com",
      },
      {
        title: "Ad 4",
        description: "This is the fourth advertisement.",
        image: "https://via.placeholder.com/150",
        contact: "contact4@example.com",
      },
      {
        title: "Ad 5",
        description: "This is the fifth advertisement.",
        image: "https://via.placeholder.com/150",
        contact: "contact5@example.com",
      },
      {
        title: "Ad 6",
        description: "This is the sixth advertisement.",
        image: "https://via.placeholder.com/150",
        contact: "contact6@example.com",
      }
    ];  

    return (

        <div className="App">
          <Nav links={links} logo={logo}/>
            <div className='container-fluid bg-danger text-white text-left fs-4 p-5 py-5'>Marketplace UI!</div>
            <AdList adList={advertisementsData}/>
        </div>
        
    );
  }
export default App;
