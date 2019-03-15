import React from 'react';
import './style.css';

function Button(props) {
    if (typeof props.href != "undefined") {
        if (typeof props.style != 'undefined') {
            return(
                <a className="link" href={props.href} id={props.id} style={props.style}>{props.children}</a>
            );
        } else {
            return(
                <a className="link" href={props.href} id={props.id}>{props.children}</a>
            );
        }
    } else {
        if (typeof props.style != 'undefined') {
            return(
                <button type={props.type} className="btn" id={props.children.toLowerCase()} onClick={props.clickEvent} style={props.style}>
                    {props.children}
                </button>
            );
        } else {
            return(
                <button type={props.type} className="btn" id={props.children.toLowerCase()} onClick={props.clickEvent}>
                    {props.children}
                </button>
            );
        }
    };
};

export default Button;