import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-page.styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import OrderConfirm from "../order-confirm/order-confirm.component";
import { OrdersContext } from "../../contexts/orders.context";

const CheckoutPage = () => {

  const {orders,setOrders} = useContext(OrdersContext)

  const {
    cartItems,
    addItemToCart,
    setIsCartOpen,
    removeItemFromCart,
    clearItemFromCart,
    totalAmount,
    setCartItems,
  } = useContext(CartContext);

  useEffect(() => setIsCartOpen(false), []);

  //   const [cartEmpty,setCartEmpty] = useState(false);

  const navigate = useNavigate();

  if (cartItems.length === 0) navigate("/shop");

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleBuyNow = () => {
    setOrders([...orders,...cartItems]);
    setOrderConfirmed(true);
  };

  const handleCloseConfirmation = () => {
    setOrderConfirmed(false);
    setCartItems([])
  };


  return (
    <Fragment>
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { imageUrl, name, quantity, price } = cartItem;
        const removeItemHandler = () => {
          removeItemFromCart(cartItem);
        };

        const addItemHandler = () => {
          addItemToCart(cartItem);
        };

        const clearItemHandler = () => {
          clearItemFromCart(cartItem);
        };
        return (
          <div className="checkout-item-container">
            <div className="image-container">
              <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name"> {name} </span>
            <span className="quantity">
              <div className="arrow" onClick={removeItemHandler}>
                &#10094;
              </div>
              <span className="value">{quantity}</span>
              <div className="arrow" onClick={addItemHandler}>
                &#10095;
              </div>
            </span>
            <span className="price"> {price}</span>
            <div className="remove-button" onClick={clearItemHandler}>
              &#10005;
            </div>
          </div>
        );
      })}{" "}
        <div className="total">
          <Button buttonType={"inverted"} onClick={handleBuyNow}>Buy Now</Button>
          TOTAL: ${totalAmount}
          </div>
    </div>
    {orders && orderConfirmed && <OrderConfirm onClose={handleCloseConfirmation}/>}
    </Fragment>
  );
};

export default CheckoutPage;
