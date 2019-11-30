import React from 'react'; 

export const Icongram = (props) => 
  <div className={`icon-${props.icon}`}>
    <img src={`https://icongr.am/${props.lib}/${props.icon}.svg?size=${props.size}&color=${props.color}`} 
         alt={`icon ${props.icon}`} /> 
  </div>