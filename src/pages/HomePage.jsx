import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

function HomePage({ products, addToCart }) {
  return (
    <>
      <Hero
        title="Gear up for what's next."
        subtitle="Find smart tech and everyday essentials that make life a little easier."
        buttonText="Explore products"
      />
      <section className="products-section" id="products">
        <div className="section-heading">
          <p className="eyebrow">THE COLLECTION</p>
          <h2>Popular picks</h2>
          <p>Good gear. Fair prices. Ready for your everyday.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
