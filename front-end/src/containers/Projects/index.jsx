import React from 'react'
import PropTypes from 'prop-types'
import Paging from '../../components/Paging'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../Forms/GetProjects/getProjectsSlice'
import { selectGetProjects } from '../../App/store/selectors'

function Projects({ title }) {
  const projects = useSelector(selectGetProjects)
  const dispatch = useDispatch()
  if (projects === null) {
    dispatch(getProjects())
  }
  return (
    <section className="section projects-container" id="projects">
      <div className="projects-container-style">
        <h2>{title}</h2>
        {projects && <Paging data={projects} />}
      </div>
    </section>
  )
}

Projects.propTypes = {
  title: PropTypes.string.isRequired
}

export default Projects
