import { auth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
    /* Using Goodle Redirect Method */
    // useEffect( ()=>{
    //     const handleRedirectResult = async () => {
    //         try {
    //             const response = await getRedirectResult(auth);
    //             console.log(response);

    //             if(response){
    //                 const userDocRef = await createUserDocumentFromAuth(response.user);
    //             }
    //         } catch (error) {
    //             console.error("Error handling redirect result:", error);
    //         }

    //     };

    //     handleRedirectResult();

        

    // },[])

    const logGoogleUserWithPopup = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        
        <div className="sign-in-container">
            <h2>This is a Sign-in Page</h2>
            <button onClick={logGoogleUserWithPopup}>Sign-in with google popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign-in with google redirect</button> */}
            <hr/>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;