import Tags from '../Tags'
import PropTypes from 'prop-types'
import image from '../../assets/projects/kasa.jpg'

function Cards({ projects }) {
  const itemsList = projects.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card-container-img">
          <img src={image} alt={item.alt}></img>
          <div className="background-filter"></div>
        </div>
        <div className="card-title">
          <h3>{item.title}</h3>
          <Tags tags={item.tags} />
        </div>
      </div>
    )
  })
  return itemsList
}

Cards.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Cards
