import React, { Component } from 'react';

const ButtonInfo = (props) => {
    return (  
        <button onClick={props.method}>
            {props.text}
            
        </button>
    );
}
 
export default ButtonInfo;