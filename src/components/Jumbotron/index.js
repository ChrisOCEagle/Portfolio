import React from 'react';
import './style.css';

function Jumbotron(props) {
    return(
        <div className='jumbotron' id={props.id}>{props.children}</div>
    );
};

export default Jumbotron;