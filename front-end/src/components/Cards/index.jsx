import Tags from '../Tags'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CardImage from './CardImage'

function Cards({ projects }) {
  const itemsList = projects.map((item) => {
    return (
      <article className="card" key={item._id}>
        <Link to={`/projects/${item._id}`}>
          <CardImage item={item} className={'homeAllProjects'} />
          <div className="card-title">
            <h3>{item.title}</h3>
            <Tags tags={item.tags} />
          </div>
        </Link>
      </article>
    )
  })
  return itemsList
}

Cards.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Cards
