import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to="/">
          <h1>United Motors</h1>
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
          <Link to="/cars/new">Create New Car</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/models">Models</Link>
          <Link to="/makes">Makes</Link>
          <hr />
        </>
      )}
      {props.children}
    </div>
  );
}
