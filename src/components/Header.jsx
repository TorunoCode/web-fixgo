import React from "react";
import "../sass/components/header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="main">
        <div className="logo">FixGo</div>
        <div className="navbar">
          <ul>
            <Link to="/Home">
              <li>Home</li>
            </Link>
            <Link to="/Movie">
              <li>
                <i class="fa-solid fa-film"></i> Movie
              </li>
            </Link>
            <Link to="/Event">
              <li>
                <i class="fa-brands fa-hotjar"></i> Event
              </li>
            </Link>
            <li>
              <i class="fa-solid fa-headset"></i> Suport
            </li>
          </ul>
        </div>
        <div className="search">
          <form action="" className="formsearch">
            <input
              className="ipsearch"
              type="text"
              placeholder="Tìm tên phim.."
              name="search"
            />
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </form>
        </div>
        <div className="login">
          <div>
            <i class="fa-solid fa-user"></i> Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
