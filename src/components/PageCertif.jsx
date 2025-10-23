import React from 'react'
import '../styles/PageCertif.css'
import BandeauCertifs from '../components/certifs/BandeauCertifs'
import CertifGrid from '../components/certifs/CertifGrid'

function PageCertif({ setActiveComponent }) {
  return (
    <section id="certif" className="certif-section">
      <h1 className="certif-section-title">Voici mes certifications</h1>

      <article className="certif-placement">
        <BandeauCertifs />
      </article>
      <article className="certif-placement">
        <CertifGrid />
      </article>
    </section>
  )
}

export default PageCertif
