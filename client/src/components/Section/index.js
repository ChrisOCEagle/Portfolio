import React from 'react';
import './style.css';

function Section(props) {
    if (typeof props.style != 'undefined') {
        return(
            <section className='section' style={props.style} id={props.id}>{props.children}</section>
        );
    } else {
        return(
            <section className='section' id={props.id}>{props.children}</section>
        );
    };
};

export default Section;