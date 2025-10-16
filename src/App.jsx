import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  const [activeComponent, setActiveComponent] = useState('home')

  return (
    <div className="App">
      <Sidebar setActiveComponent={setActiveComponent} />

      <div className="main-content">
        <Header/>
        {activeComponent === 'home' && <Home setActiveComponent={setActiveComponent} />}
        {activeComponent === 'experience' && <div>Account Component</div>}
      </div>
    </div>
  )
}

export default App
