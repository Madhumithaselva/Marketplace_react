import React from 'react';
import './Nav.css'

const Header = (props) => {
    return (
        <header className={`container-fluid bg-${props.bgColor ? props.bgColor : "secondary"} text-white py-5 mb-2`}>
            <h2>{props.text && props.text}</h2>
            <h2>{!props.text && "Default Header Text"}</h2>
        </header>
    );
};

export const Nav = (props) => {

    //Destructuring
    const { logo, links } = props;


    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/logo">
                    <img src={logo} width={75} alt={logo} />
                </a>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        {
                            links.map((link,key) => {
                                const liElement =
                                    <li className="nav-item" key={key}>
                                        <a className="nav-link" href={'/${link.toLowerCase()}'}>
                                            {link}
                                        </a>
                                    </li>;
                                return liElement;
                            })
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;


