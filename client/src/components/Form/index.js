import React from 'react';
import './style.css';

function Form(props) {
    if (props.action && props.method) {
        return(
            <form className={props.className} action={props.action} method={props.method}>{props.children}</form>
        );
    } else {
        return(
            <form className={props.className}>{props.children}</form>
        );
    };
};

export default Form;