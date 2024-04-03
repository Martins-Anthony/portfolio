function CardImage({ item, id }) {
  return (
    <div className={'card-container-img'} id={id}>
      <img src={item.image} alt={item.alt}></img>
      <div className="background-filter"></div>
    </div>
  )
}

export default CardImage
