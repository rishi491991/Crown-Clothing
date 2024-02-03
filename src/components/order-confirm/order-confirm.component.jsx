import './order-confirm.styles.scss'
import { ReactComponent as GreenTick } from '../../assets/greenTickLogo.svg'

const OrderConfirm = ({ onClose }) => {
    return (
      <div className="order-confirmed">
        <div className="overlay" onClick={onClose}></div>
        <div className="confirmation-box">
          <span className="close-btn" onClick={onClose}>&times;</span>
          <h2>Order Confirmed!</h2>
          <span className='tick'><GreenTick/></span>
          <p>Your order has been successfully placed.</p>
        </div>
      </div>
    );
  };

export default OrderConfirm;
