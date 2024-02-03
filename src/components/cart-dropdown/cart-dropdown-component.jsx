import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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
          return (
            <CartItem cartItem={item} key={item.id}/>
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
