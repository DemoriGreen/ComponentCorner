import './ProductCard.css'

function ProductCard({ name, price, image, description }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={image} alt={name} />
        <span className="product-tag">POPULAR</span>
      </div>
      <div className="product-info">
        <div className="product-title-row">
          <h3>{name}</h3>
          <span className="product-price">{price}</span>
        </div>
        <p>{description}</p>
        <a className="product-button" href="#footer">View details <span>→</span></a>
      </div>
    </article>
  )
}

export default ProductCard
