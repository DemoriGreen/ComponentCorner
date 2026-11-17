import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const product = {
    name: 'Pulse Wireless Headphones',
    price: '$89.99',
    image: 'https://example.com/headphones.png',
    description: 'Clear sound and all-day battery life.',
  }

  test('renders product information and Add to Cart button', () => {
    render(<ProductCard {...product} addToCart={() => {}} />)
    expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument()
    expect(screen.getByText(product.price)).toBeInTheDocument()
    expect(screen.getByText(product.description)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  test('calls addToCart when the button is clicked', () => {
    const addToCart = vi.fn()
    render(<ProductCard {...product} addToCart={addToCart} />)
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }))
    expect(addToCart).toHaveBeenCalledWith(product)
  })
})
