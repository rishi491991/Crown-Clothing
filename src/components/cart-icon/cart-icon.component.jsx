import './cart-icon.styles.jsx'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

import { ShoppingIcon, CartItemContainer, ItemCount } from './cart-icon.styles.jsx'

const CartIcon = ()=> {

    const {isCartOpen,setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleIsCartOpen = ()=> {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartItemContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartItemContainer>
    )
}

export default CartIcon;