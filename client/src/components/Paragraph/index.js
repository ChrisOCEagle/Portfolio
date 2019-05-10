import React from 'react';
import './style.css';

function Paragraph(props) {
    if (props.style) {
        return(
            <p className='paragraph' id={props.id} style={props.style}>{props.children}</p>
        );
    } else {
        return(
            <p className='paragraph' id={props.id}>{props.children}</p>
        );
    };
};

export default Paragraph;