// package imports
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// import styling
import "./App.css";

//import main container and its componenets
import MainContainer from "./containers/MainContainer";
import Contact from "./screens/Contact/Contact";
import MyCars from "./screens/MyCars/MyCars";

// component imports
import Layout from "./Layout/Layout";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";

// function imports for user
import api from "./services/api-config";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  // To reset the token when refresh
  function SetAuthToken() {
    const token = localStorage.getItem("authToken");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }
  SetAuthToken();

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/user_cars">
            <MyCars currentUser={currentUser} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
