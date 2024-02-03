import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";

import { Link } from "react-router-dom";

import "./navbar.styles.scss";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown-component";
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
      <div className="nav-container">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser && favorites.length!==0 && <Link className="nav-link" to={"favorites"}>View Favorites</Link>}
          {currentUser && orders.length!==0 && <Link className="nav-link" to={"orders"}>View Orders</Link>}
          <Link className="nav-link" to={"shop"}>
            Shop
          </Link>
          <Link className="nav-link" to={"auth"}>
            { currentUser ? (<span onClick={handleSignOut}>Sign Out</span>) : (<span>Sign In</span>)}
          </Link>
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
