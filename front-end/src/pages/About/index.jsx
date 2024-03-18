import Contact from '../../containers/Forms/Contact'
// className="projects-container-style"
function About() {
  return (
    <>
      <section className="about-container">
        <h1>About me</h1>
        <p>
          I am <span>Anthony</span>, a web developer specializing in front-end development.
          <br /> I completed a 9-month intensive certification program (RNCP36076) at OpenClassrooms
          as a web integrator, which allowed me to acquire skills in HTML, CSS, SCSS, JavaScript,
          React & Redux, API calls, Visual Studio Code, responsive design, Git & GitHub, wireframing
          with Figma, SEO optimization, AGILE project management, and website debugging.
        </p>
        <p>Feel free to contact me for any questions or projects.</p>
      </section>
      <Contact />
    </>
  )
}

export default About
