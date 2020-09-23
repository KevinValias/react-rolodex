import React, { Component } from 'react'
import ButtonInfo from './ButtonInfo';

const Map = (props) => {
    return ( 
        <div>
          {props.data.map((item,index) => {
             return <li key={index}> 
                        <img src={`${item.picture.medium}`} alt='profile-pic'></img> 
                    {`${item.name.first} ${item.name.last}`}
                    
                    <ButtonInfo text={'mas informacion'} method={props.method}/>
                </li>
            })}
     </div>
         
         );
     
}
 
export default Map;
