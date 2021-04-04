import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="sign-in-container"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <div className="sign-in-header">Sign In</div>
      <div className="form-container">
        <div className="sign-in-instructions">
          Please Log In to Manage Your Account
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
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className="sign-in-button">Submit</button>
        <br />
        <br />
        <Link className="register-link" to="/register">
          Don't have an account? Sign Up Here!
        </Link>
      </div>
    </form>
  );
}
