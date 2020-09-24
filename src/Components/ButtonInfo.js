import React, { Component } from 'react';

const ButtonInfo = (props) => {
    return (  
        <button className={props.className} onClick={props.method}>
            {props.text}  
        </button>
    );
}
 
export default ButtonInfo;