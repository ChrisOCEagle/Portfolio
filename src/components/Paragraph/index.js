import React from 'react';
import './style.css';

function Paragraph(props) {
    return(
        <p className='paragraph' id={props.id}>{props.children}</p>
    );
};

export default Paragraph;