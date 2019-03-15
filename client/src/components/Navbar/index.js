import React from 'react';
import './style.css';

function Navbar(props) {
    return(
        <nav className="navbar" id={props.id}>{props.children}</nav>
    );
};

export default Navbar;