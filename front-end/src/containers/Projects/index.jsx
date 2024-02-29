import React from 'react'
import PropTypes from 'prop-types'
import Cards from '../../components/Cards'
import data from '../../data/projects'

function Projects({ title }) {
  return (
    <section className="projects-container">
      <div className="projects-container-style">
        <h2>{title}</h2>
        <Cards projects={data} />
      </div>
    </section>
  )
}

Projects.propTypes = {
  title: PropTypes.string.isRequired
}

export default Projects
