import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Decode the token and extract the user's name
        const decodedToken = jwtDecode(token);
        const userName = decodedToken.name;

        setIsLoggedIn(true);
        setUsername(userName);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUsername(""); // Clear username state
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between px-4 lg:px-8 h-20">
      <Link to="/" className="flex items-center justify-center">
        <img className="h-24 w-24" src={logo} alt="Net Worth Generator" />
      </Link>
      <div className="flex gap-4 items-center">
        {isLoggedIn ? (
          <>
            <span className=" h-9 items-center justify-center  px-2 py-2 text-base font-medium ">
              Hello, {username}
            </span>
            <button
              onClick={handleLogout}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
