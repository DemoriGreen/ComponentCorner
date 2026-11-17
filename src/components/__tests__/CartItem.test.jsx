import { render, screen, fireEvent } from '@testing-library/react'
import CartItem from '../CartItem'

describe('CartItem', () => {
  const item = { name: 'Nova Smart Watch', price: '$129.99', quantity: 2 }

  test('renders item information and quantity', () => {
    render(<CartItem item={item} remove={() => {}} />)
    expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument()
    expect(screen.getByText(item.price)).toBeInTheDocument()
  })

  test('calls remove with the item name when Remove is clicked', () => {
    const remove = vi.fn()
    render(<CartItem item={item} remove={remove} />)
    fireEvent.click(screen.getByRole('button', { name: /remove/i }))
    expect(remove).toHaveBeenCalledWith(item.name)
  })
})
