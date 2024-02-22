import React from 'react';
import './favorites.routes.styles.scss';
import { useContext } from 'react';
import { FavoritesContext } from '../../contexts/favorites.context';

const Favorite = () => {
    const {favorites} = useContext(FavoritesContext)
  return (
    <div className="favorite-container">
      <h2>Your Favorites</h2>
    
    {favorites.map((favorite)=>{
        const { name, id, imageUrl, price } = favorite;
        return (
    <div className="favorite-item-container" key={id}>
      <img src={imageUrl} alt={name} />
      <div className="favorite-details">
        <span>{name}</span>
        <span>
          ${price}
        </span>
      </div>
    </div>
        )
    })}
    </div>
  );
};

export default Favorite;
