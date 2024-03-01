import About from '../../containers/About'
import Projects from '../../containers/Projects'
import Contact from '../../components/Contact'

function Home() {
  return (
    <>
      <About />
      <Projects title={'Projects'} />
      <Contact />
    </>
  )
}

export default Home
