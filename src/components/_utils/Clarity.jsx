import React from 'react'; 

export const Clarity = (props) => 
  <div className={`icon-${props.icon}`}>
    <img src={`https://icongr.am/clarity/${props.icon}.svg?size=${props.size}&color=${props.color}`} 
         alt={`icon ${props.icon}`} /> 
  </div>