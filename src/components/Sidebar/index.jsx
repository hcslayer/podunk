import React, { Component } from 'react'; 
import './styles.scss'; 

const navOptions = [
  { name: 'home', _id: 0 }, 
  { name: 'projects', _id: 1 }, 
  { name: 'articles', _id: 2 },
  { name: 'notebooks', _id: 3 }
]

export default class Sidebar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      activeLink: 0, 
      onOptionSelect: props.onOptionSelect, 
    }
  }
 
  render() {
    const {
      activeLink, 
      onOptionSelect
    } = this.state;
    
    return(
      <div className='sidebar'>
        <div className='sidebar-top'>
          hcs 
        </div>
        <div className='sidebar-nav'>
          <nav>
            {navOptions.map(opt => {
              <div className={`nav-option ${opt._id === activeLink ? 'option-active' : ''}`}>
                { opt.name }
              </div>
            })}
          </nav>
        </div>
        <div className='sidebar-bottom'>

        </div>
      </div>
    )
  }


}