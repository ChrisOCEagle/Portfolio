import React from 'react';
import './style.css';

function Footer(props) {
    if (props.style) {
        return(
            <footer style={props.style} id={props.id}>{props.children}</footer>
        );
    } else {
        return(
            <footer id={props.id}>{props.children}</footer>
        );
    };
};

export default Footer;