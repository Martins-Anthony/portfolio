import { Link } from 'react-router-dom'

function SourceCode({ link }) {
  return (
    <div className="container-link">
      <span>
        <Link to={link.linkGithub}>Source Code On GitHub</Link>
      </span>
      <span>
        <Link to={link.linkDemo}>Online Demonstration</Link>
      </span>
    </div>
  )
}

export default SourceCode
