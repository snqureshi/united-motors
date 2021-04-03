import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to="/cars">
          <h1>United Motors Dealership</h1>
        </Link>
        {currentUser ? (
          <>
            <p>Hello {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to="/cars">Available Cars</Link>
          <Link to="/models">Shop by Models</Link>
          <Link to="/makes">Shop by Makes</Link>
          <Link to="/cars/new">Create New Car</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/user_cars">My Cars</Link>
          <hr />
        </>
      )}
      {props.children}
    </div>
  );
}
