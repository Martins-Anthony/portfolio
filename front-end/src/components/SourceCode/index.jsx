import { Link } from 'react-router-dom'

function SourceCode({ link }) {
  return (
    <div className="container-link">
      <span>
        <Link to={link.linkGithub} target="_blank" rel="noopener noreferrer">
          Code source sur GitHub
        </Link>
      </span>
      <span>
        <Link to={link.linkDemo} target="_blank" rel="noopener noreferrer">
          Voir le projet en ligne
        </Link>
      </span>
    </div>
  )
}

export default SourceCode
