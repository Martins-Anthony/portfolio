import Hero from '../../containers/Hero'
import Projects from '../../containers/Projects'
import Contact from '../../containers/Forms/Contact'

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
