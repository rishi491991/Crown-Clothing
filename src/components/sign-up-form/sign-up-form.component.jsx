import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
      try{
      const response = await createAuthUserWithEmailAndPassword(email, password);
      const {user} = response;
      const userDocRef = await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
      }
      catch(error){
       if(error.code === 'auth/email-already-in-use'){
        alert("email already in use")
       }
      }
    }
    else{
        alert("passwords do not match")
    }
  };

  const resetFormFields = ()=>{
    setFormFields(defaultFormFields);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">DisplayName: </label>
        <input
          type="text"
          required
          name="displayName"
          onChange={handleOnChange}
          value={displayName}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          required
          name="email"
          onChange={handleOnChange}
          value={email}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          required
          name="password"
          onChange={handleOnChange}
          value={password}
        />

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          required
          name="confirmPassword"
          onChange={handleOnChange}
          value={confirmPassword}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
