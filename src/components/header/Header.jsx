import React, { useState } from "react";
import NavBar from "../NavBar";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/Luxila.png";

const Header = () => {

  return (
    <header className="header">
      <NavLink to={'/'} className={'link-texto'} ><h1 className="logoTexto"><img className="logo" src={Logo} />LucilaTejidos</h1></NavLink>
      <NavBar />
      <CartWidget />
    </header>
  );
};

export default Header;
