import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../GetProjects/getProjectsSlice'
import { selectGetProjects } from '../../../App/store/selectors'
import CardImage from '../../../components/Cards/CardImage'
import { useState } from 'react'
import Modal from '../../Modal'
import { openModal, closeModal } from '../../Modal/modalSlice'

function DeleteProject() {
  const [editMode, setEditMode] = useState(false)
  const [idProject, setIdProject] = useState('')
  const projects = useSelector(selectGetProjects)
  const dispatch = useDispatch()
  if (projects === null) {
    dispatch(getProjects())
  }
  const project = projects.find((project) => project._id === idProject)

  const handleEditMode = (id, title) => {
    dispatch(openModal('modalConfirmation'))
  }

  const handleCancel = (event) => {
    event.preventDefault()
    dispatch(closeModal())
  }

  return (
    <div className="form-container form-add">
      <legend className="legend-project">Delete project</legend>
      {projects.map((project) => {
        return (
          <article key={project._id}>
            <div
              onClick={() => {
                handleEditMode(project._id, project.title)
              }}>
              <CardImage item={project} id={'card-project-edit'} />
            </div>
          </article>
        )
      })}
      <Modal>
        <div className="container-button">
          {project && (
            <>
              <h2>{project.title} test</h2>
            </>
          )}
          <button className="btn submit-style">Confirm suppression</button>
          <button className="btn submit-style" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default DeleteProject
