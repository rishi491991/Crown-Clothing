import { Fragment } from "react"
import CheckoutPage from "../../components/checkout-page/checkout-page.component"
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const {currentUser} = useContext(UserContext)

    return (
        <Fragment>
            {currentUser && <CheckoutPage/>}
        </Fragment>
    )
}

export default Checkout;