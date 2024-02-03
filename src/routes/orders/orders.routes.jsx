import React from 'react';
import './orders.routes.styles.scss';
import { useContext } from 'react';
import { OrdersContext } from '../../contexts/orders.context';

const Order = () => {
    const {orders} = useContext(OrdersContext)
  return (
    <div className="order-container">
      <h2>Your Orders</h2>
    
    {orders.map((order)=>{
        const { name, quantity, id, imageUrl, price } = order;
        return (
    <div className="order-item-container" key={id}>
      <img src={imageUrl} alt={name} />
      <div className="order-details">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
        )
    })}
    </div>
  );
};

export default Order;
