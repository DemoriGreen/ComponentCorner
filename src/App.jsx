import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import './App.css'

const products = [
  {
    name: 'Pulse Wireless Headphones',
    price: '$89.99',
    image: 'https://placehold.co/600x400/172554/ffffff?text=Wireless+Headphones',
    description: 'Clear sound, soft ear cushions, and all-day battery life.'
  },
  {
    name: 'Nova Smart Watch',
    price: '$129.99',
    image: 'https://placehold.co/600x400/1e293b/ffffff?text=Smart+Watch',
    description: 'Keep track of your day with a clean design and useful features.'
  },
  {
    name: 'Orbit Bluetooth Speaker',
    price: '$59.99',
    image: 'https://placehold.co/600x400/312e81/ffffff?text=Bluetooth+Speaker',
    description: 'Bring big sound anywhere with this compact portable speaker.'
  }
]

function App() {
  return (
    <div className="app">
      <Header storeName="ComponentCorner" />
      <main>
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
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer
        storeName="ComponentCorner"
        description="Your spot for useful tech, smart accessories, and everyday upgrades."
        email="hello@componentcorner.com"
      />
    </div>
  )
}

export default App
