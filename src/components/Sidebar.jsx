import React from 'react'
import '../styles/Sidebar.css'

function Sidebar({ setActiveComponent }) {
  return (
    <nav className="sidebar">
      <div className='space'></div>
      <ul className="nav-links">
        <li>
          <button onClick={() => setActiveComponent('home')}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('experiences')}>
            Mes experiences
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
