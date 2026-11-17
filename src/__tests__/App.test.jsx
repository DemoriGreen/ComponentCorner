import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

beforeEach(() => {
  vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null)
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('App cart state and localStorage', () => {
  test('renders the ComponentCorner application', () => {
    render(<App />)
    expect(screen.getAllByText('ComponentCorner').length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: 'Popular picks' })).toBeInTheDocument()
  })

  test('loads saved cart data from localStorage on startup', () => {
    const savedCart = [{ name: 'Nova Smart Watch', price: '$129.99', quantity: 2 }]
    Storage.prototype.getItem.mockReturnValue(JSON.stringify(savedCart))
    render(<App />)
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument()
  })

  test('saves cart changes to localStorage after adding a product', async () => {
    render(<App />)
    fireEvent.click(screen.getAllByRole('button', { name: /add to cart/i })[0])
    await waitFor(() => {
      const calls = Storage.prototype.setItem.mock.calls
      const saved = JSON.parse(calls[calls.length - 1][1])
      expect(calls[calls.length - 1][0]).toBe('componentCornerCart')
      expect(saved).toHaveLength(1)
      expect(saved[0].name).toBe('Pulse Wireless Headphones')
      expect(saved[0].quantity).toBe(1)
    })
  })

  test('updates localStorage when an item is removed', async () => {
    Storage.prototype.getItem.mockReturnValue(JSON.stringify([
      { name: 'Nova Smart Watch', price: '$129.99', quantity: 1 },
    ]))
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /remove/i }))
    await waitFor(() => {
      const calls = Storage.prototype.setItem.mock.calls
      expect(calls[calls.length - 1]).toEqual(['componentCornerCart', '[]'])
    })
  })
})
