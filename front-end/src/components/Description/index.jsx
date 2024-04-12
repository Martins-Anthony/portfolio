function Description({ items }) {
  const description =
    typeof items.description === 'string' ? JSON.parse(items.description) : items.description
  return (
    <div className="description-style">
      <h2>À propos de ce projet </h2>
      <p>{description.intro}</p>
      <h2>Maquette</h2>
      <p>{description.modeling}</p>
      <h2>Développement</h2>
      <p>{description.development}</p>
      <h2>Fonctionnalités</h2>
      <ul>
        {description.features.map((feature, index) => {
          const [title, description] = feature.split(' : ')
          return (
            <li key={index}>
              <strong>{title} : </strong> <p>{description}</p>
            </li>
          )
        })}
      </ul>
      <h2>Pourquoi ?</h2>
      <p>{description.why}</p>
      <h2>Objectif</h2>
      <ul className="style-ul-description">
        {description.objective.map((item, index) => {
          const [description] = item.split(' : ')
          return (
            <li key={index}>
              <p>{description}</p>
            </li>
          )
        })}
      </ul>
      <h2>Résultat</h2>
      {Array.isArray(description.results) ? (
        <ul className="style-ul-description">
          {description.results.map((item, index) => {
            return (
              <li key={index}>
                <p>{item}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>{description.results}</p>
      )}
    </div>
  )
}

export default Description
