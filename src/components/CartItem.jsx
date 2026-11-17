function CartItem({ item, remove }) {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>{item.price}</p>
      </div>
      <button type="button" onClick={() => remove(item.name)}>Remove</button>
    </div>
  )
}

export default CartItem
