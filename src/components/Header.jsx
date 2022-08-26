import React, { useState } from "react";
import "../sass/components/header.scss";
import { Link } from "react-router-dom";
import FormAccount from "./subcomponents/FormAccount.jsx";

const Header = () => {
  const [openFormAccount, setOpenFormAccount] = useState(false);

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
        <button
          className="login"
          onClick={() => {
            setOpenFormAccount(true);
          }}
        >
          <i class="fa-solid fa-user"></i> Login
        </button>
      </div>
      {openFormAccount && (
        <FormAccount closeModalFormAccount={setOpenFormAccount} />
      )}
    </div>
  );
};

export default Header;
