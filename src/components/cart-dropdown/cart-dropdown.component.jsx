import Button from "../button/button.component.jsx";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context.jsx";
import CartItem from '../cart-item/cart-item.component.jsx'
import { UserContext } from "../../contexts/user.context.jsx";
import { Fragment } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const {currentUser} = useContext(UserContext)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    if(currentUser){
      navigate("/checkout");
    }
    else{
      alert("Please Sign In first")
      navigate("/auth")
    }
  };

  return (
    <CartDropdownContainer>
      
      {!cartItems.length ? (<EmptyMessage>Your Cart is Empty</EmptyMessage>) : (
        <Fragment>
        <h3>Cart Items</h3>
        <CartItems>
        {cartItems.map((item) => {
          return (
            <CartItem cartItem={item} key={item.id}/>
          );
        })}
        {cartItems.length > 0 && (
          <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        )}
      </CartItems>
      </Fragment>
      )}
      
    </CartDropdownContainer>
  );
};

export default CartDropdown;
