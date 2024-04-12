import { useSelector } from 'react-redux'
import { useParams, Navigate, Link } from 'react-router-dom'
import { selectGetProjects } from '../../App/store/selectors'
import CardImage from '../../components/Cards/CardImage'
import Tags from '../../components/Tags'
import SourceCode from '../../components/SourceCode'
import Description from '../../components/Description'
import Contact from '../../containers/Forms/Contact'
import { useEffect } from 'react'
import { scrollToSection } from '../../utils/scrollToSection'
import Customer from '../../components/Customer'

function Project() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const projects = useSelector(selectGetProjects)
  const project = projects.find((project) => project._id === id)

  if (!project) {
    return <Navigate to="/" />
  }

  const handleBackToProjects = () => {
    setTimeout(() => {
      scrollToSection('projets')
    }, 100)
  }

  return (
    <>
      <section className="section projects-container" id="project">
        <article className="projects-container-style">
          <CardImage item={project} id={'card-project'} />
          <h1>{project.title}</h1>
          <Description items={project} />
          <div className="project-skills-container">
            <h3 className="h3-project-skills-style">Skills :</h3>
            <Tags tags={project.tags} className={'tags-project-style'} />
            <div className="container-source">
              <SourceCode link={project} />
              <Customer project={project} />
            </div>
          </div>
          <Link to={'/#projects'} className="submit-style btn" onClick={handleBackToProjects}>
            Projets
          </Link>
        </article>
      </section>
      <Contact />
    </>
  )
}

export default Project
