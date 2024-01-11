// import { auth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
// import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import './authentication.styles.scss'

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
const Authentication = () => {
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


    return(
        
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;