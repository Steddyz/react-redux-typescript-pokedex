import React, { FC } from "react";

import cl from "./Header.module.css";
import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={cl.header}>
      <div className={cl.logo}>
        <img src={LOGO} alt="logo" />
      </div>
      <div className={cl.nav}>
        <Link to="/" className={cl.header__item}>
          Главная
        </Link>
        <Link to="/pokedex" className={cl.header__item}>
          Покедекс
        </Link>
        <Link to="/about" className={cl.header__item}>
          О нас
        </Link>
      </div>
    </header>
  );
};

export default Header;
