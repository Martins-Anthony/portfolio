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
    </div>
  )
}

export default Description
