import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

//CSS
import './sign-in-form.styles.scss'


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

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await signInAuthUserWithEmailAndPassword(email,password);
        // const userDocRef = await createUserDocumentFromAuth(user);
        resetFormFields();
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
    <div className="sign-in-container">
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

        <div className="buttons-container">
        <Button children="Sign In" type="submit" onClick={handleSubmit}/>
        <Button children="Google Sign In" type='button' buttonType="google" onClick={logGoogleUserWithPopup}/>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
