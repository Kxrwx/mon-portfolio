import React from 'react'
import '../styles/PageVeille.css'
import DeepFace from './veilles/DeepFace'

export default function PageVeille({ setActiveComponent, setActiveSection }) {
  return (
    <section id="veille" className="veille-section">
        <h1 className='veille-section-title'>VEILLE TECHNOLOGIQUE</h1>
        <article className="veille-placement">
          <DeepFace/>
        </article>
    </section>
  )
}
