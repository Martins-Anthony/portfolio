import Hero from '../../containers/Hero'
import Projects from '../../containers/Projects'
import Contact from '../../containers/Forms/Contact'
import { scrollToSection } from '../../utils/scrollToSection'
import { useEffect } from 'react'

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
