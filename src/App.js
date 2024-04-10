import React from 'react';
import Header,{Nav} from './Header';

const App = () => {

  const headerText = "Marketplace UI!";
  const pagePrimaryColor = "info";
  const logo= "logo.jpg";
  const links=["Login","Sign Up","About"];

  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className='container fluid'>
        <a className='navbar-brand' href="/logo">
          <img src={logo} width={75} alt={logo}/>
        </a>
        <div className='collapse navbar-collapse' id="collapsibleNavbar">
          <ul className='navbar-nav ml-auto'>
            {links.map((link,key)=>(
              <li className='nav-item' key={key}>
                <a className='nav-link' href={'/${link.toLowerCase()}'}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          </div>
          </div>
          </nav>
          <Header text={headerText} bgColor={pagePrimaryColor}/>
    </div>
  );
}
export default App;