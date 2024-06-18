import React, { useState } from "react";
import NavBar from "./NavBar";
import Carrito from "./Carrito";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Luxila.png";

const Header = (props) => {

  const [numerito, setNumerito] = useState(1)

  return (
    <header className="header">
      <NavLink to={'/'} className={'link-texto'} ><h1 className="logoTexto"><img className="logo" src={Logo} />LucilaTejidos</h1></NavLink>
      <NavBar />
      <Carrito   numerito={numerito} setNumerito={setNumerito} />
    </header>
  );
};

export default Header;
