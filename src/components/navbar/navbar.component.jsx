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

const NavBar = () => {

  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  
  const handleSignOut = async () => {
    await signOutUser();
  }
  return (
    <Fragment>
      <div className="nav-container">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
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
