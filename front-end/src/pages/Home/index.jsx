import Hero from '../../containers/Hero'
import Projects from '../../containers/Projects'
import Contact from '../../components/Contact'

function Home() {
  return (
    <>
      <Hero />
      <Projects title={'Projects'} />
      <Contact />
    </>
  )
}

export default Home
