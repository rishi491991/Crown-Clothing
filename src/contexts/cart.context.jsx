import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );
  
    if (existingCartItem) {
      if(productToRemove.quantity === 1){
        if(window.confirm("Are you sure want to remove the item from cart?")) return cartItems.filter(item => item.id !== productToRemove.id)
        else return cartItems
      }

      return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  
  };

  const clearCartItem = (cartItems,productToClear) => {
    if(window.confirm("Are you sure want to remove the item from cart?")) return cartItems.filter((item) => item.id !== productToClear.id)
    else return cartItems
    
  }
  
export  const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: ()=> null,
    removeItemFromCart: ()=> null,
    cartCount: 0,
    setCartCount: () => null,
    totalAmount:0,
    setTotalAmount: () => null,
})



export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalAmount,setTotalAmount] = useState(0)

    useEffect(() => {
      setCartCount(
        cartItems.reduce((total,cartItem) => {
          return total = total + cartItem.quantity
        },0)
      )
    },[cartItems])

    useEffect(() => {
      setTotalAmount(
        cartItems.reduce((total,cartItem) => {
          return total = total + cartItem.quantity*cartItem.price
        },0)
      )
    },[cartItems])

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove))
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems,productToClear))
    }

    
    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,removeItemFromCart,clearItemFromCart, cartCount, totalAmount,setCartItems}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}