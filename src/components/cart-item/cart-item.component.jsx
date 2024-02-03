import "./cart-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({cartItem}) => {
  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const { name, quantity, id, imageUrl, price } = cartItem;
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
};

export default CartItem;
