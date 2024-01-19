import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";
import "./navbar.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

const NavBar = () => {

  const {currentUser} = useContext(UserContext);
  
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
