import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user");
  const isAdmin = localStorage.getItem("admin");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          🗳️ Online Voting
        </Link>

        {/* Right Side Nav */}
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">

            {/* If NOT Logged In */}
            {!isLoggedIn && !isAdmin && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-warning" to="/admin">
                    Admin
                  </Link>
                </li>
              </>
            )}

            {/* If User Logged In */}
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item ms-3">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {/* If Admin Logged In */}
            {isAdmin && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-info" to="/admin/dashboard">
                    Admin Dashboard
                  </Link>
                </li>

                <li className="nav-item ms-3">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
