import React from 'react';
import './style.css';

function Form(props) {
    return(
        <form className={props.className} action={props.action} method={props.method}>{props.children}</form>
    );
};

export default Form;