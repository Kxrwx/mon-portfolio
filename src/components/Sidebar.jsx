import React from 'react'
import '../styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faCertificate, faMicrochip } from '@fortawesome/free-solid-svg-icons'

function Sidebar({ setActiveComponent }) {
  return (
    <div className='.container-sidebar'>
    <nav className="sidebar">
      <ul className="nav-links">
        <li>
          <button onClick={() => setActiveComponent('home')}>
            <FontAwesomeIcon icon={faHouse}/>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('moi')}>
            <FontAwesomeIcon icon={faAddressCard}/>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('projet')}>
            <FontAwesomeIcon icon={faCertificate}/>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('veille')}>
            <FontAwesomeIcon icon={faMicrochip}/>
          </button>
        </li>
          
        
      </ul>
    </nav>
    </div>
  )
}

export default Sidebar
