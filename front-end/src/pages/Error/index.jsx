import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-subtitle">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="error-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  )
}

export default Error
