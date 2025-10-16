import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>👋 Salut, je suis <span className="accent">[Ton Nom]</span></h1>
        <h2>Développeur Web Front-End</h2>
      </header>

      <section className="about">
        <h3>À propos</h3>
        <p>Je suis passionné par le développement web et la création d’expériences utilisateurs modernes et efficaces.</p>
      </section>

      <section className="projects">
        <h3>Projets</h3>
        <ul>
          <li><a href="https://github.com/tonpseudo/projet1">Projet 1</a></li>
          <li><a href="https://github.com/tonpseudo/projet2">Projet 2</a></li>
        </ul>
      </section>

      <footer>
        <p>© 2025 [Ton Nom] — <a href="https://github.com/tonpseudo">GitHub</a></p>
      </footer>
    </div>
  )
}

export default App
