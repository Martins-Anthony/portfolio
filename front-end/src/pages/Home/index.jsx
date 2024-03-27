import Hero from '../../containers/Hero'
import Projects from '../../containers/Projects'
import Contact from '../../containers/Forms/Contact'
import About from '../About'
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects title={'Projets'} />
      <Contact />
    </>
  )
}

export default Home
