import React from "react";
import NavBar from "./NavBar";
import Carrito from "./Carrito";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <NavLink to={'/'} className={'link-texto'}><h1>LucilaTejidos</h1></NavLink>
      <NavBar />
      <Carrito numerito={props.numerito} />
    </header>
  );
};

export default Header;
