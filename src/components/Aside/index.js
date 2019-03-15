import React from 'react';
import './style.css';

function Aside(props) {
    return(
        <aside id={props.id}>{props.children}</aside>
    );
};

export default Aside;