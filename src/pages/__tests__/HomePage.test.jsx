import { render, screen } from '@testing-library/react'
import HomePage from '../HomePage'

describe('HomePage', () => {
  const products = [
    { name: 'Pulse Wireless Headphones', price: '$89.99', image: '/headphones.png', description: 'Clear sound.' },
  ]

  test('renders the main home page content', () => {
    render(<HomePage products={products} addToCart={() => {}} />)
    expect(screen.getByText("Gear up for what's next.")).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Popular picks' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: products[0].name })).toBeInTheDocument()
  })
})
