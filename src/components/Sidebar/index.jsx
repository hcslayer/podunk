import React, { Component } from 'react'; 
import './styles.scss'; 

import { Icongram } from '../_utils/Icongram'; 

export default class Sidebar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      activeLink: 0, 
      onOptionSelect: props.onOptionSelect, 
      navOptions: props.navOptions,  
    }
  }
 
  render() {
    const {
      activeLink, 
      onOptionSelect, 
      navOptions
    } = this.state;
    
    return(
      <div className='sidebar'>
        <div className='sidebar-top'>
          hcs 
        </div>
        <div className='sidebar-nav'>
          {/* <nav> */}
            {navOptions.map(opt => {
              return(
              <div
              key={ opt._id }
              onClick={ () => onOptionSelect(opt._id) }
              className={ `nav-option ${opt._id === activeLink ? 'option-active' : ''}` }>
                { opt.name }
              </div>)
            })}
          {/* </nav> */}
        </div>
        <div className='sidebar-bottom'>
          <Icongram 
            lib='octicons'
            icon='mark-github'
            size='32'
            color='979797'
          />
        </div>
      </div>
    )
  }


}