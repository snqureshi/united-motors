import { useState } from "react";
import "./Register.css";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="sign-up-container"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <div className="sign-up-header">Sign Up</div>
      <div className="register-form-container">
        <div className="sign-in-instructions">
          Set up your free account here!
        </div>
        <label className="sign-in-fields">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="sign-in-fields">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="sign-in-fields">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="sign-in-button">Submit</button>
      </div>
    </form>
  );
}
