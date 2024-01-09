import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

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
        const response = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user, {
          displayName,
        });
        resetFormFields();
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
    <div>
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

        <Button children="Sign In" type="submit"/>
      </form>
    </div>
  );
};

export default SignUpForm;
