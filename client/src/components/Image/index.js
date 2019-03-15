import React from 'react';
import './style.css';

function Image(props) {
    if (typeof props.style != 'undefined') {
        return(
            <img className={props.className} name={props.name} id={props.id} src={props.src} alt={props.alt} style={props.style}/>
        );
    } else {
        return(
            <img className={props.className} name={props.name} id={props.id} src={props.src} alt={props.alt}/>
        );
    };
};

export default Image;