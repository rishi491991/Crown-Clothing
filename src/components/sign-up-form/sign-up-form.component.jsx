import { useState, useContext, Fragment } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss'

import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const {currentUser} = useContext(UserContext)

  console.log(formFields);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    if (password === confirmPassword) {
      event.preventDefault();
      try {
        const {user} = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        const userDocRef = await createUserDocumentFromAuth(user, {
          displayName,
        });
        resetFormFields();
        alert("Sign Up Successful")
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("email already in use");
        }
      }
    } else {
      alert("passwords do not match");
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    
    <div className="sign-up-container">
      <h2>Don't have a account yet?</h2>
      <span>Sign up with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          type="text"
          required
          onChange={handleOnChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="confirmPassword"
          type="password"
          required
          onChange={handleOnChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button children="Sign Up" type="submit"/>
      </form>
    </div>
  );
};

export default SignUpForm;
