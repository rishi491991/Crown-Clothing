import './product-card.styles.scss';

import Button from '../button/button.component';

import {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context'; 
import {ReactComponent as LikeIcon} from '../../assets/heart-svgrepo-com.svg'
import { FavoritesContext } from '../../contexts/favorites.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {favorites, setFavorites} = useContext(FavoritesContext)
  const {addItemToCart} = useContext(CartContext)

  const addToCart = ()=>{
    addItemToCart(product);
  }
  
  const favoritesHandler = ()=>{
    setFavorites([...favorites, product])
  }
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span onClick={favoritesHandler}><LikeIcon className='main-like-icon'/></span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;