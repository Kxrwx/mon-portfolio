import React from 'react'
import '../styles/PageCertif.css'
import BandeauCertifs from '../components/certifs/BandeauCertifs'

function PageCertif({ setActiveComponent }) {
  return (
    <section id="certif" className="certif-section">
      <h1 className="certif-title">La Page Certif</h1>

      <article className="certif-content">
        <BandeauCertifs />
      </article>
    </section>
  )
}

export default PageCertif
