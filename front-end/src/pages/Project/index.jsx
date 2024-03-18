import { useSelector } from 'react-redux'
import { useParams, Navigate } from 'react-router-dom'
import { selectGetProjects } from '../../App/store/selectors'
import CardImage from '../../components/Cards/CardImage'
import Tags from '../../components/Tags'
import SourceCode from '../../components/SourceCode'
import Description from '../../components/Description'
import Contact from '../../containers/Forms/Contact'

function Project() {
  const { id } = useParams()
  const projects = useSelector(selectGetProjects)
  const project = projects.find((project) => project._id === id)

  if (!project) {
    return <Navigate to="/" />
  }

  return (
    <>
      <section className="section projects-container" id="projects">
        <div className="projects-container-style">
          <CardImage item={project} id={'card-project'} />
          <h1>{project.title}</h1>
          <Description items={project} />
          <h2 className="h2-project-style">Skills acquired :</h2>
          <Tags tags={project.tags} className={'tags-project-style'} />
          <SourceCode link={project} />
        </div>
      </section>
      <Contact />
    </>
  )
}

export default Project
