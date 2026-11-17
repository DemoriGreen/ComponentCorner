import { useEffect, useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CartItem from './components/CartItem'
import Footer from './components/Footer'
import './App.css'

const products = [
  { name: 'Pulse Wireless Headphones', price: '$89.99', image: 'https://placehold.co/600x400/172554/ffffff?text=Wireless+Headphones', description: 'Clear sound, soft ear cushions, and all-day battery life.' },
  { name: 'Nova Smart Watch', price: '$129.99', image: 'https://placehold.co/600x400/1e293b/ffffff?text=Smart+Watch', description: 'Keep track of your day with a clean design and useful features.' },
  { name: 'Orbit Bluetooth Speaker', price: '$59.99', image: 'https://placehold.co/600x400/312e81/ffffff?text=Bluetooth+Speaker', description: 'Bring big sound anywhere with this compact portable speaker.' },
]

function getSavedCart() {
  try {
    return JSON.parse(localStorage.getItem('componentCornerCart')) || []
  } catch {
    return []
  }
}

function App() {
  const [cart, setCart] = useState(getSavedCart)

  useEffect(() => {
    localStorage.setItem('componentCornerCart', JSON.stringify(cart))
  }, [cart])

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.name === product.name)
      if (existing) {
        return currentCart.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(name) {
    setCart((currentCart) => currentCart.filter((item) => item.name !== name))
  }

  return (
    <div className="app" id="top">
      <Header storeName="ComponentCorner" />
      <main>
        <HomePage products={products} addToCart={addToCart} />
        <section className="products-section" aria-label="Shopping cart">
          <div className="section-heading">
            <p className="eyebrow">YOUR ORDER</p>
            <h2>Shopping cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
          </div>
          {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => (
            <CartItem key={item.name} item={item} remove={removeFromCart} />
          ))}
        </section>
      </main>
      <Footer storeName="ComponentCorner" description="Your spot for useful tech, smart accessories, and everyday upgrades." email="hello@componentcorner.com" />
    </div>
  )
}

export default App
