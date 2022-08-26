import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/auth.contex";

function Navbar() {
  const navigate = useNavigate();

  const { isUserActive, authenticateUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/");
  };

  if (isUserActive === true) {
    return (
      <div className="nav">
        <Link to="/" className="link">
          Home{" "}
        </Link>
        <Link to="/profile" className="link">
          Profile{" "}
        </Link>
        <button onClick={handleLogout} className="myButton">
          Logout
        </button>
      </div>
    );
  } else {
  }
  return (
    <div className="nav">
      <Link to="/" className="link">
        Home{" "}
      </Link>
      {/*buscador aquí */}
      <Link to="/signup" className="link">
        Signup
      </Link>
      <Link to="/login" className="link">
        Login
      </Link>
    </div>
  );
}

export default Navbar;
