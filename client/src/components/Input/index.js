import React from 'react';
import './style.css';

function Input(props) {
    if (props.type === 'text') {
        return(
            <input className={props.className} type={props.type} name={props.name} placeholder={props.placeholder}/>
        );
    } else if (props.type === 'email') {
        return(
            <input className={props.className} type={props.type} name={props.name} placeholder={props.placeholder}/>
        );
    } else if (props.type === 'textarea') {
        return(
            <textarea className={props.className} name={props.name} rows={props.rows} placeholder={props.placeholder}/>
        );
    }
};

export default Input;