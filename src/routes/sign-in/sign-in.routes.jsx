import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        
        <div className="sign-in-container">
            <h2>This is a Sign-in Page</h2>
            <button onClick={logGoogleUser}>Sign-in with google popup</button>
        </div>
    )
}

export default SignIn;