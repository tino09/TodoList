import React from 'react';

// Stateless Functional Component

const NavBar = (props) =>{ 

        return ( 
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="ig">
                To do List <span className="badge badge-pill badge-secondary">
                Nikkibangz</span>
            </a>
           
            </nav>
         );
    };

 
export default NavBar;