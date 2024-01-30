import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems, clearItemFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <h3>Cart Items</h3>
      {cartItems.length===0 && <span>Please Add Items to the Cart</span>}
      <div className="cart-items">
        {cartItems.map((item) => {
          const { name, quantity, id, imageUrl, price } = item;
          const clearItemHandler = () => {
            clearItemFromCart(item);
          };
          return (
            <div className="cart-item-container" key={id}>
              <img src={imageUrl} alt={name} />
              <div className="item-details">
                <span>{name}</span>
                <span>
                  {quantity} x ${price}
                </span>
              </div>
              <div className="remove-button" onClick={clearItemHandler}>
                &#10005;
              </div>
            </div>
          );
        })}
        {cartItems.length > 0 && (
          <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
