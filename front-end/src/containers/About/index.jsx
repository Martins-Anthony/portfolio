function About() {
  return (
    <>
      <section className="about-container" id="about">
        <h2>À propos de moi</h2>
        <div>
          <p>
            Je suis un développeur web spécialisé en front-end, ayant suivi une formation
            certifiante chez OpenClassrooms.
          </p>
          <p>
            {' '}
            Mes compétences comprennent <span className="tag-front-end">HTML</span>,{' '}
            <span className="tag-front-end">CSS</span>,{' '}
            <span className="tag-front-end">JavaScript</span>,{' '}
            <span className="tag-front-end">React & Redux</span>, ainsi que le{' '}
            <span className="tag-ux">maquettage</span> avec <span className="tag-ux">Figma</span> et
            la gestion de projet AGILE.
          </p>{' '}
          <p>
            En parallèle, j'ai des notions <span className="tag-back-end">back-end</span> en ,
            <span className="tag-back-end">Node.js</span>,{' '}
            <span className="tag-back-end">Express</span> et{' '}
            <span className="tag-back-end">MongoDB</span> pour comprendre la communication
            client-serveur.
          </p>
          <p>
            {' '}
            Passionné par l'apprentissage continu, je m'efforce de rester à jour avec les dernières
            technologies.
          </p>
          <p>
            Mon objectif est de contribuer à des projets innovants et stimulants où je peux mettre
            en œuvre mes compétences pour créer des solutions remarquables.
          </p>{' '}
          <p>
            J'ai hâte de relever de nouveaux défis et de collaborer avec des équipes dynamiques pour
            réaliser des projets ambitieux.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
