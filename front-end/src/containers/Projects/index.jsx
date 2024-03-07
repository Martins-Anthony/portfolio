import React from 'react'
import PropTypes from 'prop-types'
import data from '../../data/projects'
import Paging from '../../components/Paging'

function Projects({ title }) {
  return (
    <section className="projects-container">
      <div className="projects-container-style">
        <h2>{title}</h2>
        <Paging data={data} />
      </div>
    </section>
  )
}

Projects.propTypes = {
  title: PropTypes.string.isRequired
}

export default Projects
