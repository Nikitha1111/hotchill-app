import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Storecontext } from "../../context/Storecontext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(Storecontext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo img" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobike-app
        </a>

        <a
          href="#footer"
          onClick={(e) => {
            e.preventDefault();
            setMenu("contact-us");
            const footerElement = document.getElementById("footer");
            if (footerElement) {
              footerElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon ">
          <Link to="/Cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sgin in</button>
      </div>
    </div>
  );
};

export default Navbar;
