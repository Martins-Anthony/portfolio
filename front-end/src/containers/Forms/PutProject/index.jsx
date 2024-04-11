import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../GetProjects/getProjectsSlice'
import { selectGetProjects } from '../../../App/store/selectors'
import CardImage from '../../../components/Cards/CardImage'
import { useState } from 'react'
import FormProject from '../FormProject'

function PutProject() {
  const [editMode, setEditMode] = useState(false)
  const [idProject, setIdProject] = useState('')
  const projects = useSelector(selectGetProjects)
  const dispatch = useDispatch()
  if (projects === null) {
    dispatch(getProjects())
  }
  const project = projects.find((project) => project._id === idProject)

  const handleEditMode = (id) => {
    setEditMode(!editMode)
    setIdProject(id)
  }

  return (
    <>
      {editMode ? (
        <FormProject method="PUT" legend="Project modification" dataProject={project} />
      ) : (
        <div className="projects-container-style">
          {projects.map((project) => {
            return (
              <article key={project._id}>
                <div
                  onClick={() => {
                    handleEditMode(project._id)
                  }}>
                  <CardImage item={project} id={'card-project-edit'} />
                </div>
              </article>
            )
          })}
        </div>
      )}
    </>
  )
}

export default PutProject
