import { useState} from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import {ButtonContainer, SignInContainer} from './sign-in-form.styles'
import { BUTTON_TYPES_CLASSES } from "../button/button.component";


//CSS
import './sign-in-form.styles.jsx'
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };


  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await signInAuthUserWithEmailAndPassword(email,password);
        // const userDocRef = await createUserDocumentFromAuth(user);
        resetFormFields();
        navigate('/shop')
      } catch (error) {
        if(error.code === 'auth/invalid-credential'){
          alert('Wrong Credentials')
        }
        }
      }

  const logGoogleUserWithPopup = async () => {
    await signInWithGooglePopup();
}



  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="email"
          type="email"
          required
          onChange={handleOnChange}
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          type="password"
          required
          onChange={handleOnChange}
          name="password"
          value={password}
        />

        <ButtonContainer>
        <Button children="Sign In" type="submit" onClick={handleSubmit}/>
        <Button children="Google Sign In" type='button' buttonType={BUTTON_TYPES_CLASSES.google} onClick={logGoogleUserWithPopup}/>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
