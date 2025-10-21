import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './components/Home'
import PageMe from './components/PageMe'
import PageProjet from './components/PageProjet'
import PageCertif from './components/PageCertif'
import PageVeille from './components/PageVeille'



function App() {
  const [activeComponent, setActiveComponent] = useState('home')

  return (
    <div className="App">
      <Sidebar setActiveComponent={setActiveComponent} />

      <div className="main-content">
        <Header/>
        {activeComponent === 'home' && <Home setActiveComponent={setActiveComponent} />}
        {activeComponent === 'me' && <PageMe setActiveComponent={setActiveComponent}/>}
        {activeComponent === 'projet' && <PageProjet setActiveComponent={setActiveComponent}/>}
        {activeComponent === 'certif' && <PageCertif setActiveComponent={setActiveComponent}/>}
        {activeComponent === 'veille' && <PageVeille setActiveComponent={setActiveComponent}/>}
      </div>
    </div>
  )
}

export default App
