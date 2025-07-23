import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let sum = 0
      for (let i = 0; i < cartList.length; i = i + 1) {
        sum = sum + cartList[i].price * cartList[i].quantity
      }

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total: <span className="amount">Rs {sum}/-</span>
          </h1>
          <p className="items-count">{cartList.length} Items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
