import React from 'react';
import './style.css';

function Label(props) {
    if (typeof props.style != 'undefined') {
        return(
            <label className={props.className} htmlFor={props.htmlFor} style={props.style}>{props.children}</label>
        );
    } else {
        return(
            <label className={props.className} htmlFor={props.htmlFor}>{props.children}</label>
        );
    }
};

export default Label;