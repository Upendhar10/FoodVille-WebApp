import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

import { useAuth } from "../../context/AuthContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  const { user } = useAuth(); // Get user from AuthContext

  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img
          src={assets.FoodVilleLogo}
          alt="logo"
          className="logo"
          onClick={() => setMenu("home")}
        />{" "}
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/Menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </Link>
        {menu === "Menu" ? (
          <></>
        ) : (
          <>
            <a
              href="#app-download"
              onClick={() => setMenu("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              Mobile App{" "}
            </a>
            <a
              href="#footer"
              onClick={() => setMenu("contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              Contact us
            </a>
          </>
        )}
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="searchIcon"/> */}
        <div>
          <Link to="/Menu" className="MenuIcon">
            <img src={assets.Menu_icon} onClick={() => setMenu("Menu")} />
          </Link>
        </div>
        <div className="navbar-cart-icon">
          <Link to="/Cart">
            {" "}
            <img src={assets.cart_icon} alt="" />{" "}
          </Link>
          <div className={getTotalCartAmount() === 0 ? " " : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
