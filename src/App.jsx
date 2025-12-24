import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './components/Home'
import PageMe from './components/PageMe'
import PageProjet from './components/PageProjet'
import PageCertif from './components/PageCertif'
import PageVeille from './components/PageVeille'
import Clarity from '@microsoft/clarity';



function App() {
  const [activeComponent, setActiveComponent] = useState('home')
  const [activeSection, setActiveSection] = useState(null)

  const projectId = "yourProjectId"

useEffect(() => {
    // Ce bloc ne s'exécutera qu'une seule fois au chargement initial du composant
    Clarity.init(projectId);
  }, []);
  return (
    <div className="App">
      <Sidebar setActiveComponent={setActiveComponent} setActiveSection={setActiveSection} />

      <div className="main-content">
        <Header/>
        {activeComponent === 'home' && <Home setActiveComponent={setActiveComponent} setActiveSection={setActiveSection}/>}
        {activeComponent === 'me' && <PageMe  activeSection={activeSection}/>}
        {activeComponent === 'projet' && <PageProjet />}
        {activeComponent === 'certif' && <PageCertif  />}
        {activeComponent === 'veille' && <PageVeille  />}
      </div>
    </div>
  )
}

export default App
