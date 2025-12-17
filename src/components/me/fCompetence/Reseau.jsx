import React from 'react'
import "../../../styles/me/fCompetence/Reseau.css"

export default function Reseau() {
    return (
        <div className='widget-reseau'>
            <h1>Réseau</h1>
            <div className='reseau-theorie'>
                <h2>Connaissances théoriques</h2>
                <p>J’ai les connaissances théoriques de base en réseau, notamment sur le fonctionnement des adresses IP, des protocoles courants, du routage et des modèles comme TCP/IP et OSI. Cela me permet de comprendre les principes essentiels de la communication réseau et le comportement des infrastructures classiques.</p>
            </div>

            <div className='reseau-commandes'>
                <h2>Commandes de base</h2>
                <div className='reseau-commande-list'>
                    <p>Je maîtrise les commandes de base sous Windows et Linux, notamment "ping", "tracert" / "traceroute", "ipconfig" et "ip a".</p>
                </div>
            </div>

            <div className='reseau-protocoles'>
                <h2>Protocoles et Modèles</h2>
                <p>Je connais et comprends les protocoles réseau de base tels que "TCP/IP", "HTTP", "HTTPS" et le modèle "OSI".</p>
            </div>

            <div className='reseau-architecture'>
                <h2>Architecture & Topologie</h2>
                <div className='reseau-archi-container'>
                    <p>J'ai les connaissances fondamentales de la structure d'un réseau et de ses composants (routeurs, switches, firewalls). Je comprends aussi les concepts de "WAN", "LAN" et "VPN", ainsi que les topologies réseau courantes (en étoile, en bus, en anneau).</p>
                </div>
            </div>
            
        </div>
    )
}