import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";

import { Link } from "react-router-dom";

import {NavContainer, LogoContainer, NavLinks, NavLink} from "./navbar.styles.jsx";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { OrdersContext } from "../../contexts/orders.context";
import { FavoritesContext } from "../../contexts/favorites.context";

const NavBar = () => {
  const {orders, setOrders} = useContext(OrdersContext)
  const {favorites} = useContext(FavoritesContext)

  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  
  const handleSignOut = async () => {
    await signOutUser();
    setOrders([])
  }
  return (
    <Fragment>
      <NavContainer>
        <LogoContainer to={'/'}>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          {currentUser && favorites.length!==0 && <NavLink to={"favorites"}>View Favorites</NavLink>}
          {currentUser && orders.length!==0 && <NavLink to={"orders"}>View Orders</NavLink>}
          <NavLink to={"shop"}>
            Shop
          </NavLink>
          { currentUser ? (<NavLink as='span' onClick={handleSignOut}>Sign Out</NavLink>) : (<NavLink to='/auth'>Sign In</NavLink>)}
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
