import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Cart from "../../Pages/Cart/Cart";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <Link to="/">
            {" "}
            <img
              src="https://www.qualityzoneinfotech.com/assets/img/xcart.png"
              alt="logo"
              className="logo"
            />
          </Link>
        </div>

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>

        <div className="header__right">
          <Link to="/cart">
            <ShoppingBasketOutlinedIcon className="cartt" />
            <span className="cart__value">{props.data.length}</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
